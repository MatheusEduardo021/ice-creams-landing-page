ScrollReveal().reveal(".nav-sr", {
  duration: 1500,
  distance: "50px",
  origin: "top",
});

ScrollReveal().reveal(".main-sr", {
  duration: 1500,
  distance: "150px",
  origin: "left",
});

ScrollReveal().reveal(".cardapio-sr", {
  duration: 1500,
  distance: "150px",
  origin: "left",
});

ScrollReveal().reveal(".testimonials-sr", {
  duration: 1500,
  distance: "150px",
  origin: "left",
});

const menuBtn = document.querySelector("#mobile-btn");
menuBtn.addEventListener("click", () => {
  let menuMobile = document.querySelector(".mobile-menu");
  let defaultIcon = document.querySelector("#mobile-btn");

  if (menuMobile.classList.contains("actived")) {
    menuMobile.classList.remove("actived");
  } else {
    menuMobile.classList.add("actived");
  }

  if (defaultIcon.className === "fa-solid fa-bars") {
    defaultIcon.className = "fa-solid fa-x";
  } else {
    defaultIcon.className = "fa-solid fa-bars";
  }

});

// "fa-solid fa-x"> ---> X
