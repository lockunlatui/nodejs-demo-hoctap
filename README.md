# Buổi 6 - Môn học NodeJS

Tiếp nối [buổi 4](https://github.com/lockunlatui/nodejs-demo-hoctap/tree/buoi4): thêm **upload file** với `multer` (avatar user) và bổ sung field `urlAvatar` cho user.

## Giáo viên

**LỘC ĐỖ** — [locdx@locdo.tech](mailto:locdx@locdo.tech)

## Nội dung buổi 6

### Upload file với Multer

- Cài `multer` để xử lý `multipart/form-data`
- Cấu hình `diskStorage`:
  - `destination` → folder `uploads/`
  - `filename` → `{tên gốc}{timestamp}.{ext}` để tránh trùng
- Endpoint mới `POST /user/upload` nhận field `avatar` (single file)
- User schema bổ sung field `urlAvatar`

## Cấu trúc thư mục

```
.
├── index.js
├── controller/
│   ├── auth/
│   └── user/             # + POST /user/upload (multer)
├── services/
│   ├── auth/
│   ├── course/
│   └── user/
├── store/
│   ├── index.js
│   └── data.json         # User có thêm field urlAvatar
├── uploads/              # Nơi multer lưu file upload (ignore trong git)
└── course-app/           # Frontend Next.js (từ buổi 4)
```

## Cài đặt & chạy

### Backend

```bash
npm install
npm run dev
```

→ `http://localhost:1803`

### Frontend

```bash
cd course-app
npm install
npm run dev
```

→ `http://localhost:3000`

## API Endpoints

| Method | Endpoint        | Mô tả                                       |
| ------ | --------------- | ------------------------------------------- |
| GET    | `/`             | Danh sách khoá học mẫu                      |
| GET    | `/auth/login`   | Đăng nhập (chưa hoàn thiện)                 |
| POST   | `/auth/create`  | Tạo user mới, lưu vào `store/data.json`     |
| GET    | `/user`         | Đọc danh sách user từ `store/data.json`     |
| POST   | `/user/upload`  | **Mới** - Upload avatar (field `avatar`)    |

### Ví dụ upload avatar

```bash
curl -X POST http://localhost:1803/user/upload \
  -F "avatar=@/path/to/image.png"
```

File sẽ được lưu vào `uploads/` với tên: `image{timestamp}.png`.

## Kiến thức mới buổi 6

- `multer` middleware xử lý `multipart/form-data`
- Phân biệt `diskStorage` vs `memoryStorage`
- Đặt tên file unique bằng `Date.now()` để tránh ghi đè
- `upload.single('fieldName')` cho 1 file, `upload.array(...)` cho nhiều
- 5W1H khi thiết kế filename: who/what/when/where/why/how

## Các buổi khác

- [`buoi2`](https://github.com/lockunlatui/nodejs-demo-hoctap/tree/buoi2) — Khởi tạo Express với controller/service/store
- [`buoi4`](https://github.com/lockunlatui/nodejs-demo-hoctap/tree/buoi4) — CORS, persistence file JSON, frontend Next.js
