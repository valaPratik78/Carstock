import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  user: mongoose.Types.ObjectId;
  serviceType: string;
  carDetails: {
    make: string;
    model: string;
    year: number;
    registrationNumber?: string;
  };
  appointmentDate: Date;
  timeSlot: string;
  mechanicPreference?: string;
  description: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

const bookingSchema = new Schema<IBooking>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    serviceType: {
      type: String,
      required: [true, 'Please provide service type'],
      enum: [
        'General Service',
        'Oil Change',
        'Brake Service',
        'Tire Replacement',
        'AC Service',
        'Engine Repair',
        'Body Work',
        'Paint Job',
        'Full Inspection',
        'Other',
      ],
    },
    carDetails: {
      make: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
      registrationNumber: String,
    },
    appointmentDate: {
      type: Date,
      required: [true, 'Please provide appointment date'],
    },
    timeSlot: {
      type: String,
      required: [true, 'Please provide time slot'],
    },
    mechanicPreference: String,
    description: {
      type: String,
      required: [true, 'Please provide service description'],
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model<IBooking>('Booking', bookingSchema);

export default Booking;
