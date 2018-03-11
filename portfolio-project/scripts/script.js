//Scroll to
$(document).ready(function(){
    $('.go_to').click( function(){
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
		width:$(this).attr('data-percent')
	}, 2000);
});

//back to top
var $btnTop = $(".btn-top")
$(window).on("scroll", function() {
	if ($(window).scrollTop() >= 20){
		$btnTop.fadeIn();
	} else {
		$btnTop.fadeOut();
	}
});

$btnTop.on("click", function() {
	$("html, body").animate({scrollTop:0}, 900)
});