const router = require("express").Router();
const { Users } = require("../../models");
router.post("/", async (req, res) => {
  try {
    const userSignup = await Users.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.userId = userSignup.id;
      req.session.username = userSignup.username;
      req.session.loggedIn = true;
      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
