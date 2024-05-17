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

const sun = document.getElementById("sun");
sun.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        sun.src = "img/moon.webp";
    }else{
        sun.src = "img/sun.png";
    }
}

window.onscroll = function(){
    scrollFunction();
};

function scrollFunction() {
  var mybutton = document.getElementById("ttpbtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function ScrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}
