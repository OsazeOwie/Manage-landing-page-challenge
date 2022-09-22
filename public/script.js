const burger = document.getElementById("burger");
const formBtn = document.getElementById("formBtn");


const showNav = () => {
   const menu = document.getElementById("menu");
   menu.classList.toggle("hidden");
   burger.src = "img/icon-close.svg";
};

let slideIndex = 0;
const showSlides = () => {
    let i;
    let slides = document.getElementsByClassName("slides");
    let indicator = document.getElementsByClassName("indicator");
    for(i = 0; i < slides.length; i++){
        slides[i].classList.add("hidden")
    }

    slideIndex++;
    
    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    for(i = 0; i< indicator.length; i++){
         indicator[i].className = indicator[i].className.replace("bg-primary-Bright_Red", "bg-white");
    }
    slides[slideIndex-1].classList.remove("hidden")
    indicator[slideIndex-1].classList.replace("bg-white", "bg-primary-Bright_Red");
    setTimeout(showSlides, 2000);
};



const validEmail = () =>{
    const validRegex = /^\S+@\S+\.\S+$/;
    const input = document.getElementById("input");
    const error = document.getElementById("error");
    if(!input.value.match(validRegex) && input.value !== ""){
        input.style.color = "red";
        error.textContent = "please sumbit a valid email";
    }
    else if(input.value == ""){
        error.textContent = "please your email address";
    }
    else{
        input.value = "";
    }
};

burger.addEventListener("click", showNav);
formBtn.addEventListener("click", validEmail);
showSlides();










