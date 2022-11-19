
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
	$("html, body").animate({scrollTop: vheight - 90}, 0);
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
  $("html, body").animate({scrollTop: 0}, 0)
}
//Animate when scroll down in page hotel
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  const triggerBottom = 700;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    }else {
      box.classList.remove("show");
    }
  });
}


// Index food
var listFood = $('.list-foods');
$(document).ready(function (){
  const foodObject = [
    {
      province: '1',
      title: 'ប្រហុកខ្ទិះ',
      titleLink: '#',
      img: 'images/food/ប្រហុកខ្ទិះ.jpeg'
    },
    {
      province: '2',
      title: 'សម្លប្រហើរ',
      titleLink: '#',
      img: 'images/food/សម្លប្រហើរ.jpeg'
    },
    {
      province: '3',
      title: 'សម្លកកូរ',
      titleLink: '#',
      img: 'images/food/សម្លកកូរ.jpeg'
    },
    {
      province: '4',
      title: 'អាម៉ុក',
      titleLink: '#',
      img: 'images/food/អាម៉ុក.jpeg'
    },
    {
      province: '5',
      title: 'បុកត្រប់ពុតលំញង',
      titleLink: '#',
      img: 'images/food/បុកត្រប់ពុតលំញង.jpeg'
    },
    {
      province: '6',
      title: 'ជ្រក់ក្រៅឆ្នាំង',
      titleLink: '#',
      img: 'images/food/ជ្រក់ក្រៅឆ្នាំង.jpeg'
    },
    {
      province: '7',
      title: 'ឆាអង្ក្រងសាច់គោ',
      titleLink: '#',
      img: 'images/food/ឆាអង្ក្រងសាច់គោ.jpeg'
    },
    {
      province: '8',
      title: 'នំបញ្ចុក',
      titleLink: '#',
      img: 'images/food/នំបញ្ចុក.jpeg'
    },  
  ];
  foodObject.forEach(function (food){
    const foodRender = `
      <div class="food col-12 col-md-4 col-lg-3">
        <p class="food-in-province m-0 text-end">${food.province ?? ''}</p>
        <img src="${food.img ?? ''}" alt="" class="food-img" />
        <p class="food-name m-0 text-center"> <a class="text-white" href="${food.titleLink ?? '#'}"> ${food.title ?? ''} </a> </p>
      </div>`; 
    listFood.append(foodRender);
  })

  console.log($('#menu-navbar ~ * :first'));
})
//Animate when scroll down in page hotel
const fiximgs = document.querySelectorAll(".fiximg");

window.addEventListener("scroll", checkfiximg);
checkfiximg();
function checkfiximg() {
  const triggerBottom1 = 305;

  fiximgs.forEach((fiximg) => {
    const fiximgTop = fiximg.getBoundingClientRect().top;

    if (fiximgTop < triggerBottom1) {
      fiximg.classList.add("show");
    }else {
      fiximg.classList.remove("show");
    }
  });
}
