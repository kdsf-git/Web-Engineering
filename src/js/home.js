function addCategories(cats) {
	for(cat in cats) {
		addCategory(cat);
	}
}

function addCategory(cat) {
	let catDiv = document.createElement("div");
	catDiv.className = "category";
	let catImg = document.createElement("img");
	catImg.setAttribute("src", cat.image);
	catDiv.appendChild(catImg);
	catDiv.appendChild(document.createTextNode(cat.name));
	document.getElementById("categories").appendChild(catDiv);
}