# push-streak-360-day-start-day-6

## 📅 Day 6 — 15 Mei 2025  
### 🎯 Fokus: Merancang Section Layanan yang Efisien dan Menarik

---

### 🧩 Apa yang Dikerjakan Hari Ini?

Hari ini aku mengerjakan bagian **section layanan** pada landing page, yang merupakan salah satu bagian paling krusial dalam meyakinkan pengunjung tentang _"kita bisa bantu apa?"_

Aku merancang bagian ini agar:
- Cepat dimengerti dalam waktu <5 detik,
- Visualnya bersih dan profesional,
- Mudah di-scan oleh mata manusia,
- Responsif untuk semua ukuran layar.

📸 Contoh inspirasi visual layout:

![Service Section Reference](https://i.imgur.com/e74TnbP.png)

> Sumber inspirasi dari designstripe & UIdeck

---

### 🔍 Struktur Konten Section Layanan

Bagian ini memiliki 3 elemen utama layanan yang umum ditawarkan oleh agensi web, yaitu:

1. **Web Development**  
   💻 Fokus pada membangun website yang cepat dan user-friendly.

2. **Desain UI/UX**  
   🎨 Membangun antarmuka yang estetis, jelas, dan mudah digunakan.

3. **Optimasi & Launching**  
   🚀 Membantu optimasi performa, SEO, serta proses deploy website ke internet.

---

### 🧠 Alur Implementasi

#### 1. **Struktur HTML**
Aku menyusun HTML dengan tag `<section>` sebagai pembungkus, lalu menggunakan div untuk setiap layanan. Setiap card berisi ikon, judul, dan deskripsi singkat.

#### 2. **Desain Visual (CSS)**
Untuk gaya visual, aku gunakan konsep:
- **Card UI** dengan efek shadow & hover,
- **Grid layout** agar rapi di berbagai ukuran layar,
- Warna netral dengan aksen biru sebagai warna utama.

📸 Contoh visual card yang digunakan:

![Card UI](https://i.imgur.com/pGhBB2z.png)

---

#### 3. **Interaktivitas (JavaScript)**
Bagian ini memanfaatkan **fetch API** untuk memuat data layanan dari file `services.json`. Jadi jika suatu hari mau menambahkan layanan, tinggal edit file JSON-nya tanpa utak-atik HTML.

📌 Keunggulannya:
- Lebih fleksibel dan maintainable,
- Cocok kalau nanti mau pakai CMS atau backend,
- Aman untuk digunakan di proyek besar.

---
