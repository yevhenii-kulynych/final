

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

let arr = [];
for (let i = 0; i < link.length; i+=1) {
	arr.push(link[i]);
}

// for (let i = 0; i < arr.length; i+=1) {
// 	arr[i].addEventListener('click', function() {
// 		location.href = 'item.html';
// 	})
// }

arr.forEach( function(i) {
	i.addEventListener('click', function() {
		location.href = 'item.html';
	})
});


//бургер меню
let btn = document.getElementsByClassName('head__menu-icon-wrapper');
let m = document.getElementsByClassName('head__menu-icon');
let x = document.getElementsByClassName('head__hidden-menu');

btn[0].addEventListener('click', function() {

	m[0].classList.toggle('head__menu-icon-active');
	x[0].classList.toggle('head__show-hidden-menu')	
});