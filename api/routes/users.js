const router = require('express').Router();
const User = require('../models/User.js');
const Post = require('../models/Post.js');
const bcrypt = require('bcrypt');

// Update
router.put("/:id", async (req, res) => {
    // Compares the entered userId against the actual userId
    if(req.body.userId === req.params.id) {
        // If a password is sent, hash the password and add the salt
        if(req.body.password) {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        }
      try {
          // Update the user info and set the new input data from the put request and send back the response as a new updatedUser
          const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      // Mismatch in accountId results in Forbidden error
      res.status(401).json("You can update only your account!")
    }
});

// Delete
router.delete("/:id", async (req, res) => {
  // Compares the entered userId against the actual userId
  if (req.body.userId === req.params.id) {
    try {
      // Checks the user by userId
      const user = await User.findById(req.params.id)
      try {
        // If the user's username is the same as the username in the DB, then delete all the posts associated w/ the username
        await Post.deleteMany({ username: user.username })
        // Deletes the user if the accountIds match and send back a message
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }  
    } catch(err) {
      res.status(404).json("User not found!");
    }
  } else {
    // Mismatch in accountId results in Forbidden error
    res.status(401).json("You can delete only your account!");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      const {password, ...others} = user._doc;
      res.status(200).json(others);
  } catch(err) {
      res.status(500).json(err);
  }
})

module.exports = router;