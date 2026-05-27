const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.split('.')[0] + Date.now() + "." + file.originalname.split('.')[1])
  } 
});
// 5w + 1h
const upload = multer({ storage: storage });

const express = require("express");

const userService = require("../../services/user");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await userService.getUser();
  console.log("data in user", data)
  res.send(data);
});

// localhost:3001/user/upload
router.post('/upload', upload.single('avatar'), (req, res) => {
  console.log("req", req.file)
  res.send("upload oke ")
})

module.exports = router;
