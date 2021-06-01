const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const navbar = document.querySelector('.navbar')
const card = document.querySelector('.card')
const details = document.querySelector('.card-content')
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
const tl = new TimelineMax();
tl.fromTo(card,1,{opacity:0,x:-40},{opacity:1,x:0,ease:Power3.easeInOut})
.fromTo(navbar,0.4,{opacity:0,x:-30},{opacity:1,x:0,ease:Power3.easeIn})
.fromTo(details,0.3,{y:-30,opacity:0},{y:0,opacity:1,easeIn:Power3.easeIn})