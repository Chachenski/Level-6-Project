const router = require('express').Router();
const User = require('../models/User.js');
const bcrypt = require('bcrypt');

//REGISTER
router.post("/register", async (req, res) => {
  try {
      // Generate a salt with 10 saltRounds
      const salt = await bcrypt.genSalt(10);
      // async function to hash password with salt
      const hashedPass = await bcrypt.hash(req.body.password, salt)

      // req.body is replaced w/ an instance of username, email, and password
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass
      });

      const user = await newUser.save();
      res.status(200).json(user);
  } catch(err) {
    res.status(500).json(err);
  }
})
//LOGIN
router.post("/login", async (req, res) => {
  try {
      // Find user using Mongoose model
      const user = await User.findOne({username: req.body.username})
      // If there is no user, send the status code 400 and message "Wrong credentails"
      !user && res.status(400).json("Wrong credentials!")

      // If there is a user, compare the entered password against the hash
      const validated = await bcrypt.compare(req.body.password, user.password)
      // If there is no validation, send the status code 400 w/ an errMsg
      !validated && res.status(400).json("Wrong credentials!")

      // Hides the password property when returning the user._doc obj
      const { password, ...others} = user._doc;
      // Authenticate the user and returns others properties w/o password
      res.status(200).json(others);
  } catch(err) {
    res.status(500).json(err);
  }
})

module.exports = router;