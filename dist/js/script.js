
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
	$("html, body").animate({scrollTop: vheight}, 400);
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  $("html, body").animate({scrollTop: 0},400)
}