import express, { Request, Response } from 'express';
import Car from '../models/Car';

const router = express.Router();

// Get all cars
router.get('/', async (req: Request, res: Response): Promise<any> => {
  try {
    const cars = await Car.find({ status: 'available' })
      .populate('seller', 'name email phone')
      .sort({ createdAt: -1 });
    res.json({ success: true, cars });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Get single car
router.get('/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const car = await Car.findById(req.params.id).populate('seller', 'name email phone');
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json({ success: true, car });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Create car listing
router.post('/', async (req: Request, res: Response): Promise<any> => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json({ success: true, car });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Update car
router.put('/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json({ success: true, car });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Delete car
router.delete('/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json({ success: true, message: 'Car deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
