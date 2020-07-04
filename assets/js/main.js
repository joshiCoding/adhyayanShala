
const menu = document.querySelector('.nav-container');

const menuOpenBtn = document.querySelector('.nav-container-open');
const menuCloseBtn = document.querySelector('.nav-container-close');


menuOpenBtn.addEventListener('click', e=> {
    menu.style.display = "block";
})

menuCloseBtn.addEventListener('click', e=> {
    menu.style.display = '';
})

