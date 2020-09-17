// Slick slider animations

$(document).ready(function () {
    $('.slider-mask').slick({
        dots: true,
        infinite: true,
        prevArrow: '<span class="prev-arrow"><i class="fas fa-arrow-left fa-2x"></i></span>',
        nextArrow: '<span class="next-arrow"><i class="fas fa-arrow-right fa-2x"></i></span>'
    });
});

// Lazy loading

(function () {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();