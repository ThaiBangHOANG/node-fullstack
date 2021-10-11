import express from "express";
import homeController from "../contronller/homeController";

let router = express.Router();

let initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/another", homeController.getAnotherFile);

  return app.use("/", router);
};

module.exports = initWebRoute;
