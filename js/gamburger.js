'use strict';

class Param {
	constructor(element) {
		this.name = element.value;
		this.price = +element.dataset['price'];
		this.calories = +element.dataset['calories'];
	}
}

class Hamburger {
	constructor(size, add, topping) {
		this.size = new Param(this._select(size));
		this.add = new Param(this._select(add));
		this.toppings = this._getToppings(topping);
	}


	_getToppings(name) {    // Получить список добавок  
		let result = [];
		this._selectAll(name).forEach(el => {
			let obj = new Param(el);
			result.push(obj);
		});
		return result;
	}

	_select(name) {
		return document.querySelector(`input[name=${name}]:checked`);
	}

	_selectAll(name) {
		return [...document.querySelectorAll(`input[name=${name}]:checked`)]; // ... это распаковка, чтобы вернуть коллекцию как массив. Можно здесь убрать forEach будет работать и так
	}

	_sumPrice() {
		console.log(this.toppings);
		let result = this.size.price + this.add.price;
		this.toppings.forEach(el => result += el.price);
		return result;
	}

	_sumCalories() {
		let result = this.size.calories + this.add.calories;
		this.toppings.forEach(el => result += el.calories);
		return result;
	}

	showSum(price, calories) {
		document.querySelector(price).textContent = this._sumPrice();
		document.querySelector(calories).textContent = this._sumCalories();
	}

}







