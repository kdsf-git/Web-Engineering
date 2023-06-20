function clickLogin() {
	login(document.getElementById("email").value, document.getElementById("password").value);
}

function clickSignUp() {
	signup(document.getElementById("email").value, document.getElementById("password").value);
}

if(checkCookie()) {
	window.location.href = "account.html";
}