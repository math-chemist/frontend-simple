const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toogleDMenu);

function toogleDMenu(){
    desktopMenu.classList.toggle('inactive');
}

