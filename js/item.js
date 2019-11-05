
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