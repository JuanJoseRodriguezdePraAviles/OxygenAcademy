//VALIDATION FORM
const btnFaq = document.querySelector('btn-faq');
export function validateFaq() {
    let valid = true;
    const name = document.querySelector('input.input-name').value;

    if(name===String.Empty || name === "" || name.length<2 || name.length > 100){
        const pNode = document.querySelector('p.name-error');
        if(document.querySelector('p.name-error').firstChild!=null){
            document.querySelector('p.name-error').firstChild.remove();
        }
        
        const errorText = document.createTextNode("You need to introduce a name with a length between 2 and 100 characters");
        pNode.appendChild(errorText);

        document.querySelector('input.input-name').style.borderColor = "red";
        valid = false;
    } else {
        if(document.querySelector('p.name-error').firstChild!==null){
            document.querySelector('p.name-error').firstChild.remove();
        }
        
        document.querySelector('input.input-name').style.borderColor = null;
    }
    
    const email = document.querySelector('input.input-email').value;
    const emailRegExpression = new RegExp(
        '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+))'
      );
    if(email===String.Empty || email === "" || !emailRegExpression.test(email)){
        const pNode = document.querySelector('p.email-error');
        if(document.querySelector('p.email-error').firstChild!=null){
            document.querySelector('p.email-error').firstChild.remove();
        }
        const errorText = document.createTextNode("You need to introduce a correct email");
        pNode.appendChild(errorText);
        document.querySelector('input.input-email').style.borderColor = "red";
        valid = false;
    } else {
        if(document.querySelector('p.email-error').firstChild!==null){
            document.querySelector('p.email-error').firstChild.remove();
        }
        
        document.querySelector('input.input-email').style.borderColor = null;
    }
    
     
    const checkBox = document.querySelector('input.checkbox');
    if(!checkBox.checked){
        document.querySelector('input.checkbox').style.background = "url(./images/CheckboxRed.png)";
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
            if(response.ok) {
                alert('Thanks for contacting'); 
            }
        }catch(error) {
            console.log(error);
        }
        
    }
});