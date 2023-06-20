function submitSearch(event) {
	event.preventDefault();
	window.location.href = "search.html?q=" + document.getElementById("search-bar").value;
}

function clickAccount() {
	alert("TODO");
	window.location.href = "account.html";
}