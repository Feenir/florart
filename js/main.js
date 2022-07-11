jQuery(document).ready(function ($) {
	
	// =======================
	// Слайдер блок hero
	// =======================
	
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
	
	// =======================
	// Хэдер липкий
	// =======================
	
	const headerHeight = $('.header__scroll').outerHeight(true)
	$(window).scroll(function(){
		if($(this).scrollTop()>0){
			$('.header__scroll').addClass('header__scroll--scroll');
			$('.header__top').addClass('header__top--invisible')
			$('body').css({
				'paddingTop': headerHeight // делаем отступ у body, равный высоте шапки
			});
			
		
			
		}
		else if ($(this).scrollTop()<headerHeight){
			$('.header__scroll').removeClass('header__scroll--scroll');
			$('body').css( {
				paddingTop: 0
			})
			$('.header__top').removeClass('header__top--invisible')
		}
		
	});
	// =======================
	// Бургер открытие
	// =======================
	$('.js-open-burger').on('click', function (event) {
		event.preventDefault();
		$('.header__mobile-menu').addClass('header__mobile-menu--open')
	});
});

$('.js-close-menu').click(function (e) {
	e.preventDefault();
	$('.header__mobile-menu').removeClass('header__mobile-menu--open');
});