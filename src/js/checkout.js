function addPaymentOptions() {
	for(p of getPaymentOptions()) {
		let radio = document.createElement("input");
		radio.setAttribute("type", "radio");
		radio.setAttribute("name", "payment-option");
		radio.setAttribute("value", p.value);

		document.getElementById("radio-group").appendChild(radio);
		document.getElementById("radio-group").appendChild(document.createTextNode(p.text));
	}
	document.getElementsByName("payment-option")[0].checked = true;
}

function addCountryOptions() {
	for(c of getCountries()) {
		let opt = document.createElement("option");
		opt.setAttribute("value", c.value);
		opt.appendChild(document.createTextNode(c.text));
		document.getElementById("country").appendChild(opt);
	}
}

function getSelectedPaymentOption() {
	for(p of document.getElementsByName("payment-option")) {
		if(p.checked) {
			return p.value;
		}
	}
	return "";
}

function clickConfirm() {
	confirmOrder(document.getElementById("name").value, document.getElementById("street").value, document.getElementById("city").value, document.getElementById("zip").value, document.getElementById("country").value, getSelectedPaymentOption());
}

function setValues() {
	let u = getUser();
	let t = getCartTotal();
	if(!u) {
		window.location.href = "login.html";
		return;
	}
	if(getCartContents().length == 0) {
		window.location.href = "cart.html";
		return;
	}
	let a = u.address;

	document.getElementById("name").value = a.name;
	document.getElementById("street").value = a.streetaddress;
	document.getElementById("city").value = a.city;
	document.getElementById("zip").value = a.zip;
	document.getElementById("country").value = a.country;

	document.getElementById("total").appendChild(document.createTextNode(t + " EUR"));
}

window.onload = setValues;