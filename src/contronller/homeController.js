import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    // console.log("------------------------------------");
    // console.log(data);
    // console.log("------------------------------------");

    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAnotherFile = (req, res) => {
  return res.render("addmorepath/anotherFile.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);

  // console.log(req.body);
  return res.send("glfkjfkljgdf");
};

module.exports = {
  getHomePage: getHomePage,
  getAnotherFile: getAnotherFile,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
};
