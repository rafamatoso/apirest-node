const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
  artist: { type: String, required: true },
  albumName: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  imageUrl: { type: String, required: true },
  // É preenchida automaticamente durante a criação de cada produto
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ProductSchema.plugin(mongoosePaginate);

// Registra o model na app
mongoose.model('Product', ProductSchema);
