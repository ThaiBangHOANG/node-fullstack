import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("------------------------------------");
    console.log(data);
    console.log("------------------------------------");

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

module.exports = {
  getHomePage: getHomePage,
  getAnotherFile: getAnotherFile,
};
