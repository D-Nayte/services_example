//create express server with one route
const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.DEFAULT_PORT || 3000;

app.get("/", (req, res) => res.send("Hello from service A!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
