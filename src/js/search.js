function addProducts() {
	const parent = document.getElementById("product-list");
	const urlParams = new URLSearchParams(window.location.search);
	const products = getProducts(urlParams.get("q"), urlParams.get("category"), urlParams.get("sort"), urlParams.get("min-price"), urlParams.get("max-price"));
	for(p of products) {
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

		pDivRight.appendChild(pA2);
		pDivRight.appendChild(pDescription);
		pDivRight.appendChild(pPrice);

		pDiv.appendChild(pA1);
		pDiv.appendChild(pDivRight);

		parent.appendChild(pDiv);
	}
}

function addCategoryOptions() {
	let cats = getCategories();
	for(cat of cats) {
		let opt = document.createElement("option");
		opt.setAttribute("value", cat.name);
		opt.appendChild(document.createTextNode(cat.name));
		document.getElementById("category").appendChild(opt);
	}
}

function clickApply() {
	window.location.href = "search.html?q=" + document.getElementById("search-bar").value + "&category=" + document.getElementById("category").value + "&sort=" + document.getElementById("sort").value + "&min-price=" + document.getElementById("min-price").value + "&max-price=" + document.getElementById("max-price").value;
}

function setValues() {
	const urlParams = new URLSearchParams(document.location.search);
	document.getElementById("search-bar").value = urlParams.get("q");
	document.getElementById("category").value = urlParams.get("category");
	document.getElementById("sort").value = urlParams.get("sort");
	document.getElementById("min-price").value = urlParams.get("min-price");
	document.getElementById("max-price").value = urlParams.get("max-price");
}

window.onload = setValues;