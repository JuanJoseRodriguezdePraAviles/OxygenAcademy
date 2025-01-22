const menuLinkSelected = document.querySelector('div.menu-link--selected');
const menuLinkList = document.querySelectorAll('div.menu-link');

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