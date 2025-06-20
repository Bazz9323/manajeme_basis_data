db.Menu.insertOne({
  _id: ObjectId(),
  nama_makanan: "Nasi Goreng",
  kategori: "Makanan Berat",
  harga: 15000,
  stok: 20,
  lokasi: "Etalase A1"
});

db.Menu.insertMany([
  {
    _id: ObjectId(),
    nama_makanan: "Mie Ayam",
    kategori: "Makanan Berat",
    harga: 12000,
    stok: 15,
    lokasi: "Etalase A2"
  },
  {
    _id: ObjectId(),
    nama_makanan: "Es Teh Manis",
    kategori: "Minuman",
    harga: 5000,
    stok: 50,
    lokasi: "Etalase B1"
  },
  {
    _id: ObjectId(),
    nama_makanan: "Kerupuk Udang",
    kategori: "Cemilan",
    harga: 3000,
    stok: 30,
    lokasi: "Etalase C1"
  },
  {
    _id: ObjectId(),
    nama_makanan: "Soto Ayam",
    kategori: "Makanan Berat",
    harga: 14000,
    stok: 18,
    lokasi: "Etalase A3"
  },
  {
    _id: ObjectId(),
    nama_makanan: "Jus Alpukat",
    kategori: "Minuman",
    harga: 10000,
    stok: 25,
    lokasi: "Etalase B2"
  }
]);
