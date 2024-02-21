const nav = document.querySelector("nav");

window.addEventListener ("scroll", function() {
    
        nav.classList.toggle ("sticky", window.scrollY > 120);
    } );

const menu = document.getElementById("menu");
const actions = document.getElementById("actions");

menu.addEventListener("click", ()=>{
    hundleMenu();
})
function hundleMenu(){
menu.classList.toggle("is-active");
actions.classList.toggle("is-active");

}
window.onscroll = () => {
menu.classList.remove("is-active");
actions.classList.remove("is-active");
}