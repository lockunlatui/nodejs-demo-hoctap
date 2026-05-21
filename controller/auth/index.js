const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const authService = require("../../services/auth");

const router = express.Router();

router.get("/login", (req, res) => {
  authService.login();
});

// create user
router.post("/create", async (req, res) => {
  const filePath = path.join(__dirname, "../../store/data.json");
  const username = req.body.username;
  const password = req.body.password;

  // lay dc thong tin user
  const user = {
    username,
    password,
  };

  console.log("req", req.body);

  // đọc lại hiện có sẵn
  const originalData = await fs.readFile(filePath, "utf8");

  console.log("originalData", originalData);

  // tại sao phải parse -> originalData từ file json đc hiểu là string bộc vô cái json 
  const parseOriginalData = JSON.parse(originalData);

  // push user moi vao data co san
  // cái phải là object array -> js mới hiểu method push
  parseOriginalData.push(user);

  const data = JSON.stringify(parseOriginalData, null, 2);

  await fs.writeFile(filePath, data);

  // create service
  const users = authService.createAccount(username, password);

  if (users.length > 0) {
    res.send({
      status: 200,
      message: "Create thành công",
    });
  }
});

module.exports = router;
