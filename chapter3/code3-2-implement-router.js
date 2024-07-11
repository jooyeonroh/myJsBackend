const http = require("http");
const url = require("url"); // loading url module

http.createServer((req, res) => {
	const path = url.parse(req.url, true).pathname; //set path name
	res.setHeader("Content-Type", "text/html");

	if (path === "/user") {
		res.end("[user] name : sarah, age: 28"); // set /user result value
	} else if (path === "/feed") {
		res.end(`<ul>
			<li>picture1</li>
			<li>picture2</li>
			<li>picture3</li>
			</ul>`
		); // set /feed result value
	} else {
		res.statusCode = 404; // error msg
		res.end("404 page not found");
	}
}).listen("3000", () => console.log("let's build router"));