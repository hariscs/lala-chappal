import mongoose, { Schema, Document } from 'mongoose'

export interface IChappal extends Document {
  design: string
  quantity: string
  size: string
  cost: string
}

const ChappalSchema: Schema = new Schema({
  design: { type: String, required: true },
  quantity: { type: String, required: true },
  size: { type: String, required: true },
  cost: { type: String, required: true },
})

export default mongoose.model<IChappal>('Chappal', ChappalSchema)
