document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelector('.carousel-items');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const itemsPerPage = 4;


    // Show the item at the current index
    function updateCarousel() {
        const offset = -currentIndex * (items[0].offsetWidth + 20); // Account for margins
        carouselItems.style.transform = `translateX(${offset}px)`;
    }

    // Show the previous item
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
    });

    // Show the next item
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Initialize carousel
    updateCarousel();
});