function addProducts() {
	const parent = document.getElementById("product-list");
	const pIds = getCartContents();
	for(pId of pIds) {
		let product = getProductById(pId);
		let pDiv = document.createElement("div");
		pDiv.setAttribute("class", "product");

		let pA1 = document.createElement("a");
		pA1.setAttribute("href", "product.html?id=" + p.id);

		let pImg = document.createElement("img");
		pImg.setAttribute("src", p.image);
		pImg.setAttribute("alt", p.name);

		let pDivRight = document.createElement("div");
		let pA2 = document.createElement("a");
		pA2.setAttribute("href", "product.html?id=" + p.id);
		let pName = document.createElement("h3");
		pName.appendChild(document.createTextNode(p.name));
		let pDescription = document.createElement("p");
		pDescription.innerHTML = p.description;
		let pPrice = document.createElement("p");
		pPrice.appendChild(document.createTextNode(p.price + " EUR"));

		pA1.appendChild(pImg);
		pA2.appendChild(pName);

		let pButton = document.createElement("button");
		pButton.setAttribute("class", "remove-button");
		pButton.setAttribute("onclick", "clickRemove(" + p.id + ")");
		pButton.appendChild(document.createTextNode("Remove"));

		pDivRight.appendChild(pA2);
		pDivRight.appendChild(pDescription);
		pDivRight.appendChild(pPrice);
		pDivRight.appendChild(pButton);

		pDiv.appendChild(pA1);
		pDiv.appendChild(pDivRight);

		parent.appendChild(pDiv);
	}
}

function clickCheckout() {
	checkout();
}

function clickRemove(id) {
	removeProductFromCart(id);
	window.location.reload();
}

function setValues() {
	if(!checkCookie()) {
		window.location.href = "login.html";
		return;
	}
	const pIds = getCartContents();
	if(!pIds) {
		window.location.href = "login.html";
		return;
	}
	let sum = 0;
	for(pId of pIds) {
		const p = getProductById(pId);
		if(p) {
			sum += p.price;
		}
	}
	document.getElementById("item").appendChild(document.createTextNode(sum + " EUR"));
	document.getElementById("shipping").appendChild(document.createTextNode(getShippingCost() + " EUR"));
	document.getElementById("total").appendChild(document.createTextNode(sum + getShippingCost() + " EUR"));
}

window.onload = setValues;