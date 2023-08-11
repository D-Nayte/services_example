// this express erver route all incoming request to the appropriate docker container

const express = require("express");
const corse = require("cors");
const { serviceMap } = require("./portMapper");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 5555;

app.use(corse());

app.get("/", (req, res) => res.send(JSON.stringify(serviceMap)));

// create a route for each service and forward the request to the appropriate container
serviceMap.forEach((service) => {
  app.get(`/${service.name}`, async (req, res) => {
    try {
      const response = await axios.get(
        `http://${service.name}:${service.port}`
      );
      res.writeHead(response.status, response.headers);
      res.end(response.data);
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
