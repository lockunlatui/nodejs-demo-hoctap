const express = require("express");

const authService = require('../../services/auth');

const router = express.Router();

router.get('/login', (req, res) => {
  authService.login()
})

// create user
router.post("/create", (req,  res) => {

  const username = req.body.username;
  const password = req.body.password;

  // create service
  const users =  authService.createAccount(username, password)

  if(users.length > 0) {
    res.send("Create thanh cong")
  }
})

module.exports = router;