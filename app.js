console.log("=== SOAL JS-1 ===");
const namaToko = "Toko Berkah";
const tahunBerdiri = 2019;
const sedangBuka = true;
let alamat = null;

console.log("Tipe namaToko:", typeof namaToko);
console.log("Tipe tahunBerdiri:", typeof tahunBerdiri);
console.log("Tipe sedangBuka:", typeof sedangBuka);
console.log("Tipe alamat:", typeof alamat); // object (kekhasan JavaScript)

const tahunSekarang = 2026;
const umurToko = tahunSekarang - tahunBerdiri;
console.log(`Toko ${namaToko} sudah beroperasi selama ${umurToko} tahun.`);


console.log("\n=== SOAL JS-2 ===");
function cekStatusPesanan(statusKode) {
  switch (statusKode) {
    case 1:
      return "Menunggu Pembayaran";
    case 2:
      return "Pembayaran Dikonfirmasi";
    case 3:
      return "Sedang Dikemas";
    case 4:
      return "Sedang Dikirim";
    case 5:
      return "Pesanan Diterima";
    default:
      return "Kode Status Tidak Valid";
  }
}

console.log(cekStatusPesanan(3)); // Sedang Dikemas
console.log(cekStatusPesanan(99)); // Kode Status Tidak Valid


console.log("\n=== SOAL JS-3 ===");
const hargaProduk = [45000, 120000, 550000, 30000, 85000, 600000, 95000, 150000, 250000, 40000];

// a) For loop untuk total dan rata-rata
let totalHarga = 0;
for (let i = 0; i < hargaProduk.length; i++) {
  totalHarga += hargaProduk[i];
}
const rataRata = totalHarga / hargaProduk.length;
console.log("Total Harga:", totalHarga);
console.log("Rata-rata Harga:", rataRata);

// b) While loop mencari produk di atas 500.000
let i = 0;
let ditemukan = false;
while (i < hargaProduk.length) {
  if (hargaProduk[i] > 500000) {
    console.log(`Produk > 500k pertama ditemukan pada indeks ${i} dengan harga ${hargaProduk[i]}`);
    ditemukan = true;
    break;
  }
  i++;
}

// c) For...of untuk harga di bawah 100.000
console.log("Harga di bawah 100.000:");
for (const harga of hargaProduk) {
  if (harga < 100000) {
    console.log(harga);
  }
}


console.log("\n=== SOAL JS-4 ===");
const daftarProduk = ["Kopi Susu", "Roti Bakar", "Mie Goreng", "Es Teh", "Nasi Goreng", "Ayam Geprek", "Kentang", "Jus Alpukat"];

daftarProduk.push("Burger", "Pizza"); // a)
daftarProduk.unshift("Dimsum"); // b)
console.log("Dihapus terakhir (pop):", daftarProduk.pop()); // c)
console.log("Dihapus pertama (shift):", daftarProduk.shift()); // d)
console.log("Apakah ada 'Laptop'?:", daftarProduk.includes("Laptop")); // e)
console.log("Indeks 'Sepatu':", daftarProduk.indexOf("Sepatu")); // f) (-1 jika tidak ada)
console.log("3 produk dari indeks ke-2 (slice):", daftarProduk.slice(2, 5)); // g)
daftarProduk.splice(3, 0, "Mouse Wireless"); // h)
console.log("Jumlah total produk:", daftarProduk.length); // i)


console.log("\n=== SOAL JS-5 ===");
// a) Function Declaration
function hitungDiskon(harga, persen) {
  return harga - (harga * persen / 100);
}

// b) Function Expression dengan default parameter PPN 11%
const hitungPPN = function(harga, tarifPPN = 0.11) {
  return harga + (harga * tarifPPN);
};

// c) Arrow Function hitungOngkir
const hitungOngkir = (jarak) => {
  if (jarak <= 10) return 10000;
  if (jarak <= 25) return 25000;
  return 50000;
};

// d) Arrow Function ringkas kuadrat
const kuadrat = (angka) => angka * angka;
console.log("Kuadrat 5:", kuadrat(5));

// e) Gabungan fungsi
const hargaAwal = 100000;
const diskonPersen = 10;
const jarakKirim = 15;

const totalBelanja = hitungPPN(hitungDiskon(hargaAwal, diskonPersen)) + hitungOngkir(jarakKirim);
console.log("Total Belanja Akhir:", totalBelanja);


console.log("\n=== SOAL JS-6 ===");
const produkUnggulan = {
  nama: "Kopi Robusta",
  kategori: "Minuman",
  harga: 25000,
  stok: 50,
  rating: 4.8,
  
  tampilkanInfo() {
    console.log(`Produk: ${this.nama}, Kategori: ${this.kategori}, Harga: Rp ${this.harga}`);
  }
};

console.log("a) Nama:", produkUnggulan.nama); // dot notation
const keyHarga = "harga";
console.log("b) Harga:", produkUnggulan[keyHarga]); // bracket notation
produkUnggulan.diskon = true; // c) tambah properti
delete produkUnggulan.rating; // d) hapus properti
console.log("e) Apakah 'stok' ada?:", "stok" in produkUnggulan); // e)

console.log("f) Iterasi for...in:");
for (const key in produkUnggulan) {
  if (typeof produkUnggulan[key] !== "function") {
    console.log(`${key}: ${produkUnggulan[key]}`);
  }
}

console.log("g) Keys:", Object.keys(produkUnggulan)); // g)
console.log("h) Values:", Object.values(produkUnggulan)); // h)
console.log("i) Memanggil method tampilkanInfo():");
produkUnggulan.tampilkanInfo(); // i)


console.log("\n=== SOAL JS-7 ===");
// a) Array warna
const warna = ["Merah", "Hijau", "Biru"];
for (const w of warna) { console.log("Warna:", w); }

// b) Object mahasiswa (for...in)
const mahasiswa = { nama: "Andi", nim: "12345", jurusan: "Informatika" };
for (const key in mahasiswa) { console.log(`${key}: ${mahasiswa[key]}`); }

// c) String iterasi
for (const char of "JavaScript") { console.log(char); }


console.log("\n=== SOAL JS-8 ===");
const inputEmail = "  Budi.Santoso@GMAIL.COM  ";
const inputHarga = "250000.75";
const kalimat = "Selamat datang di Toko Elektronik Online";

const emailBersih = inputEmail.trim().toLowerCase(); // a)
console.log("a) Email bersih:", emailBersih);
console.log("b) Mengandung '@gmail':", emailBersih.includes("@gmail")); // b)
console.log("c) Diawali 'budi':", emailBersih.startsWith("budi")); // c)

const indeksAt = emailBersih.indexOf("@");
const domainEmail = emailBersih.slice(indeksAt + 1);
console.log("d) Domain email:", domainEmail); // d)

console.log("e) Pecah kalimat:", kalimat.split(" ")); // e)
console.log("f) Replace:", kalimat.replace("Elektronik", "Digital")); // f)

const angkaHarga = parseFloat(inputHarga);
console.log("g) ParseFloat:", angkaHarga); // g)
console.log("h) 2 Desimal:", angkaHarga.toFixed(2)); // h)
console.log("i) Panjang kalimat:", kalimat.length); // i)


console.log("\n=== SOAL JS-9 ===");
// a) Scope Demo
const globalVar = "Global";
function tesScope() {
  const localVar = "Lokal";
  console.log(globalVar); // Bisa diakses
  console.log(localVar);  // Bisa diakses
}
tesScope();

if (true) {
  let blockVar = "Block";
  console.log(blockVar); // Bisa diakses di dalam blok
}
// console.log(blockVar); // Error jika diakses di luar blok

// b) Hoisting Demo
cobaHoisting(); // Berhasil karena Function Declaration di-hoist penuh
function cobaHoisting() { console.log("Hoisting berfungsi!"); }

console.log(variabelVar); // Output: undefined (karena var di-hoist tanpa nilai)
var variabelVar = "Tes Var";

// console.log(variabelLet); // ReferenceError: Cannot access 'variabelLet' before initialization
// let variabelLet = "Tes Let";

// c) Closure - buatKeranjang
function buatKeranjang() {
  let items = [];
  let totalHarga = 0;

  return {
    tambahItem(nama, harga) {
      items.push({ nama, harga });
      totalHarga += harga;
    },
    hapusItem(nama) {
      const index = items.findIndex(item => item.nama === nama);
      if (index !== -1) {
        totalHarga -= items[index].harga;
        items.splice(index, 1);
      }
    },
    lihatKeranjang() {
      console.log("Items:", items, "| Total Harga:", totalHarga);
    }
  };
}

const keranjang1 = buatKeranjang();
const keranjang2 = buatKeranjang();
keranjang1.tambahItem("Buku", 50000);
keranjang2.tambahItem("Tas", 200000);
console.log("Keranjang 1:"); keranjang1.lihatKeranjang();
console.log("Keranjang 2 (Independen):"); keranjang2.lihatKeranjang();


console.log("\n=== SOAL JS-10 ===");
// a) Tanggal lengkap Indonesia
const tglSekarang = new Date();
console.log("a) Format lokal:", tglSekarang.toLocaleDateString("id-ID", {
  weekday: "long", day: "numeric", month: "long", year: "numeric"
}));

// b) Hari menuju Tahun Baru
const tahunDepan = new Date(tglSekarang.getFullYear() + 1, 0, 1);
const selisihMs = tahunDepan - tglSekarang;
const hariMenujuTahunBaru = Math.ceil(selisihMs / (1000 * 60 * 60 * 24));
console.log("b) Hari menuju Tahun Baru:", hariMenujuTahunBaru, "hari");

// c) Fungsi formatTanggalIndonesia
function formatTanggalIndonesia(date) {
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}
console.log("c) Format DD/MM/YYYY:", formatTanggalIndonesia(tglSekarang));

// d) Umur dalam hari (contoh lahir 15 Januari 2000)
const tanggalLahir = new Date(2000, 0, 15);
const umurMs = tglSekarang - tanggalLahir;
const umurHari = Math.floor(umurMs / (1000 * 60 * 60 * 24));
console.log("d) Umur dalam hari:", umurHari, "hari");


console.log("\n=== SOAL JS-11 ===");
// a) Object Destructuring
const pesanan = {
  idPesanan: "ORD-001",
  pelanggan: "Budi",
  totalHarga: 750000,
  statusBayar: true,
  alamatKirim: "Jl. Merdeka No. 10"
};

const { idPesanan, pelanggan, totalHarga: hargaTotal, statusBayar: sudahBayar, kurirPengiriman = "JNE" } = pesanan;
console.log("Destructure:", idPesanan, pelanggan, sudahBayar, kurirPengiriman);

function cetakPesanan({ idPesanan, pelanggan }) {
  console.log(`Pesanan ${idPesanan} oleh ${pelanggan}`);
}
cetakPesanan(pesanan);

// b) Array Destructuring
const koordinat = [106.8456, -6.2088, "Jakarta", "Indonesia"];
const [longitude, latitude, , negara] = koordinat;
console.log("Koordinat:", longitude, latitude, negara);

let a = 1, b = 2;
[a, b] = [b, a]; // Tukar nilai
console.log("Tukar nilai a & b:", a, b);

// c) Spread Operator
const arrayAsli = [1, 2, 3];
const arrayCopy = [...arrayAsli]; // Salin independen
const gabungArray = [10, ...arrayAsli, 20]; // Gabung dengan elemen di tengah
const updateObject = { ...pesanan, totalHarga: 999999 }; // Timpa properti
const nilaiMax = Math.max(...arrayAsli);
console.log("Gabung Array:", gabungArray);
console.log("Update Object:", updateObject);
console.log("Nilai Max:", nilaiMax);

// d) Rest Parameter
function hitungRataRata(...angka) {
  const total = angka.reduce((acc, curr) => acc + curr, 0);
  return angka.length > 0 ? total / angka.length : 0;
}
console.log("Rata-rata:", hitungRataRata(80, 90, 100));

function buatPesanan(namaPemesan, ...daftarMenu) {
  console.log(`Pemesan: ${namaPemesan}, Menu:`, daftarMenu);
}
buatPesanan("Siti", "Nasi Goreng", "Es Teh", "Kerupuk");