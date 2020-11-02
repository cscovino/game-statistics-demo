"use strict";

const express = require("express");
const path = require("path");
const app = express();
const compression = require("compression");
const expressStaticGzip = require("express-static-gzip");

app.use(compression());

app.use(
  "/",
  expressStaticGzip(path.join(__dirname, "build"), {
    enableBrotli: true,
    orderPreference: ["br", "gzip"],
  })
);

app.use(
  "*",
  expressStaticGzip(path.join(__dirname, "build"), {
    enableBrotli: true,
    orderPreference: ["br", "gzip"],
  })
);

app.listen(3000);

console.log("Server running web-ui");
