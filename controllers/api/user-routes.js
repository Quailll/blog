const router = require("express").Router();
const { Users } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const createUser = await Users.create({
      username: req.body.username,
      password: req.body.password,
    });
    
    req.session.userId = createUser.id;
    req.session.username = createUser.username;
    req.session.loggedIn = true;
    req.session.save(() => {

      res.json(createUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", (req, res) => {
  try {
    Users.findOne({
      where: { username: req.body.username },
    }).then((userLogin) => {
      if (!userLogin) {
        res
          .status(400)
          .json({ message: "Username is incorrect or not found!" });
        return;
      }
      const checkPassword = userLogin.checkPassword(req.body.password);

      if (!checkPassword) {
        res.status(400).json({ message: "Password is incorrect!" });
        return;
      }

      req.session.save(() => {
        req.session.userId = userLogin.id;
        req.session.username = userLogin.username;
        req.session.loggedIn = true;

        res.json({ userLogin, message: "Login Successful!" });
      });
    });
  } catch (err) {
    res.status(400).json({ message: "Username is incorrect or not found!" });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;