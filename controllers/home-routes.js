const router = require("express").Router();
const { Post, Users } = require("../models/");

router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [Users],
    });
    const mapPost = allPosts.map((whatever) => whatever.get({ plain: true }));
    res.render("all-post", { mapPost });
  } catch (error) {
    res.status(500).json(error);
  }
});

//do it later bc we dont have user login and stuff (redirectoring)
/* router.get("/login", async (req, res) => {
  res.render("login");
});
/* 
router.get("/signup", async (req, res) => {
  res.render("signup");
});
 */

module.exports = router;
