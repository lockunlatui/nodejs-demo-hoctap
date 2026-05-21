const express = require("express");

const userService = require("../../services/user");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await userService.getUser();
  console.log("data in user", data)
  res.send(data);
});

module.exports = router;
