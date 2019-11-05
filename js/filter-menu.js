
//drop filter

let catalog = doc.getElementsByClassName('catalog-filter');
let itemCatalog = doc.getElementsByClassName('catalog-filter__all-options');
let btnTwo = doc.getElementsByClassName('catalog-filter__icon-wrapper');


catalog[0].addEventListener('click', function(e) {

	if (e.target.classList.contains('catalog-filter__main-wrap') || e.target.classList.contains('catalog-filter__list') || e.target.nodeName == 'SPAN') {
		itemCatalog[0].classList.add('catalog-filter__active-filter');
		btnTwo[0].classList.add('catalog-filter__menu-icon-showed');
	}
	if (e.target.classList.contains('catalog-filter__menu-icon')) {
		itemCatalog[0].classList.remove('catalog-filter__active-filter');
		btnTwo[0].classList.remove('catalog-filter__menu-icon-showed');
	}
});


//просто для отображения
getLocal();
getLocalPrice();