'use strict';


class BasketList {
	constructor(container = '.basket') {

		this.container = container;

		this.basket = [];

		this.render();


		// this.deleteProduct();

		// this.addProduct();

		// this.changeProduct();

		//	this.calcuTotalPrice();
	}

	fetchProducts() {

		this.basket = [
			{
				title: 'Notebook',
				price: 2000
			},
			{
				title: 'Mouse',
				price: 20
			},
			{
				title: 'Keyboard',
				price: 200
			},
			{
				title: 'Gamepad',
				price: 50
			},
			{
				title: 'Monitor',
				price: 1600
			},
			{
				title: 'System unit',
				price: 1900
			},
		];
	}

	render() {
		const block = document.querySelector(this.container);
		for (let product of this.basket) {
			const item = new BasketItem(product);
			block.insertAdjacentHTML("beforeend", item.render());
		}
	}

	// addProduct() {

	// }


	// deleteProduct() {

	// }
	// 	changeProduct() {
	// }



	// calcuTotalPrice() {

	// }

}


class BasketItem extends ProductItem {
	constructor(product) {
		super(product);
	}

	render() {

		return `
	
			<div class="basketRow basketHeader">
				<p>${this.title}</p>
				<p>${this.price} $</p>
	 		</div>
			`
	}

}

const basket = new BasketList();







