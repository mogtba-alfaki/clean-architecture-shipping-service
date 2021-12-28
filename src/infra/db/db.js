const Sequelize = require("sequelize");
const {config} = require("dotenv")
config(); 
const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.HOST,
  }
);
module.exports = db;

