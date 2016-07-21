var data = require('../products.json');
var productCount = data.items.length;

var count = 0;
for (var i = 0; i < productCount; i++) {
	if (data.items[i].kind === 'shopping#product') {
		count++;
	}
}
console.log('\n1. Total items: ' + count);

console.log('\n2. Backordered items: ');
for (var i = 0; i < productCount; i++) {
	if (data.items[i].product.inventories[0].availability === 'backorder') {
		console.log(data.items[i].product.title);
	}
}

console.log('\n3. Items with more than 1 image: ');
for (var i = 0; i < productCount; i++) {
	if (data.items[i].product.images.length > 1) {
		console.log(data.items[i].product.title);
	}
}

console.log('\n4. All \'Canon\' products: ');
for (var i = 0; i < productCount; i++) {
	if (data.items[i].product.brand === 'Canon') {
		console.log(data.items[i].product.title);
	}
}

console.log('\n5. All \'Canon\' brand products with an author of \'eBay\': ');
for (var i = 0; i < productCount; i++) {
 	if (data.items[i].product.brand === 'Canon' && data.items[i].product.author.name.includes('eBay')) {
 		console.log(data.items[i].product.title);
 	}
}

console.log('\n6. All products: ');
for (var i = 0; i < productCount; i++) {
	console.log(
		'Title: ' + data.items[i].product.title +
		'\nBrand: ' + data.items[i].product.brand +
		'\nPrice: $' + data.items[i].product.inventories[0].price +
		'\nImage: ' + data.items[i].product.images[0].link +
		'\n'
		)
}


//console.log(data.items);
