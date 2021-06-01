const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const navbar = document.querySelector('.navbar');
const main = document.querySelector('.main');
const slider = document.querySelector('.slider');
const bio = document.querySelector('.bio');
const animate = document.querySelector('.animate');
const animated_text = document.querySelector('.text-ani');
const footer = document.querySelector('.footer');
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
/*______________________________________________ */
const tl = new TimelineMax();
tl.fromTo(main,1,{height:'0%'},{height:'60%',delay:8,ease:Power2.easeInOut})
.fromTo(main,1.2,{width:"100%"},{width:'80%',ease:Power2.easeInOut})
.fromTo(slider,1.2,{x:'-100%'},{x:'0%',ease:Power2.easeInOut})
.fromTo(animated_text,0.3,{color:'rgb(49, 243, 0)',fontFamily:"Inconsolata"},{color:'rgb(255, 255, 255)',fontFamily:'Work Sans',ease:Power2.easeInOut})
.fromTo(navbar,1,{opacity:'0',x:-30},{opacity:'1',x:0,ease:Power2.easeInOut})
.fromTo(bio,0.5,{opacity:'0',x:-30},{opacity:'1',x:0,ease:Power2.easeInOut})
.fromTo(footer,0.5,{display:'none'},{display:'block',ease:Power2.easeInOut})