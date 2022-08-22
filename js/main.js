const products = [
	{
		id: 1,
		title: 'Notebook',
		img: 'https://i.ibb.co/KGhr6FQ/notebook.jpg',
		price: 2000
	},
	{
		id: 2,
		title: 'Mouse',
		img: 'https://i.ibb.co/jh6d9Ds/mouse.jpg',
		price: 20
	},
	{
		id: 3,
		title: 'Keyboard',
		img: 'https://i.ibb.co/vHL3Ydv/klaviatura.jpg',
		price: 200
	},
	{
		id: 4,
		title: 'Gamepad',
		img: 'https://i.ibb.co/09GSdXZ/gamepad.jpg',
		price: 50
	},
	{
		id: 5,
		title: 'Monitor',
		img: 'https://i.ibb.co/Sd4Z07m/monitor.jpg',
		price: 1600
	},
	{
		id: 6,
		title: 'System unit',
		img: 'https://i.ibb.co/Z19mKm7/syst-unit.jpg',
		price: 1900
	},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (obj) => {
	return `<div class="product-item">
                <h3 class="product-title">${obj.title}</h3>
					 <img class="product-img" src="${obj.img} alt="${obj.title}">
                <p class="product-price">${obj.price.toLocaleString()} $</p>
                <button data-productid="${obj}" class="product__buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
	const productsList = list.map(item => renderProduct(item));
	//console.log(productsList);
	document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);


