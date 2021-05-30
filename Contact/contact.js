const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const submit = document.querySelector('.submit')

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
});


submit.addEventListener('click',()=>{
    submit.innerHTML = 'Thanks! Scott has sent you an email';
})