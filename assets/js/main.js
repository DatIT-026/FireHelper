const navMenu = document.getElementById("nav-menu"),navToggle = document.getElementById("nav-toggle"),navClose = document.getElementById("nav-close");if (navToggle) {navToggle.addEventListener("click", () => {navMenu.classList.add("show-menu");});}if (navClose) {navClose.addEventListener("click", () => {navMenu.classList.remove("show-menu");});}const navLink = document.querySelectorAll(".nav__link");function linkAction() {const navMenu = document.getElementById("nav-menu");navMenu.classList.remove("show-menu");}navLink.forEach((n) => n.addEventListener("click", linkAction));const sections = document.querySelectorAll("section[id]");function scrollActive() {const scrollY = window.pageYOffset;sections.forEach((current) => {const sectionHeight = current.offsetHeight;const sectionTop = current.offsetTop - 50;sectionId = current.getAttribute("id");if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");} else {document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");}});}window.addEventListener("scroll", scrollActive);const skillsContent = document.getElementsByClassName(".skills__content"),skillsHeader = document.querySelectorAll(".skills__header");function toggleSkills() {let itemClass = this.parentNode.className;console.log(itemClass);for(i=0;i<skillsContent.length;i++){skillsContent[i].className = "skills__content skills__close";}if(itemClass === "skills__content skills__close") {this.parentNode.className = "skills__content skills__open";}if (itemClass === "skills__content skills__open") {this.parentNode.className = "skills__content skills__close";}}skillsHeader.forEach((el) => {el.addEventListener("click", toggleSkills);});const tabs = document.querySelectorAll("[data-target]"),tabContents = document.querySelectorAll("[data-content]");tabs.forEach((tab) => {tab.addEventListener("click", () => {const target = document.querySelector(tab.dataset.target);tabContents.forEach((tabContent) => {tabContent.classList.remove("qualification__active");});target.classList.add("qualification__active");tabs.forEach((tab) => {tab.classList.remove("qualification__active");});
    tab.classList.add("qualification__active");
  });
});
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

let swiperPortfolio = new Swiper(".swiper-container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const lightTheme = "uil-sun";


const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");


const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(lightTheme) ? "uil-moon" : "uil-sun";


if (selectedTheme) {

  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    lightTheme
  );
}


themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(lightTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
