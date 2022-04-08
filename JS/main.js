window.addEventListener('scroll',()=>{
    let nav = document.querySelector('.nav-scroll');
    let windowPosition = window.scrollY > 0;
    nav.classList.toggle('scrolling-active', windowPosition);
})

//* darkmode*//

const dark = document.querySelector('.darkmode-btn');
const bodyDark = document.querySelector('body');
const light = document.querySelector('.light');
const Dark = document.querySelector('.dark')
dark.addEventListener('click',()=>{
    bodyDark.classList.toggle('darkmode');
    light.classList.toggle('hide')
    Dark.classList.toggle('hide')
})

//*scroll up*//
const scrollbtn = document.querySelector('.up');


scrollbtn.addEventListener('click',()=>{
    window.scrollTo(0,0)

})

function btnVisble(){
    const btnVisble = document.querySelector('.up')
    if(this.scrollY >= 350) btnVisble.style.display = 'block';
    else btnVisble.style.display = 'none';
}
window.addEventListener('scroll', btnVisble)

