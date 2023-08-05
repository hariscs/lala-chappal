import mongoose, { Schema, Document } from 'mongoose'
import { IProduct } from './Product'

export interface IOrder extends Document {
  products: Array<IProduct['_id']>
  status: string
  shippingAddress: string
}

const OrderSchema: Schema = new Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  status: { type: String, default: 'Pending' },
  shippingAddress: String,
})

const Order = mongoose.model<IOrder>('Order', OrderSchema)

export default Order
