function addCategories(cats) {
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

	let catA = document.createElement("a");
	catA.setAttribute("href", "search.html?category=" + cat.name);

	catA.appendChild(catImg);
	catA.appendChild(document.createTextNode(cat.name));
	
	catDiv.appendChild(catA);
	document.getElementById("categories").appendChild(catDiv);
}