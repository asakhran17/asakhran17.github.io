

// Function to change image when thumnails/glazes clicked 
function ChangeImage(a) {

	document.getElementById('key_image').src = a;
	// var temp = document.getElementById('thumb3').src;
	// main_image = temp;

}

// Set cart total to zero 
var item_number = 0;

function UpdateCart() {

    // get current text
	var cart_num = parseInt(document.getElementById('cart_number').innerText);

	// Add one to the total & append 
	item_number +=1;
	cart_num = item_number;
	document.getElementById('cart_number').innerText = cart_num;
    console.log(cart_num);

}

