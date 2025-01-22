let menuState = false;

const menuIcon = document.querySelector('img.menu-icon');
const header = document.querySelector('div.header');
const headerPositioner = document.querySelector('div.header-positioner');
const menuLinkContainer = document.querySelector('div.menu--extended');
const menuLinkSelected = document.querySelector('div.menu-link--selected');
const menuLinkList = document.querySelectorAll('div.menu-link');
const main = document.querySelector('div.main');





menuIcon.addEventListener('click', () => {
    if(menuState===false){
        //OPEN
        menuState = true;
        menuIcon.setAttribute('src', 'images/CloseIcon.png');
        menuIcon.style.width = '1rem';
        header.style.height = '20rem';
        header.style.transition = 'height 1s';
        header.style.position = 'relative';
        header.style.top = '-5rem';
        headerPositioner.style.position = 'absolute';
        headerPositioner.style.zIndex = '10';
        header.style.backgroundColor = '#FFFFFF';
        main.style.paddingTop = '5.5rem';

        menuLinkContainer.style.height = '15rem';
        menuLinkContainer.style.width = '15rem';
        menuLinkContainer.style.display = 'inline-block';
        menuLinkContainer.style.textAlign = 'left';
        menuLinkContainer.style.margin = '2rem';

        //LINKS
        menuLinkContainer.style.transition = '1s all 0.3s';
        menuLinkContainer.style.visibility = 'visible';
        menuLinkSelected.style.fontFamily = 'Open Sans';
        menuLinkSelected.style.fontWeight = '700';
        menuLinkSelected.childNodes[1].style.fontSize = '1rem';
        menuLinkSelected.childNodes[1].style.paddingRight = '0.5rem';
        menuLinkSelected.childNodes[1].style.paddingLeft = '0.5rem';
        menuLinkSelected.childNodes[1].style.letterSpacing = '0.25rem';
        menuLinkSelected.style.margin = '0.75rem 0';

        menuLinkList.forEach(item => {
            item.style.fontFamily = 'Open Sans';
            item.style.fontWeight = '700';
            item.style.color = '#A5A5A5';
            item.style.margin = '1rem 0';

            item.childNodes[1].style.fontSize = '1rem';
            item.childNodes[1].style.paddingRight = '0.5rem';
            item.childNodes[1].style.paddingLeft = '0.5rem';
            item.childNodes[1].style.letterSpacing = '0.25rem';

            

        });

    } else {
        //CLOSE
        menuState = false;
        menuIcon.setAttribute('src', 'images/Menu.png');
        menuIcon.style.width = null;
        header.style.height = null;
        header.style.transition = 'height 1s';
        header.style.position = null;
        header.style.top = null;
        headerPositioner.style.position = null;
        headerPositioner.style.zIndex = null;
        header.style.backgroundColor = null;
        main.style.paddingTop = null;

        menuLinkContainer.style.height = null;
        menuLinkContainer.style.width = null;
        menuLinkContainer.style.display = null;
        menuLinkContainer.style.textAlign = null;
        menuLinkContainer.style.margin = null;

        //LINKS
        menuLinkContainer.style.transition = null;
        menuLinkContainer.style.visibility = null;
        menuLinkSelected.style.fontFamily = null;
        menuLinkSelected.style.fontWeight = null;
        menuLinkSelected.childNodes[1].style.fontSize = null;
        menuLinkSelected.childNodes[1].style.paddingRight = null;
        menuLinkSelected.childNodes[1].style.paddingLeft = null;
        menuLinkSelected.childNodes[1].style.letterSpacing = null;
        menuLinkSelected.style.margin = null;

        menuLinkList.forEach(item => {
            item.style.fontFamily = null;
            item.style.fontWeight = null;
            item.style.color = null;
            item.style.margin = null;

            item.childNodes[1].style.fontSize = null;
            item.childNodes[1].style.paddingRight = null;
            item.childNodes[1].style.paddingLeft = null;
            item.childNodes[1].style.letterSpacing = null;

        });

    }

});

//LINK NAVIGATION
menuLinkSelected.addEventListener('click', () => {
    document.querySelector('div.most-popular').scrollIntoView({ behavior: 'smooth', block: 'center' });

});
menuLinkList[0].addEventListener('click', () => {
    document.querySelector('div.benefits').scrollIntoView({ behavior: 'smooth' });

});

menuLinkList[1].addEventListener('click', () => {
    document.querySelector('div.cards').scrollIntoView({ behavior: 'smooth', block: 'center' });

});

menuLinkList[2].addEventListener('click', () => {
    document.querySelector('div.faq').scrollIntoView({ behavior: 'smooth', block: 'center' });

});

//LINK HOVER
menuLinkSelected.addEventListener('mouseover', () => {
    menuLinkSelected.style.borderBottom = '5px solid #08A6E4';
    menuLinkSelected.childNodes[1].style.fontWeight = 700;
    menuLinkSelected.childNodes[1].style.color =  'black';

});
menuLinkSelected.addEventListener('mouseout', () => {
    menuLinkSelected.style.borderBottom = null;
    menuLinkSelected.childNodes[1].style.fontWeight = null;
    menuLinkSelected.childNodes[1].style.color = '#A5A5A5';

});
menuLinkList[0].addEventListener('mouseover', () => {
    menuLinkList[0].style.borderBottom = '5px solid #08A6E4';
    menuLinkList[0].childNodes[1].style.fontWeight = 700;
    menuLinkList[0].childNodes[1].style.color =  'black';

});
menuLinkList[0].addEventListener('mouseout', () => {
    menuLinkList[0].style.borderBottom = null;
    menuLinkList[0].childNodes[1].style.fontWeight = null;
    menuLinkList[0].childNodes[1].style.color =  '#A5A5A5';

});

menuLinkList[1].addEventListener('mouseover', () => {
    menuLinkList[1].style.borderBottom = '5px solid #08A6E4';
    menuLinkList[1].childNodes[1].style.fontWeight = 700;
    menuLinkList[1].childNodes[1].style.color =  'black';

});
menuLinkList[1].addEventListener('mouseout', () => {
    menuLinkList[1].style.borderBottom = null;
    menuLinkList[1].childNodes[1].style.fontWeight = null;
    menuLinkList[1].childNodes[1].style.color =  '#A5A5A5';

});

menuLinkList[2].addEventListener('mouseover', () => {
    menuLinkList[2].style.borderBottom = '5px solid #08A6E4';
    menuLinkList[2].childNodes[1].style.fontWeight = 700;
    menuLinkList[2].childNodes[1].style.color =  'black';

});
menuLinkList[2].addEventListener('mouseout', () => {
    menuLinkList[2].style.borderBottom = null;
    menuLinkList[2].childNodes[1].style.fontWeight = null;
    menuLinkList[2].childNodes[1].style.color =  '#A5A5A5';

});

//SCROLL PROGRESS
let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (winScroll / height) * 100;
window.onscroll = () => {
    winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrolled = (winScroll / height) * 100;
    document.querySelector('div.progress-bar').style.width = scrolled + "%";

    //TO THE TOP BUTTON
    
    
    if (scrolled> 90) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

    //NEWSLETTER POP UP
    if(scrolled>=25){
        displayPopup();
    }

};

const topBtn = document.querySelector('div.to-the-top');


topBtn.addEventListener('click', ()=> {
    setTimeout(() => {

        document.querySelector('div.header').scrollIntoView({ behavior: 'smooth'})
    }, 200);
});

//VALIDATION FORM
const btnFaq = document.querySelector('btn-faq');
function validateFaq() {
    let valid = true;
    const name = document.querySelector('input.input-name').value;
    if(name===String.Empty || name === ""){
        document.querySelector('input.input-name').style.borderColor = "red";
        valid = false;
    }
    if(name.length<2 && name.length > 100){
        document.querySelector('input.input-name').style.borderColor = "red";
        valid = false;
    }
    const email = document.querySelector('input.input-email').value;
    if(email===String.Empty || name === ""){
        document.querySelector('input.input-email').style.borderColor = "red";
        valid = false;
    }
    const emailRegExpression = new RegExp(
        '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+))'
      );
      
    if(!emailRegExpression.test(email)){
        document.querySelector('input.input-email').style.borderColor = "red";
        valid = false;
    }
    const checkBox = document.querySelector('input.checkbox');
    if(!checkBox.checked){
        document.querySelector('input.checkbox').style.background = "url(../images/checkboxRed.png)";
        document.querySelector('input.checkbox').style.backgroundRepeat = "no-repeat";
        
        valid = false;
    }
    return valid;

};

document.querySelector('input.checkbox').addEventListener('click', ()=> {
    if(document.querySelector('input.checkbox').checked){
        document.querySelector('input.checkbox').style.background = null;
        document.querySelector('input.checkbox').style.backgroundRepeat = null;
    }
})

//PETICION API FAQ
const faqForm = document.querySelector('form.faq-form');
faqForm.addEventListener('submit', async(e)=>{
    if (e && "preventDefault" in e){
        e.preventDefault();
    }

    if(validateFaq()){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                  name: document.querySelector('input.input-name').value,
                  email: document.querySelector('input.input-email').value,
                  userId: 1
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            });
            console.log(response.ok);
            if(response.ok) {
                alert('Thanks for contacting'); 
            }
        }catch(error) {
            console.log(error);
        }
        
    }
});



//CHANGE CURRENCY
const select = document.querySelector('select.currency');
select.addEventListener('change', async()=>{

    let changeRatio = 1;

    const wordQuery = select.value;
        
    const endpoint = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`;

    let listChangeJSON;

    let originalValueBasic = 0;
    let originalValueProfessional = 25;
    let originalValuePremium = 60;
    let unitSymbol = "$";   
    changeRatio = await fetch(endpoint, {cache: 'no-cache'}).then(response => {
        
        if (response.ok) {
            listChangeJSON = response.json();
            return listChangeJSON;
        
        } throw new Error('Request failed!');
        
    }, networkError => {
        
        console.log(networkError.message)
        
    }).then(item => {
        console.log(select.value);
        if(select.value === 'eur'){
            unitSymbol="€";
            return 1/item.eur.usd;
        } else if(select.value === 'gbp') {
            unitSymbol="£";
            return item.eur.gbp;
        } else {
            unitSymbol="$"
            return 1;
        }
        
    })
    console.log(changeRatio);
    
    let newBasicPrice = Math.round(originalValueBasic * changeRatio *100)/100;
    let newProfessionalPrice = Math.round(originalValueProfessional * changeRatio*100)/100;
    let newPremiumPrice = Math.round(originalValuePremium * changeRatio*100)/100;



    document.querySelector('h3.basic').textContent = unitSymbol + newBasicPrice;
    document.querySelector('h3.professional').textContent = unitSymbol + newProfessionalPrice;
    document.querySelector('h3.premium').textContent = unitSymbol + newPremiumPrice;
    
});
sessionStorage.setItem('popupDisplayed', 'false');

//NEWSLETTER POPUP

setTimeout(()=> {
    displayPopup();
}, 5000);

function displayPopup(){
    if(sessionStorage.getItem('popupDisplayed')==="false") {
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

        document.querySelector('div.main').appendChild(newsletterBox);
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

}

//SLIDER
let currentIndex = 0;

function showSlide(index){
    const slides = document.querySelectorAll('.slide');
    if(index>=slides.length){
        index=0;
    }
    const slide = slides[index];
    slide.style.display = 'block';

    document.querySelectorAll('div.dot')[index].style.backgroundColor = "#07688f";
}

function hideSlide(index){
    const slides = document.querySelectorAll('.slide');
    const slide = slides[index];
    slide.style.display = null;

    document.querySelectorAll('div.dot')[index].style.backgroundColor = "#08A6E4";
}


showSlide(0);

document.querySelector('div.next').addEventListener('click', ()=>{
    hideSlide(currentIndex);
    if(currentIndex>=document.querySelectorAll('.slide').length-1){
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    showSlide(currentIndex);
});

document.querySelector('div.prev').addEventListener('click', ()=>{
    hideSlide(currentIndex);
    if(currentIndex<=0){
        currentIndex = document.querySelectorAll('.slide').length-1;
    } else {
        currentIndex--;
    }
    console.log(currentIndex);
    showSlide(currentIndex);
});

function changeSlide(index){
    if(index>=document.querySelectorAll('.slide').length){
        index=0;
    }
    hideSlide(currentIndex);
    currentIndex = index;
    showSlide(currentIndex);
    
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function changeSlideAutomatic(index){
    while(true){
        await delay(2000);
        if(index>=document.querySelectorAll('.slide').length){
            changeSlide(0);
        } else {
            changeSlide(currentIndex+1);
        }
        
    }
    
    
}

changeSlideAutomatic(currentIndex+1);






    

