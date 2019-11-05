
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




