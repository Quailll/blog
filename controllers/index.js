const router = require("express").Router();
// const apiroutes = require("./api/");
const home = require("./home-routes");
const dashboard = require("./dashboard-routes");

router.use("/", home);
// router.use("/api", apiroutes);
router.use("/dashboard", dashboard);
router.use((req, res) => {
  res.send("login");
});

module.exports = router;
