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
            /* =============compteur statistique et animation======== */

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

 entries.forEach(entry => {

    if(entry.isIntersecting){

      const counter = entry.target;

      const target = +counter.getAttribute("data-target");

      let count = 0;

      const updateCounter = () => {

        const increment = target / 100;

        if(count < target){

          count += increment;

          counter.innerText = Math.floor(count);

          requestAnimationFrame(updateCounter);

        }

        else{
          counter.innerText = target;
        }

      };

      updateCounter();

      observer.unobserve(counter);

    }

  });

});

counters.forEach(counter => {
  observer.observe(counter);
});
          
const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

fadeElements.forEach(element => {
  fadeObserver.observe(element);
});