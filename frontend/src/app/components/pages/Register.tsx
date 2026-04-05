import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/dashboard');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f2ee] to-[#e5e0d8] py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-[0_8px_60px_rgba(15,25,35,0.14)] p-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-[36px] text-[#0f1923] mb-2">Create Account</h2>
          <p className="text-[#7a7268]">Join CarStock and access premium auto services</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#0f1923] mb-2">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c] transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0f1923] mb-2">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c] transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0f1923] mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c] transition-colors"
              placeholder="+91 1234567890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0f1923] mb-2">Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c] transition-colors"
              placeholder="••••••••"
            />
            <p className="text-xs text-[#7a7268] mt-1">Minimum 6 characters</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0f1923] text-white py-3 rounded-[2px] font-semibold uppercase tracking-wide hover:bg-[#1e3a5f] transition-all disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-[#7a7268]">
            Already have an account?{' '}
            <Link to="/login" className="text-[#c8963c] hover:underline font-semibold">
              Login
            </Link>
          </p>
        </div>

        <div className="mt-4 text-center">
          <Link to="/" className="text-[#7a7268] hover:text-[#0f1923] text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
