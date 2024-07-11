const http = require("http");
const url = require("url");

http
	.createServer((req, res) => {
		const path = url.parse(req.url, true).pathname;
		res.setHeader("Content-Type", "text/html");
		if (path in urlMap) {
			try {
				urlMap[path](req, res);
			} catch (err) {
				console.log(err);
				serverError(req, res);
			}
		} else {
			notFound(req, res);
		}
	})
	.listen("3000", () => console.log("let's refactoring router"));

const user = (req, res) => {
	throw Error("!!!!!!!!");
	const user = url.parse(req.url, true).query;
	res.end(`[user] name : ${user.name}, age : ${user.age}`);
};

const feed = (req, res) => {
	res.end(`<ul>
			<li> pic #1 </li>
			<li> pic #2 </li>
			<li> pic #3 </li>
		</ul>
		`);
};

const notFound = (req, res) => {
	res.statusCode = 404;
	res.end("404 page not found !!");
};

const serverError = (req, res) => {
	res.statusCode = 500;
	res.end("500 server error !!");
};

const urlMap = {
	"/": (req, res) => res.end("HOME"),
	"/user": user,
	"/feed": feed,
};