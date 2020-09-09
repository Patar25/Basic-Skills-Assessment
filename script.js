// Slick slider animations

$(document).ready(function () {
    $('.slider-mask').slick({
        dots: true,
        infinite: true,
        prevArrow: '<span class="prev-arrow"><i class="fas fa-arrow-left fa-2x"></i></span>',
        nextArrow: '<span class="next-arrow"><i class="fas fa-arrow-right fa-2x"></i></span>'
    });
});