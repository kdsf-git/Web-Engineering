function clickCartButton() {
	const urlParams = new URLSearchParams(window.location.search);
	if(getProductById(urlParams.get("id")) == null) {
		alert("Invalid product");
		return;
	}
	addToCart(urlParams.get("id"));
}

function setValues() {
	const urlParams = new URLSearchParams(window.location.search);
	const product = getProductById(urlParams.get("id"));
	if(product == null) {
		window.location.href = "index.html";
	}
	document.getElementById("product-image").setAttribute("src", product.image);
	document.getElementById("product-image").setAttribute("alt", product.name);
	document.getElementById("product-name").appendChild(document.createTextNode(product.name));
	document.getElementById("product-price").appendChild(document.createTextNode(product.price + " EUR"));
	document.getElementById("product-description").innerHTML = product.description;
}

window.onload = setValues;