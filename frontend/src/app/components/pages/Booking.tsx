import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Wrench } from 'lucide-react';
import axios from 'axios';

export function Booking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serviceType: '',
    carMake: '',
    carModel: '',
    carYear: '',
    registrationNumber: '',
    appointmentDate: '',
    timeSlot: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const services = [
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
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (!token || !user) {
      navigate('/login');
      return;
    }

    try {
      const userData = JSON.parse(user);
      const bookingData = {
        user: userData.id,
        serviceType: formData.serviceType,
        carDetails: {
          make: formData.carMake,
          model: formData.carModel,
          year: parseInt(formData.carYear),
          registrationNumber: formData.registrationNumber,
        },
        appointmentDate: formData.appointmentDate,
        timeSlot: formData.timeSlot,
        description: formData.description,
      };

      await axios.post('http://localhost:5000/api/bookings', bookingData);
      setSuccess(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Booking failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[68px] min-h-screen bg-[#f5f2ee]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f1923] via-[#1e3a5f] to-[#0f2d45] text-white py-16">
        <div className="container max-w-[1320px] mx-auto px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-[#c8963c]" />
            <span className="text-[11px] tracking-[3px] uppercase text-[#c8963c]">
              Quick & Easy
            </span>
          </div>
          <h1 className="font-serif text-[clamp(48px,5vw,64px)] leading-[1.1] tracking-[-1px] mb-4">
            Book Your <em className="text-[#c8963c] italic">Service</em>
          </h1>
          <p className="text-[17px] text-[rgba(255,255,255,0.75)] max-w-[600px] mx-auto">
            Schedule your car service in minutes. Choose your preferred date, time, and service type.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container max-w-[800px] mx-auto px-10">
          <div className="bg-white rounded-lg shadow-[0_8px_60px_rgba(15,25,35,0.14)] p-8">
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                Booking confirmed! Redirecting to dashboard...
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-[#0f1923] mb-2">
                  <Wrench className="inline w-4 h-4 mr-2" />
                  Service Type
                </label>
                <select
                  required
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Car Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#0f1923] mb-2">Car Make</label>
                  <input
                    type="text"
                    required
                    value={formData.carMake}
                    onChange={(e) => setFormData({ ...formData, carMake: e.target.value })}
                    className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]"
                    placeholder="e.g., Honda, Toyota"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f1923] mb-2">Car Model</label>
                  <input
                    type="text"
                    required
                    value={formData.carModel}
                    onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                    className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]"
                    placeholder="e.g., City, Corolla"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#0f1923] mb-2">Year</label>
                  <input
                    type="number"
                    required
                    min="1990"
                    max={new Date().getFullYear() + 1}
                    value={formData.carYear}
                    onChange={(e) => setFormData({ ...formData, carYear: e.target.value })}
                    className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]"
                    placeholder="e.g., 2020"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f1923] mb-2">
                    Registration Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.registrationNumber}
                    onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                    className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]"
                    placeholder="e.g., MH01AB1234"
                  />
                </div>
              </div>

              {/* Appointment Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#0f1923] mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.appointmentDate}
                    onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                    className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f1923] mb-2">
                    <Clock className="inline w-4 h-4 mr-2" />
                    Time Slot
                  </label>
                  <select
                    required
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-[#0f1923] mb-2">
                  Service Description
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]"
                  placeholder="Please describe the issue or service you need..."
                />
              </div>

              <button
                type="submit"
                disabled={loading || success}
                className="w-full bg-[#c8963c] text-white py-4 rounded-[2px] font-semibold uppercase tracking-wide hover:bg-[#e8b455] transition-all disabled:opacity-50"
              >
                {loading ? 'Booking...' : success ? 'Booking Confirmed!' : 'Confirm Booking'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
