//header scroll to change color
let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

//menu-icon
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//remove menu on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    menu.classList.remove('active');
}