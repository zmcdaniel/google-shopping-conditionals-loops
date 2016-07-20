var data = require('../products.json');
var productCount = data.items.length;

// // 1.) Go through the items and find all results that have kind of shopping#product. 
// // Print the count of these results. Where else is this count information stored in the search results?
var count = 0;
for (var i = 0; i < productCount; i++) {
	if (data.items[i].kind === 'shopping#product') {
		count++;
	}
}
console.log('\n1. Total items: ' + count);

// // 2.) Print the title all items with a backorder availability in inventories.
console.log('\n2. Backordered items: ');
for (var i = 0; i < productCount; i++) {
	if (data.items[i].product.inventories[0].availability === 'backorder') {
		console.log(data.items[i].product.title);
	}
}

// // 3.) Print the title all items with more than one image link.
console.log('\n3. Items with more than 1 image: ');
for (var i = 0; i < productCount; i++) {
	if (data.items[i].product.images.length > 1) {
		console.log(data.items[i].product.title);
	}
}

// // 4.) Print all "Canon" products in the items (careful with case sensitivity).
console.log('\n4. All \'Canon\' products: ');
for (var i = 0; i < productCount; i++) {
	if (data.items[i].product.brand === 'Canon') {
		console.log(data.items[i].product.title);
	}
}

// 5.) Print all items that have an author name of "eBay" and are brand "Canon".
console.log('\n5. All \'Canon\' brand products with an author of \'eBay\': ');
for (var i = 0; i < productCount; i++) {
 	if (data.items[i].product.brand === 'Canon' && data.items[i].product.author.name.includes('eBay')) {
 		console.log(data.items[i].product.title);
 	}
}

// 6.) Print all the products with their brand, price, and an image link
console.log('\n5. All products: ');


//console.log(data.items);
