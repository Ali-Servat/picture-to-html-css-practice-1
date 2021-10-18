const menu = document.querySelector('.hamberger-menu');
const links = document.querySelector('.nav-links');
const hero = document.querySelector('.hero');

menu.addEventListener('click', ()=>{
  links.classList.toggle('active'); 
  hero.classList.toggle('toggled');
})