const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const navbar = document.querySelector('.navbar');
const slider = document.querySelector('.slider');
var x = 0;

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
    x = x + 1
    if (x%2 != 0) {
        disableScroll()
    } else {
        enableScroll()
    }
});

function disableScroll() {
    // Get the current page scroll position
    scrollTop = 
      window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = 
      window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };

}
function enableScroll() {
    window.onscroll = function() {};
}
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