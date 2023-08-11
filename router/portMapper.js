// load .env from root
require("dotenv").config();

const serviceAndPostList = () => {
  // iterate over process.env and find all the services and ports starting with "SERVICE"

  const serviceAndPortList = Object.keys(process.env)
    .filter((key) => {
      return key.startsWith("SERVICE");
    })
    .map((key) => {
      return {
        name: process.env[key],
        port: process.env[`PORT_${key}`],
      };
    });
  console.log("serviceAndPortList :>> ", serviceAndPortList);
  return serviceAndPortList;
};

module.exports = {
  serviceMap: serviceAndPostList(),
};
