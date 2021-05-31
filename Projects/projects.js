const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const project = document.querySelector('.project');
const navbar = document.querySelector('.navbar');
const project1 = document.querySelector('.project1');
const project2 = document.querySelector('.project2');
const project3 = document.querySelector('.project3');
const project4 = document.querySelector('.project4');
const projectcard = document.querySelector('.project-cards')

const tl = new TimelineMax();
tl.fromTo(navbar,0.8,{opacity:0,x:-30},{opacity:1,x:0,ease:Power2.easeIn})
.fromTo(project,0.5,{opacity:0,y:-20},{opacity:1,y:0,ease:Power1.easeIn})
.to(project1,0.3,{boxShadow:'50px -10px 99px #30e6b2',ease:Power1.easeIn})
.to(project2,0.3,{boxShadow:'50px -10px 99px #30e6b2',ease:Power1.easeIn})
.to(project4,0.3,{boxShadow:'50px -10px 99px #30e6b2',ease:Power1.easeIn})
.to(project3,0.3,{boxShadow:'50px -10px 99px #30e6b2',ease:Power1.easeIn})
.to(project3,0.4,{boxShadow:'',delay:0.5,ease:Power2.easeOut})
.to(project4,0.4,{boxShadow:'',ease:Power2.easeOut})
.to(project2,0.4,{boxShadow:'',ease:Power2.easeOut})
.to(project1,0.4,{boxShadow:'',ease:Power2.easeOut})

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
});
