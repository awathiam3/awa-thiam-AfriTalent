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

    //  ========filtrage dynamique des freelances======

  function filterFreelancers(category){

    const cards =
    document.querySelectorAll(".freelancer");

    cards.forEach(card => {

        if(category === "all"){
            card.style.display = "block";
        }

        else if(card.classList.contains(category)){
            card.style.display = "block";
        }

        else{
            card.style.display = "none";
        }

    });

}


     /* ============validation du formulaire de contact========== */

     const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("PrenomError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const prenom = document.getElementById("Prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === ""){
        document.getElementById("nameError").textContent =
        "Le nom est obligatoire";
        valid = false;
    }

    if(prenom === ""){
        document.getElementById("PrenomError").textContent =
        "Le prénom est obligatoire";
        valid = false;
    }

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        document.getElementById("emailError").textContent =
        "L'email est obligatoire";
        valid = false;
    }

    else if(!emailRegex.test(email)){
        document.getElementById("emailError").textContent =
        "Email invalide";
        valid = false;
    }

    if(message === ""){
        document.getElementById("messageError").textContent =
        "Le message est obligatoire";
        valid = false;
    }

    else if(message.length < 20){
        document.getElementById("messageError").textContent =
        "Le message doit contenir au moins 20 caractères";
        valid = false;
    }

    if(valid){
        document.getElementById("successMessage").textContent =
        "Message envoyé avec succès !";

        form.reset();
    }

});
     
