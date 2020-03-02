let css = document.querySelector(".css")
let displayBody = document.querySelector("body")
let i = 0
if(i<1) {
  console.log('1')
  if(window.innerWidth > 600){
    console.log('2')
    css.href = 'desktop.css'
    css.classList.remove('cssMobile')
    css.classList.add('cssDesktop')
    console.log('dator')
  }else {
    console.log('3')
    css.href = 'mobile.css'
    css.classList.remove('cssDesktop')
    css.classList.add('cssMobile')
    console.log('mobil')
  }
}
i++
console.log('4')
displayBody.classList.remove('displayNoneBody')
