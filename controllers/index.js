const router = require("express").Router();
const apiroutes = require("./api/");
const home = require("./home-routes.js");
const dashboard = require("./dashboard-routes.js");

router.use("/", home);
router.use("/api", apiroutes);
router.use("/dashboard", dashboard);
router.use((req, res) => {
  res.send("login");
});

module.exports = router;
