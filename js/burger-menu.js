
let doc = document;


//бургер меню
let btn = doc.getElementsByClassName('head__menu-icon-wrapper');
let m = doc.getElementsByClassName('head__menu-icon');
let x = doc.getElementsByClassName('head__hidden-menu');

btn[0].addEventListener('click', function() {

	m[0].classList.toggle('head__menu-icon-active');
	x[0].classList.toggle('head__show-hidden-menu')	
});


