function submitSearch(event) {
	event.preventDefault();
	window.location.href = "search.html?q=" + document.getElementById("search-bar").value;
}