
$(window).resize(function() {
    let css = document.querySelector(".css")
    //let cssMobile = document.querySelector(".cssMobile")
    //let cssDesktop = document.querySelector(".cssDesktop")
    if (window.innerWidth > 600) {
      if(css.classList[1] == 'cssDesktop'){
        //console.log('Desktopversion redan innan')
      }else {
        css.href = 'desktop.css'
        css.classList.remove('cssMobile')
        css.classList.add('cssDesktop')
        console.log('Desktopversion nu' + this.innerWidth)
      }
    }else {
      if(css.classList[1] == 'cssMobile'){
        //console.log('Mobileversion redan innan')
      }else {
        css.href = 'mobile.css'
        css.classList.remove('cssDesktop')
        css.classList.add('cssMobile')
        console.log('Mobileversion nu'+ this.innerWidth)
      }
    }
    
  });