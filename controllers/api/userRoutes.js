const router = require("express").Router();
const { Users } = require("../../models");

router.post("/", async (rep, res) => {
  try {
    const createUser = await Users.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = createUser.id;
      req.session.username = createUser.username;
      req.session.loggedIn = true;

      res.json(createUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userLogin = await Users.findOne({
      where { username: req.body.username,},
    });
    if (!userLogin) {
      res.status(400).json({ message: "Username is incorrect or not found!"});
      return;
    }
    const checkPassword = user.checkPassword(req.body.password);

    if (!checkPassword) {
      res.status(400).json({ message: "Password is incorrect!"});
      return;
    }

     req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: "Login Successful!" });
     });

  } catch (err) {
    res.status(400).json({ message: "Username is incorrect or not found!"});
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
