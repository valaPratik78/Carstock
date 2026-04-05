import express, { Request, Response } from 'express';
import Booking from '../models/Booking';

const router = express.Router();

// Get all bookings
router.get('/', async (req: Request, res: Response): Promise<any> => {
  try {
    const bookings = await Booking.find()
      .populate('user', 'name email phone')
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Get bookings by user
router.get('/user/:userId', async (req: Request, res: Response): Promise<any> => {
  try {
    const bookings = await Booking.find({ user: req.params.userId })
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Get single booking
router.get('/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const booking = await Booking.findById(req.params.id).populate('user', 'name email phone');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ success: true, booking });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Create booking
router.post('/', async (req: Request, res: Response): Promise<any> => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json({ success: true, booking });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Update booking
router.put('/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ success: true, booking });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Delete booking
router.delete('/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ success: true, message: 'Booking deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
