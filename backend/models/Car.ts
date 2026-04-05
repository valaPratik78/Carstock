import mongoose, { Schema, Document } from 'mongoose';

export interface ICar extends Document {
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  color: string;
  description: string;
  images: string[];
  status: 'available' | 'sold' | 'reserved';
  seller: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const carSchema = new Schema<ICar>(
  {
    make: {
      type: String,
      required: [true, 'Please provide car make'],
      trim: true,
    },
    model: {
      type: String,
      required: [true, 'Please provide car model'],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, 'Please provide year'],
      min: 1900,
      max: new Date().getFullYear() + 1,
    },
    price: {
      type: Number,
      required: [true, 'Please provide price'],
      min: 0,
    },
    mileage: {
      type: Number,
      required: [true, 'Please provide mileage'],
      min: 0,
    },
    fuelType: {
      type: String,
      required: true,
      enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'CNG'],
    },
    transmission: {
      type: String,
      required: true,
      enum: ['Manual', 'Automatic', 'CVT', 'DCT'],
    },
    color: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ['available', 'sold', 'reserved'],
      default: 'available',
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model<ICar>('Car', carSchema);

export default Car;
