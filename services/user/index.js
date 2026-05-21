const { readFile } = require('node:fs/promises'); 
const path = require("path");

// lấy thông tin user => M  => READ
// const store = require("../../store");

async function getUser() {
  const filePath = path.join(__dirname, "../../store/data.json");

  try {
    const data = await readFile(filePath, "utf8");

    console.log("data", data)

    return JSON.parse(data);
  } catch(err) {
    console.log("error", err)
  }
  
}

// cập nhật thông tin tài khoản. => M => UPDATE

// xoá user => M => UPDATE

// nhắn tin với bên hỗ trợ phần web.

// CRUD | Create | Read | Update | Delete

// -----------
// TẠO TÀI KHOẢN => LÀM SAO ĐỂ TRÊN APP => BIẾT ĐƯỢC USER ĐÓ LÀ USER NÀO?

// Authenication

module.exports = {
  getUser,
};
