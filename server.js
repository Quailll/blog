require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = 3001;
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.listener(PORT, () => {
  console.log(`Listening to ${PORT}`);
  Sequelize.sync({ force: false });
});
