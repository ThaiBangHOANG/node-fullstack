let getHomePage = (req, res) => {
  return res.render("homePage.ejs");
};

let getAnotherFile = (req, res) => {
  return res.render("addmorepath/anotherFile.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  getAnotherFile: getAnotherFile,
};
