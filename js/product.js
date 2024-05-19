let productsList = [
	{
		url: 'image/product1.png',
		name: 'Смартфон Xiaomi Poco X3 Pro 128Gb 6Gb блакитний',
		art: '1514353',
		price: '7239 грн',
	},
	{
		url: 'image/product2.jpg',
		name: 'Гарнітура вкладиші Digma білий',
		art: '1514353',
		price: '399 грн',
	},
	{
		url: 'image/product3.jpg',
		name: 'Смарт-годинник Jet Kid Pinkie Pie рожевий',
		art: '1514353',
		price: '1795 грн',
	},
	{
		url: 'image/product4.jpg',
		name: 'Планшет Apple iPad Air 2020 MYH42RU/A A14',
		art: '1514353',
		price: '19999 грн',
	},
	{
		url: 'image/product1.png',
		name: 'Смартфон Xiaomi Poco X3 Pro 128Gb 6Gb блакитний',
		art: '1514353',
		price: '7239 грн',
	},
	{
		url: 'image/product2.jpg',
		name: 'Гарнітура вкладиші Digma білий ',
		art: '1514353',
		price: '399 грн',
	},
	{
		url: 'image/product3.jpg',
		name: 'Смарт-годинник Jet Kid Pinkie Pie рожевий',
		art: '1514353',
		price: '1795 грн',
	},
	{
		url: 'image/product4.jpg',
		name: 'Планшет Apple iPad Air 2020 MYH42RU/A A14',
		art: '1514353',
		price: '19999 грн',
	},
	{
		url: 'image/product1.png',
		name: 'Смартфон Xiaomi Poco X3 Pro 128Gb 6Gb блакитний',
		art: '1514353',
		price: '7239 грн',
	},
	{
		url: 'image/product2.jpg',
		name: 'Гарнітура вкладиші Digma білий ',
		art: '1514353',
		price: '399 грн',
	},
	{
		url: 'image/product3.jpg',
		name: 'Смарт-годинник Jet Kid Pinkie Pie рожевий',
		art: '1514353',
		price: '1795 грн',
	},
	{
		url: 'image/product4.jpg',
		name: 'Планшет Apple iPad Air 2020 MYH42RU/A A14',
		art: '1514353',
		price: '19999 грн',
	},
	{
		url: 'image/product1.png',
		name: 'Смартфон Xiaomi Poco X3 Pro 128Gb 6Gb блакитний',
		art: '1514353',
		price: '7239 грн',
	},
	{
		url: 'image/product2.jpg',
		name: 'Гарнітура вкладиші Digma білий',
		art: '1514353',
		price: '399 грн',
	},
	{
		url: 'image/product3.jpg',
		name: 'Смарт-годинник Jet Kid Pinkie Pie рожевий',
		art: '1514353',
		price: '1795 грн',
	},
	{
		url: 'image/product4.jpg',
		name: 'Планшет Apple iPad Air 2020 MYH42RU/A A14',
		art: '1514353',
		price: '19999 грн',
	},
	{
		url: 'image/product1.png',
		name: 'Смартфон Xiaomi Poco X3 Pro 128Gb 6Gb блакитний',
		art: '1514353',
		price: '7239 грн',
	},
	{
		url: 'image/product2.jpg',
		name: 'Гарнітура вкладиші Digma білий ',
		art: '1514353',
		price: '399 грн',
	},
	{
		url: 'image/product3.jpg',
		name: 'Смарт-годинник Jet Kid Pinkie Pie рожевий',
		art: '1514353',
		price: '1795 грн',
	},
	{
		url: 'image/product4.jpg',
		name: 'Планшет Apple iPad Air 2020 MYH42RU/A A14',
		art: '1514353',
		price: '19999 грн',
	},
	{
		url: 'image/product1.png',
		name: 'Смартфон Xiaomi Poco X3 Pro 128Gb 6Gb блакитний',
		art: '1514353',
		price: '7239 грн',
	},
	{
		url: 'image/product2.jpg',
		name: 'Гарнітура вкладиші Digma білий ',
		art: '1514353',
		price: '399 грн',
	},
	{
		url: 'image/product3.jpg',
		name: 'Смарт-годинник Jet Kid Pinkie Pie рожевий',
		art: '1514353',
		price: '1795 грн',
	},
	{
		url: 'image/product4.jpg',
		name: 'Планшет Apple iPad Air 2020 MYH42RU/A A14',
		art: '1514353',
		price: '19999 грн',
	},
]

let productCard = document.querySelector('.top__catalog-body-cards')

let listFor = productsList.map(function(item){
  productCard.innerHTML += `
    <div class="top__catalog-body-cart">
									<img
										src="${item.url}"
										alt=""
										class="top__catalog-body-cart-img"
									/>
									<h3 class="top__catalog-body-cart-title">
										${item.name}
									</h3>
									<p class="top__catalog-body-cart-text">Артикул: ${item.art}</p>

									<p class="top__catalog-body-cart-text">
										У наявності / На складі
									</p>
									<p class="top__catalog-body-cart-price">${item.price}</p>
									<button class="top__catalog-body-cart-btn">
										<img
											src="image/iconBask.svg"
											alt=""
											class="top__catalog-body-cart-btn-img"
										/>

										В кошик
									</button>
								</div>
  `
})
