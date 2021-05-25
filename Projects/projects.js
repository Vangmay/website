const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const project = document.querySelector('.project');
const navbar = document.querySelector('.navbar');

const tl = new TimelineMax();
tl.fromTo(navbar,0.8,{opacity:0,x:-30},{opacity:1,x:0,ease:Power2.easeIn})
.fromTo(project,0.5,{opacity:0,y:-20},{opacity:1,y:0,ease:Power1.easeIn})


burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
});
project_card.addEventListener('mouseenter',()=>{
    project_p.style.opacity = '1';
});