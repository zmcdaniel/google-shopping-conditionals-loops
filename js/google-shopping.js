var data = require('../products.json');

// // 1.) Go through the items and find all results that have kind of shopping#product. 
// // Print the count of these results. Where else is this count information stored in the search results?
// var count = 0;
// for (var i = 0; i < data.currentItemCount; i++) {
// 	if (data.items[i].kind === 'shopping#product') {
// 		count++;
// 	}
// }
// console.log(count);

// // 2.) Print the title all items with a backorder availability in inventories.

// for (var i = 0; i < data.currentItemCount; i++) {
// 	if (data.items[i].product.inventories[0].availability === 'backorder') {
// 		console.log(data.items[i].product.title);
// 	}
// }

// 3.) Print the title all items with more than one image link.

for (var i = 0; i < data.currentItemCount; i++) {
	if (data.items[i].product.images.length > 1) {
		console.log(data.items[i].product.title);
	}
}

//console.log(data.items);
