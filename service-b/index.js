//create express server with one route
const express = require("express");
const corse = require("cors");
require("dotenv").config();

const app = express();

app.use(corse());

const port = process.env.PORT_SERVICE_NAME_B;

app.get("/", (req, res) => res.send("Hello from service B!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
