const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const submit = document.querySelector('.submit')
const navbar = document.querySelector('.navbar');
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
tl.fromTo(navbar,2,{x:5,opacity:0},{x:0,opacity:1,ease:Power2.easeInOut})
.fromTo(".form",1,{x:-40,opacity:0},{x:0,opacity:1,ease:Power2.easeInOut})


submit.addEventListener('click',()=>{
    submit.innerHTML = 'Thanks! Scott has sent you an email';
})