const menu = document.querySelector('.hamberger-menu');
const links = document.querySelector('.nav-links');

menu.addEventListener('click', ()=>{
  links.classList.toggle('active'); 
})