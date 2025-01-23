

//NEWSLETTER POPUP

setTimeout(()=> {
    displayPopup();
}, 5000);

export function displayPopup(){
    if(sessionStorage.getItem('popupDisplayed')==="false") {
        //DARKER BACKGROUND
        document.querySelector('div#bg-wrapper').setAttribute("class", "bg--semitransperent");

        const newsletterBox = document.createElement('div');
        newsletterBox.setAttribute("class", "newsletterPopup");
        
        const title = document.createElement('h2');
        title.textContent = "Subscribe to our newsletter";
        newsletterBox.appendChild(title);

        const form = document.createElement('form');

        const input = document.createElement('input');
        input.setAttribute("type", "text");
        input.setAttribute("class", "input-newsletter");
        input.setAttribute("placeholder", "Introduce you email");

        form.appendChild(input);
        const inputSubmit = document.createElement('input');
        inputSubmit.setAttribute("type", "submit");
        inputSubmit.setAttribute("value", "Suscribe");
        form.appendChild(inputSubmit);

        form.setAttribute("onsubmit", "return validateNewsletter()");

        newsletterBox.appendChild(form);
        
        
        
        document.body.setAttribute("class", "stop-scrolling");


        let exitIcon = document.createElement('div');

        exitIcon.setAttribute("class", "circle--blue exit-icon");
        exitIcon.addEventListener("click", () => {
            closePopup();
        })

        let xIcon= document.createElement('img');
        xIcon.setAttribute("class", "x-icon");
        xIcon.setAttribute("src", "../images/xIcon.png")
        exitIcon.appendChild(xIcon);

        newsletterBox.appendChild(exitIcon);

        document.querySelector('body').appendChild(newsletterBox);
        sessionStorage.setItem('popupDisplayed', 'true');

        form.addEventListener('submit', async(e)=>{
            if (e && "preventDefault" in e){
                e.preventDefault();
            }
                
            if(validateNewsletter()){
                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                        method: 'POST',
                        body: JSON.stringify({
                            title: "",
                            body: {
                                email: input.value
                            },
                            userId: 1
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    });
                    if(response.ok){
                        console.log(response.json());
                        alert('Thank you for suscribing');
                    }
                } catch(error) {
                    console.log(error);
                }
                
            }
        });
        
    }
}

function validateNewsletter() {
    let valid = true;
    const emailNewsLetter = document.querySelector('input.input-newsletter').value;
    if(emailNewsLetter===String.Empty || emailNewsLetter === ""){
        document.querySelector('input.input-newsletter').style.borderColor = "red";
        valid = false;
    }
    const emailRegExpression = new RegExp(
        '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+))'
      );
      
    if(!emailRegExpression.test(emailNewsLetter)){
        document.querySelector('input.input-email').style.borderColor = "red";
        valid = false;
    }
    
    return valid;

};

document.addEventListener("click", (e) => {
    if(document.querySelector("div.newsletterPopup")!==null){
        if(e.target===document.querySelector("div.newsletterPopup") || e.target===document.querySelector("div.newsletterPopup h2") ||
        e.target===document.querySelector("div.newsletterPopup input") || e.target===document.querySelectorAll("div.newsletterPopup input")[1]
        || e.target===document.querySelector("div.newsletterPopup form")) return;
        if(document.querySelector("div.newsletterPopup")!==e.target && document.querySelector("div.newsletterPopup h2")!==e.target &&
            document.querySelector("div.newsletterPopup input")!==e.target && e.target!==document.querySelectorAll("div.newsletterPopup input")[1] 
            && document.querySelector("div.newsletterPopup form")!==e.target){
                closePopup();
        }
    }
    
    
});

document.onkeydown = function keyPress (e) {
    if(e.key === "Escape") {
        if(document.querySelector("div.newsletterPopup")!==null){
            closePopup();
        }
    }
};

  


function closePopup(){

    const popup = document.querySelector("div.newsletterPopup");
    document.body.setAttribute("class", "");
    popup.remove();

    document.querySelector('div#bg-wrapper').setAttribute("class", "");
    
}