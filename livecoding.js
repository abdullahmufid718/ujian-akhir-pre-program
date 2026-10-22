function hitungTotalBelanja(item) {
    let total = 0
    total = item[0].harga * item[0].jumlah
    total1 = item[1].harga * item[1].jumlah
   console.log(total + total1)
  }

hitungTotalBelanja([
    { nama:"Buku", harga: 50000, jumlah: 2 },
    { nama:"Pulpen", harga: 15000, jumlah: 3 }
])