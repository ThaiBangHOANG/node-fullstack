const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("thaibang", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("ok success!");
  } catch (error) {
    console.error("ok have some errors", error);
  }
};

module.exports = connectDB;
