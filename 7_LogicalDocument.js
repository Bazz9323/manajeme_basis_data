db.Menu.find({
  $or: [
    { kategori: "Minuman" },
    { stok: { $lt: 20 } }
  ]
});

db.Menu.find({
  $and: [
    { kategori: "Makanan Berat" },
    { harga: { $gt: 13000 } }
  ]
});

db.Menu.find({
  $nor: [
    { harga: { $lt: 10000 } },
    { stok: { $gt: 40 } }
  ]
});

db.Menu.find({
  $and: [
    { nama_makanan: { $not: { $eq: "Soto Ayam" } } },
    { stok: { $gte: 15 } }
  ]
});
