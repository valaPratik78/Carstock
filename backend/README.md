# CarStock Backend API

RESTful API backend for the CarStock automotive platform built with Express.js, MongoDB, and TypeScript.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB 4.4+
- npm or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
```env
MONGODB_URI=mongodb://localhost:27017/carstock
JWT_SECRET=your-super-secret-jwt-key
PORT=5000
NODE_ENV=development
```

4. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+91 1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 1234567890",
    "role": "user"
  },
  "token": "jwt_token_here"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get User Profile
```http
GET /api/auth/profile/:userId
```

### Car Endpoints

#### Get All Cars
```http
GET /api/cars
```

#### Get Single Car
```http
GET /api/cars/:carId
```

#### Create Car Listing
```http
POST /api/cars
Content-Type: application/json

{
  "make": "Honda",
  "model": "City",
  "year": 2020,
  "price": 1250000,
  "mileage": 45000,
  "fuelType": "Petrol",
  "transmission": "Manual",
  "color": "White",
  "description": "Well maintained car",
  "images": ["url1", "url2"],
  "seller": "user_id"
}
```

#### Update Car
```http
PUT /api/cars/:carId
Content-Type: application/json

{
  "price": 1200000,
  "status": "sold"
}
```

#### Delete Car
```http
DELETE /api/cars/:carId
```

### Booking Endpoints

#### Get All Bookings
```http
GET /api/bookings
```

#### Get User Bookings
```http
GET /api/bookings/user/:userId
```

#### Get Single Booking
```http
GET /api/bookings/:bookingId
```

#### Create Booking
```http
POST /api/bookings
Content-Type: application/json

{
  "user": "user_id",
  "serviceType": "Oil Change",
  "carDetails": {
    "make": "Honda",
    "model": "City",
    "year": 2020,
    "registrationNumber": "MH01AB1234"
  },
  "appointmentDate": "2026-04-15",
  "timeSlot": "10:00 AM - 11:00 AM",
  "description": "Regular oil change service needed"
}
```

#### Update Booking
```http
PUT /api/bookings/:bookingId
Content-Type: application/json

{
  "status": "confirmed"
}
```

#### Delete Booking
```http
DELETE /api/bookings/:bookingId
```

## 📊 Database Models

### User Model
```typescript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  phone: String,
  role: 'user' | 'admin' (default: 'user'),
  createdAt: Date
}
```

### Car Model
```typescript
{
  make: String (required),
  model: String (required),
  year: Number (required),
  price: Number (required),
  mileage: Number (required),
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid' | 'CNG',
  transmission: 'Manual' | 'Automatic' | 'CVT' | 'DCT',
  color: String (required),
  description: String (required),
  images: [String],
  status: 'available' | 'sold' | 'reserved',
  seller: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### Booking Model
```typescript
{
  user: ObjectId (ref: User, required),
  serviceType: String (required),
  carDetails: {
    make: String (required),
    model: String (required),
    year: Number (required),
    registrationNumber: String
  },
  appointmentDate: Date (required),
  timeSlot: String (required),
  mechanicPreference: String,
  description: String (required),
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled',
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Security

### Password Hashing
- Passwords are hashed using bcrypt with salt rounds of 10
- Passwords are never stored in plain text

### JWT Authentication
- Tokens expire after 30 days
- Include token in Authorization header: `Bearer <token>`
- Secret key should be strong and kept secure

### CORS
- Configured to allow cross-origin requests from frontend
- Customize CORS settings in `server.ts` for production

## 🧪 Testing

### Health Check
```http
GET /api/health
```

**Response:**
```json
{
  "message": "CarStock API is running!",
  "status": "healthy"
}
```

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/carstock` |
| `JWT_SECRET` | Secret key for JWT tokens | `your-secret-key` |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `development` or `production` |

## 🐛 Error Handling

All endpoints return errors in the following format:
```json
{
  "message": "Error description"
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## 📦 Dependencies

### Production
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT authentication
- `validator` - Input validation

### Development
- `nodemon` - Auto-reload during development
- `typescript` - Type safety

## 🚀 Deployment

### Heroku
```bash
# Create Heroku app
heroku create carstock-api

# Add MongoDB addon
heroku addons:create mongolab

# Set environment variables
heroku config:set JWT_SECRET=your-secret-key
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

### Railway
1. Connect GitHub repository
2. Add MongoDB database
3. Set environment variables
4. Deploy automatically on push

### DigitalOcean
1. Create droplet
2. Install Node.js and MongoDB
3. Clone repository
4. Install dependencies
5. Configure PM2 for process management
6. Set up Nginx as reverse proxy

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT Documentation](https://jwt.io/)

## 👥 Team

- **Pratik Vala** - Founder & CEO (Owner)
- **Abhinav Singh** - Co-Founder & CTO
- **Dhruv Patel** - Co-Founder & COO

---

**CarStock Backend API** - Built with ❤️ using Node.js and MongoDB
