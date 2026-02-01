# TTG Developer Test

**Nama:** Hambali Fitrianto  
**Live Demo:** [https://hambali-fitrianto.github.io/TTG-Developer-Test_Hambali-Fitrianto/](https://hambali-fitrianto.github.io/TTG-Developer-Test_Hambali-Fitrianto/)

---

## 📝 Deskripsi Proyek
Dokumen ini merangkum seluruh hasil pengerjaan Tes Teknis (TTG) yang mencakup pengembangan *Front-End*, *Back-End API*, serta implementasi logika algoritma dan kalkulasi matematika. Seluruh fungsionalitas telah diuji secara menyeluruh.

---

## 📂 Detail Pengerjaan Soal

### **Soal 1: Front-End Dashboard**
* **Teknologi**: HTML5, CSS3, dan Tailwind CSS (via CDN).
* **Deskripsi**: Membangun antarmuka pengguna (UI) yang bersih, profesional, dan responsif sebagai pusat navigasi utama.
* **Fitur**: Kartu navigasi interaktif dengan efek *hover* yang menghubungkan penguji ke setiap modul pengerjaan soal secara instan.

### **Soal 2: Back-End API Pengguna (Technical Deep Dive)**
Sistem manajemen data pengguna berbasis REST API yang dibangun dengan arsitektur Node.js dan database NoSQL.
* **Stack Utama**: Node.js, **Express.js** (Framework), dan **MongoDB** (Database).
* **Library & Dependensi**:
    * `express`: Framework web utama untuk menangani routing dan server.
    * `mongoose`: ODM (Object Data Modeling) untuk mendefinisikan skema data dan mengelola koneksi database.
    * `express.json()`: Middleware wajib untuk memproses data body berformat JSON.
* **Database Management**: Pengelolaan data dilakukan menggunakan **Navicat Premium** pada koneksi `localhost:27017`.
* **Fitur API**:
    * **Create (POST)**: Menambah pengguna baru dengan validasi **Email Unik**.
    * **Read (GET)**: Mengambil seluruh daftar pengguna atau data spesifik berdasarkan ID.
    * **Delete (DELETE)**: Menghapus data pengguna secara permanen berdasarkan ID.

### **Soal 3: Logika Angka Hilang**
* **Bahasa**: JavaScript.
* **Metode**: Algoritma pencarian selisih nilai (difference) untuk mendeteksi angka yang tidak ada dalam urutan array.
* **Output**: Angka yang terdeteksi hilang ditampilkan secara dinamis pada interface.

### **Soal 4: Formula Kalkulasi**
* **Bahasa**: JavaScript.
* **Metode**: Implementasi fungsi kalkulasi matematika dinamis berdasarkan formula spesifik pada instruksi soal.
* **Output**: Sistem menghitung secara otomatis dan menampilkan hasil real-time berdasarkan input pengguna.

---

## 🚀 Panduan Menjalankan & Pengujian

### **1. Akses Live Demo (Front-End & Logika)**
Untuk memeriksa hasil pengerjaan secara langsung di browser:  
👉 **[Buka Live Demo GitHub Pages](https://hambali-fitrianto.github.io/TTG-Developer-Test_Hambali-Fitrianto/)**

Atau jalankan secara lokal:
* **Dashboard Utama**: Buka file `index.html` di folder root utama.
* **Soal 1**: Buka file `index.html` di dalam folder `soal1-frontend`.
* **Soal 3**: Buka file `index.html` di dalam folder `soal3-angka-hilang`.
* **Soal 4**: Buka file `index.html` di dalam folder `soal4-formula-kalkulasi`.

### **2. Konfigurasi Database & API (Soal 2)**
* **Prasyarat**: Pastikan **MongoDB** lokal aktif pada port `27017`.
* **Instalasi**: Masuk ke terminal folder `soal2-backend`.
* **Setup**: Jalankan `npm install` untuk memasang `express` & `mongoose`.
* **Running**: Jalankan `node index.js`. Server akan aktif di `http://localhost:3000`.

### **3. Dokumentasi Pengujian API (Postman)**
Pengujian dilakukan secara mendetail menggunakan profil pengembang:

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
    * Ketika mengirim ulang data dengan email yang sama, sistem memberikan proteksi:
    * **Respon Error**: HTTP Status `400 Bad Request` | `{"message": "Email sudah dipakai!"}`.

---
**Hambali Fitrianto** - Developer Test (2026)