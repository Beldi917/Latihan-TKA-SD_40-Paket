// Question Database
const questionsData = {
    "Matematika": {},
    "Bahasa Indonesia": {}
};

// Mathematics Blueprint Templates
const mathBlueprint = [
    { no: 1, materi: "Bilangan", submateri: "Pecahan", kompetensi: "Operasi pecahan", level: "L1", tipe: "PG" },
    { no: 2, materi: "Bilangan", submateri: "Pecahan", kompetensi: "Perbandingan", level: "L1", tipe: "PG" },
    { no: 3, materi: "Bilangan", submateri: "Pecahan", kompetensi: "Konversi persen", level: "L2", tipe: "PG" },
    { no: 4, materi: "Bilangan", submateri: "Bilangan", kompetensi: "Operasi campuran", level: "L2", tipe: "PG" },
    { no: 5, materi: "Bilangan", submateri: "Bilangan", kompetensi: "KPK FPB", level: "L2", tipe: "PG" },
    { no: 6, materi: "Bilangan", submateri: "Pecahan", kompetensi: "Pecahan senilai", level: "L1", tipe: "PG" },
    { no: 7, materi: "Bilangan", submateri: "Pecahan", kompetensi: "Operasi pecahan", level: "L2", tipe: "PGK" },
    { no: 8, materi: "Bilangan", submateri: "Bilangan", kompetensi: "Faktor kelipatan", level: "L1", tipe: "PG" },
    { no: 9, materi: "Bilangan", submateri: "Pecahan", kompetensi: "Soal kontekstual", level: "L2", tipe: "PG" },
    { no: 10, materi: "Bilangan", submateri: "Bilangan", kompetensi: "Operasi campuran", level: "L3", tipe: "PG" },
    { no: 11, materi: "Bilangan", submateri: "Pecahan", kompetensi: "Masalah nyata", level: "L3", tipe: "PGK" },
    { no: 12, materi: "Bilangan", submateri: "Bilangan", kompetensi: "Penalaran", level: "L3", tipe: "PG" },
    { no: 13, materi: "Geometri", submateri: "Bangun datar", kompetensi: "Identifikasi", level: "L1", tipe: "PG" },
    { no: 14, materi: "Geometri", submateri: "Bangun ruang", kompetensi: "Visualisasi", level: "L2", tipe: "PG" },
    { no: 15, materi: "Pengukuran", submateri: "Keliling", kompetensi: "Hitung", level: "L2", tipe: "PG" },
    { no: 16, materi: "Pengukuran", submateri: "Luas", kompetensi: "Hitung", level: "L2", tipe: "PG" },
    { no: 17, materi: "Pengukuran", submateri: "Volume", kompetensi: "Hitung", level: "L2", tipe: "PG" },
    { no: 18, materi: "Pengukuran", submateri: "Panjang", kompetensi: "Konversi", level: "L1", tipe: "PG" },
    { no: 19, materi: "Pengukuran", submateri: "Berat", kompetensi: "Konversi", level: "L1", tipe: "PGK" },
    { no: 20, materi: "Pengukuran", submateri: "Waktu", kompetensi: "Operasi", level: "L2", tipe: "PG" },
    { no: 21, materi: "Geometri", submateri: "Sudut", kompetensi: "Identifikasi", level: "L2", tipe: "PG" },
    { no: 22, materi: "Pengukuran", submateri: "Kontekstual", kompetensi: "Masalah", level: "L3", tipe: "PG" },
    { no: 23, materi: "Data", submateri: "Diagram", kompetensi: "Membaca", level: "L1", tipe: "PG" },
    { no: 24, materi: "Data", submateri: "Diagram batang", kompetensi: "Interpretasi", level: "L2", tipe: "PG" },
    { no: 25, materi: "Data", submateri: "Tabel", kompetensi: "Membaca", level: "L1", tipe: "PG" },
    { no: 26, materi: "Data", submateri: "Data", kompetensi: "Kesimpulan", level: "L2", tipe: "PG" },
    { no: 27, materi: "Data", submateri: "Diagram", kompetensi: "Perbandingan", level: "L2", tipe: "PGK" },
    { no: 28, materi: "Data", submateri: "Data", kompetensi: "Analisis", level: "L3", tipe: "PG" },
    { no: 29, materi: "Data", submateri: "Data", kompetensi: "Evaluasi", level: "L3", tipe: "PGK" },
    { no: 30, materi: "Data", submateri: "Data", kompetensi: "Pemecahan masalah", level: "L3", tipe: "PG" }
];

// Indonesian Blueprint Templates
const indoBlueprint = [
    { no: 1, kompetensi: "Pemahaman Tekstual", subkompetensi: "Informasi tersurat", materi: "Teks informasi", level: "L1", tipe: "PG" },
    { no: 2, kompetensi: "Pemahaman Tekstual", subkompetensi: "Informasi tersurat", materi: "Teks fiksi", level: "L1", tipe: "PG" },
    { no: 3, kompetensi: "Pemahaman Tekstual", subkompetensi: "Kosakata", materi: "Teks informasi", level: "L1", tipe: "PGK" },
    { no: 4, kompetensi: "Pemahaman Tekstual", subkompetensi: "Identifikasi objek", materi: "Teks fiksi", level: "L1", tipe: "PG" },
    { no: 5, kompetensi: "Pemahaman Tekstual", subkompetensi: "Menyusun informasi", materi: "Teks informasi", level: "L2", tipe: "PG" },
    { no: 6, kompetensi: "Pemahaman Tekstual", subkompetensi: "Ikhtisar", materi: "Teks fiksi", level: "L2", tipe: "PG" },
    { no: 7, kompetensi: "Pemahaman Tekstual", subkompetensi: "Mengelompokkan", materi: "Teks informasi", level: "L2", tipe: "PGK" },
    { no: 8, kompetensi: "Pemahaman Tekstual", subkompetensi: "Identifikasi fakta", materi: "Teks informasi", level: "L1", tipe: "PG" },
    { no: 9, kompetensi: "Pemahaman Tekstual", subkompetensi: "Identifikasi tokoh", materi: "Teks fiksi", level: "L1", tipe: "PG" },
    { no: 10, kompetensi: "Pemahaman Tekstual", subkompetensi: "Bagian teks", materi: "Teks informasi", level: "L2", tipe: "PG" },
    { no: 11, kompetensi: "Inferensial", subkompetensi: "Ide pokok", materi: "Informasi", level: "L2", tipe: "PG" },
    { no: 12, kompetensi: "Inferensial", subkompetensi: "Kesimpulan teks", materi: "Fiksi", level: "L2", tipe: "PG" },
    { no: 13, kompetensi: "Inferensial", subkompetensi: "Makna kata", materi: "Informasi", level: "L2", tipe: "PGK" },
    { no: 14, kompetensi: "Inferensial", subkompetensi: "Amanat", materi: "Fiksi", level: "L2", tipe: "PG" },
    { no: 15, kompetensi: "Inferensial", subkompetensi: "Peristiwa", materi: "Fiksi", level: "L3", tipe: "PG" },
    { no: 16, kompetensi: "Inferensial", subkompetensi: "Sebab akibat", materi: "Informasi", level: "L3", tipe: "PG" },
    { no: 17, kompetensi: "Inferensial", subkompetensi: "Makna teks", materi: "Fiksi", level: "L3", tipe: "PG" },
    { no: 18, kompetensi: "Inferensial", subkompetensi: "Perubahan tokoh", materi: "Fiksi", level: "L3", tipe: "PGK" },
    { no: 19, kompetensi: "Inferensial", subkompetensi: "Gagasan", materi: "Informasi", level: "L2", tipe: "PG" },
    { no: 20, kompetensi: "Inferensial", subkompetensi: "Kesimpulan", materi: "Informasi", level: "L3", tipe: "PG" },
    { no: 21, kompetensi: "Evaluasi", subkompetensi: "Menilai isi", materi: "Informasi", level: "L3", tipe: "PG" },
    { no: 22, kompetensi: "Evaluasi", subkompetensi: "Relevansi", materi: "Fiksi", level: "L3", tipe: "PGK" },
    { no: 23, kompetensi: "Evaluasi", subkompetensi: "Tanggapan teks", materi: "Informasi", level: "L3", tipe: "PG" },
    { no: 24, kompetensi: "Evaluasi", subkompetensi: "Karakter tokoh", materi: "Fiksi", level: "L3", tipe: "PG" },
    { no: 25, kompetensi: "Evaluasi", subkompetensi: "Fakta/opini", materi: "Informasi", level: "L3", tipe: "PG" },
    { no: 26, kompetensi: "Evaluasi", subkompetensi: "Bahasa penulis", materi: "Fiksi", level: "L3", tipe: "PG" },
    { no: 27, kompetensi: "Evaluasi", subkompetensi: "Refleksi", materi: "Fiksi", level: "L3", tipe: "PGK" },
    { no: 28, kompetensi: "Evaluasi", subkompetensi: "Pesan", materi: "Informasi", level: "L3", tipe: "PG" },
    { no: 29, kompetensi: "Evaluasi", subkompetensi: "Kesesuaian isi", materi: "Informasi", level: "L3", tipe: "PGK" },
    { no: 30, kompetensi: "Evaluasi", subkompetensi: "Respons emosional", materi: "Fiksi", level: "L3", tipe: "PGK" }
];

function generateMathQuestion(blueprint, packageNum) {
    const pk = packageNum;
    let text = "", options = [], answer = 0, image = "";
    
    // Difficulty scaling factors
    const isHots = pk >= 8;
    const multiplier = pk;

    // Helper for literacy contexts
    const contexts = [
        { name: "Pasar Tradisional", img: "market" },
        { name: "Toko Buku", img: "bookstore" },
        { name: "Kebun Binatang", img: "zoo" },
        { name: "Perpustakaan Sekolah", img: "library" },
        { name: "Taman Kota", img: "park" },
        { name: "Toko Sembako", img: "grocery" },
        { name: "Stasiun Kereta", img: "station" },
        { name: "Pelabuhan", img: "port" },
        { name: "Sawah Pak Tani", img: "farm" },
        { name: "Bengkel Sepeda", img: "workshop" }
    ];
    const ctx = contexts[(pk - 1) % contexts.length];

    switch (blueprint.no) {
        case 1: // Operasi pecahan L1
            text = `Di ${ctx.name}, Ibu membeli ${pk} kg tepung terigu. Sebanyak 1/4 bagian digunakan untuk membuat kue bolu, dan 1/2 kg digunakan untuk membuat gorengan. Berapa kg sisa tepung terigu Ibu sekarang?`;
            const val1 = pk - (pk * 0.25) - 0.5;
            options = [val1.toFixed(2), (val1 + 0.5).toFixed(2), (val1 - 0.25).toFixed(2), pk];
            image = pk === 6 
                ? "https://blogger.googleusercontent.com/img/a/AVvXsEjcA233ceQ4F26mr8WlPjNURYmKrbmpBUxtqLG7IszLoedyTdvDjMRnOhwNwGAWrr9fWSWBaxdSHTcIJu6ClGhwJ76uCcEe1vHfW5ulhGwxSiNZssnNvWEa3kFIF8V9u823H2M_2DK9okHM4XixFi7GDP2e0Ye3XlGIxBCXS8ZLL0Znrg4ZeoACq-O8J20"
                : `https://picsum.photos/seed/flour_${pk}/600/400`;
            answer = 0;
            break;
        case 2: // Perbandingan L1
            text = `Seorang pedagang di ${ctx.name} memiliki stok ${pk * 20} buah apel merah dan ${pk * 50} buah apel hijau. Perbandingan paling sederhana antara jumlah apel merah dan apel hijau adalah ...`;
            options = ["2 : 5", "1 : 2", "5 : 2", "3 : 5"];
            image = pk === 6
                ? "https://blogger.googleusercontent.com/img/a/AVvXsEh5OycblcYeOpAlNMl_iVvQjw5zoAqywyxB-MzCC5mHo9iuHWCud8GbBPQQR1LoEkb6hVq9A6nS1182A9art3TQS1FGbANmxWptjPQmqKVoPO5m_Scf-p_pLGspYUdy_azbvQiip-j-T23Lk38xf3QVc8mNzzL1rYmrd9vHU8JkmrsDo5JMIeAA5NjKDuY"
                : `https://picsum.photos/seed/apples_${pk}/600/400`;
            answer = 0;
            break;
        case 3: // Konversi persen L2
            text = `Di sebuah ${ctx.name}, terdapat ${pk * 50} pengunjung. Jika ${pk * 3} orang di antaranya adalah anak-anak, berapa persentase pengunjung anak-anak tersebut?`;
            const num3 = pk * 3;
            options = [`${(num3 / (pk * 50) * 100).toFixed(0)}%`, `${num3}%`, `${num3 * 5}%`, `${num3 / 2}%`];
            image = pk === 6
                ? "https://blogger.googleusercontent.com/img/a/AVvXsEiNOqFHPa0SwN1pv6KfFW9X67xl5D8Y-SHkVJFwa4y70yhvbq-kFmL5AgaLqge19v-xI1ToLU04wOBkxCAAsNuglN40DlRobWhhae5nhyRx4QXcf6IerBkqEO4ow2iQ_drS_FlCfeGlFzlWbA4bCJ5iosARFloa9MNiXNI3uNseXSEVmTxjCUIFn83v0KY"
                : `https://picsum.photos/seed/crowd_${pk}/600/400`;
            answer = 0;
            break;
        case 4: // Operasi campuran L2
            text = `Pak Budi memiliki ${pk * 100} bibit pohon. Ia menanam ${pk * 25} bibit di pagi hari dan ${pk * 30} bibit di sore hari. Jika sisa bibit akan dibagikan kepada 5 tetangganya secara merata, berapa bibit yang diterima setiap tetangga?`;
            const sisa4 = (pk * 100) - (pk * 25) - (pk * 30);
            options = [sisa4 / 5, sisa4 / 10, sisa4, sisa4 - 5];
            image = `https://picsum.photos/seed/trees_${pk}/600/400`;
            answer = 0;
            break;
        case 5: // KPK FPB L2
            text = `Lampu hias di sebuah taman berwarna merah menyala setiap ${pk * 6} detik, sedangkan lampu kuning menyala setiap ${pk * 8} detik. Pada detik ke berapa kedua lampu tersebut akan menyala bersamaan untuk pertama kalinya?`;
            options = [pk * 24, pk * 12, pk * 48, pk * 6];
            image = pk === 6
                ? "https://blogger.googleusercontent.com/img/a/AVvXsEjs_VmeFaSZOczq7FGgH9684TAxGqHRiiwcKpXjH7_lbk9VzTn7qnknT_nPVRQKhmUb-Ir3xLedHm7VGY2KC7snxapUI43SuCVwXNDQ_O09GT5MVjTb-4fFuVHgsXOldQHgiIRfmc0MNowe1lMG7QYscTR7NmPI3t3KHN2plrGNVBH4_6D2nbHAF-sRsEg"
                : `https://picsum.photos/seed/lights_${pk}/600/400`;
            answer = 0;
            break;
        case 6: // Pecahan senilai L1
            text = `Di sebuah bengkel, seorang pengrajin membagi sebatang kayu menjadi ${pk * 3} bagian sama panjang. Jika ia mengambil ${pk} bagian, maka nilai pecahan tersebut senilai dengan ...`;
            options = ["1/3", "1/2", "2/3", "1/4"];
            image = pk === 6
                ? "https://blogger.googleusercontent.com/img/a/AVvXsEiFM3xET6LpgbYrKAQbTZ5Lzrkjn5Ra9alzbsVm1cEUr6drwl1XdwpmBVT8rWr4mtD6-iKR_Rxa50643ji0-dnRdXSJQv2t37I5qOesqCTLlUAR-pNXdAfYeW2obmyVyFNKo1gqK0GbauZmcIT2r7mIuD3Gtn5Ej-rLU2PVog6WezY7gOiNn8vIZEIw2fA"
                : `https://picsum.photos/seed/wood_${pk}/600/400`;
            answer = 0;
            break;
        case 7: // Operasi pecahan L2 (PGK)
            text = `Seorang koki di ${ctx.name} menggunakan 3/4 kg gula untuk kue pertama dan 1/2 kg untuk kue kedua. Manakah pernyataan berikut yang benar mengenai total penggunaan gula tersebut?`;
            options = ["Total gula adalah 1 1/4 kg", "Total gula kurang dari 1 kg", "Selisih gula adalah 1/8 kg", "Gula yang digunakan sama banyak"];
            image = pk === 6 
                ? "https://blogger.googleusercontent.com/img/a/AVvXsEiG9jUIOq-EazpOyZMVSTHTPRG51IuczDlB9UlNOAVg5Jmw93Qs4d6miM_igenV5yy-9D-ionwZGnd9eNj5uWl_CKaQuxOExMk7kU3ikfK37xzoOgMZrIyLmvjuYVBbVvyMBntkMA7VfY5tcOQHoySKH8dmsQ5OfMWBPRLlNGCalWJ0UOx_33BEgcXe3cY"
                : `https://picsum.photos/seed/sugar_${pk}/600/400`;
            answer = 0;
            break;
        case 8: // Faktor kelipatan L1
            text = `Seorang petugas mengatur kursi dalam barisan di sebuah aula. Jika setiap baris berisi ${pk * 2} kursi, manakah dari berikut yang merupakan total kursi yang mungkin jika jumlah baris adalah bilangan bulat?`;
            options = [pk * 10, pk * 3 + 1, pk * 5 + 2, pk * 7 - 1];
            image = `https://picsum.photos/seed/chairs_${pk}/600/400`;
            answer = 0;
            break;
        case 9: // Soal kontekstual L2
            text = `Andi membeli ${pk * 2} buku tulis di ${ctx.name}. Jika harga satu buku adalah Rp3.500, berapa total uang yang harus dibayar Andi?`;
            options = [`Rp${pk * 2 * 3500}`, `Rp${pk * 3500}`, `Rp${pk * 10000}`, `Rp7.000`];
            image = `https://picsum.photos/seed/notebook_${pk}/600/400`;
            answer = 0;
            break;
        case 10: // Operasi campuran L3 (HOTS)
            text = `Sebuah perpustakaan menerima kiriman ${pk * 50} buku baru. Sebanyak ${pk * 10} buku rusak dan tidak bisa dipajang. Sisanya akan dibagi ke dalam 4 rak secara merata. Berapa banyak buku di setiap rak?`;
            const sisa10 = (pk * 50) - (pk * 10);
            options = [sisa10 / 4, sisa10 / 2, sisa10, sisa10 - 4];
            image = `https://picsum.photos/seed/bookshelf_${pk}/600/400`;
            answer = 0;
            break;
        case 11: // Masalah nyata L3
            text = `Di sebuah kebun, seorang petani memanen ${pk * 12} kg tomat. Ia ingin mengemas tomat tersebut ke dalam plastik berukuran 1.5 kg. Berapa banyak plastik yang dibutuhkan petani?`;
            const num11 = (pk * 12) / 1.5;
            options = [num11, num11 + 2, num11 - 1, pk * 10];
            image = `https://picsum.photos/seed/tomato_${pk}/600/400`;
            answer = 0;
            break;
        case 12: // Penalaran L3
            text = `Sebuah bus berangkat dari terminal setiap ${pk + 5} menit. Jika bus pertama berangkat pukul 07.00, pukul berapakah bus ke-4 akan berangkat?`;
            const time12 = (pk + 5) * 3;
            options = [`07.${time12 < 10 ? '0' + time12 : time12}`, `07.${time12 + 5}`, `08.00`, `07.15`];
            image = `https://picsum.photos/seed/bus_${pk}/600/400`;
            answer = 0;
            break;
        case 13: // Geometri L1
            text = `Seorang arsitek merancang sebuah taman yang memiliki 3 sisi sama panjang dan 3 sudut yang sama besar. Bangun datar apakah yang dimaksud?`;
            options = ["Segitiga Sama Sisi", "Persegi", "Segitiga Siku-siku", "Lingkaran"];
            image = `https://picsum.photos/seed/triangle_park_${pk}/600/400`;
            answer = 0;
            break;
        case 14: // Geometri L2
            text = `Di sebuah gudang di ${ctx.name}, terdapat kotak penyimpanan berbentuk kubus. Jika kotak tersebut memiliki 12 rusuk yang sama panjang, berapa banyak titik sudut yang dimiliki kotak tersebut?`;
            options = ["8", "6", "12", "4"];
            image = `https://picsum.photos/seed/cube_box_${pk}/600/400`;
            answer = 0;
            break;
        case 15: // Keliling L2
            const r15 = pk + 7;
            text = `Sebuah taman berbentuk lingkaran memiliki jari-jari ${r15} meter. Jika Andi berlari mengelilingi taman tersebut sebanyak satu kali, berapa meter jarak yang ditempuh Andi? (π = 22/7)`;
            options = [2 * 22/7 * r15, 22/7 * r15, 2 * 22/7 * r15 * r15, 44];
            image = `https://picsum.photos/seed/circle_park_${pk}/600/400`;
            answer = 0;
            break;
        case 16: // Luas L2
            const alas16 = pk + 10, tinggi16 = pk + 5;
            text = `Seorang petani memiliki sebidang tanah berbentuk segitiga dengan alas ${alas16} meter dan tinggi ${tinggi16} meter. Berapa luas tanah petani tersebut?`;
            options = [0.5 * alas16 * tinggi16, alas16 * tinggi16, alas16 + tinggi16, alas16 * 2];
            image = `https://picsum.photos/seed/field_${pk}/600/400`;
            answer = 0;
            break;
        case 17: // Volume L2
            const p17 = pk + 5, l17 = 4, t17 = 5;
            text = `Sebuah akuarium di ${ctx.name} memiliki panjang ${p17} cm, lebar ${l17} cm, dan tinggi ${t17} cm. Berapa cm³ volume air maksimal yang dapat ditampung akuarium tersebut?`;
            options = [p17 * l17 * t17, p17 + l17 + t17, (p17 + l17) * t17, p17 * l17];
            image = `https://picsum.photos/seed/aquarium_${pk}/600/400`;
            answer = 0;
            break;
        case 18: // Konversi L1
            text = `Seorang pelari menempuh jarak ${pk} km dari ${ctx.name} ke rumahnya. Berapa meter jarak yang ditempuh pelari tersebut?`;
            options = [pk * 1000, pk * 100, pk * 10, pk * 500];
            image = `https://picsum.photos/seed/runner_${pk}/600/400`;
            answer = 0;
            break;
        case 19: // Konversi Berat L1
            text = `Ibu membeli ${pk * 500} gram cabai di ${ctx.name}. Berapa kg cabai yang dibeli Ibu?`;
            options = [(pk * 500) / 1000, pk * 5, pk / 2, 1];
            image = `https://picsum.photos/seed/chili_${pk}/600/400`;
            answer = 0;
            break;
        case 20: // Waktu L2
            text = `Budi mulai belajar pukul 08.00 dan selesai pukul 09.${pk < 10 ? '0' + pk : pk}. Berapa menit Budi belajar?`;
            options = [60 + pk, pk, 60, 120];
            image = `https://picsum.photos/seed/study_${pk}/600/400`;
            answer = 0;
            break;
        case 21: // Sudut L2
            text = `Di ${ctx.name}, terdapat sebuah jam dinding yang menunjukkan pukul 03.00 tepat. Berapa besar sudut terkecil yang dibentuk oleh kedua jarum jam tersebut?`;
            options = ["90°", "45°", "180°", "60°"];
            image = `https://picsum.photos/seed/clock_${pk}/600/400`;
            answer = 0;
            break;
        case 22: // Kontekstual L3
            text = `Sebuah kolam ikan berbentuk persegi panjang memiliki ukuran ${pk+5}m x ${pk+2}m. Jika di sekeliling kolam akan dipasang pagar kawat dengan biaya Rp${pk*10000} per meter, berapakah total biaya yang diperlukan?`;
            const kel22 = 2 * ((pk+5) + (pk+2));
            options = [`Rp${kel22 * pk * 10000}`, `Rp${kel22 * 10000}`, `Rp${(pk+5)*(pk+2)*10000}`, `Rp1.000.000`];
            image = `https://picsum.photos/seed/fishpond_${pk}/600/400`;
            answer = 0;
            break;
        case 23: // Data L1
            text = `Berikut adalah data jumlah pengunjung ${ctx.name} selama 5 hari: 10, 15, ${pk+20}, 12, 18. Berapa jumlah pengunjung pada hari ketiga?`;
            options = [pk + 20, 10, 15, 12];
            image = `https://picsum.photos/seed/chart_${pk}/600/400`;
            answer = 0;
            break;
        case 24: // Data L2
            text = `Rata-rata jumlah pembeli di ${ctx.name} selama 3 jam adalah ${pk * 10} orang. Berapa total pembeli selama 3 jam tersebut?`;
            options = [pk * 30, pk * 10, pk * 20, 100];
            image = `https://picsum.photos/seed/shoppers_${pk}/600/400`;
            answer = 0;
            break;
        case 25: // Data L1
            text = `Di sebuah rak buku, terdapat ${pk * 8} buku cerita dan ${pk * 4} buku pelajaran. Berapa total buku di rak tersebut?`;
            options = [pk * 12, pk * 8, pk * 4, pk * 10];
            image = `https://picsum.photos/seed/books_${pk}/600/400`;
            answer = 0;
            break;
        case 26: // Data L2
            text = `Data nilai ulangan matematika sekelompok siswa: 7, 8, 7, 9, ${pk % 10 + 1}. Berapakah nilai yang paling sering muncul (modus) jika pk=${pk}?`;
            // Simplified for logic
            options = ["7", "8", "9", "6"];
            image = `https://picsum.photos/seed/scores_${pk}/600/400`;
            answer = 0;
            break;
        case 27: // Data L2
            text = `Di ${ctx.name}, perbandingan jumlah pengunjung pria dan wanita adalah 3 : ${pk % 5 + 2}. Jika jumlah pria adalah 30 orang, berapa jumlah wanita?`;
            const ratioW = pk % 5 + 2;
            options = [ratioW * 10, 30, 50, 20];
            image = `https://picsum.photos/seed/people_${pk}/600/400`;
            answer = 0;
            break;
        case 28: // Data L3
            text = `Sebuah survei di ${ctx.name} menunjukkan bahwa 40% dari ${pk * 100} responden menyukai buah jeruk. Berapa banyak responden yang menyukai buah jeruk?`;
            options = [pk * 40, pk * 100, pk * 60, 40];
            image = `https://picsum.photos/seed/survey_${pk}/600/400`;
            answer = 0;
            break;
        case 29: // Data L3
            text = `Rata-rata suhu udara selama 4 hari adalah ${pk + 25}°C. Jika suhu hari ke-5 adalah ${pk + 30}°C, berapa rata-rata suhu selama 5 hari?`;
            const avg29 = ((pk + 25) * 4 + (pk + 30)) / 5;
            options = [avg29, pk + 25, pk + 30, 30];
            image = `https://picsum.photos/seed/weather_${pk}/600/400`;
            answer = 0;
            break;
        case 30: // Data L3
            text = `Seorang pedagang di ${ctx.name} mencatat keuntungan selama seminggu. Jika total keuntungan adalah Rp${pk * 70000}, berapa rata-rata keuntungan per hari?`;
            options = [`Rp${pk * 10000}`, `Rp${pk * 7000}`, `Rp70.000`, `Rp${pk * 5000}`];
            image = `https://picsum.photos/seed/profit_${pk}/600/400`;
            answer = 0;
            break;
        default:
            text = `Di sebuah gudang, terdapat ${pk} buah kotak. Setiap kotak berisi ${blueprint.no} kelereng. Berapa total kelereng yang ada?`;
            const ansValDefault = pk * blueprint.no;
            options = [ansValDefault, ansValDefault + 1, ansValDefault - 1, ansValDefault * 2];
            image = `https://picsum.photos/seed/marbles_${pk}/600/400`;
            answer = 0;
    }

    return {
        id: blueprint.no,
        text: text,
        options: options.sort(() => Math.random() - 0.5),
        answer: options.indexOf(options[answer]),
        image: image,
        metadata: {
            materi: blueprint.materi,
            submateri: blueprint.submateri,
            kompetensi: blueprint.kompetensi,
            level: blueprint.level,
            tipe: blueprint.tipe
        }
    };
}

function generateIndoQuestion(blueprint, packageNum) {
    const pk = packageNum;
    let text = "", options = [], answer = 0;
    
    const isHots = pk >= 8;

    const texts = {
        informasi: [
            "Pendidikan adalah kunci masa depan. Dengan belajar rajin, kita bisa meraih cita-cita yang tinggi. Sekolah bukan hanya tempat mencari nilai, tapi tempat membentuk karakter.",
            "Kesehatan sangat penting bagi setiap orang. Olahraga teratur dan makan makanan bergizi seperti sayur dan buah dapat menjaga tubuh tetap bugar dan terhindar dari penyakit.",
            "Lingkungan yang bersih membuat kita merasa nyaman dan sehat. Kita harus membiasakan diri untuk tidak membuang sampah sembarangan, terutama sampah plastik yang sulit terurai.",
            "Teknologi digital berkembang sangat pesat di era sekarang. Kita harus bijak dalam menggunakan internet agar mendapatkan manfaat positif dan terhindar dari konten negatif.",
            "Hutan adalah paru-paru dunia yang harus kita jaga. Penebangan liar dapat menyebabkan bencana alam seperti banjir dan tanah longsor yang merugikan banyak orang.",
            "Budaya Indonesia sangat beragam dari Sabang sampai Merauke. Kita harus bangga dan melestarikan warisan budaya nenek moyang agar tidak punah ditelan zaman.",
            "Energi matahari adalah sumber energi terbarukan yang melimpah. Penggunaan panel surya dapat membantu mengurangi ketergantungan pada bahan bakar fosil.",
            "Transportasi umum yang baik dapat mengurangi kemacetan di kota besar. Masyarakat dihimbau untuk menggunakan bus atau kereta daripada kendaraan pribadi.",
            "Membaca buku adalah jendela dunia. Dengan membaca, wawasan kita akan bertambah luas dan kita bisa mengetahui banyak hal tanpa harus pergi ke tempat tersebut.",
            "Pertanian organik semakin diminati karena lebih sehat dan ramah lingkungan. Petani menggunakan pupuk alami daripada bahan kimia berbahaya."
        ],
        fiksi: [
            "Kancil yang cerdik berhasil menyeberangi sungai yang deras dengan membohongi sekumpulan buaya yang lapar. Ia berpura-pura menghitung mereka atas perintah raja.",
            "Bawang Merah selalu merasa iri kepada Bawang Putih yang rajin dan baik hati. Apapun yang dilakukan Bawang Putih selalu dianggap salah oleh ibu tiri mereka.",
            "Malin Kundang menjadi batu karena durhaka kepada ibunya yang tua renta. Ia malu mengakui ibunya setelah menjadi saudagar kaya raya di tanah rantau.",
            "Semut dan Belalang mengajarkan kita untuk selalu bersiap menghadapi masa sulit. Semut bekerja keras mengumpulkan makanan, sementara Belalang hanya bermain musik.",
            "Timun Mas berlari kencang menghindari kejaran raksasa jahat. Berbekal bungkusan ajaib dari ibunya, ia berhasil mengalahkan raksasa tersebut.",
            "Ande Ande Lumut mencari pendamping hidup yang tulus. Ia menguji para gadis dengan menyamar sebagai pemuda desa biasa yang sederhana.",
            "Lutung Kasarung sebenarnya adalah seorang pangeran tampan yang dikutuk. Ia hanya bisa kembali ke wujud aslinya jika menemukan cinta sejati dari seorang putri.",
            "Danau Toba terbentuk dari kemarahan seorang pemuda bernama Toba kepada istrinya yang merupakan jelmaan ikan. Ia melanggar janji untuk merahasiakan asal-usul istrinya.",
            "Cindelaras memiliki ayam jago yang sangat sakti. Ayam tersebut selalu menang dalam setiap pertandingan dan akhirnya mempertemukan Cindelaras dengan ayahnya, sang Raja.",
            "Sangkuriang ingin menikahi Dayang Sumbi tanpa tahu bahwa itu adalah ibunya sendiri. Dayang Sumbi memberikan syarat yang mustahil untuk menggagalkan niatnya."
        ]
    };

    const selectedText = blueprint.materi.toLowerCase().includes("informasi") ? texts.informasi[(pk - 1) % 10] : texts.fiksi[(pk - 1) % 10];

    switch (blueprint.no) {
        case 1:
        case 2:
            text = `${selectedText}\n\nInformasi tersurat yang paling tepat dari teks di atas adalah ...`;
            options = ["Isi pesan utama teks", "Hal yang tidak ada di teks", "Pendapat orang lain", "Judul karangan"];
            answer = 0;
            break;
        case 3:
            text = `${selectedText}\n\nMakna kata kunci atau istilah penting dalam teks tersebut adalah ...`;
            options = ["Arti sesuai konteks", "Lawan kata", "Persamaan bunyi", "Asal usul kata"];
            answer = 0;
            break;
        case 4: // Identifikasi objek
            text = `${selectedText}\n\nObjek atau topik utama yang dibahas dalam teks tersebut adalah ...`;
            options = ["Topik utama teks", "Hal yang tidak penting", "Iklan", "Berita cuaca"];
            answer = 0;
            break;
        case 5: // Menyusun informasi
            text = `${selectedText}\n\nUrutan peristiwa yang tepat sesuai dengan isi teks adalah ...`;
            options = ["Awal - Tengah - Akhir", "Akhir - Awal - Tengah", "Tengah - Akhir - Awal", "Acak"];
            answer = 0;
            break;
        case 6: // Ikhtisar
            text = `${selectedText}\n\nRingkasan yang paling tepat untuk menggambarkan isi teks tersebut adalah ...`;
            options = ["Intisari teks secara singkat", "Seluruh isi teks", "Hanya bagian awal", "Hanya bagian akhir"];
            answer = 0;
            break;
        case 7: // Mengelompokkan (PGK)
            text = `${selectedText}\n\nManakah dari kata-kata berikut yang termasuk dalam kategori yang sama sesuai teks?`;
            options = ["Pilihan yang benar", "Pilihan salah 1", "Pilihan salah 2", "Pilihan salah 3"];
            answer = 0;
            break;
        case 8: // Identifikasi fakta
            text = `${selectedText}\n\nManakah pernyataan berikut yang merupakan fakta dalam teks?`;
            options = ["Pernyataan faktual", "Pendapat pribadi", "Harapan", "Prediksi"];
            answer = 0;
            break;
        case 9: // Identifikasi tokoh
            text = `${selectedText}\n\nSiapakah tokoh yang diceritakan memiliki peran penting dalam teks tersebut?`;
            options = ["Tokoh utama", "Tokoh figuran", "Penulis", "Pembaca"];
            answer = 0;
            break;
        case 10: // Bagian teks
            text = `${selectedText}\n\nKalimat pertama pada teks tersebut berfungsi sebagai ...`;
            options = ["Pembuka/Pernyataan umum", "Penutup", "Contoh", "Kesimpulan"];
            answer = 0;
            break;
        case 13: // Makna kata (PGK)
            text = `${selectedText}\n\nKata yang memiliki makna serupa dengan kata yang bercetak tebal adalah ...`;
            options = ["Sinonim tepat", "Antonim", "Kata benda", "Kata sifat"];
            answer = 0;
            break;
        case 16: // Sebab akibat
            text = `${selectedText}\n\nApa penyebab utama dari peristiwa yang diceritakan dalam teks tersebut?`;
            options = ["Alasan logis sesuai teks", "Alasan yang tidak relevan", "Kebetulan", "Tidak dijelaskan"];
            answer = 0;
            break;
        case 17: // Makna teks
            text = `${selectedText}\n\nApa makna tersirat yang ingin disampaikan penulis melalui teks tersebut?`;
            options = ["Pesan mendalam", "Hanya informasi biasa", "Lelucon", "Kritik tajam"];
            answer = 0;
            break;
        case 18: // Perubahan tokoh (PGK)
            text = `${selectedText}\n\nBagaimana perubahan sikap tokoh utama dari awal hingga akhir cerita?`;
            options = ["Perubahan yang jelas", "Tetap sama", "Menjadi buruk", "Tidak diceritakan"];
            answer = 0;
            break;
        case 20: // Kesimpulan (L3)
            text = `${selectedText}\n\nBerdasarkan teks, apa yang akan terjadi jika hal tersebut terus berlanjut?`;
            options = ["Prediksi logis", "Tidak ada perubahan", "Hal yang tidak mungkin", "Berhenti seketika"];
            answer = 0;
            break;
        case 22: // Relevansi (PGK)
            text = `${selectedText}\n\nApakah isi teks tersebut masih relevan dengan kehidupan saat ini?`;
            options = ["Sangat relevan, karena...", "Tidak relevan", "Hanya untuk masa lalu", "Hanya untuk anak-anak"];
            answer = 0;
            break;
        case 25: // Fakta/opini
            text = `${selectedText}\n\nKalimat mana yang merupakan opini penulis dalam teks tersebut?`;
            options = ["Kalimat berisi pendapat", "Kalimat berisi data", "Kalimat berisi angka", "Kalimat berisi nama"];
            answer = 0;
            break;
        case 26: // Bahasa penulis
            text = `${selectedText}\n\nGaya bahasa yang digunakan penulis dalam teks tersebut adalah ...`;
            options = ["Formal dan informatif", "Santai dan lucu", "Puitis", "Kasar"];
            answer = 0;
            break;
        case 27: // Refleksi (PGK)
            text = `${selectedText}\n\nApa yang kamu rasakan setelah membaca teks tersebut?`;
            options = ["Refleksi positif", "Biasa saja", "Sedih", "Marah"];
            answer = 0;
            break;
        case 28: // Pesan
            text = `${selectedText}\n\nApa pesan yang ingin disampaikan penulis kepada pembaca?`;
            options = ["Nasihat utama", "Cara memasak", "Daftar belanja", "Alamat kantor"];
            answer = 0;
            break;
        case 29: // Kesesuaian isi (PGK)
            text = `${selectedText}\n\nManakah pernyataan yang sesuai dengan isi teks tersebut?`;
            options = ["Pernyataan benar", "Pernyataan salah 1", "Pernyataan salah 2", "Pernyataan salah 3"];
            answer = 0;
            break;
        case 30: // Respons emosional (PGK)
            text = `${selectedText}\n\nBagaimana perasaan tokoh utama saat menghadapi masalah tersebut?`;
            options = ["Perasaan yang tepat", "Senang", "Tertawa", "Bosan"];
            answer = 0;
            break;
        case 11: // Ide pokok
            text = `${selectedText}\n\nIde pokok atau gagasan utama dari paragraf tersebut adalah ...`;
            options = ["Inti pembicaraan teks", "Contoh-contoh", "Kalimat penjelas", "Kata sapaan"];
            answer = 0;
            break;
        case 12: // Kesimpulan
            text = `${selectedText}\n\nKesimpulan yang dapat diambil dari teks tersebut adalah ...`;
            options = ["Ringkasan akhir teks", "Hanya awal teks", "Daftar pustaka", "Nama penulis"];
            answer = 0;
            break;
        case 14: // Amanat
            text = `${selectedText}\n\nAmanat atau pesan moral yang terkandung dalam cerita tersebut adalah ...`;
            options = ["Nasihat untuk pembaca", "Cara membuat kue", "Deskripsi tempat", "Waktu kejadian"];
            answer = 0;
            break;
        case 15: // Peristiwa (HOTS)
            text = `${selectedText}\n\nPrediksi peristiwa yang akan terjadi jika tokoh utama tidak melakukan tindakan tersebut adalah ...`;
            options = ["Kejadian sebaliknya", "Tetap sama", "Tidak ada efek", "Cerita selesai"];
            answer = 0;
            break;
        case 21: // Menilai isi (HOTS)
            text = `${selectedText}\n\nApakah judul teks tersebut sudah sesuai dengan isinya? Berikan alasanmu.`;
            options = ["Sudah, karena mewakili inti", "Belum, karena terlalu pendek", "Sudah, karena bagus", "Tidak tahu"];
            answer = 0;
            break;
        case 24: // Karakter (HOTS)
            text = `${selectedText}\n\nBagaimana watak tokoh utama digambarkan dalam teks tersebut?`;
            options = ["Melalui tindakan dan ucapan", "Hanya dari nama", "Dari warna baju", "Tidak digambarkan"];
            answer = 0;
            break;
        default:
            if (isHots) {
                text = `${selectedText}\n\nAnalisis mendalam: Apa maksud tersirat dari kalimat terakhir pada teks di atas?`;
                options = ["Makna mendalam teks", "Hanya tulisan biasa", "Kesalahan ketik", "Tidak ada makna"];
            } else {
                text = `${selectedText}\n\nPertanyaan: Apa yang dibahas dalam teks tersebut?`;
                options = ["Topik utama teks", "Hal yang tidak penting", "Iklan", "Berita cuaca"];
            }
            answer = 0;
    }

    return {
        id: blueprint.no,
        text: text,
        options: options.sort(() => Math.random() - 0.5),
        answer: options.indexOf(options[answer]),
        metadata: {
            kompetensi: blueprint.kompetensi,
            subkompetensi: blueprint.subkompetensi,
            materi: blueprint.materi,
            level: blueprint.level,
            tipe: blueprint.tipe
        }
    };
}

// Initialize 20 packages for each subject
for (let i = 1; i <= 20; i++) {
    const mathPk = [];
    const indoPk = [];
    
    for (let j = 0; j < 30; j++) {
        mathPk.push(generateMathQuestion(mathBlueprint[j], i));
        indoPk.push(generateIndoQuestion(indoBlueprint[j], i));
    }
    
    questionsData["Matematika"][i] = mathPk;
    questionsData["Bahasa Indonesia"][i] = indoPk;
}

window.questionsData = questionsData;
