# Backend To-Do List API

Proyek ini adalah sebuah REST API sederhana untuk mengelola daftar tugas (To-Do list). API ini dibangun sebagai bagian dari *Full Stack Developer Coding Test* dan mencakup fungsionalitas dasar CRUD (Create, Read, Update, Delete) untuk To-Do, serta autentikasi pengguna menggunakan JWT (JSON Web Tokens).

## Teknologi yang Digunakan

- **Node.js**: Lingkungan eksekusi JavaScript di sisi server.
- **Express.js**: Kerangka kerja (framework) web yang minimalis dan fleksibel untuk Node.js.
- **JSON Web Tokens (JWT)**: Standar terbuka untuk membuat token akses yang aman antara dua pihak.
- **Swagger (OpenAPI)**: Digunakan untuk merancang, membangun, mendokumentasikan, dan mengonsumsi RESTful API.
  - `swagger-ui-express`: Untuk menampilkan dokumentasi Swagger UI.
  - `swagger-jsdoc`: Untuk menghasilkan spesifikasi OpenAPI dari anotasi JSDoc.
- **Nodemon**: Alat yang membantu pengembangan aplikasi berbasis Node.js dengan me-restart server secara otomatis saat ada perubahan file.
- **pnpm**: Manajer paket yang cepat dan efisien dalam penggunaan ruang disk.

## Fitur

- **Manajemen To-Do**:
  - Membuat tugas baru.
  - Mengambil semua tugas.
  - Memperbarui status tugas (selesai/belum selesai).
  - Menghapus tugas.
- **Autentikasi Pengguna**:
  - Registrasi pengguna baru.
  - Login pengguna untuk mendapatkan token JWT.
  - Endpoint profil yang dilindungi untuk melihat detail pengguna yang sedang login.
- **Dokumentasi API**:
  - Dokumentasi API interaktif yang tersedia di endpoint `/api-docs`.
  - Dihasilkan secara otomatis dari komentar JSDoc di dalam kode.

## Struktur Proyek

Proyek ini mengikuti struktur yang terorganisir untuk memisahkan setiap concern:

```
backend-todos/
├── controllers/       # Logika bisnis aplikasi
│   ├── authController.js
│   └── todoController.js
├── middleware/        # Middleware untuk autentikasi
│   └── authMiddleware.js
├── routes/            # Definisi rute API
│   ├── authRoutes.js
│   └── todoRoutes.js
├── .gitignore
├── index.js           # File utama server
├── package.json
├── pnpm-lock.yaml
└── swagger.js         # Konfigurasi Swagger
```

## Instalasi

1.  **Clone repository** (jika belum):
    ```bash
    git clone <url-repository>
    cd backend-todos
    ```

2.  **Install dependensi** menggunakan `pnpm`:
    ```bash
    pnpm install
    ```

## Menjalankan Aplikasi

Untuk menjalankan server pengembangan, gunakan perintah berikut:

```bash
pnpm start
```

Server akan berjalan di `http://localhost:3000` dan akan otomatis me-restart setiap kali ada perubahan pada file berkat `nodemon`.

## Endpoint API

Dokumentasi lengkap dan interaktif tersedia di **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)** setelah server dijalankan.

### Autentikasi (`/auth`)

- `POST /auth/register`: Mendaftarkan pengguna baru.
- `POST /auth/login`: Login untuk mendapatkan token JWT.
- `GET /auth/profile`: Mendapatkan detail profil pengguna (membutuhkan token JWT).

### To-Do (`/todos`)

- `POST /todos`: Membuat To-Do baru (membutuhkan token JWT).
- `GET /todos`: Mendapatkan semua To-Do (membutuhkan token JWT).
- `PATCH /todos/:id`: Memperbarui status To-Do (membutuhkan token JWT).
- `DELETE /todos/:id`: Menghapus To-Do (membutuhkan token JWT).