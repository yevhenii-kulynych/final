
let bagAmount = doc.getElementsByClassName('bag-amount');
let bagTotalPrice = doc.getElementsByClassName('total-bag');
let removeBtn = doc.getElementsByClassName('bag-items__appereance-remove');
//контейнер
let itemContainer = doc.getElementsByClassName('bag-items__item-wrapper');
//....
let bagItems = doc.getElementsByClassName('bag-items');
let price = doc.getElementsByClassName('bag-items__title-price');
let totalPrice = doc.getElementsByClassName('total-price-and-discount__total-price');
//quantity
let quantity = doc.getElementsByClassName('bag-items__counter');
let plus = doc.getElementsByClassName('plus');
let minus = doc.getElementsByClassName('minus');

let arrayOfPrices = [];



total(getAllNumbersOfPrice());


//отображение в шапке суммы и кол-ва
function total(func) {
		totalPrice[0].innerHTML = 'Total price: ' +'&#163;' + func;
		bagTotalPrice[0].innerHTML = '&#163;' + func;
		console.log(func);
		bagAmount[0].innerHTML = '(' + getAmount() + ')';
}

//получаю количество
function getAmount() {
	let length = price.length;
	if (length === 0) {
		let empty = doc.createElement('p');
		let emptyLink = doc.createElement('a');

		empty.classList.add('bag-items__empty-bag');
		empty.innerHTML = 'There are nothing to buy';

		emptyLink.classList.add('bag-items__empty-link-bag');
		emptyLink.href = 'catalog.html';
		emptyLink.innerHTML = '> Use catalog to add items <';

		bagItems[0].appendChild(empty);
		bagItems[0].appendChild(emptyLink);

	}
	for (let i = 0 ; i < price.length; i+=1) {
		console.log(length)
	}
	return length;
}

//сумма всех товаров в корзине
function getAllNumbersOfPrice() {
	let sum = 0;
	for (let i = 0 ; i < price.length; i+=1) {
		sum += +price[i].innerHTML.slice(1);
	}
	return sum.toFixed(2);
}



//по клику удаляю элементы которые прошли проверку

function removeItem() {

	for (let i = 0; i < itemContainer.length; i+=1) {
		itemContainer[i].addEventListener('click', function(event) {
			if (event.target && event.target.classList.contains('bag-items__appereance-remove')) {
				event.currentTarget.parentNode.removeChild(event.currentTarget);
				total(getAllNumbersOfPrice());
			}
			if (event.target && event.target.classList.contains('plus')) {
				console.log('plus')
				let previousSibling = +event.target.previousSibling.innerHTML;
				let plusOne = previousSibling+=1;
				event.target.previousSibling.innerHTML = plusOne;
				console.log(previousSibling+=1);
			}
		})
	}

}
removeItem()









//добавление мужчины из item.html


doc.addEventListener("DOMContentLoaded", function() {
	let localObj = JSON.parse(localStorage.getItem('80d32566-d81c-4ba0-9edf-0eceda3b4360'))
	console.log(localObj)

	let wrap = doc.createElement('div');
	wrap.classList.add('bag-items__item-wrapper');

	let containerPreview = doc.createElement('div');
	containerPreview.classList.add('bag-items__item-preview');

	let img = doc.createElement('img');
	img.src = localObj.thumbnail;
	img.classList.add('bag-items__item-preview-img');

	let hoverDiv = doc.createElement('div');
	hoverDiv.classList.add('item-hover');

	let hoverText = doc.createElement('p');
	hoverText.classList.add('item-hover__text');
	hoverText.innerHTML = 'Edit item';

	hoverDiv.appendChild(hoverText);

	containerPreview.appendChild(img);
	containerPreview.appendChild(hoverDiv);

	let containerDescription = doc.createElement('div');
	containerDescription.classList.add('bag-items__item-description');

	let title = doc.createElement('div');
	title.classList.add('bag-items__title');

	let titleText = doc.createElement('p');
	titleText.classList.add('bag-items__title-text');
	titleText.innerHTML = localObj.title;

	let titlePrice = doc.createElement('p');
	titlePrice.classList.add('bag-items__title-price');
	titlePrice.innerHTML = '&#163;' + localObj.discountedPrice;

	title.appendChild(titleText);
	title.appendChild(titlePrice);


	let appereance = doc.createElement('div');
	appereance.classList.add('bag-items__appereance');

	let appereanceColor = doc.createElement('p');
	appereanceColor.classList.add('bag-items__appereance-color');
	appereanceColor.innerHTML = 'Color: ' + localObj.colors[0];

	let appereanceSize = doc.createElement('p');
	appereanceSize.classList.add('bag-items__appereance-size');
	appereanceSize.innerHTML = 'Color: ' + localObj.sizes[0];

	let appereanceQuantity = doc.createElement('p');
	appereanceQuantity.classList.add('bag-items__appereance-quantity');
	appereanceQuantity.innerHTML = 'Quantity: <span class="minus">-</span><span class="bag-items__counter">1</span><span class="plus">+</span></p>';


	let appereanceRemove = doc.createElement('p');
	appereanceRemove.classList.add('bag-items__appereance-remove');
	appereanceRemove.innerHTML = 'Remove item';


	appereance.appendChild(appereanceColor);
	appereance.appendChild(appereanceSize);
	appereance.appendChild(appereanceQuantity);
	appereance.appendChild(appereanceRemove);

	containerDescription.appendChild(title);
	containerDescription.appendChild(appereance);

	wrap.appendChild(containerPreview);
	wrap.appendChild(containerDescription);

	bagItems[0].appendChild(wrap);
	removeItem();
	total(getAllNumbersOfPrice());
});

