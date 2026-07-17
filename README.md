# Car Price Prediction System

## Deskripsi
Car Price Prediction System merupakan aplikasi berbasis web yang digunakan untuk memprediksi harga mobil bekas menggunakan algoritma Machine Learning Random Forest Regression. Aplikasi dibangun menggunakan Laravel sebagai backend utama, React + Inertia.js sebagai frontend, serta Flask sebagai API untuk menjalankan model Machine Learning.

---

# Bahasa Pemrograman

- PHP
- JavaScript
- Python
- SQL

---

# Framework, Library, API yang Digunakan

## Backend
- Laravel 12
- Inertia.js

## Frontend
- React.js
- Tailwind CSS
- Axios / Fetch API

## Machine Learning
- Python
- Flask
- Scikit-Learn
- Pandas
- NumPy
- Joblib

## Database
- MySQL

---

# Algoritma Machine Learning

- Random Forest Regression

---

# Fitur Aplikasi

✅ Login dan Register User

✅ Dashboard

✅ Prediksi Harga Mobil

- Memilih nama mobil
- Tahun kendaraan
- Kilometer tempuh
- Jenis bahan bakar
- Seller Type
- Transmission
- Owner
- Mileage
- Engine
- Max Power
- Seats

✅ Integrasi Laravel dengan Flask API

✅ Menampilkan hasil prediksi harga mobil

✅ Menyimpan riwayat prediksi ke database

---

# Cara Menjalankan Project

## Clone Repository

```bash
git clone (https://github.com/Harit28/Car-Price_prediction.git)
```

## Laravel

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan storage:link
npm install
npm run dev
php artisan serve
```

## Flask API

Masuk ke folder Flask

```bash
cd flask_api
```

Install library

```bash
pip install flask flask-cors pandas numpy scikit-learn joblib
```

Jalankan API

```bash
python app.py
```

---

# Dataset

Dataset diperoleh dari Kaggle:

https://www.kaggle.com/datasets/sukhmandeepsinghbrar/car-price-prediction-dataset
---

# Penjelasan Dataset

Dataset CarDekho merupakan dataset kendaraan bekas yang berasal dari marketplace mobil di India.

Jumlah data:
- ±8.100 data

Target:
- selling_price

Fitur yang digunakan:

- name
- year
- km_driven
- fuel
- seller_type
- transmission
- owner
- mileage(km/ltr/kg)
- engine
- max_power
- seats

Dataset dibersihkan melalui proses preprocessing seperti:
- Menghapus missing value
- Konversi tipe data
- Label Encoding pada data kategorikal

---

# Hasil Model

Algoritma:
- Random Forest Regression

Evaluasi Model

R² Score :

0.924

Artinya model mampu menjelaskan sekitar 92% variasi harga kendaraan pada dataset.

---

# Kelebihan Project

- Tampilan modern menggunakan React dan Tailwind CSS.
- Integrasi Laravel dengan Flask API.
- Menggunakan Machine Learning Random Forest Regression.
- Hasil prediksi dapat disimpan ke database.
- Dropdown otomatis mengambil data dari model Machine Learning.
- Struktur project dipisahkan antara frontend, backend, dan model ML.

---

# Kekurangan Project

- Dataset berasal dari India sehingga harga masih mengikuti pasar India.
- Hasil prediksi dikonversi ke Rupiah menggunakan kurs sehingga tidak mencerminkan harga pasar Indonesia secara akurat.
- Model hanya menggunakan satu algoritma (Random Forest Regression).
- Belum tersedia fitur visualisasi performa model secara lengkap.
- Belum tersedia upload dataset baru untuk melakukan pelatihan ulang model.

---

# Struktur Project

```
Laravel
│
├── React (Frontend)
│
├── Prediction Controller
│
├── Flask API
│      │
│      ├── model.pkl
│      ├── encoders.pkl
│      └── app.py
│
└── MySQL
```

---

# Author

Nama : Harit Kusuma

Instansi : Universitas PGRI Madiun

Mata Kuliah : Kecerdasan Buatan
