//create express server with one route
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.DEFAULT_PORT || 3000;

app.get("/", (req, res) => res.send("Hello from service B!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
