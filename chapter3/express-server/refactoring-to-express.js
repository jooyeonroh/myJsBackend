const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("refactoring to express");
});

app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res) {
    const user = url.parse(req.url, true).query;

    res.json(`[user] name : ${user.name}, age: ${user.age}`);
}

function feed(_, res) {
    res.json(`<ul>
        <li>picture #1</li>
        <li>picture #2</li>
        <li>picture #3</li>
        </ul>
        `);
}
