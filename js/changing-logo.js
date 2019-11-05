

let logo = doc.getElementsByClassName('head__logo');

// меняю лого
doc.addEventListener("DOMContentLoaded", function() {
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