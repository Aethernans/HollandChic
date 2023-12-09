// search
const searchBtn = document.querySelector('.searchBtn');
const searchForm = document.querySelector('.searchForm');
const closeBtn = document.querySelector('.closeBtn');

// theme
const darkMode = document.querySelector('.darkMode');
const navbar = document.querySelector('.navibar');
const defaultMode = document.querySelector('.defaultMode');
const on = document.querySelector('.on');
const off = document.querySelector('.off');
const categoryText = document.querySelector('.category-text');
const carouselText = document.querySelector('.carousel-text');
const bodyBg = document.querySelector('body');
const footer = document.querySelector('.my-footer');
const subMenu = document.querySelector('.sub-menu');
const secondSub = document.querySelector('.second-sub');

// incre&decre
const min = document.querySelector('.min');
const num = document.querySelector('.num');
const plus = document.querySelector('.plus');

// search
searchBtn.onclick = function(){
  searchForm.classList.add('muncul');
  searchBtn.classList.add('ilang');
  closeBtn.classList.add('ada');
}
closeBtn.onclick = function(){
  searchForm.classList.remove('muncul');
  searchBtn.classList.remove('ilang');
  closeBtn.classList.remove('ada');
}

// theme color
darkMode.onclick = function(){
  navbar.classList.add('dark');
  defaultMode.classList.add('on');
  darkMode.classList.add('off');
  bodyBg.classList.add('dark');
  carouselText.classList.add('dark');
  categoryText.classList.add('dark');
  footer.classList.add('dark');
  subMenu.classList.add('dark');
  secondSub.classList.add('dark');
}
defaultMode.onclick = function(){
  navbar.classList.remove('dark');
  defaultMode.classList.remove('on');
  darkMode.classList.remove('off');
  bodyBg.classList.remove('dark');
  carouselText.classList.remove('dark');
  categoryText.classList.remove('dark');
  footer.classList.remove('dark');
  subMenu.classList.remove('dark');
  secondSub.classList.remove('dark');
}

// incre&decre
let a=1;

plus.addEventListener('click', ()=>{
  a++;
  a = (a<10) ? '0' + a : a;
  num.innerText = a;
  console.log(a)
})
min.addEventListener('click', ()=>{
  a--;
  a = (a<10) ? '0' + a : a;
  num.innerText = a;
  console.log(a)
})
