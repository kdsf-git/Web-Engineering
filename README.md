# Web-Engineering
This is an example implementation of an E-commerce store. The site does not currently implement a back-end, but rather simulates one via the src/js/api.js file. This simulation makes use of JavaScript localStorage and saves a database on the accessing client. This also means that there is no persistence of records across devices or even browsers. If the website should be used with an actual back-end, only the src/js/api.js file's methods need to be changed to match the same parameters and return values.
## How to use
The website needs to be used in one of the following ways to ensure full functionality. Not running the site with a webserver will result in the Browser blocking some functionality.
### Locally
To run the site locally, a webserver (i.e. Apache) is required, at least for some browsers.
The src folder's contents are to be pasted into the webserver's document directory.
After the webserver has been started, the site is accessible under "http://localhost/".
### External server
To run the site on an external server, the steps for local deployment need to be followed and an SSL certificate to be provided and implemented into the webserver. If the connection is not an HTTPS connection, session cookies cannot be set and therefore it will be impossible to log in or sign up.
