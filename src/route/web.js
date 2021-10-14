import express from "express";
import homeController from "../contronller/homeController";

let router = express.Router();

let initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/another", homeController.getAnotherFile);
  router.get("/crud", homeController.getCRUD);

  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);

  return app.use("/", router);
};

module.exports = initWebRoute;
