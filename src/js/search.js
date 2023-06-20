function addProducts() {
	alert("TODO");
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
	alert("TODO");
}