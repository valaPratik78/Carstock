import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, Car, Wrench, User, Clock, CheckCircle } from 'lucide-react';

export function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      navigate('/login');
      return;
    }

    setUser(JSON.parse(userData));
  }, [navigate]);

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="pt-[68px] min-h-screen bg-[#f5f2ee]">
      <div className="container max-w-[1320px] mx-auto px-10 py-12">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-[0_2px_20px_rgba(15,25,35,0.08)] p-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#c8963c] to-[#e8b455] rounded-full flex items-center justify-center text-white text-3xl font-serif">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h1 className="font-serif text-3xl text-[#0f1923] mb-1">Welcome back, {user.name}!</h1>
              <p className="text-[#7a7268]">{user.email}</p>
            </div>
            <Link
              to="/booking"
              className="px-6 py-3 bg-[#c8963c] text-white rounded-[2px] font-semibold uppercase text-sm hover:bg-[#e8b455] transition-all"
            >
              Book Service
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<Calendar className="w-6 h-6" />} label="Total Bookings" value="12" />
          <StatCard icon={<CheckCircle className="w-6 h-6" />} label="Completed" value="8" />
          <StatCard icon={<Clock className="w-6 h-6" />} label="Pending" value="4" />
          <StatCard icon={<Car className="w-6 h-6" />} label="Vehicles" value="3" />
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-[0_2px_20px_rgba(15,25,35,0.08)]">
          <div className="border-b border-[#d8d2c8] px-8">
            <div className="flex gap-8">
              <TabButton
                label="Overview"
                active={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              />
              <TabButton
                label="My Bookings"
                active={activeTab === 'bookings'}
                onClick={() => setActiveTab('bookings')}
              />
              <TabButton
                label="My Cars"
                active={activeTab === 'cars'}
                onClick={() => setActiveTab('cars')}
              />
              <TabButton
                label="Profile"
                active={activeTab === 'profile'}
                onClick={() => setActiveTab('profile')}
              />
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && <OverviewTab user={user} />}
            {activeTab === 'bookings' && <BookingsTab />}
            {activeTab === 'cars' && <CarsTab />}
            {activeTab === 'profile' && <ProfileTab user={user} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white rounded-lg shadow-[0_2px_20px_rgba(15,25,35,0.08)] p-6">
      <div className="flex items-center gap-4">
        <div className="text-[#c8963c]">{icon}</div>
        <div>
          <div className="text-2xl font-bold text-[#0f1923]">{value}</div>
          <div className="text-sm text-[#7a7268]">{label}</div>
        </div>
      </div>
    </div>
  );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`py-4 font-medium text-sm uppercase tracking-wide transition-colors relative ${
        active ? 'text-[#0f1923]' : 'text-[#7a7268] hover:text-[#0f1923]'
      }`}
    >
      {label}
      {active && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c8963c]" />}
    </button>
  );
}

function OverviewTab({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <h2 className="font-serif text-2xl text-[#0f1923] mb-6">Dashboard Overview</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-[#d8d2c8] rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-[#c8963c]" />
            Recent Services
          </h3>
          <div className="space-y-3">
            <ServiceItem service="Oil Change" date="2026-03-15" status="Completed" />
            <ServiceItem service="Brake Service" date="2026-03-20" status="Pending" />
            <ServiceItem service="AC Service" date="2026-03-25" status="Scheduled" />
          </div>
        </div>
        <div className="border border-[#d8d2c8] rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-[#c8963c]" />
            Account Info
          </h3>
          <div className="space-y-3">
            <InfoRow label="Name" value={user.name} />
            <InfoRow label="Email" value={user.email} />
            <InfoRow label="Phone" value={user.phone || 'Not provided'} />
            <InfoRow label="Member Since" value="March 2026" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingsTab() {
  return (
    <div>
      <h2 className="font-serif text-2xl text-[#0f1923] mb-6">My Bookings</h2>
      <div className="space-y-4">
        <BookingCard
          service="Engine Repair"
          date="2026-04-10"
          time="10:00 AM"
          status="Scheduled"
          mechanic="Rajesh Kumar"
        />
        <BookingCard
          service="Tire Replacement"
          date="2026-03-28"
          time="2:00 PM"
          status="Completed"
          mechanic="Amit Sharma"
        />
        <BookingCard
          service="Oil Change"
          date="2026-03-15"
          time="11:00 AM"
          status="Completed"
          mechanic="Suresh Patel"
        />
      </div>
    </div>
  );
}

function CarsTab() {
  return (
    <div>
      <h2 className="font-serif text-2xl text-[#0f1923] mb-6">My Vehicles</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <CarCard
          make="Honda"
          model="City"
          year={2020}
          registration="MH01AB1234"
        />
        <CarCard
          make="Maruti Suzuki"
          model="Swift"
          year={2019}
          registration="MH02CD5678"
        />
      </div>
      <Link
        to="/used-cars"
        className="inline-block mt-6 px-6 py-3 bg-[#0f1923] text-white rounded-[2px] font-semibold uppercase text-sm hover:bg-[#1e3a5f] transition-all"
      >
        Add Vehicle
      </Link>
    </div>
  );
}

function ProfileTab({ user }: { user: any }) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-[#0f1923] mb-6">Profile Settings</h2>
      <div className="max-w-2xl space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#0f1923] mb-2">Full Name</label>
          <input
            type="text"
            defaultValue={user.name}
            className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0f1923] mb-2">Email</label>
          <input
            type="email"
            defaultValue={user.email}
            className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0f1923] mb-2">Phone</label>
          <input
            type="tel"
            defaultValue={user.phone || ''}
            className="w-full px-4 py-3 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]"
          />
        </div>
        <button className="px-6 py-3 bg-[#c8963c] text-white rounded-[2px] font-semibold uppercase text-sm hover:bg-[#e8b455] transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
}

function ServiceItem({ service, date, status }: { service: string; date: string; status: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-[#d8d2c8] last:border-0">
      <div>
        <div className="font-medium text-[#0f1923]">{service}</div>
        <div className="text-sm text-[#7a7268]">{date}</div>
      </div>
      <span className={`text-xs px-3 py-1 rounded-full ${
        status === 'Completed' ? 'bg-green-100 text-green-700' :
        status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
        'bg-blue-100 text-blue-700'
      }`}>
        {status}
      </span>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-[#d8d2c8] last:border-0">
      <span className="text-[#7a7268]">{label}</span>
      <span className="font-medium text-[#0f1923]">{value}</span>
    </div>
  );
}

function BookingCard({
  service,
  date,
  time,
  status,
  mechanic,
}: {
  service: string;
  date: string;
  time: string;
  status: string;
  mechanic: string;
}) {
  return (
    <div className="border border-[#d8d2c8] rounded-lg p-6 hover:border-[#c8963c] transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg text-[#0f1923]">{service}</h3>
          <p className="text-[#7a7268]">Mechanic: {mechanic}</p>
        </div>
        <span className={`text-xs px-3 py-1 rounded-full ${
          status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
        }`}>
          {status}
        </span>
      </div>
      <div className="flex gap-6 text-sm text-[#7a7268]">
        <div>📅 {date}</div>
        <div>🕐 {time}</div>
      </div>
    </div>
  );
}

function CarCard({
  make,
  model,
  year,
  registration,
}: {
  make: string;
  model: string;
  year: number;
  registration: string;
}) {
  return (
    <div className="border border-[#d8d2c8] rounded-lg p-6 hover:border-[#c8963c] transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-[#c8963c] rounded-full flex items-center justify-center text-white text-xl">
          🚗
        </div>
        <div>
          <h3 className="font-semibold text-lg text-[#0f1923]">
            {make} {model}
          </h3>
          <p className="text-[#7a7268]">{year}</p>
        </div>
      </div>
      <div className="text-sm text-[#7a7268]">
        Registration: <span className="font-medium text-[#0f1923]">{registration}</span>
      </div>
    </div>
  );
}
