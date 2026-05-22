      // ======== dark mode avec localStorage, navbar dynamique au scroll=======

const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("theme", "dark");
  }else{
    localStorage.setItem("theme", "light");
  }

});
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark-mode");
}
                  //  =========navbar dynamique===============

window.addEventListener("scroll", () => {

  let navbar = document.getElementById("navbar");

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  }

  else{
    navbar.classList.remove("scrolled");
  }

});

          //  ==========bouton retour==========
          
 let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 200){
    topBtn.style.display = "block";
  }

  else{
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
          