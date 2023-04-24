const router = require("express").Router();
const { Post, Users, Comments } = require("../models/");

router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [Users],
    });
    const mapPost = allPosts.map((post) => post.get({ plain: true }));
    res.render("all-posts", { mapPost });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("post/:id", async (req, res) => {
  try {
    const singlePost = await Post.findByPk(req.params.id, {
      include: [Users, { model: Comments, include: [Users] }],
    });
    if (singlePost) {
      const post = singlePost.get({ plain: true });
      res.render("single-post", { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  const renderLogin = await res.render("login");
});

router.get("/signup", async (req, res) => {
  const renderSignUp = await res.render("signup");
});

module.exports = router;
