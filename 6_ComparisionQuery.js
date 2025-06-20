db.Menu.find({ stok: { $lte: 20 } });

db.Menu.find({ kategori: { $eq: "Makanan Berat" } });

db.Menu.find({ harga: { $in: [12000, 15000] } });

db.Menu.find({ stok: { $nin: [15, 30] } });
