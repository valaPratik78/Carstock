# 🚀 CarStock - Quick Start Guide

Get your CarStock MERN application up and running in minutes!

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **pnpm** (recommended) or npm - Install pnpm: `npm install -g pnpm`

## ⚡ Quick Setup (1 Minute)

### Step 1: Install All Dependencies
In the project root directory, run:
```bash
npm run install:all
```
This will install dependencies for the Root, Frontend, and Backend.

### Step 2: Configure Environment
Navigate to the `backend` folder and create a `.env` file:
```bash
cd backend
cp .env.example .env
```
(No changes needed to `.env` if you're using default local MongoDB)

### Step 3: Start the Full Project
Go back to the root directory and run:
```bash
npm run dev
```
This will start both the Frontend and Backend concurrently!

### Step 4: Open the Application
Open your browser and navigate to:
```
http://localhost:5173
```

## 🎉 You're Ready!

Your CarStock application is now running with:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **MongoDB**: localhost:27017

## 🧪 Test the Application

### 1. Create an Account
- Click "Sign Up" in the navigation
- Fill in your details
- Submit to create your account

### 2. Explore Features
- Browse mechanics
- Book a service
- View used cars
- Check out modifications
- Visit your dashboard

## 🔧 Common Issues & Solutions

### Issue: MongoDB Connection Failed
**Solution**: Ensure MongoDB is running
```bash
# Check if MongoDB is running
ps aux | grep mongod

# Start MongoDB if not running
mongod
```

### Issue: Port Already in Use
**Solution**: Change the port in `.env` or kill the process
```bash
# Find process on port 5000
lsof -ti:5000

# Kill the process
kill -9 <PID>
```

### Issue: Cannot Find Module
**Solution**: Reinstall dependencies
```bash
# Frontend
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Backend
cd backend
rm -rf node_modules package-lock.json
npm install
```

## 📚 Next Steps

1. **Customize the Application**
   - Update colors in Tailwind config
   - Add your own services
   - Customize the team information

2. **Add Sample Data**
   - Use the provided API endpoints to add mechanics
   - Create car listings
   - Add service categories

3. **Deploy to Production**
   - Follow the deployment guide in README.md
   - Set up environment variables in production
   - Use MongoDB Atlas for cloud database

## 🎨 Project Structure Quick Reference

```
carstock/
├── frontend files (React + TypeScript + Tailwind)
│   ├── src/app/App.tsx           # Main app with routing
│   ├── src/app/components/       # All components
│   │   ├── Navigation.tsx        # Navigation bar
│   │   └── pages/                # All page components
│   └── package.json
│
└── backend/                      # Express + MongoDB
    ├── config/db.ts             # Database connection
    ├── models/                  # Mongoose models
    ├── routes/                  # API routes
    ├── server.ts                # Main server file
    └── package.json
```

## 🆘 Need Help?

### Check the Documentation
- Main README: `README.md`
- Backend API Docs: `backend/README.md`

### API Health Check
```bash
curl http://localhost:5000/api/health
```

### View Backend Logs
The backend terminal will show all API requests and errors.

### View Frontend Console
Open browser DevTools (F12) to see frontend logs and errors.

## 🎯 Development Tips

### Hot Reload
Both frontend and backend have hot reload enabled:
- Frontend: Changes auto-refresh in browser
- Backend: Nodemon restarts server on file changes

### API Testing
Use tools like:
- **Postman** - [Download](https://www.postman.com/)
- **Thunder Client** (VS Code extension)
- **curl** (command line)

Example API call:
```bash
curl http://localhost:5000/api/health
```

### Database GUI
Use MongoDB Compass to view your database:
- [Download MongoDB Compass](https://www.mongodb.com/products/compass)
- Connect to: `mongodb://localhost:27017`
- Database name: `carstock`

## 🚀 Production Checklist

Before deploying to production:

- [ ] Change `JWT_SECRET` to a strong, unique value
- [ ] Update `MONGODB_URI` to production database
- [ ] Set `NODE_ENV=production`
- [ ] Remove all console.logs
- [ ] Enable HTTPS
- [ ] Set up proper CORS origins
- [ ] Configure proper error handling
- [ ] Set up monitoring and logging
- [ ] Enable database backups
- [ ] Configure rate limiting
- [ ] Set up SSL certificates

## 📞 Support

For issues or questions:
- Check the main README.md
- Review the API documentation
- Check console/terminal for error messages

---

**Happy Coding! 🚗✨**

*Built by: Pratik Vala (Owner), Abhinav Singh, Dhruv Patel*
