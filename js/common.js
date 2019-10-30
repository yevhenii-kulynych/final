

// ховер линка
let link = document.getElementsByClassName('item-hover__text');

let arr = [];
for (let i = 0; i < link.length; i+=1) {
	arr.push(link[i]);
}

arr.forEach( function(i) {
	i.addEventListener('click', function() {
		location.href = 'item.html';
	})
});


// banner click

let main = document.getElementsByClassName('wrap');

main[0].addEventListener('click', function(e) {
	
	if (e.target.classList.contains('banner__left') || e.target.classList.contains('banner__text')) {
		location.href = 'item.html';
	}
	if (e.target.classList.contains('banner__right') || e.target.classList.contains('new-arrivals__btn-all-arricals')) {
		location.href = 'catalog.html';
	}
});

