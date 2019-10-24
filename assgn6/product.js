

// Function to change image when thumnails/glazes clicked 
function ChangeImage(a) {

	document.getElementById('key_image').src = a;
	//var temp = document.getElementById('thumb3').src;
	//main_image = temp;

}

// Set cart total to zero 
var item_number = 0;

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
    console.log(cart_num);

}

// function UpdateCart() {

    // get current text
	// var cart_num = parseInt(document.getElementById('cart_number').innerText);

	// Add one to the total & append 
	//item_number +=1;
	//cart_num = item_number;
	//document.getElementById('cart_number').innerText = cart_num;
    //console.log(cart_num);

//}
