
// To the Top Button JS 
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  // Scroll to top functionality
  scrollToTopBtn.addEventListener('click', () => {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Check if the device is mobile (and disable hover effect on mobile)
      if (window.innerWidth <= 768) {
        scrollToTopBtn.classList.add('clicked');
          // reset after a short time (e.g., 2 seconds)
          setTimeout(() => {
              scrollToTopBtn.classList.remove('clicked');
          }, 1000); // Reset the effect after 2 seconds
      }
  });
});


// Scrolled Title Effects

// Select the title element
const headerTitle = document.getElementById('header-title');

// Function to handle scroll event
function handleScroll() {
    // Get the scroll position
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Add or remove the 'scrolled' class based on scroll position
    if (scrollY > 10) { // Adjust the scroll position threshold (100px here)
        headerTitle.classList.add('scrolled');
    } else {
        headerTitle.classList.remove('scrolled');
    }
}

// Listen for the scroll event
window.addEventListener('scroll', handleScroll);

// JavaScript for the carousel functionality

let currentIndex = 0; // Start with the first slide
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Get buttons
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Set the interval for auto-sliding
let autoSlideInterval = setInterval(showNextItem, 5000); // Change slide every 5 seconds

// Update the carousel position
function updateCarouselPosition() {
    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * 100; // Move the carousel by the width of one item (100%)
    carousel.style.transform = `translateX(${offset}%)`;
}

// Show next item
function showNextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarouselPosition();
}

// Show previous item
function showPrevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarouselPosition();
}

// Function to restart the auto-sliding timer
function restartAutoSlideTimer() {
    clearInterval(autoSlideInterval); // Clear the existing interval
    autoSlideInterval = setInterval(showNextItem, 4000); // Restart the interval
}

// Event listeners for the navigation buttons
nextButton.addEventListener('click', () => {
    showNextItem();       // Show next slide
    restartAutoSlideTimer(); // Restart the auto-slide timer
});

prevButton.addEventListener('click', () => {
    showPrevItem();       // Show previous slide
    restartAutoSlideTimer(); // Restart the auto-slide timer
});

// Auto slide every 5 seconds (timer continues after initial load)
//setInterval(showNextItem, 5000);