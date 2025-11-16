// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true },
    imageUrl: { type: String, default: '' },
    weight: { type: Number, min: 0 },
    dimensions: { type: String },
    isActive: { type: Boolean, default: true }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id.toString();   // _id → id
        delete ret._id;                // remove _id
        delete ret.__v;                // remove version
        return ret;
      }
    }
  }
);

export default mongoose.model('product', productSchema);