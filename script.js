// Get all slides
const slides = document.querySelectorAll('.slide');

// Initialize the current slide index
let currentSlideIndex = 0;

// Function to update the active slide
function updateActiveSlide() {
    // Remove the 'active' class from all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Add the 'active' class to the current slide
    slides[currentSlideIndex].classList.add('active');
}

// Function to go to the previous slide
function prevSlide() {
    // Decrement the slide index and loop back if necessary
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateActiveSlide();
}

// Function to go to the next slide
function nextSlide() {
    // Increment the slide index and loop back if necessary
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateActiveSlide();
}

// Add click events to slides for direct selection
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        currentSlideIndex = index;
        updateActiveSlide();
    });
});

// Set the first slide as active on page load
updateActiveSlide();


// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger-icon');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the "active" class
});