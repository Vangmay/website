const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const submit = document.querySelector('.submit')
const navbar = document.querySelector('.navbar');

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
});

const tl = new TimelineMax();
tl.fromTo(navbar,2,{x:5,opacity:0},{x:0,opacity:1,ease:Power2.easeInOut})
.fromTo(".form",1,{x:-40,opacity:0},{x:0,opacity:1,ease:Power2.easeInOut})


submit.addEventListener('click',()=>{
    submit.innerHTML = 'Thanks! Scott has sent you an email';
})