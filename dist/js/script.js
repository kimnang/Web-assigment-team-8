
  // Limit shot description
  window.addEventListener('load',() =>{
    const short_description = document.querySelectorAll('.area-short-description');
    const description_length = 200;
    short_description.forEach(description => {
      var content = description.length <= description_length ? description.innerHTML : description.innerHTML.substring(0, description_length - 4) + '....';
      description.innerHTML = content;
    });
  });

$(window).on('load', function(){
	$(".preloader").delay(1000).fadeOut();
});
$(".scroll_down").on('click', function(){
	var vheight = $(window).height();
	$("html, body").animate({scrollTop: vheight}, 0);
});
// Animate after the slider changes
$("#mainBanner").on("slid.bs.carousel", function(e) {
  // Add .d-none to previous shown slide
  $(".carousel-item *").addClass("d-none");

  // Element for new slide
  var c = e["relatedTarget"];

  // After 0.7 sec slide changes, then make the animation for new slide
  setTimeout(function() {
    $(c)
      .find("*")
      .removeClass("d-none")
      .addClass("animated");
    console.log("c");
  }, 700);
});
