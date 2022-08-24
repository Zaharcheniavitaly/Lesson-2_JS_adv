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
	constructor(id, category, name, price, kkal) {
		this.id = id; // id 
		this.category = category; // 0- размер, 1 - начинка, 2 - внешняя добавка
		this.name = name; // Название
		this.price = price; // Цена
		this.kkal = kkal; // Калорийность
	}
}








let ingredients = [
	new Ingredient(1, 0, "Маленький гамбургер", 50, 20),
	new Ingredient(2, 0, "Большой гамбургер", 100, 40),
	new Ingredient(3, 1, "сыр", 10, 20),
	new Ingredient(4, 1, "салат", 20, 5),
	new Ingredient(5, 1, "картофель", 15, 10),
	new Ingredient(6, 2, "приправа", 15, 0),
	new Ingredient(7, 2, "майонез", 20, 5),
];