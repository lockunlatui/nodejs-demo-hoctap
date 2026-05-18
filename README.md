# Buổi 2 - Môn học NodeJS

Project Express cơ bản với cấu trúc phân tầng `controller` → `service` → `store`.

## Giáo viên

**LỘC ĐỖ** — [locdx@locdo.tech](mailto:locdx@locdo.tech)

## Cấu trúc thư mục

```
.
├── index.js              # Entry point, khởi tạo Express server
├── controller/           # Tầng nhận request, định nghĩa router
│   ├── auth/
│   └── user/
├── services/             # Tầng xử lý logic nghiệp vụ
│   ├── auth/
│   ├── course/
│   └── user/
└── store/                # Tầng dữ liệu (mock data / DB)
```

## Cài đặt

```bash
npm install
```

## Chạy project

```bash
npm run dev
```

Server chạy tại `http://localhost:1803`.

## API Endpoints

| Method | Endpoint        | Mô tả                  |
| ------ | --------------- | ---------------------- |
| GET    | `/`             | Danh sách khoá học mẫu |
| GET    | `/auth/login`   | Đăng nhập              |
| POST   | `/auth/create`  | Tạo tài khoản mới      |
| GET    | `/user`         | Lấy danh sách user     |

### Ví dụ POST `/auth/create`

```json
{
  "username": "locdx",
  "password": "123456"
}
```

## Công nghệ sử dụng

- Node.js
- Express 5
- body-parser
