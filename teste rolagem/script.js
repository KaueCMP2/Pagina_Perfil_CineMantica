const harburguer = document.querySelector(".hamburger")
const teste2 = document.querySelector(".teste2")

harburguer.addEventListener("click", ()=> {
    teste2.classList.toggle("active-side")
    harburguer.classList.toggle("active-button")

})