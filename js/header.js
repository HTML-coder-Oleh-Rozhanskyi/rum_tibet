const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
console.log(headerHeight)

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance > 100) {
		header.classList.add('header--scrolling');
	}
	else {
		header.classList.remove('header--scrolling');
	}
	document.querySelectorAll('.section').forEach((el, i) => {
		if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
			document.querySelectorAll('.menu__link').forEach((el) => {
				if (el.classList.contains('menu-active')) {
					el.classList.remove('menu-active')
				}
			});
			document.querySelectorAll('.menu__item')[i].querySelector('.menu__link').classList.add('menu-active')
		}
	})
});




