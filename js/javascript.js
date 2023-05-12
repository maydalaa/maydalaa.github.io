// Typing effect
let typed = new Typed(".auto-type", {
  strings: ["Mandala designer", "Graphist", "Photographer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Swiper JS
let swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  speed: 700,
  centeredSlides: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
