
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
let quantity = doc.getElementsByClassName('bag-items__appereance-quantity');
let plus = doc.getElementsByClassName('plus');
let minus = doc.getElementsByClassName('minus');

let arrayOfPrices = [];


// getAmount(arrayOfPrices);
total(getAllNumbersOfPrice());
// toStorage(arrayOfPrices);
// fromStorage();


function total(func) {
		totalPrice[0].innerHTML = '&#163;' + func;
		bagTotalPrice[0].innerHTML = '&#163;' + func;
		console.log(func);
		bagAmount[0].innerHTML = '(' + getAmount() + ')';
}

// function fromStorage() {
// 	let item = localStorage.getItem('arr');
// 	let strToArr = item.split(',');
// 	let sum = 0;
// 	strToArr.forEach(function(i) {
// 		sum += +i;
// 	})

// 	bagTotalPrice[0].innerHTML = '&#163;' + sum;
// }


function getAmount() {
	let length = price.length;
	if (length === 0) {
		bagItems[0].innerHTML = 'there are nothing to buy'
	}
	for (let i = 0 ; i < price.length; i+=1) {
		console.log(length)
	}
	return length;
}


function getAllNumbersOfPrice() {
	let length = 0;
	for (let i = 0 ; i < price.length; i+=1) {
		length += +price[i].innerHTML.slice(1);
	}
	return length.toFixed(2);
}

// function getTotalSum(arr) {
// 	if (arr.length === 0) {
// 		return false
// 	} else {
// 		let sum = arr.reduce(function(sum, i) {
// 			return sum + i;
// 		});
// 		return sum.toFixed(2);
// 	}
// }

// function toStorage(arr) {
// 	localStorage.setItem('arr',arr);
// }


console.log(arrayOfPrices);




	for (let i = 0; i < itemContainer.length; i+=1) {
		itemContainer[i].addEventListener('click', function(event) {

			if (event.target && event.target.classList.contains('bag-items__appereance-remove')) {
				event.currentTarget.parentNode.removeChild(event.currentTarget);
				total(getAllNumbersOfPrice());
			}
			if (event.target && event.target.classList.contains('plus')) {
				console.log('plus')
				let plus = increceIt(event.target.previousSibling.innerHTML);
				console.log(event.target.previousSibling)
			}
		})
	}


function increceIt(node) {
	let sum = 0;
	return function() {
		return sum + +node;
	}
}
