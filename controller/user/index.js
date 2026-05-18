const express = require("express");

const userService = require("../../services/user");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(userService.getUser());
});

module.exports = router;
