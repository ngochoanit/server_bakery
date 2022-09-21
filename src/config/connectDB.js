const { Sequelize } = require("sequelize");
const { database, userName, password, host } = require(".");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(database, userName, null, {
  host: host,
  dialect: "mysql",
  logging: true,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
