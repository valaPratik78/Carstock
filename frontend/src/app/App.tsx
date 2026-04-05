import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/pages/Home';
import { Mechanics } from './components/pages/Mechanics';
import { Booking } from './components/pages/Booking';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Dashboard } from './components/pages/Dashboard';
import { UsedCars } from './components/pages/UsedCars';
import { About } from './components/pages/About';
import { Modify } from './components/pages/Modify';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f5f2ee]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mechanics" element={<Mechanics />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/used-cars" element={<UsedCars />} />
          <Route path="/about" element={<About />} />
          <Route path="/modify" element={<Modify />} />
        </Routes>
      </div>
    </Router>
  );
}