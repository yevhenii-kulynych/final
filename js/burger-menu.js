

//бургер меню
let btn = document.getElementsByClassName('head__menu-icon-wrapper');
let m = document.getElementsByClassName('head__menu-icon');
let x = document.getElementsByClassName('head__hidden-menu');

btn[0].addEventListener('click', function() {

	m[0].classList.toggle('head__menu-icon-active');
	x[0].classList.toggle('head__show-hidden-menu')	
});


