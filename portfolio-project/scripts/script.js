//Scroll to
$(document).ready(function() {
    $('.go_to').click(function() {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
        return false;
    });
});

// Skillbar
$('.skillbar').each(function() {
    $(this).find('.skillbar-bar').animate({
        width: $(this).attr('data-percent')
    }, 2000);
});

//back to top
var $btnTop = $(".btn-top")
$(window).on("scroll", function() {
    if ($(window).scrollTop() >= 20) {
        $btnTop.fadeIn();
    } else {
        $btnTop.fadeOut();
    }
});
$btnTop.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 900)
});

$(function() {
    $(".typed").typed({
        strings: ["Developer", "Starting Front-end developer."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 20,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });
});