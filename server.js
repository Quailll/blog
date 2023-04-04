require("dotenv").config();
const express = require("express");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers})
const path = require("path");
const PORT = 3001;
const app = express()
const sequelize = require('./config/connection')

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() =>{

  app.listener(PORT, () => {
    console.log(`Listening to ${PORT}`);
  });
});
