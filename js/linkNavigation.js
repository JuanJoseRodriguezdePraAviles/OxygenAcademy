const menuLinkList = document.querySelectorAll('div.menu-link');

//LINK NAVIGATION
menuLinkList[0].addEventListener('click', () => {
    document.querySelector('div.most-popular').scrollIntoView({ behavior: 'smooth', block: 'center' });

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

