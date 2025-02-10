import  { isDesktopMode } from "./utilities.js";

const menuLinkList = document.querySelectorAll('div.menu-link');

//LINK NAVIGATION
menuLinkList[0].addEventListener('click', () => {
    if(isDesktopMode()){
        console.log("desktop");
        document.querySelector('div.most-popular').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        console.log("mobile");
        document.querySelector('div.most-popular').scrollIntoView({ behavior: 'smooth'});
    }
    

});
menuLinkList[1].addEventListener('click', () => {
    document.querySelector('div.benefits').scrollIntoView({ behavior: 'smooth' });

});

menuLinkList[2].addEventListener('click', () => {
    document.querySelector('div.cards').scrollIntoView({ behavior: 'smooth', block: 'center' });

});

menuLinkList[3].addEventListener('click', () => {
    document.querySelector('div.faq').scrollIntoView({ behavior: 'smooth', block: 'center' });

});

