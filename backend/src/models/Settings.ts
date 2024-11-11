import { Schema, model, Document } from 'mongoose';

export interface ISettings extends Document {
  user: Schema.Types.ObjectId;
  hourlyRate: number;
  globalDiscount: number;
  taxRate: number;
  includeTaxInCost: boolean;
  currency: string;
}

const settingsSchema = new Schema<ISettings>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  hourlyRate: { type: Number, default: 0 },
  globalDiscount: { type: Number, default: 0 },
  taxRate: { type: Number, default: 0 },
  includeTaxInCost: { type: Boolean, default: true },
  currency: { type: String, default: 'USD' }
});

export default model<ISettings>('Settings', settingsSchema); 