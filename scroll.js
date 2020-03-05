window.onscroll = function() {dropHeader()};
let scroll = document.querySelector(".index-header")

function dropHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scroll.classList.add("scroll")
    } else {
        scroll.classList.remove("scroll")
    }
}
