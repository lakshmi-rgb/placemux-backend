const swaggerUi = require("swagger-ui-express");

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "PlaceMux API",
    version: "1.0.0"
  }
};

module.exports = {
  swaggerUi,
  swaggerDocument
};