const express = require("express");
const bodyParser = require('body-parser')

const authController = require("./controller/auth");
const userController = require("./controller/user");

const app = express();
const port = 1803;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router => localhost:1803/auth/login
app.use('/auth', authController);
app.use('/user', userController);

// app => localhost:1803 => cach 1
app.get("/", (req, res) => {
  console.log("hello word");
  res.send([
    {
      name: "Nodejs",
    },
    {
      name: "React",
    },
  ]);
});

app.listen(port, () => {
  console.log("start port", port);
});

// tách file service => domain. 

// trong hệ thống khoá học. 

// user | course | category | payment | 

// user => service module  