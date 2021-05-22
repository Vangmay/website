const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const navbar = document.querySelector('.navbar');
const main = document.querySelector('.main');
const slider = document.querySelector('.slider');
const bio = document.querySelector('.bio');
const animate = document.querySelector('.animate');
const animated_text = document.querySelector('.text-ani');
burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
});
/*______________________________________________ */
const tl = new TimelineMax();
tl.fromTo(main,1,{height:'0%'},{height:'60%',delay:8,ease:Power2.easeInOut})
.fromTo(main,1.2,{width:"100%"},{width:'80%',ease:Power2.easeInOut})
.fromTo(slider,1.2,{x:'-100%'},{x:'0%',ease:Power2.easeInOut})
.fromTo(navbar,1,{opacity:'0',x:-30},{opacity:'1',x:0,ease:Power2.easeInOut})
.fromTo(animated_text,1,{color:'rgb(49, 243, 0)'},{color:'rgb(255, 255, 255)',ease:Power2.easeInOut})
.fromTo(bio,1,{opacity:'0',x:-30},{opacity:'1',x:0,ease:Power2.easeInOut})