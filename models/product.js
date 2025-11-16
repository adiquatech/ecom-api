// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true },
    sku: { type: String, required: true, unique: true, trim: true },
    imageUrl: { type: String, default: '' },
    weight: { type: Number, min: 0 },
    dimensions: { type: String },
    isActive: { type: Boolean, default: true }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id.toString();   
        delete ret._id;               
        delete ret.__v;              
        return ret;
      }
    }
  }
);

// Auto-Generate sku Before Save
productSchema.pre('save', async function (next) {
  if (this.isNew && !this.sku) {
    let sku;
    const base = this.name.replace(/\s+/g, '').slice(0, 4).toUpperCase();
    do {
      const random = Math.floor(1000 + Math.random() * 9000);
      sku = `${base}-${random}`;
    } while (await this.constructor.findOne({ sku }));
    this.sku = sku;
  }
  next();
});

export default mongoose.model('product', productSchema);
