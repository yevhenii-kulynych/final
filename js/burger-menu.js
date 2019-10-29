
//бургер меню




let logo = document.getElementsByClassName('head__logo');

// меняю лого
document.addEventListener("DOMContentLoaded", function() {
	let width = window.innerWidth;
	if(width <= 667) {
		logo[0].innerHTML = 'TL';
	}else {
		logo[0].innerHTML = 'Template';
	}
});


window.addEventListener('resize', function(event){
	let width = window.innerWidth;
	if(width <= 667) {
		logo[0].innerHTML = 'TL';
	}else {
		logo[0].innerHTML = 'Template';
	}
	
});


// ховер линка
let link = document.getElementsByClassName('item-hover__text');
let linkArr = Array.prototype.slice.call(link);

linkArr.forEach( i => {
	i.addEventListener('click', () => {
		location.href = 'item.html';
	})
});



let btn = document.getElementsByClassName('menu-icon-wrapper');
let m = document.getElementsByClassName('menu-icon');
let x = document.getElementsByClassName('x');

btn[0].addEventListener('click', () => {

	m[0].classList.toggle('menu-icon-active');
	x[0].classList.toggle('b')	
});