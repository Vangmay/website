const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const navbar = document.querySelector('.navbar');


burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
});
gsap.registerPlugin(ScrollTrigger);

tl = gsap.timeline({
    scrollTrigger:{
        
        trigger:'.post-menu',
        end:'top -200px',
        scrub:true,
        start: 'top center'
    }
});

tl.fromTo('.post-menu',6,{x:400,opacity:0},{x:0,opacity:1});