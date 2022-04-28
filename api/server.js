const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth.js');
const userRoute = require('./routes/users.js');
const postRoute = require('./routes/posts.js');
const categoryRoute = require('./routes/categories');
const multer = require('multer');

dotenv.config();

// Middleware to parse JSON requests and store in req.body
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Multer to store images in images directory
const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, "images")
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  },
})

// Upload an image and store it in the images directory using Postman
const upload = multer({storage: storage});
app.post("api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
})

// Middleware Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// app.use("/", (req, res) => {
//   console.log("Hey this is working on the main URL")
// })

app.listen("9000", () => {
  console.log("Backend connected")
})