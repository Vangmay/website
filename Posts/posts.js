const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const navbar = document.querySelector('.navbar');
const slider = document.querySelector('.slider');


burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
});
cl = new TimelineMax();
cl.fromTo(slider,1,{y:-900},{y:0,ease:Power2.easeInOut})
.fromTo(".menu-bg",1,{x:2500},{x:0,ease:Power2.easeInOut})

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