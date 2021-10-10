import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config app

viewEngine(app);
initWebRoute(app);

let port = process.env.PORT || 8080; // use or here to make sure the app not die

app.listen(port, () => {
  console.log("Backend Node Js is ready on: http://localhost:8080");
});