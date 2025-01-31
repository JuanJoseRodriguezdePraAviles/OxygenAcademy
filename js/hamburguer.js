let menuState = false;

const menuIcon = document.querySelector('img.menu-icon');
const header = document.querySelector('div.header');
const headerPositioner = document.querySelector('div.header-positioner');
const menuLinkContainer = document.querySelector('div.menu--extended');
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