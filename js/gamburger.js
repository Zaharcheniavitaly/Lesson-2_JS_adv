'use strict';

class Hamburger {
	constructor(size, stuffing) {
		this.size = size;
		this.stuffing = stuffing;
	}
	addTopping(topping) { } // Добавить добавку
	removeTopping(topping) { }  // Убрать добавку
	getToppings(topping) { }   // Получить список добавок 
	getSize() { }   // Узнать размер гамбургера 
	getStuffing() { }   // Узнать начинку гамбургера 
	calculatePrice() { }  // Узнать цену 
	calculateCalories() { }  // Узнать калорийность 
}



class Ingredient {
	constructor(category, name, price, kkal) {
		this.category = category; // 0- размер, 1 - начинка, 2 - внешняя добавка
		this.name = name; // Название
		this.price = price; // Цена
		this.kkal = kkal; // Калорийность
	}
}