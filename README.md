# Buổi 4 - Môn học NodeJS

Mở rộng project Express từ [buổi 2](https://github.com/lockunlatui/nodejs-demo-hoctap/tree/buoi2): thêm **CORS**, **persistence với file JSON** và frontend **Next.js** (`course-app/`).

## Giáo viên

**LỘC ĐỖ** — [locdx@locdo.tech](mailto:locdx@locdo.tech)

## Nội dung buổi 4

### 1. Backend (Express)

- Cài thêm `cors`, mở CORS cho mọi origin để frontend gọi API
- Đọc / ghi user vào file `store/data.json` bằng `fs/promises`
- `POST /auth/create` → append user mới vào JSON
- `GET /user` → đọc danh sách user từ JSON

### 2. Frontend (`course-app/`)

- Next.js 16 + React 19 + TailwindCSS 4
- Khởi tạo bằng `create-next-app`
- Sẽ gọi API từ backend Express ở `http://localhost:1803`

## Cấu trúc thư mục

```
.
├── index.js              # Express server (port 1803)
├── controller/
│   ├── auth/             # POST /auth/create (ghi vào data.json)
│   └── user/             # GET /user (đọc từ data.json)
├── services/
│   ├── auth/
│   ├── course/
│   └── user/             # getUser() đọc file JSON
├── store/
│   ├── index.js
│   └── data.json         # File "database" mock
└── course-app/           # Next.js frontend (chạy độc lập)
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
| GET    | `/`             | Trả về danh sách khoá học mẫu               |
| GET    | `/auth/login`   | Đăng nhập (chưa hoàn thiện)                 |
| POST   | `/auth/create`  | Tạo user mới, lưu vào `store/data.json`     |
| GET    | `/user`         | Đọc danh sách user từ `store/data.json`     |

### Ví dụ POST `/auth/create`

```bash
curl -X POST http://localhost:1803/auth/create \
  -H "Content-Type: application/json" \
  -d '{"username":"locdx","password":"123456"}'
```

Response:
```json
{ "status": 200, "message": "Create thành công" }
```

## Kiến thức mới buổi 4

- Middleware `cors` để cho phép cross-origin request
- Module `fs/promises` thay cho callback-style `fs`
- `path.join(__dirname, ...)` để build đường dẫn an toàn
- `JSON.parse` / `JSON.stringify` khi đọc/ghi JSON
- `async/await` cho I/O bất đồng bộ

## Các buổi khác

- [`buoi2`](https://github.com/lockunlatui/nodejs-demo-hoctap/tree/buoi2) — Khởi tạo Express với cấu trúc controller/service/store
