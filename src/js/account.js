function addCountryOptions() {
	for(c of getCountries()) {
		let opt = document.createElement("option");
		opt.setAttribute("value", c.value);
		opt.appendChild(document.createTextNode(c.text));
		document.getElementById("address-country").appendChild(opt);
	}
}

function clickSave() {
	let user = {};

	let address = {};
	address.name = document.getElementById("address-name").value;
	address.streetaddress = document.getElementById("address-street").value;
	address.city = document.getElementById("address-city").value;
	address.zip = document.getElementById("address-zip").value;
	address.country = document.getElementById("address-country").value;

	user.name = document.getElementById("name").value;
	user.email = document.getElementById("email").value;
	user.address = address;

	let password = document.getElementById("password").value;

	updateUserInfo(user);
	updatePassword(password);
}

function clickLogout() {
	logout();
}

function setValues() {
	if(!checkCookie()) {
		window.location.href = "login.html";
		return;
	}
	let user = getUser();
	if(!user) {
		window.location.href = "login.html";
		return;
	}
	document.getElementById("name").value = user.name;
	document.getElementById("email").value = user.email;
	document.getElementById("address-name").value = user.address.name;
	document.getElementById("address-street").value = user.address.streetaddress;
	document.getElementById("address-city").value = user.address.city;
	document.getElementById("address-zip").value = user.address.zip;
	document.getElementById("address-country").value = user.address.country;
}

window.onload = setValues;