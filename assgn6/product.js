//Array for all items added to cart
var all_items = [];

// Set cart total to zero 
var item_number = 0;

window.addEventListener('DOMContentLoaded', function() {
	// console.log("hello");

	cart_count = JSON.parse(window.localStorage.getItem('cart_count'));
	document.getElementById('cart_number').innerText = cart_count;


    // item1 = window.localStorage.getItem('item1');
    item1 = JSON.parse(window.localStorage.getItem('item1'));
    console.log(item1);

    // get table to display contents
	var table = document.getElementById('cart_table');
	
	// Label titles of columns
	var row1 = table.insertRow(0);
	var cell0 = row1.insertCell(0);
	let newText0 = document.createTextNode("");
	cell0.appendChild(newText0);

	var cell01 = row1.insertCell(-1);
	let newText01 = document.createTextNode("");
	cell01.appendChild(newText01);
	cell01.innerHTML = "<h3> ITEM </h3>";

	// spacing
	var cell02 = row1.insertCell(-1);
	let newText02 = document.createTextNode("");
	cell02.appendChild(newText02);

	var cell03 = row1.insertCell(-1);
	let newText03 = document.createTextNode("");
	cell03.appendChild(newText03);
	cell03.innerHTML = "<h3> QUANTITY </h3>";

	var cell04 = row1.insertCell(-1);
	let newText04 = document.createTextNode("");
	cell04.appendChild(newText04);

	var cell05 = row1.insertCell(-1);
	let newText05 = document.createTextNode("");
	cell05.appendChild(newText05);
	cell05.innerHTML = "<h3> PRICE </h3>";

	var sub_total = 0;

	// Loop through array and display items
	for (var i=0; i < item1.length; i++) {
		var row2 = table.insertRow(1);

			var cell1 = row2.insertCell(-1);
			//console.log(typeof cell1);
			var text = String(item1[i][0]);
			let newText = document.createTextNode("");
		  	cell1.appendChild(newText);
		  	//cell1.innerHTML = "<img src='images/pear.jpg' width='150px'/>";
		  	cell1.innerHTML = "<img src='" + text + "' width='150px'/>";
		  	//console.log(text);

		  	// Display Flavor & Glaze 
			var cell2 = row2.insertCell(-1);
			var flav = item1[i][1];
			var glaze = item1[i][2];
			var flav_glaze = flav + " with " + glaze;
			let newText1 = document.createTextNode("");
			cell2.appendChild(newText1);
			cell2.innerHTML = "<h4>" + flav_glaze + "</h4>" + 
							  "<div class='remove' >Remove</div>";

			// cell for spacing 				  
			var cell3 = row2.insertCell(-1);
			let newText3 = document.createTextNode("");
			cell3.appendChild(newText3);

			// Display Quantity 
			var cell4 = row2.insertCell(-1);
			var qty = item1[i][3];	
			let newText4 = document.createTextNode("");
			cell4.appendChild(newText4);
			cell4.innerHTML = "<h3>" + qty + "<h3>";

			// cell for spacing
			var cell5 = row2.insertCell(-1);
			let newText5 = document.createTextNode("");
			cell5.appendChild(newText5);

			// Display Price
			var cell6 = row2.insertCell(-1);
			var price = "$" + parseFloat(item1[i][4]);
			sub_total += parseFloat((item1[i][4]));
			let newText6 = document.createTextNode("");
			cell6.appendChild(newText6);
			cell6.innerHTML = "<h3>" + price + "</h3>";

	}


var table = document.getElementById("cart_table");
var class_count = table.getElementsByClassName("remove");
console.log(class_count);

for (var i=0; i < class_count.length; i++) {
	var ele = class_count[i]; 
	console.log(ele);
	class_count[i].addEventListener("click", function(event){ 
								//console.log(event.path[2].rowIndex);
								var index1 = event.path[2].rowIndex;
								//console.log(index1);
								event.path[2].remove();
								//alert("Removed item!");
								document.getElementById('cart_number').innerText = cart_count - 1;
								delete item1[index1];
								t1 = item1[index1-1][4];
								
								if (item1.length <= 1) {
									document.getElementById("sub_total").innerHTML = " $ 2.5";
								}

								else {
									document.getElementById("sub_total").innerHTML = " $" + (sub_total-t1);
								}


							});
		
	
}



document.getElementById("sub_total").innerHTML = " $" + sub_total;





	
});



// Function to change image when thumnails/glazes clicked 
function ChangeImage(a) {

	document.getElementById('key_image').src = a;
	//var temp = document.getElementById('thumb3').src;
	//main_image = temp;

}



// Adding to the cart total and displaying on top
function UpdateCart() {

    // get current text displaying for cart
	var cart_num = parseInt(document.getElementById('cart_number').innerText);

	// get value from quantity drop down menu
	var qty1 = document.getElementById('qty1').value;
	qty1 = parseInt(qty1);
	//console.log(qty1);

	// Add quantity selected to the total & update total
	item_number += qty1;
	cart_num = item_number;
	document.getElementById('cart_number').innerText = cart_num;
    // console.log(cart_num);
    //console.log(cart_num);

    window.localStorage.setItem('cart_count', JSON.stringify(cart_num));

}



//Get user's selection & add to local storage 
function StoreCart() {

	//get flavor 
	var flavor = document.getElementById('flavor').textContent;
	flavor = flavor.toLowerCase();
	//console.log(flavor);

	//get glaze selection 
	var glaze_list = document.forms[0].value;
	var glaze_choice = document.getElementsByName('glaze');

    var glaze;
	for (var i=0; i < (glaze_choice.length); i++) {
		if (glaze_choice[i].checked) {
			glaze = glaze_choice[i].value;
			//console.log((glaze_choice[i].value));
		}

	}

	var images = {
		none:'images/product1.jpg', 
		strawberry:'images/strawberry.jpg', 
		chocolate: 'images/choco.jpg', 
		pear:'images/pear.jpg'
	};

	//get corresponding image to glaze
	var img_source = images[glaze];
	//console.log(img_source);

	//get quantity selected
	var qty1 = document.getElementById('qty1').value;
	qty1 = parseInt(qty1);
	//console.log(qty1);

	//get price without dollar sign 
	var p1 = document.getElementById('price').textContent;
	p1 = p1.substring(1);
	p1 = parseFloat(p1);
	total_price = qty1 * p1;
	//console.log(p1);
    
    //create new item object for order
	var item = {
		img_source: img_source,
		flavor: flavor, 
		glaze: glaze,
		quantity: qty1,
		price: total_price
	}

	var item_array = [img_source, flavor, glaze, qty1, total_price];

	//console.log(item);

	all_items.push(item_array);
	//console.log(all_items);

	//var item_list = "";
	//item_list += flavor + " " + glaze + " " + qty1 + " " + p1;
	//console.log(item_list);

    window.localStorage.setItem('item1', JSON.stringify(all_items));
    item1 = window.localStorage.getItem('item1');
    console.log(item1);

}

function RemoveItem() {
	console.log("hello");
	//alert(this.index);



//$("tr").click(function(){
//  alert($(this).index());
//});



    
}







//var table = document.getElementById('cart_table');
//for (var i = 0, len = table.children.length; i < len; i++) {

    	//console.log()
        // table.children[i].onclick = function(){
        //       alert(index)  ;
        //       console.log(table.children[i]);
        // }    
    

//}

/*var table = document.getElementById('cart_table');
var class_count = table.getElementsByClassName("remove");
console.log(class_count.length);

for (var i = 0; i < class_count.length; i++) {

    (function(index){
        class_count[i].onclick = function(){
              alert(index)  ;
              //console.log(table.children[i]);
        }    
    })(i);

}*/



// function UpdateCart() {

    // get current text
	// var cart_num = parseInt(document.getElementById('cart_number').innerText);

	// Add one to the total & append 
	//item_number +=1;
	//cart_num = item_number;
	//document.getElementById('cart_number').innerText = cart_num;
    //console.log(cart_num);

//}




