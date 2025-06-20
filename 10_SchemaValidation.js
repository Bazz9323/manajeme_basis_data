db.createCollection("MenuValidasi", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama_makanan", "kategori", "harga", "stok"],
      properties: {
        nama_makanan: {
          bsonType: "string",
          description: "Harus berupa string dan wajib diisi"
        },
        kategori: {
          bsonType: "string",
          description: "Harus berupa string dan wajib diisi"
        },
        harga: {
          bsonType: "int",
          minimum: 1000,
          description: "Harus berupa integer minimal 1000 dan wajib diisi"
        },
        stok: {
          bsonType: "int",
          minimum: 0,
          description: "Harus berupa integer minimal 0 dan wajib diisi"
        },
        lokasi: {
          bsonType: "string",
          description: "Harus berupa string jika ada"
        }
      }
    }
  }
});
