const menuBtn = document.getElementById("nav-menu");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpened = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpened ? "ri-close-large-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// SCROLL REVEAL
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".header__image img", { ...scrollRevealOptions });
ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOptions,
  delay: 1500,
});
ScrollReveal().reveal(".header__content button", {
  ...scrollRevealOptions,
  delay: 2000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOptions,
  origin: "left",
});
ScrollReveal().reveal(".about__content h2", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".about__content .about__quote", {
  ...scrollRevealOptions,
  delay: 1500,
});
ScrollReveal().reveal(".about__content .about__links", {
  ...scrollRevealOptions,
  delay: 2000,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 500,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOptions,
  interval: 500,
});

// ScrollReveal().reveal(target, options);

// MIXITUP
const mixer = mixitup(".project__grid");

// SWIPER
const swiper = new Swiper(".swiper", {
  sliderPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
