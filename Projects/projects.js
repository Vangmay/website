const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const project_card = document.querySelector('.project-cards');




burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
});
project_card.addEventListener('mouseenter',()=>{
    project_p.style.opacity = '1';
});