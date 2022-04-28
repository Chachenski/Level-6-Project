const router = require("express").Router();
const User = require("../models/User.js");
const Post = require("../models/Post.js");

// CREATE NEW POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch(err) {
    res.status(500).json(err);
  }
});

// UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(post.username === req.body.username)
      try {
        // updatedPost will be queried by Id and the setter will update the inputted values and send back the updatedPost as a new res
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true}
        );
        res.status(200).json(updatedPost)
      } catch(err) {
    } else {
          res.status(401).json("You can only update your post!")
      }
  } catch(err) {

  }
});

// DELETE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username)
      try {
        await post.delete()
        res.status(200).json("Post has been deleted...");
      } catch (err) {}
    else {
      res.status(401).json("You can only delete your post!");
    }
  } catch (err) {}
});

// GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const categoryName = req.query.category;
  // Gets all post relating to username or category or all posts
  try {
    // Undeclared posts variable takes in the value of either the username or the category
    let posts;
    if(username) {
      posts = await Post.find({username})
    } else if(categoryName) {
      posts = await Post.find({categories:{
        $in: [categoryName]
      }})
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
