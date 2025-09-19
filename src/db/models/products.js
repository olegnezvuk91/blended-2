import { model, Schema } from 'mongoose';

export const productSchema = new Schema(
  {
    _id: { type: String },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      enum: ['books', 'electronics', 'clothing', 'other'],
      default: 'other',
      required: true,
    },
    description: { type: String },
  },
  { timestamps: true },
);

export const ProductCollection = model('Product', productSchema);
