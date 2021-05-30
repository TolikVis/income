let menuIcon = document.querySelector('.menu__icon');
let header = document.querySelector('.header');
let headerCont = document.querySelector('.header__container');

menuIcon.addEventListener('click', function(e){
    menuIcon.classList.toggle('_active');
    header.classList.toggle('_active');
    headerCont.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    
})
