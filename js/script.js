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

            item.childNodes[1].style.fontSize = nul;
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
window.onscroll = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector('div.progress-bar').style.width = scrolled + "%";

    //TO THE TOP BUTTON
    
    
    if (scrolled> 10) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

const topBtn = document.querySelector('div.to-the-top');


topBtn.addEventListener('click', ()=> {
    document.querySelector('div.header').scrollIntoView({ behavior: 'smooth'});
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
faqForm.addEventListener('submit', async()=>{
    if(validateFaq()){
        const response = fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                  name: document.querySelector('input.input-name').value,
                  email: document.querySelector('input.input-email').value,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        console.log("response: "+response);
    }
});





 




  