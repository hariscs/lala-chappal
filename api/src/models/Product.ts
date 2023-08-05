import mongoose, { Schema, Document } from 'mongoose'

export interface IProduct extends Document {
  color: string
  design: string
  soleThickness: string
  size: string
  customer: string
  phone: string
  address: string
  email: string
}

const ProductSchema: Schema = new Schema({
  color: { type: String, required: true },
  design: { type: String, required: true },
  soleThickness: { type: String, required: true },
  size: { type: String, required: true },
  customer: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
})

export default mongoose.model<IProduct>('Product', ProductSchema)
