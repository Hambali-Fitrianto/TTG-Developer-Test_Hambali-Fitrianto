# TTG Developer Test

**Nama:** Hambali Fitrianto  
**Live Demo:** [https://hambali-fitrianto.github.io/TTG-Developer-Test_Hambali-Fitrianto/](https://hambali-fitrianto.github.io/TTG-Developer-Test_Hambali-Fitrianto/)

---

## 📝 Deskripsi Proyek
Dokumen ini merangkum seluruh hasil pengerjaan Tes Teknis (TTG) yang mencakup pengembangan *Front-End*, *Back-End API*, serta implementasi logika algoritma dan kalkulasi matematika. Seluruh fungsionalitas telah diuji secara menyeluruh.

---

## 📂 Detail Pengerjaan Soal

### **Soal 1: Front-End - Membuat Halaman Web Sederhana**
* **Teknologi**: HTML, CSS, dan JavaScript.
* **Deskripsi**: Membangun antarmuka halaman web fungsional sesuai dengan kriteria tugas front-end yang diberikan.
* **Fitur**: Tampilan yang terstruktur menggunakan CSS dan interaktivitas dinamis menggunakan JavaScript.

### **Soal 2: Back-End API Pengguna**
Sistem manajemen data pengguna berbasis REST API menggunakan arsitektur Node.js.
* **Stack Utama**: Node.js, **Express.js** (Framework), dan **MongoDB** (Database).
* **Library & Dependensi**:
    * `express`: Framework web utama untuk menangani routing dan server.
    * `mongoose`: ODM (Object Data Modeling) untuk mendefinisikan skema data dan mengelola koneksi database.
    * `express.json()`: Middleware untuk memproses data body berformat JSON.
* **Fitur API**:
    * **Create (POST)**: Menambah pengguna baru dengan validasi **Email Unik**.
    * **Read (GET)**: Mengambil seluruh daftar pengguna atau data spesifik berdasarkan ID.
    * **Delete (DELETE)**: Menghapus data pengguna dari database berdasarkan ID.

### **Soal 3: Problem Solving - Cari Angka Yang Hilang**
* **Bahasa**: JavaScript.
* **Metode**: Implementasi algoritma untuk mendeteksi angka yang hilang dalam suatu deret angka acak.
* **Output**: Hasil angka yang hilang ditampilkan secara dinamis pada halaman antarmuka.

### **Soal 4: Problem Solving - Formula Perhitungan**
* **Bahasa**: JavaScript.
* **Metode**: Implementasi fungsi kalkulasi matematika dinamis berdasarkan formula yang ditentukan.
* **Output**: Sistem menampilkan hasil kalkulasi secara real-time berdasarkan input angka dari pengguna.

---

## 🚀 Panduan Menjalankan & Pengujian

### **1. Akses Live Demo (Front-End & Logika)**
Untuk memeriksa hasil pengerjaan secara langsung di browser:  
👉 **[Buka Live Demo GitHub Pages](https://hambali-fitrianto.github.io/TTG-Developer-Test_Hambali-Fitrianto/)**

Atau jalankan secara lokal:
* **Dashboard Utama**: Buka file `index.html` di folder root utama (Membangun navigasi pusat menggunakan Tailwind CSS via CDN).
* **Soal 1**: Buka file `index.html` di dalam folder `soal1-frontend`.
* **Soal 3**: Buka file `index.html` di dalam folder `soal3-angka-hilang`.
* **Soal 4**: Buka file `index.html` di dalam folder `soal4-formula-kalkulasi`.

### **2. Konfigurasi Database & API (Soal 2)**
* **Prasyarat**: Pastikan **MongoDB** lokal aktif pada port `27017`.
* **Instalasi**: Masuk ke terminal folder `soal2-backend`.
* **Setup**: Jalankan `npm install` untuk memasang `express` & `mongoose`.
* **Running**: Jalankan `node index.js`. Server akan aktif di `http://localhost:3000`.

### **3. Dokumentasi Pengujian API (Postman)**
* **Simulasi POST (Tambah User)**:
    * **URL**: `http://localhost:3000/users`
    * **Method**: `POST`
    * **Body (JSON)**:
      ```json
      {
        "name": "Hambali Fitrianto",
        "email": "hambali.fitrianto001@gmail.com"
      }
      ```
    * **Respon Sukses**: HTTP Status `201 Created`.

* **Simulasi POST (Validasi Email Duplikat)**:
    * **Respon Error**: HTTP Status `400 Bad Request` | `{"message": "Email sudah dipakai!"}`.

---
**Hambali Fitrianto** - Developer Test (2026)