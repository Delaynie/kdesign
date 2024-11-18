
// To the Top Button JS 
// Get the button:
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  // Scroll to top functionality
  scrollToTopBtn.addEventListener('click', () => {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Check if the device is mobile (and disable hover effect on mobile)
      if (window.innerWidth <= 820) {
        scrollToTopBtn.classList.add('clicked');
          // reset after a short time (e.g., 2 seconds)
         /* setTimeout(() => {
              scrollToTopBtn.classList.remove('clicked');
          }, 1000);*/ // Reset the effect after 1 second
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

// Carousel Code 
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;
  let currentIndex = 0; // Start with the first item
  let startX = 0; // Track the starting X position of the touch
  let endX = 0; // Track the ending X position of the touch

  // Function to update the carousel position
  function updateCarouselPosition() {
      const offset = -currentIndex * 100; // Move by the width of one item (100%)
      carousel.style.transform = `translateX(${offset}%)`;
  }

  // Swipe event handlers for mobile
  carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX; // Get starting position of the touch
  });

  carousel.addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX; // Get the current position of the touch
  });

  carousel.addEventListener('touchend', () => {
    const swipeDistance = startX - endX; // Calculate the distance swiped
    const swipeThreshold = 50; // Set a threshold for the swipe distance

    // If swiped left (distance is positive), move to the next item
    if (swipeDistance > swipeThreshold) {
        currentIndex = (currentIndex + 1) % totalItems; // Move to the next item
        updateCarouselPosition();
    }

    // If swiped right (distance is negative), move to the previous item
    else if (swipeDistance < -swipeThreshold) {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move to the previous item
        updateCarouselPosition();
    }
  });

  // Handle Clickable Navigation (Desktop)
  const nextButton = document.querySelector('.next-btn');
  const prevButton = document.querySelector('.prev-btn');

  // Next button
  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalItems; // Move to next item
      updateCarouselPosition();
  });

  // Previous button
  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move to previous item
      updateCarouselPosition();
  });

  // Optional: Auto slide every 5 seconds (reset swipe interval on interaction)
  /*let autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarouselPosition();
  }, 5000);

  // Reset auto-slide if user interacts
  carousel.addEventListener('touchstart', () => {
      clearInterval(autoSlideInterval);
  });*/

});
