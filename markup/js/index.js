let menuBtn = document.querySelector('.burger-menu-btn');
let menu = document.querySelector('.burger-menu');
let category = document.querySelector('.jscategory');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
category.addEventListener('click', function(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
})
$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 800,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
