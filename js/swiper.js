window.addEventListener('DOMContentLoaded', () => {

	const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
		let swiper;

		breakpoint = window.matchMedia(breakpoint);

		const enableSwiper = function (className, settings) {
			swiper = new Swiper(className, settings);

			if (callback) {
				callback(swiper);
			}
		}

		const checker = function () {
			if (breakpoint.matches) {
				return enableSwiper(swiperClass, swiperSettings);
			} else {
				if (swiper !== undefined) swiper.destroy(true, true);
				return;
			}
		};

		breakpoint.addEventListener('change', checker);
		checker();
	}

	resizableSwiper(
		'(max-width: 1240px)',
		'.rating__swiper',
		{
			slidesPerView: 1.2,
			spaceBetween: 10,
			slideToClickedSlide: true,
			centeredSlides: true,
			breakpoints: {
				425: {
					slidesPerView: 1.3,
					spaceBetween: 15,
				},
				475: {
					slidesPerView: 1.5,
				},
				620: {
					slidesPerView: 1.8,
				},
				730: {
					slidesPerView: 2.1,
					spaceBetween: 20,
				},
				860: {
					slidesPerView: 2.5,
				},
				1024: {
					slidesPerView: 3.1,
				},
				1240: {
					slidesPerView: 3,
					enabled: false,
				},
			},
		},
	);

	resizableSwiper(
		'(max-width: 1240px)',
		'.blog__swiper',
		{
			slidesPerView: 1.3,
			spaceBetween: 10,
			slideToClickedSlide: true,
			centeredSlides: true,
			breakpoints: {
				375: {
					slidesPerView: 1.5,
					spaceBetween: 15,
				},
				450: {
					slidesPerView: 1.8,
					spaceBetween: 15,
				},
				540: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				600: {
					slidesPerView: 1.2,
					spaceBetween: 25,
				},
				800: {
					slidesPerView: 1.3,
					spaceBetween: 25,
				},
				870: {
					slidesPerView: 1.5,
					spaceBetween: 25,
				},
				1000: {
					slidesPerView: 1.6,
					spaceBetween: 25,
				},
				1070: {
					slidesPerView: 1.8,
					spaceBetween: 25,
				},
				1140: {
					slidesPerView: 2,
					spaceBetween: 25,
				},
			},
		}
	);

	resizableSwiper(
		'(max-width: 1240px)',
		'.gallery__swiper',
		{
			slidesPerView: 1.5,
			spaceBetween: 20,
			slideToClickedSlide: true,
			centeredSlides: true,
			breakpoints: {
				425: {
					slidesPerView: 1.8,
				},
				540: {
					slidesPerView: 2.2,
				},
				660: {
					slidesPerView: 2.5,
				},
				760: {
					slidesPerView: 3,
				},
				900: {
					slidesPerView: 3.5,
				},
				1040: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 4.5,
				},
			},
		},
	);
});

