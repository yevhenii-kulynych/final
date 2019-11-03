

let doc = document;

// banner click

let main = doc.getElementsByClassName('wrap');

main[0].addEventListener('click', function(e) {
	
	if (e.target.classList.contains('banner__left') || e.target.classList.contains('banner__text')) {
		location.href = 'item.html';
	}
	if (e.target.classList.contains('banner__right') || e.target.classList.contains('new-arrivals__btn-all-arricals')) {
		location.href = 'catalog.html';
	}
});


// catalog

let arrivalsSection = doc.getElementsByClassName('new-arrivals__content');
let catalogSection = doc.getElementsByClassName('catalog__inner-wrap');
let catalogInner = doc.getElementsByClassName('catalog__inner-wrap');

doc.addEventListener("DOMContentLoaded", function() {
	if (arrivalsSection[0]) {
		console.log('Arrivals here')
		let slisedCatalogForArrivals = catalogItems.slice(0,4);

		for (let i = 0 ; i < slisedCatalogForArrivals.length ; i +=1) {
			
			let wrap = createElementAndAddClass(['div','new-arrivals__item-wrapper']);
			let article = createElementAndAddClass(['article','best-offer__item']);
			let a = createElementAndAddClass(['a']);
			let imgWrap = createElementAndAddClass(['div','best-offer__item-img']);
			let img = createElementAndAddClass(['img']);
			let hover = createElementAndAddClass(['div', 'item-hover', 'Edit item']);
			let hoverText = createElementAndAddClass(['p', 'item-hover__text', 'Edit item'])
			let divForTitle = createElementAndAddClass(['div', 'best-offer__item-title']);
			let title = createElementAndAddClass(['p','best-offer__item-title-text', slisedCatalogForArrivals[i].title]);
			let divForPrice = createElementAndAddClass(['div', 'best-offer__item-price']);
			let price = createElementAndAddClass(['p', 'best-offer__item-price-text', '&#163;'+ slisedCatalogForArrivals[i].price]);

			a.href = '#';
			img.src = slisedCatalogForArrivals[i].thumbnail;
			hover.appendChild(hoverText);
			divForPrice.appendChild(price);
			divForTitle.appendChild(title)
			imgWrap.appendChild(img);
			imgWrap.appendChild(hover);
			a.appendChild(imgWrap);
			article.appendChild(a);
			article.appendChild(divForTitle);
			article.appendChild(divForPrice);

			if (slisedCatalogForArrivals[i].hasNew === true) {
				let newItem = createElementAndAddClass(['div', 'new-item']);
				newItem.innerHTML = 'New';
				article.appendChild(newItem);
			}
			
			wrap.appendChild(article);

			arrivalsSection[0].appendChild(wrap);
		}
	}
	else if (catalogSection[0]) {
		console.log('Catalog here');
	} else {
		console.log('nothing')
	}

	//создает елемент добавляет ему класс, а если это 'р' вставляю текст внутрь

	function createElementAndAddClass(arr) {
		let name = null;
		for (let i = 0; i < arr.length; i+=1) {
			if (arr[0] === 'p' && arr.length > 2) {
				name = doc.createElement(arr[0]);
				name.classList.add(arr[1]);
				name.innerHTML = arr[2];
			}
			else if (arr.length >= 2) {
				name = doc.createElement(arr[0]);
				name.classList.add(arr[1]);
			} else {
				name = doc.createElement(arr[0])
			}	
		}
		return name;
	};


	// ховер линка
	let link = doc.getElementsByClassName('item-hover__text');

	let arr = [];
	for (let i = 0; i < link.length; i+=1) {
		arr.push(link[i]);
	}

	arr.forEach( function(i) {
		i.addEventListener('click', function() {
			location.href = 'item.html';
		})
	});

});


//items это лишки в скрытых списках, которые появляются по ховеру на g 
let items = doc.getElementsByClassName('catalog-filter__hidden-li-item');


//li это блоки в которых текс и скрытые списки
let blocks = doc.getElementsByClassName('catalog-filter__drop-down-nav-blocks');

// это вместо Array.prototype.slice.call('items')
let itemsArray = [];
for (var i = 0; i < items.length; i++) {
	itemsArray.push(items[i]);
}

// это вместо Array.prototype.slice.call('li')
let blocksArray = [];
for (var i = 0; i < blocks.length; i++) {
	blocksArray.push(blocks[i]);
}


(function() {
  // проверяем поддержку
  if (!Element.prototype.matches) {

    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;

  }
})();



//пробегаюсь по всем дивам g
blocksArray.forEach(function(item) {

	//на каждый событие клик. передаю ивент
	item.addEventListener('click', function(event) {
		//если по клику ивент таргет  содержит клас .h - это кдасс скрытых лишек  
		if (event.target.matches('.catalog-filter__hidden-li-item')) {
			//прохожусь циклом по g елементам,тоесть все темже div class="g", 
			// только мне нужны их дети;

			//для IE
			let chilsdNodes = []
			for(let i = 0 ; i < item.childNodes.length; i+=1) {chilsdNodes.push(item.childNodes[i])}
			
			chilsdNodes.forEach(function(nodes) {
				//если это узел ELEMENT_NODE
				if (nodes.nodeType === 1) {
					//если нода содержит ребетка с классом j
					if (nodes.classList.contains('catalog-filter__selected-from-drop-down')) {
						//циклом по всем скрытым лишкам
						for (let i = 0; i < itemsArray.length; i+=1) {
							//если евент таргет равен лишке
							if (event.target.innerHTML === itemsArray[i].innerHTML) {
								//добавляю в уже соззанный нод p class="j" innetHTML 
								nodes.innerHTML  = itemsArray[i].innerHTML;
							}
						}
					}
				}
			})
		}
	})
})
