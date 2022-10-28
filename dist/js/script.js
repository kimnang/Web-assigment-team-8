
$(window).on('load', function(){
	// Preloader JS
	$(".preloader").delay(1000).fadeOut();
});
$(".scroll_down").on('click', function(){
	var vheight = $(window).height();
	$("html, body").animate({scrollTop: vheight}, 1000);
});