jQuery(document).ready(function ($) {
	var swiper = new Swiper(".JsSlider-hero", {
		slidesPerView: 3,
		spaceBetween: 20,
		pagination: {
			el: ".js-heroPagination",
		},
		
		navigation: {
			nextEl: ".jsHero-next",
			prevEl: ".jsHero-prev",
		},
		
		breakpoints: {
			320: {
				slidesPerView: 1.25,
			},
			
			561: {
				slidesPerView: 2,
			},
			
			1024: {
				slidesPerView: 3,
			},
		},
	});
	
	
	$('.js-open-burger').on('click', function (event) {
		event.preventDefault();
		$('.header__mobile-menu').addClass('header__mobile-menu--open')
	});
});

$('.js-close-menu').click(function (e) {
	e.preventDefault();
	$('.header__mobile-menu').removeClass('header__mobile-menu--open');
});