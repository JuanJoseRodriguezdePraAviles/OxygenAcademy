
import { displayPopup } from './newsletter.js';

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

