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

