const router = require("express").Router();
const { Post } = require("../models");
const auth = require("../utils/auth");

router.get("/", auth, async (req, res) => {
  try {
    const allPost = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = allPost.map((post) => post.get({ plain: true }));

    res.render("all-post-user", {
      layout: "dashboard",
      posts,
    });
  } catch (err) {
    res.redirect("login");
  }
});

router.get("/new", auth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

router.get("/edit/:id", auth, async (req, res) => {
  try {
    const postID = await Post.findByPk(req.params.id);

    if (postID) {
      const post = postID.get({ plain: true });

      res.render("edit-post", {
        layout: "dashboard",
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
