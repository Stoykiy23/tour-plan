$(document).ready(function() {
    const hotelSlider = new Swiper('.hotel-slider', {
        // Optional parameters

        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },
    });

    const reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters

        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },
    });
    var menuButton = $(".menu-button");
    menuButton.on("click", function() {
        $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    });

    var modalButton = $('[data-toggle=modal]')
    var closeModalButton = $(".modal__close");
    modalButton.on('click', openModal);
    closeModalButton.on('click', closeModal);

    function openModal() {
        var modalOverLay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");

        modalOverLay.addClass('modal__overlay--visible');
        modalDialog.addClass('modal__dialog--visible');
    }

    function closeModal(event) {
        event.preventDefault();
        var modalOverLay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");

        modalOverLay.removeClass('modal__overlay--visible');
        modalDialog.removeClass('modal__dialog--visible');
    }
    // Обработка формы
    $('.form').each(function() {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "Name must be at least 2 letters long",
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
                },
                phone: {
                    required: "Phone is required",
                },
            },
        });
    })
    $(function($) {
        $(".phone").mask("+7 (999) 999-99-99");
    });
    AOS.init();
});