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
  return res.send("Create an user with success!");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  // console.log("------------------------------");
  // console.log(data);
  // console.log("------------------------------");

  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    // check user data not found

    // console.log("---------------");
    // console.log(userData);
    // console.log("---------------");
    // let userData;
    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("User Not Found!");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDService.updateUserData(data);
  // return res.send("Update done!");
  return res.render("displayCRUD.ejs", {
    dataTable: allUsers,
  });
};

let deleteCRUD = async (req, res) => {
  return res.send("Delete CRUD");
};

module.exports = {
  getHomePage: getHomePage,
  getAnotherFile: getAnotherFile,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
