//STICKY NAVIGATION

$(function () {

    var $window = $(window),
        $header = $('.navigation'),
        headerOffsetTop = $header.offset().top;

    $window.on('scroll', function () {
        if ($window.scrollTop() > headerOffsetTop) {
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }
    });

    $window.trigger('scroll');
});

// SMOOTH SCROLL

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});

// SCROLL FADE

$(function () {
    $('.fade').addClass('scroll-in');
    $(window).scroll(function () {
        $(".fade").each(function () {
            var elmPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elmPos - windowHeight + windowHeight / 5) {
                $(this).removeClass('scroll-in');
            } else {
                $(this).addClass('scroll-in');
            }
        });
    });
});

// GALLERY MODAL SLIDE

function openModal() {
    document.getElementById("galleryModal").style.display = newFunction();

    function newFunction() {
        return "flex";
    }
}

function closeModal() {
    document.getElementById("galleryModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("gallery__Slides");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}