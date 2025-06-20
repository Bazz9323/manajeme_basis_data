db.Menu.bulkWrite([
  {
    insertOne: {
      document: {
        _id: ObjectId(),
        nama_makanan: "Bakso",
        kategori: "Makanan Berat",
        harga: 13000,
        stok: 20,
        lokasi: "Etalase A4"
      }
    }
  },
  {
    updateOne: {
      filter: { nama_makanan: "Mie Ayam" },
      update: { $set: { harga: 12500 } }
    }
  },
  {
    deleteOne: {
      filter: { nama_makanan: "Jus Alpukat" }
    }
  }
]);
