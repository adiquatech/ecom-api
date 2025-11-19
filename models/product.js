// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
    sku: { type: String, unique: true, trim: true },
    imageUrl: { type: String, default: '' },
    weight: { type: Number, min: 0 },
    dimensions: { type: String },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Auto-Generate sku Before Save
productSchema.pre('save', async function (next) {
  if (this.isNew && !this.sku) {
    const base = this.name.replace(/\s+/g, '').slice(0, 4).toUpperCase();
    let attempts = 0;
    const maxAttempts = 10;

    while (attempts < maxAttempts) {
      const random = String(Math.floor(1000 + Math.random() * 9000)).padStart(
        4,
        '0'
      );
      const sku = `${base}-${random}`;

      const existing = await this.model('product').findOne({ sku });
      if (!existing) {
        this.sku = sku;
        return next();
      }
      attempts++;
    }
    return next(new Error('Failed to generate unique SKU'));
  }
  next();
});

export default mongoose.model('product', productSchema);
