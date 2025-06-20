db.Menu.updateOne(
  { nama_makanan: "Nasi Goreng" },
  { $set: { stok: 25 } }
);
