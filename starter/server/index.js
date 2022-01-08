const express = require('express');
const app = express();

const PRODUCTS = [
	{
		id: 'aaa111',
		url: 'https://picsum.photos/id/1008/400/300',
		name: 'Comfy Couch',
		price: 39900,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a? Suscipit exercitationem omnis provident et eveniet ipsum doloremque voluptatum perspiciatis?',
		stock: 9,
		available: true,
		company: 'IKEA',
		stars: 4,
		reviews: 105,
	},
	{
		id: 'bbb111',
		url: 'https://picsum.photos/id/1068/400/300',
		name: 'Steelblue Table',
		price: 17000,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 13,
		available: true,
		company: 'ABC',
		stars: 5,
		reviews: 32,
	},
	{
		id: 'ccc111',
		url: 'https://picsum.photos/id/163/400/300',
		name: 'Wooden Table',
		price: 8000,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 25,
		available: true,
		company: 'ACraft',
		stars: 3,
		reviews: 16,
	},
	{
		id: 'ddd111',
		url: 'https://picsum.photos/id/201/400/300',
		name: 'Study Table',
		price: 25000,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 120,
		available: true,
		company: 'VintAGE',
		stars: 3.75,
		reviews: 340,
	},
	{
		id: 'eee111',
		url: 'https://picsum.photos/id/225/400/300',
		name: 'Marble VQ',
		price: 40000,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 5,
		available: true,
		company: 'VQ',
		stars: 3,
		reviews: 16,
	},
	{
		id: 'fff111',
		url: 'https://picsum.photos/id/163/400/300',
		name: 'Mock 6',
		price: 2500,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 0,
		available: false,
		company: 'Gander',
		stars: 2,
		reviews: 40,
	},
	{
		id: 'ggg111',
		url: 'https://picsum.photos/id/326/400/300',
		name: 'Martin Beige',
		price: 8000,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 450,
		available: true,
		company: 'UBASIC',
		stars: 3,
		reviews: 100,
	},
	{
		id: 'hhh111',
		url: 'https://picsum.photos/id/366/400/300',
		name: 'Steel Grey',
		price: 7500,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 0,
		available: false,
		company: 'ZLander',
		stars: 4.5,
		reviews: 455,
	},
	{
		id: 'jjj111',
		url: 'https://picsum.photos/id/42/400/300',
		name: 'Mock 9',
		price: 1100,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 450,
		available: true,
		company: 'Goober',
		stars: 2.5,
		reviews: 21,
	},
	{
		id: 'kkk111',
		url: 'https://picsum.photos/id/445/400/300',
		name: 'Mock 10',
		price: 9900,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 250,
		available: true,
		company: 'Nuendo',
		stars: 5,
		reviews: 315,
	},
	{
		id: 'lll111',
		url: 'https://picsum.photos/id/513/400/300',
		name: 'Mock 11',
		price: 7800,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 0,
		available: false,
		company: 'ACraft',
		stars: 4,
		reviews: 66,
	},
	{
		id: 'mmm111',
		url: 'https://picsum.photos/id/526/400/300',
		name: 'Mock 12',
		price: 150000,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 8,
		available: true,
		company: 'CosmoFurniture',
		stars: 4,
		reviews: 7,
	},
	{
		id: 'nnn111',
		url: 'https://picsum.photos/id/527/400/300',
		name: 'Mock 13',
		price: 5500,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 2,
		available: true,
		company: 'NeetR',
		stars: 5,
		reviews: 83,
	},
	{
		id: 'ooo111',
		url: 'https://picsum.photos/id/528/400/300',
		name: 'Mock 14',
		price: 11200,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 25,
		available: false,
		company: 'SleekB',
		stars: 1,
		reviews: 5,
	},
	{
		id: 'ppp111',
		url: 'https://picsum.photos/id/534/400/300',
		name: 'Mock 15',
		price: 9300,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 4,
		available: true,
		company: 'ACraft',
		stars: 4,
		reviews: 25,
	},
	{
		id: 'qqq111',
		url: 'https://picsum.photos/id/531/400/300',
		name: 'Mock 16',
		price: 1500,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae facilis dignissimos distinctio hic quae reprehenderit iure nam tempora corrupti incidunt laboriosam molestiae consequatur molestias minus neque, provident expedita, nihil ducimus eius animi! Aperiam quod, in exercitationem aliquam inventore a?',
		stock: 0,
		available: false,
		company: 'BCosmetics',
		stars: 2,
		reviews: 11,
	},
];

const cart = [];
const placed_orders = [];

const auth = {
	user: { email: 'testuser@gmail.com', password: 'test123' },
	admin: { email: 'testadmin@gmail.com', password: 'admin123' },
};

app.get('/products', (req, res) => {
	res.json({ products });
});

app.listen(5000, () => console.log('listening on port:5000'));

// endpoints

// -> get all products (products page)

// -> get single product w/ ID

// -> post to cart (add item to cart)

// -> delete from cart (remove item from cart)

// -> patch cart (toggle amount)

// -> get cart

// -> post checkout
