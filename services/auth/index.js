const user = require("../auth/index")
const store = require("../../store");

// tạo tài khoản. => M => Create

// đăng nhập tài khoản => M => READ

// mvc => model | service | controller

// tạo tài khoản. => M => Create

function createAccount(username, password) {
  console.log("create account");

  const user = {
    username: username,
    password: password
  }

  store.users.push(user);

  return store.users;
  // xu logic nghiep cua create account
}

// đăng nhập tài khoản => M => READ

function login() {
  console.log("login");
}

// require
module.exports = {
  createAccount,
  login,
};

// params + query => dung cho chuc nang search
// body => phu cho chuc nang create
