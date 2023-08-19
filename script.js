let currentCarouselItemIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function changeCarouselItem() {
    carouselItems[currentCarouselItemIndex].classList.remove('active');
    currentCarouselItemIndex = (currentCarouselItemIndex + 1) % carouselItems.length;
    carouselItems[currentCarouselItemIndex].classList.add('active');
}

setInterval(changeCarouselItem, 2000);

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
});
