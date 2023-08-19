let currentCarouselItemIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function changeCarouselItem() {
    carouselItems[currentCarouselItemIndex].classList.remove('active');
    currentCarouselItemIndex = (currentCarouselItemIndex + 1) % carouselItems.length;
    carouselItems[currentCarouselItemIndex].classList.add('active');
}

setInterval(changeCarouselItem, 2000);
