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

document.addEventListener("DOMContentLoaded", () => {
    const priceFilter = document.getElementById("priceFilter");
    const sortOptions = document.getElementById("sortOptions");
    const tourCards = document.querySelectorAll(".trendingCard");
    const tourContainer = document.querySelector(".trendingGrid");

   // Get the existing "Clear Filters" button from the HTML
const clearBtn = document.getElementById("clearBtn");

    function filterAndSortTours() {
        let filteredTours = Array.from(tourCards);

        // Show loading effect
        tourContainer.style.opacity = "0.5"; 
        setTimeout(() => {
            tourContainer.style.opacity = "1"; 
        }, 300);

        // Filtering by price
        const priceValue = priceFilter.value;
        filteredTours = filteredTours.filter(card => {
            const price = parseFloat(card.querySelector(".price h3").textContent.replace("$", ""));
            if (priceValue === "low") return price < 600;
            if (priceValue === "mid") return price >= 600 && price <= 900;
            if (priceValue === "high") return price > 900;
            return true; 
        });

        // Sorting
        const sortValue = sortOptions.value;
        if (sortValue === "price-low") {
            filteredTours.sort((a, b) => {
                return parseFloat(a.querySelector(".price h3").textContent.replace("$", "")) - 
                       parseFloat(b.querySelector(".price h3").textContent.replace("$", ""));
            });
        } else if (sortValue === "price-high") {
            filteredTours.sort((a, b) => {
                return parseFloat(b.querySelector(".price h3").textContent.replace("$", "")) - 
                       parseFloat(a.querySelector(".price h3").textContent.replace("$", ""));
            });
        } else if (sortValue === "rating-high") {
            filteredTours.sort((a, b) => {
                return parseFloat(b.querySelector(".trendingRatings p").textContent.split(" ")[0]) - 
                       parseFloat(a.querySelector(".trendingRatings p").textContent.split(" ")[0]);
            });
        }

        // Updating the UI with animation
        tourContainer.innerHTML = "";
        filteredTours.forEach((card, index) => {
            setTimeout(() => {
                tourContainer.appendChild(card);
                card.style.opacity = "1";
                card.style.transform = "scale(1)";
            }, index * 100); // Delay effect
        });
    }

    // Add event listeners
    priceFilter.addEventListener("change", filterAndSortTours);
    sortOptions.addEventListener("change", filterAndSortTours);

    // Clear Filters Function
    clearBtn.addEventListener("click", () => {
        priceFilter.value = "all";
        sortOptions.value = "none";
        filterAndSortTours();
    });
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