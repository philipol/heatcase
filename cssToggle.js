let css = document.querySelector(".css")
let displayBody = document.querySelector("body")
let i = 0
if(i<1) {
  if(window.innerWidth > 668){
    css.href = 'desktop.css'
    css.classList.remove('cssMobile')
    css.classList.add('cssDesktop')
    console.log('dator')
  }else {
    css.href = 'mobile.css'
    css.classList.remove('cssDesktop')
    css.classList.add('cssMobile')
    console.log('mobil')
  }
}
i++
displayBody.classList.remove('displayNoneBody')
