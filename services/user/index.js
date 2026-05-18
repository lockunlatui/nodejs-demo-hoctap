// lấy thông tin user => M  => READ
const store = require("../../store");

function getUser() {
  return store.users;
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
