# React Game Store - Joy Leap Studio Internship Submission

![React Game Store](public/assets/images/logo.png)

Welcome to my submission for the **Web Developer Internship** at **Funtasya World (Joy Leap Studio)**. This project is a modern, dynamic React application that serves as a Game Store Dashboard.

**Developed by: Maheza Daud**

---

## 🌟 Key Enhancements & UI/UX Improvements

While building this application based on the given design references, I took the initiative to implement several **Quality of Life (QoL) and UI/UX improvements** to ensure the product is not just visually appealing, but also highly functional and user-friendly.

Here are the key enhancements I added to the original design:

### 1. Smart Carousel Auto-Pause (Enhanced User Experience)
**Masalah:** Pada desain aslinya, ketika pengguna menekan tombol *Play* untuk menonton *trailer* YouTube di dalam *Carousel*, *slide* akan tetap bergeser (*autoplay*) sehingga pengguna tidak bisa menonton video dengan tenang.
**Solusi:** Saya menambahkan *event listener* pada *Swiper instance* yang secara otomatis akan memicu `autoplay.stop()` ketika video diputar, dan kembali memicu `autoplay.start()` ketika video ditutup. Hal ini memberikan pengalaman menonton yang jauh lebih imersif dan tidak mengganggu fokus pengguna.

### 2. High-Contrast Typography (Accessibility Fix)
**Masalah:** Judul game pada *Carousel* awalnya menggunakan trik `-webkit-mask` transparan. Walaupun memberikan kesan futuristik, hal ini mengorbankan tingkat keterbacaan (*readability*), terutama jika *background slider* terlalu terang atau ramai.
**Solusi:** Mempertimbangkan aspek aksesibilitas (A11y), saya menghapus *masking* tembus pandang tersebut dan menggantinya dengan warna teks **Solid White** yang diperkuat oleh **Double Drop-Shadow** tebal. Kontras yang tajam ini memastikan judul game selalu 100% terbaca dengan jelas di segala situasi tanpa kehilangan estetika *gaming*-nya.

### 3. Reliable Asset Loading (Bug Fix)
**Masalah:** Aset gambar diambil dari *REST API (Render)* yang memiliki sistem *sleep* ketika tidak aktif. Hal ini sering menyebabkan gambar gagal dimuat (menjadi *blank*) karena *timeout* saat pertama kali web dibuka.
**Solusi:** Saya melakukan *data scraping* dan mengunduh seluruh aset *background game* untuk disajikan secara **Lokal**. Ini menjamin web selalu memuat gambar seketika (0 detik) dan bebas dari *layout-shift* atau ruang kosong di *Carousel*.

### 4. Consistent Neumorphism Design (UI Refinement)
**Masalah:** Beberapa tombol tambahan (seperti tombol *Checkout* di keranjang) memiliki *styling* dasar yang tidak selaras dengan tema aplikasi.
**Solusi:** Saya merancang ulang kelas `.checkoutBtn` dengan menyuntikkan efek *Glassmorphism/Neumorphism* (*box-shadow* ganda bernuansa cahaya putih dan bayangan hitam) agar konsisten dengan tombol navigasi *Header*. Ini menjaga integritas *Design System* aplikasi dari ujung ke ujung.

### 5. Seamless Logic via Context API
Semua interaksi yang ada (mulai dari menambahkan game ke *Library*, menghitung total harga di *Bag*, hingga *filtering* kategori) dihidupkan sepenuhnya tanpa mengubah struktur CSS asli, mengandalkan kekuatan **React Context API** dan *State Management* untuk menciptakan arsitektur komponen yang bersih dan terukur.

---

Terima kasih telah meninjau repositori ini. Saya sangat bersemangat untuk dapat berkontribusi, belajar, dan berkembang bersama tim **Joy Leap Studio**!
