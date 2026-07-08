import '../scss/main.scss';

const nav = document.querySelector('.nav');
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');

if (nav && navToggle && navMenu) {
	const closeMenu = () => {
		nav.classList.remove('nav--open');
		navToggle.setAttribute('aria-expanded', 'false');
	};

	navToggle.addEventListener('click', () => {
		const isOpen = nav.classList.toggle('nav--open');
		navToggle.setAttribute('aria-expanded', String(isOpen));
	});

	navMenu.addEventListener('click', (event) => {
		if (event.target instanceof HTMLAnchorElement) {
			closeMenu();
		}
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth > 768) {
			closeMenu();
		}
	});
}