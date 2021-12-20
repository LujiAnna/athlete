// all js document start like this in bootstrap mode
// NAVBAR
// somehow this is not working
$(document).ready(function() {
    // scroll spy function on bootstrap
    $(window).scroll(function() {
        // adds extra class 
        if ($(window).scrollTop() > 570) {
            $('.navbar').addClass('navbar-fixed-top');
        }
        // removes extra class
        if ($(window).scrollTop() < 571) {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    });
});

// BUTTONS
// smooth scrolling

// navbar links
$(".navbar-dark ul li a[href^='#']").on('click', function(e) {
    e.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $hash.offset().top
    }, 300, function() {
        window.location.hash = hash;
    });
});

// cover learn more button
$(" #cover .col .sm-3 a[href^='#']").on('click', function(e) {
    e.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $hash.offset().top
    }, 500, function() {

        window.location.hash = hash;
    });
});

// back-to-top arrow
$(" .footer .scroll-to-top-button a[href^='#']").on('click', function(e) {
    e.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $hash.offset().top
    }, 500, function() {

        window.location.hash = hash;
    });
});