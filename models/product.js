import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true },
  imageUrl: { type: String, default: '' },
  sku: { type: String, unique: true, required: true },
  weight: { type: Number, min: 0 }, // in grams
  dimensions: { type: String }, // e.g., "10x5x3 cm"
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);