const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navLinks");
const navItems = document.querySelectorAll(".navLinks a");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("active"); // Add class for active state
});

// Close menu when clicking a link
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.classList.remove("active"); // Reset the toggle color when the menu is closed
  });
});



// header container
ScrollReveal().reveal(".headerContainer h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".headerForm", {
    ...scrollRevealOption,
    delay: 500,
});

// trending container
ScrollReveal().reveal(".trendingCard", {
    ...scrollRevealOption,
    interval: 500,
});

// destination container
ScrollReveal().reveal(".destinationCard", {
    duration: 1000,
    interval: 500,
});

// seller container
ScrollReveal().reveal(".sellerCard", {
    ...scrollRevealOption,
    interval: 500,
});

//  client container
ScrollReveal().reveal(".clientCard", {
    ...scrollRevealOption,
    interval: 500,
});