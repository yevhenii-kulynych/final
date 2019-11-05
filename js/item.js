
//обращаюсь к элементам
let content = doc.getElementsByClassName('item-content__right-describe');
let liSize  = doc.getElementsByClassName('item-content__appearance-li-size');
let liColor = doc.getElementsByClassName('item-content__appearance-li-color');

// это вместо Array.prototype.slice.call('...')
let arrayOfLiSize = [];
for (let i = 0; i < liSize.length; i+=1) {
	arrayOfLiSize.push(liSize[i])
}
let arrayOfLiColor =[];
for (let i = 0; i < liColor.length; i+=1) {
	arrayOfLiColor.push(liColor[i])
}

//по клику отслеживаю что за элемент(имееет ли его родитель класс которым мне нужен)
//и пробегаюсь по существующим елементам в поисках класса active
//если он есть удаляю, и добавляю если нет
content[0].addEventListener('click', function(event) {
	
	if (event.target.parentNode.classList.contains('item-content__appearance-li-size')) {
		for (let i = 0; i < arrayOfLiSize.length; i+=1) {
			if (arrayOfLiSize[i].classList.contains('active')) {
				arrayOfLiSize[i].classList.remove('active');
				event.target.parentNode.classList.add('active');
			}
		}
	}
	if (event.target.parentNode.classList.contains('item-content__appearance-li-color')) {
		for (let i = 0; i < arrayOfLiColor.length; i+=1) {
			if (arrayOfLiColor[i].classList.contains('active')) {
				arrayOfLiColor[i].classList.remove('active');
				event.target.parentNode.classList.add('active');
			}
		}
	}
})


//просто для отображения
getLocal();
getLocalPrice();





//попытки замены картинок с мужиком во вкладке item.html

let imgContaiterPreview = doc.getElementsByClassName('item-content__small-preview-container');

//big img
let bigImage = doc.getElementsByClassName('item-content__big-preview-img');



imgContaiterPreview[0].addEventListener('click', function(event) {
	if (event.target && event.target.nodeName === 'IMG') {
		
		for (let i = 0; i < catalogItems.length; i+=1) {
			if (event.currentTarget.dataset.id === catalogItems[i].id) {
					if(event.target.dataset.name === 'img01') {
						bigImage[0].src = catalogItems[i].preview[0];
					}
					if(event.target.dataset.name === 'img02') {
						bigImage[0].src = catalogItems[i].preview[1];
					}
					if(event.target.dataset.name === 'img03') {
						bigImage[0].src = catalogItems[i].preview[2];
					}
			}
		}
	}
})





console.log(localStorageArray)


let addButton = doc.getElementsByClassName('item-content__add');



addButton[0].addEventListener('click', function() {

	for (let i = 0; i < catalogItems.length; i+=1) {
		if (this.dataset.id === catalogItems[i].id) {
				console.log(catalogItems[i]);
				localStorage.setItem('80d32566-d81c-4ba0-9edf-0eceda3b4360', JSON.stringify(catalogItems[i]));
				localStorageArray.push({id: catalogItems[i].id, price: catalogItems[i].discountedPrice});
				//просто для отображения
				console.log(localStorageArray)
				localStorage.setItem('item', JSON.stringify(localStorageArray));
				getLocal();
				getLocalPrice();
		}
	}		
})



















