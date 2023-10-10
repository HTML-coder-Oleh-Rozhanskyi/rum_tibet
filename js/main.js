function description() {
	const description = document.querySelectorAll('.article-rating__descriptin');
	description.forEach((el) => {
		el.addEventListener('click', () => {
			el.classList.toggle('article-rating__descriptin--active')
		});
	});
}
description();

const select = () => {
	const element = document.querySelector('.top__item-form--select');
	const choices = new Choices(element, {
		searchEnabled: false,
	});
}
select();

