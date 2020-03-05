
let pilupp = document.querySelector(".pilupp")
window.addEventListener("scroll", scrollPilupp)
console.log(pilupp)
function scrollPilupp() {
    console.log('heeloo')
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 500) {
        pilupp.classList.remove("pilRotated")
        console.log(window.innerHeight)
    } else {
        pilupp.classList.add("pilRotated")
        console.log(pilupp.width)
    }
}