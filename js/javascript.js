// Smooth Scroll
(function () {
  var smoothScroll = function smoothScroll(targetEl, duration) {
    var target = document.querySelector(targetEl);
    var targetPosition = target.getBoundingClientRect().top;

    var startPosition = window.pageYOffset;
    var startTime = null;

    var ease = function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    var animation = function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  var scrollTo = function scrollTo() {
    var links = document.querySelectorAll("a[href^='#']");

    links.forEach(function (each) {
      each.addEventListener("click", function (e) {
        e.preventDefault();
        var currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1300);
      });
    });
  };

  scrollTo();
})();

// Typing effect
let typed = new Typed(".auto-type", {
  strings: ["Mandala designer", "Graphist", "Photographer"],
  typeSpeed: 125,
  backSpeed: 125,
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

// Image Zoom
let magnifyingBoard = document.querySelector(".specifications-works-art-img");
magnifyingBoard.addEventListener("mousemove", function zoom(e) {
  let zoomer = e.currentTarget;
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
  x = (offsetX / zoomer.offsetWidth) * 100;
  y = (offsetY / zoomer.offsetHeight) * 100;
  zoomer.style.backgroundPosition = x + "% " + y + "%";
});

// loader
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader-gif").style.visibility = "visible";
    document.querySelector(".loader-container").classList.remove("fade-out");
  } else {
    document.querySelector("#loader-gif").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
    document.querySelector(".loader-container").classList.add("fade-out");
  }
};
