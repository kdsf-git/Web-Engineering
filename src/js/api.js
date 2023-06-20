function getCategories() {
	return mockCategories;
}

function getProducts(query, category, sort, min_price, max_price) {
	let products = [];
	if(category == "all") {
		for(c of mockCategories) {
			products = products.concat(c.products);
		}
	} else {
		for(c of mockCategories) {
			if(c.name == category) {
				products = c.products;
				break;
			}
		}
	}
	for(let i = 0; i < products.length; i++) {
		let text = products[i].name + products[i].description;
		text = text.toLowerCase();
		if(!text.includes(query) || products[i].price < min_price || (max_price != 0 && products[i].price > max_price)) {
			products.splice(i, 1);
			i--;
			continue;
		}
	}
	products.sort((a, b) => compareProducts(a, b, sort));
	return products;
}

function getProductById(id) {
	for(c of mockCategories) {
		for(p of c.products) {
			if(p.id == id) {
				return p;
			}
		}
	}
}

function compareProducts(a, b, sort) {
	switch(sort) {
		case "price-lowest-first":
			if(a.price < b.price) {
				return -1;
			}
			if(a.price > b.price) {
				return 1;
			}
			return 0;
		case "price-highest-first":
			if(a.price > b.price) {
				return -1;
			}
			if(a.price < b.price) {
				return 1;
			}
			return 0;
	}
}

function addToCart() {
	alert("TODO");
	//alert("Added to cart");
}

function login(email, password) {
	mockUsers = JSON.parse(localStorage.mockUsers);
	for(u of mockUsers) {
		if(u.email == email) {
			if(u.password == password) {
				const session = crypto.randumUUID();
				document.cookie = "session=" + session + "; Path=/;"
				u.session = session;
				localStorage.mockUsers = JSON.stringify(mockUsers);
				window.location.href = "index.html";
				return;
			} else {
				break;
			}
		}
	}
	alert("Invalid credentials");
}

function signup(email, password) {
	mockUsers = JSON.parse(localStorage.mockUsers);
	if(password == "") {
		alert("Password cannot be empty");
		return;
	}
	for(u of mockUsers) {
		if(u.email == email) {
			alert("Email already in use");
			return;
		}
	}
	let newUser = {};
	newUser.id = JSON.parse(localStorage.mockUsers).length;
	newUser.name = "";
	newUser.password = password;
	newUser.email = email;
	newUser.session = crypto.randomUUID();
	let newAddress = {};
	newAddress.name = "";
	newAddress.streetaddress = "";
	newAddress.city = "";
	newAddress.zip = "";
	newAddress.country = "belgium";
	newUser.address = newAddress;
	newUser.cart = [];
	let session = crypto.randomUUID();
	document.cookie = "session=" + session + "; Path=/;"
	newUser.session = session;
	mockUsers.push(newUser);
	localStorage.mockUsers = JSON.stringify(mockUsers);
	window.location.href = "account.html";
}

function checkCookie() {
	mockUsers = JSON.parse(localStorage.mockUsers);
	for(u of mockUsers) {
		if(u.session = getCookie("session")) {
			return true;
		}
	}
	return false;
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

let mockUsers = [
	{
		id:0,
		name:"John Doe",
		password:"1234",
		email:"j.doe@example.com",
		session:null,
		address:{
				name:"John Doe",
				streetaddress:"Nowhere Ave. 42",
				city:"Nonetown",
				zip:"01234",
				country:"belgium",
			},
		cart:[]
	}
];

const mockCountries = [
	{
		value:"germany",
		text:"Germany"
	},
	{
		value:"belgium",
		text:"Belgium"
	},
	{
		value:"poland",
		text:"Poland"
	},
	{
		value:"uk",
		text:"United Kingdom"
	}
]

const mockCategories = [
	{
		name:"Apple",
		image:"images/categories/Apple.jpg",
		products:
[
{
id:0,
price:899.00,
name:"Apple iPhone 13",
image:"images/products/Apple_iPhone_13.jpg",
brand:"Apple",
model:"iPhone 13",
os:"iOS 15",
storage:"128 GB",

description:"6.1 inch Super Retina XDR Display<br>Cinema mode automatically adds low depth of field and shifts focus into your videos<br>Advanced two-camera system with 12 MP wide angle and ultra-wide-angle lenses; Photographic Styles, Smart HDR 4, Night Mode, 4K HDR shooting with Dolby Vision<br>12 MP TrueDepth Front Camera with Night Mode, 4K HDR Recording with Dolby Vision<br>A15 Bionic Chip for super fast performance<br>Up to 19 hours Video reproduction<br>Robust design with Ceramic Shield"
},
{
id:1,
price:1299.00,
name:"Apple iPhone 14 Pro",
image:"images/products/Apple_iPhone_14_Pro.jpg",
brand:"Apple",
model:"iPhone 14 Pro",
os:"iOS 16",
storage:"128 GB",

description:"6.1 inch Super Retina XDR display with Always On and ProMotion<br>Dynamic Island, a magical new way to interact with the iPhone<br>48 MP main camera for up to 4x higher resolution<br>Cinema Mode now in 4K Dolby Vision with up to 30 fps<br>Action mode for smooth, free filmed videos<br>An important safety feature – accident detection, calls help if you can't<br>Battery life for the whole day and up to 23 hours of video playback"
},
{
id:2,
price:1449.00,
name:"Apple iPhone 14 Pro Max",
image:"images/products/Apple_iPhone_14_Pro_Max.jpg",
brand:"Apple",
model:"iPhone 14 Pro Max",
os:"iOS 16",
storage:"128 GB",
colour:"Space Black",

description:"6.7 inch Super Retina XDR Display with Always On and ProMotion<br>Dynamic Island, a magical new way to interact with the iPhone<br>48 MP main camera for up to 4x higher resolution<br>Cinema Mode now in 4K Dolby Vision with up to 30 fps<br>Action mode for smooth, free filmed videos<br>An important safety feature – accident detection, calls help if you can't<br>Battery life for the whole day and up to 29 hours of video playback"
}
]
	},
	{
		name:"Samsung",
		image:"images/categories/Samsung.jpg",
		products:
[
{
id:3,
price:1579.00,
name:"Samsung Galaxy S23 Ultra",
image:"images/products/Samsung_Galaxy_S23_Ultra.jpg",
brand:"Samsung",
model:"Samsung Galaxy S23 Ultra",
os:"Android 13.0",
ram:"12 GB",
storage:"512 GB",

description:"Free warranty extension to 3 years<br>The typically symmetrical design of the Galaxy Ultra consists partly of partially recycled materials.1 From partially<br> recycled glass to the colour of the polished metal frame – of course in its beautiful shape. <br>The S Pen is today's writing instrument: creating sketches and memos quickly, without paper.<br>Hot photos and videos at any time of day, whether dawn or sunset. The most advanced camera sensor and fastest processor<br> in a Galaxy smartphone can reduce noise and the camera lens scattered light.<br>We have almost doubled the resolution of the wide-angle camera.7 Zoom into the photo and cut it to discover other <br>perspectives, or leave the shot as it is to preserve brilliant details.<br>Enjoy freedom with the most powerful processor ever installed in a Galaxy smartphone. Customized functions for gaming or<br> streaming – without burdening the battery."
}
]
	},
	{
		name:"Sony",
		image:"images/categories/Sony.jpg",
		products:
[
{
id:4,
price:649.00,
name:"Sony Xperia 5",
image:"images/products/Sony_Xperia_5.jpg",
brand:"Sony",
model:"XQBQ52C2B.YD",
os:"Android 12.0",
storage:"128 GB",
ram:"8 GB",
colour:"Black",

description:"Real-time eye autofocus for humans and animals as well as other innovative technologies from Alpha cameras.<br>The 6.1 inch 21:9 CinemaWide FHD+ HDR OLED display is perfect for film lovers.<br>Incredible AF speed and 4 versatile lenses for up to 105mm.<br>The 120 Hz image frequency rate and the 240 Hz touch scanning rate ensure strong gaming performance<br>Compact design and powerful with a reliable 4,500 mAh battery and 5G technology."
},
{
id:5,
price:399.00,
name:"Sony Xperia 10 IV",
image:"images/products/Sony_Xperia_10_IV.jpg",
brand:"Sony",
model:"XQCC54C0B.YD",
os:"Android 12.0",
storage:"128 GB",
ram:"6 GB",
colour:"black",

description:"The Xperia 10 IV combines a large, powerful battery with a lightweight, compact design that fits well in the hand. It is the lightest 5 smartphone in the world with a 5,000 mAh battery<br>According to IP65/68, the Xperia 10 IV is waterproof and dust-proof and thus made for everyday use. The display consists of the most resistant Gorilla Glass to date<br>From breathtaking landscapes to beautiful portraits, the triple camera of the Xperia 10 IV focuses on everything. <br>With the ultra-wide angle (16 mm), wide-angle (27 mm) and telephoto lens (54 mm), a variety of shots is possible<br>The OLED display in 21:9 format is even brighter than that of its predecessor and delivers great images with vibrant colors and real black tones<br>Experience first-class sound with High-Resolution Audio and optimize the sound quality of music through DSEE Ultimate <br>Verified by Strategy Analytics' SpecTRAX Service. Status: 11. May 2022"
}
]
	},
	{
		name:"Xiaomi",
		image:"images/categories/Xiaomi.jpg",
		products:
[
{
id:6,
price:799.00,
name:"Xiaomi 13",
image:"images/products/Xiaomi_13.jpg",
brand:"Xiaomi",
model:"Xiaomi 13",
os:"Android 13.0",
storage:"256 GB",
colour:"Black",
resolution:"2400 x 1080",


description:"Quick Specifications: Display - 6.36 inch, Memory - 12GB RAM +256GB ROM(expandable memory with microSD), <br>Camera - Rear Camera: 50MP, Front Camera: 32MP, Bluetooth 5.3, SIM - Dual SIM | Nano-SIM.<br>Octa-Core CPU: Xiaomi 13 features the fast and smooth Snapdragon 8 Gen 2 5G Mobile Platform, an octa-core gaming chipset optimized to provide uninterrupted gaming, fluid daily use, and longer battery life.<br>4500mAh High-Performance Battery: A 4500mAh high-capacity battery powers Xiaomi 13 through days of use. <br>And have 67W Fast Charging, our special process enhances the lifespan of the battery to provide optimum charging and recharging for years of reliable use.<br>6.36 inch HD+ Dot Drop: Xiaomi 13 5G featuring a massive 6.36”Dot Drop display, 2400 x 1080 HD+, is large and immersive, providing an amazing video and gaming experience.<br>Storage & Connectivity: Xiaomi 13 5G houses 256 of internal storage.<br>Runs on MIUI 14, base on Android 13. Connectivity-wise the device supports 5G, Bluetooth 5.3, support 2.4G WiFi / WiFi Direct / Pantalla WiFi, ecc."
},
{
id:7,
price:70.56,
name:"Xiaomi Redmi A1",
image:"images/products/Xiaomi_Redmi_A1.jpg",
brand:"Xiaomi",
model:"Xiaomi redmi A1",
os:"MIUI 12",
storage:"128 GB",
ram:"4 GB",

description:"XIAOMI Redmi A1 Smartphone (6.52 inches, 32GB storage space, 5000 mAh battery)<br>Batteries ‏ : ‎ 1 Lithium-polymer batteries required.<br>Discontinued article (production by manufacturer discontinued) ‏ : ‎ No<br>Language ‏ : ‎ Spanish<br>Product dimensions ‏ : ‎ 25.4 x 5.08 x 6.86 cm; 192 grams<br>On offer from Amazon.de since ‏ : ‎ 15. September 2022<br>Manufacturers ‏ : ‎ XIAOMI<br>ASIN ‏ : ‎ B0BFFKGXS4<br>Model number ‏ : ‎ C3S"
}
]
	}
];

if(!localStorage.mockUsers) {
	localStorage.mockUsers = JSON.stringify(mockUsers);
} else {
	mockUsers = JSON.parse(localStorage.mockUsers);
}