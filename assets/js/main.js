var show=document.getElementById('show');
var video=document.getElementById('video');
const arrow=document.getElementById('arrow');
const offsetScreen=document.querySelector('.header .care')
const loading=document.querySelector('.loading-screen')
const navScroll=document.querySelector('.navbar')
const navLinks=document.querySelectorAll('.nav-link')
//video show and hidden
window.addEventListener('scroll',function(e){
  if(window.scrollY>offsetScreen.scrollTop){
    arrow.classList.remove('opacity-0');
    navScroll.style.backgroundColor='#89807c';
  }
  else{
    arrow.classList.add('opacity-0');
    navScroll.style.backgroundColor='transparent';

  }
})
arrow.addEventListener('click',function(e){
  window.scroll({
    top:0,
  })
})

window.addEventListener('load',function(){
  console.log('loading');
  setTimeout(function(){
    loading.classList.add('opacity-0','invisible');
    document.body.style.overflow='auto'
  },2000)
})
for(let i=0;i<navLinks.length;i++){
  navLinks[i].addEventListener('click',function(e){
    e.preventDefault()
    for(let j=0;j<navLinks.length;j++){
      navLinks[j].classList.remove('active')
    }
    navLinks[i].classList.add('active')
    let currentId=this.getAttribute('href')
    let target=document.querySelector(currentId)
    
  })
}