function addCategories() {
	let cats = getCategories();
	for(cat of cats) {
		addCategory(cat);
	}
}

function addCategory(cat) {
	let catDiv = document.createElement("div");
	catDiv.setAttribute("class", "category-button");

	let catImg = document.createElement("img");
	catImg.setAttribute("src", cat.image);
	catImg.setAttribute("alt", cat.name);
	
	catDiv.appendChild(catImg);
	document.getElementById("categories").appendChild(catDiv);
}