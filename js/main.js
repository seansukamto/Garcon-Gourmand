// AUTO IMAGE SLIDER

let currentSlideLeft = 0;
let currentSlideRight = 0;
const slidesLeft = document.querySelector('.slider:first-child .slides');
const slidesRight = document.querySelector('.slider:last-child .slides');
const totalSlides = 5; // Each slider has 5 images

function showNextSlide() {
    // Update left slider
    currentSlideLeft = (currentSlideLeft + 1) % totalSlides;
    const offsetLeft = -currentSlideLeft * 100;
    slidesLeft.style.transform = `translateX(${offsetLeft}%)`;

    // Update right slider
    currentSlideRight = (currentSlideRight + 1) % totalSlides;
    const offsetRight = -currentSlideRight * 100;
    slidesRight.style.transform = `translateX(${offsetRight}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});
