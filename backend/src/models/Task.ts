import { Schema, model, Document } from 'mongoose';

export interface ITask extends Document {
  user: Schema.Types.ObjectId;
  description: string;
  timeHours: number;
  timeMinutes: number;
  hourlyRate: number;
  discount: number;
  cost: number;
  free: boolean;
  currency: string;
  createdAt: Date;
}

const taskSchema = new Schema<ITask>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required']
  },
  description: { 
    type: String, 
    default: '',
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  timeHours: { 
    type: Number, 
    default: 0,
    min: [0, 'Hours cannot be negative']
  },
  timeMinutes: { 
    type: Number, 
    default: 0,
    min: [0, 'Minutes cannot be negative'],
    max: [59, 'Minutes cannot be more than 59']
  },
  hourlyRate: { 
    type: Number, 
    default: 0,
    min: [0, 'Hourly rate cannot be negative']
  },
  discount: { 
    type: Number, 
    default: 0,
    min: [0, 'Discount cannot be negative'],
    max: [100, 'Discount cannot be more than 100%']
  },
  cost: { 
    type: Number, 
    default: 0 
  },
  free: { 
    type: Boolean, 
    default: false 
  },
  currency: { 
    type: String, 
    default: 'USD',
    enum: ['USD', 'EUR', 'GBP', 'RUB'] 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default model<ITask>('Task', taskSchema); 