# CarStock - India's Premier Auto Platform

A full-stack MERN application for automotive services, car buying/selling, and vehicle modifications.

## 🚗 About

CarStock is a comprehensive automotive platform that connects vehicle owners with certified mechanics, enables buying and selling of used cars, and provides access to premium car modifications and accessories.

## 👥 Team

- **Pratik Vala** - Founder & CEO (Owner)
- **Abhinav Singh** - Co-Founder & CTO
- **Dhruv Patel** - Co-Founder & COO

## ✨ Features

### For Customers
- 🔧 **Book Mechanics** - Find and book certified mechanics for your vehicle
- 📅 **Service Booking** - Schedule car services with preferred date and time
- 🚗 **Buy/Sell Cars** - Browse and list pre-owned vehicles
- 🔩 **Modifications** - Access premium car modifications and accessories
- 📊 **Dashboard** - Track bookings, vehicles, and service history
- 👤 **User Accounts** - Secure authentication and profile management

### Platform Features
- Responsive design for all devices
- Modern UI with smooth animations
- Real-time booking management
- Secure user authentication
- RESTful API architecture
- MongoDB database integration

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** with TypeScript
- **React Router 7.14.0** for navigation
- **Tailwind CSS 4.1.12** for styling
- **Axios** for API calls
- **Lucide React** for icons
- **Vite 6.3.5** as build tool

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Bcrypt** for password hashing
- **CORS** enabled for cross-origin requests

## 📁 Project Structure

```
carstock/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── Home.tsx
│   │   │   │   │   ├── About.tsx
│   │   │   │   │   ├── Mechanics.tsx
│   │   │   │   │   ├── Booking.tsx
│   │   │   │   │   ├── Login.tsx
│   │   │   │   │   ├── Register.tsx
│   │   │   │   │   ├── Dashboard.tsx
│   │   │   │   │   ├── UsedCars.tsx
│   │   │   │   │   └── Modify.tsx
│   │   │   │   └── Navigation.tsx
│   │   │   └── App.tsx
│   │   └── styles/
│   └── package.json
│
└── backend/
    ├── config/
    │   └── db.ts
    ├── models/
    │   ├── User.ts
    │   ├── Car.ts
    │   └── Booking.ts
    ├── routes/
    │   ├── authRoutes.ts
    │   ├── carRoutes.ts
    │   └── bookingRoutes.ts
    ├── server.ts
    ├── .env.example
    └── package.json
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm (or pnpm)

### Quick Setup

1. **Install everything**:
   ```bash
   npm run install:all
   ```

2. **Configure Backend**:
   ```bash
   cd backend
   cp .env.example .env
   ```
   (Update `.env` if you're not using default settings)

3. **Start the Application**:
   Go back to the root:
   ```bash
   npm run dev
   ```

The application will launch on:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile/:id` - Get user profile

### Cars
- `GET /api/cars` - Get all available cars
- `GET /api/cars/:id` - Get single car
- `POST /api/cars` - Create car listing
- `PUT /api/cars/:id` - Update car listing
- `DELETE /api/cars/:id` - Delete car listing

### Bookings
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/user/:userId` - Get user's bookings
- `GET /api/bookings/:id` - Get single booking
- `POST /api/bookings` - Create booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Delete booking

## 🌐 Pages

1. **Home** (`/`) - Landing page with hero section and services overview
2. **About** (`/about`) - Company information and team details
3. **Mechanics** (`/mechanics`) - Browse and filter certified mechanics
4. **Booking** (`/booking`) - Book automotive services
5. **Login** (`/login`) - User authentication
6. **Register** (`/register`) - New user registration
7. **Dashboard** (`/dashboard`) - User profile and booking management
8. **Used Cars** (`/used-cars`) - Buy and sell pre-owned vehicles
9. **Modify** (`/modify`) - Car modifications and accessories

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for secure authentication:
- Tokens are stored in localStorage
- Protected routes redirect to login if not authenticated
- Passwords are hashed using bcrypt before storage

## 🎨 UI/UX Features

- Modern gradient backgrounds
- Smooth transitions and hover effects
- Responsive design for mobile, tablet, and desktop
- Custom color palette with gold accent (#c8963c)
- Professional typography using Playfair Display and DM Sans fonts
- Accessible navigation with active state indicators

## 🔧 Development

### Frontend Development
```bash
# Run development server
pnpm run dev

# Build for production
pnpm run build
```

### Backend Development
```bash
# Run with nodemon (auto-reload)
npm run dev

# Run in production mode
npm start
```

## 📦 Building for Production

### Frontend
```bash
pnpm run build
```
Builds are created in the `dist` directory.

### Backend
Ensure all environment variables are properly set in production, especially:
- `MONGODB_URI` - Your production MongoDB connection string
- `JWT_SECRET` - A strong, unique secret key
- `NODE_ENV=production`

## 🚀 Deployment

### Frontend
Can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Backend
Can be deployed to:
- Heroku
- Railway
- DigitalOcean
- AWS EC2/ECS

### Database
- MongoDB Atlas (recommended)
- Self-hosted MongoDB
- AWS DocumentDB

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- CORS protection
- Input validation
- Secure HTTP headers
- Environment variable protection

## 📝 License

MIT License - feel free to use this project for learning and development.

## 🤝 Contributing

This project was created as a comprehensive automotive platform. Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any queries or support:
- **Owner**: Pratik Vala
- **Team**: Abinav Singh, Dhruv Patel

---

**Built with ❤️ by the CarStock Team**

© 2026 CarStock - India's Premier Auto Platform
