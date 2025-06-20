db.Menu.aggregate([
  {
    $match: { kategori: "Makanan Berat" }
  },
  {
    $group: {
      _id: "$kategori",
      total_stok: { $sum: "$stok" },
      rata_rata_harga: { $avg: "$harga" }
    }
  }
]);
