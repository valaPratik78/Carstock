import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Calendar, Gauge, Fuel, Settings, MapPin, Phone } from 'lucide-react';

export function UsedCars() {
  const [filter, setFilter] = useState('all');

  const cars = [
    {
      id: 1,
      make: 'Honda',
      model: 'City',
      year: 2020,
      price: 1250000,
      mileage: 45000,
      fuelType: 'Petrol',
      transmission: 'Manual',
      location: 'Mumbai, Maharashtra',
      seller: 'Rahul Verma',
      phone: '+91 98765 43210',
      image: '🚗',
      status: 'available',
    },
    {
      id: 2,
      make: 'Maruti Suzuki',
      model: 'Swift',
      year: 2019,
      price: 650000,
      mileage: 62000,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'Pune, Maharashtra',
      seller: 'Priya Sharma',
      phone: '+91 98765 43211',
      image: '🚙',
      status: 'available',
    },
    {
      id: 3,
      make: 'Hyundai',
      model: 'Creta',
      year: 2021,
      price: 1680000,
      mileage: 28000,
      fuelType: 'Diesel',
      transmission: 'Automatic',
      location: 'Bangalore, Karnataka',
      seller: 'Amit Kumar',
      phone: '+91 98765 43212',
      image: '🚕',
      status: 'available',
    },
    {
      id: 4,
      make: 'Tata',
      model: 'Nexon EV',
      year: 2022,
      price: 1450000,
      mileage: 15000,
      fuelType: 'Electric',
      transmission: 'Automatic',
      location: 'Delhi, NCR',
      seller: 'Neha Patel',
      phone: '+91 98765 43213',
      image: '⚡',
      status: 'available',
    },
    {
      id: 5,
      make: 'Mahindra',
      model: 'XUV700',
      year: 2022,
      price: 2150000,
      mileage: 22000,
      fuelType: 'Diesel',
      transmission: 'Automatic',
      location: 'Ahmedabad, Gujarat',
      seller: 'Vikram Singh',
      phone: '+91 98765 43214',
      image: '🚐',
      status: 'available',
    },
    {
      id: 6,
      make: 'Toyota',
      model: 'Fortuner',
      year: 2020,
      price: 3200000,
      mileage: 55000,
      fuelType: 'Diesel',
      transmission: 'Automatic',
      location: 'Hyderabad, Telangana',
      seller: 'Suresh Reddy',
      phone: '+91 98765 43215',
      image: '🚙',
      status: 'available',
    },
  ];

  return (
    <div className="pt-[68px] min-h-screen bg-[#f5f2ee]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f1923] via-[#1e3a5f] to-[#0f2d45] text-white py-20">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#c8963c]" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#c8963c]">
                Verified Pre-Owned Cars
              </span>
            </div>
            <h1 className="font-serif text-[clamp(48px,5vw,72px)] leading-[1.1] tracking-[-1px] mb-6">
              Buy & Sell <em className="text-[#c8963c] italic">Used Cars</em>
            </h1>
            <p className="text-[17px] text-[rgba(255,255,255,0.75)] leading-relaxed mb-8">
              Browse our curated collection of quality pre-owned vehicles. All cars are verified and come with detailed inspection reports.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-[#c8963c] text-white hover:bg-[#e8b455] transition-all"
            >
              Sell Your Car
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-[#d8d2c8]">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]">
              <option>All Makes</option>
              <option>Honda</option>
              <option>Maruti Suzuki</option>
              <option>Hyundai</option>
              <option>Tata</option>
              <option>Mahindra</option>
              <option>Toyota</option>
            </select>
            <select className="px-4 py-2 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]">
              <option>All Fuel Types</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
              <option>Hybrid</option>
            </select>
            <select className="px-4 py-2 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]">
              <option>All Locations</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Pune</option>
            </select>
            <select className="px-4 py-2 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Year: Newest First</option>
              <option>Mileage: Lowest First</option>
            </select>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CarCard({ car }: { car: any }) {
  return (
    <div className="bg-white rounded-lg border border-[#d8d2c8] overflow-hidden hover:border-[#c8963c] hover:shadow-[0_8px_40px_rgba(15,25,35,0.1)] transition-all">
      <div className="h-48 bg-gradient-to-br from-[#e5e0d8] to-[#d8d2c8] flex items-center justify-center text-6xl">
        {car.image}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-xl text-[#0f1923] mb-1">
              {car.make} {car.model}
            </h3>
            <p className="text-sm text-[#7a7268]">{car.year}</p>
          </div>
          <div className="text-right">
            <div className="font-serif text-2xl text-[#c8963c] font-bold">
              ₹{(car.price / 100000).toFixed(1)}L
            </div>
            <div className="text-xs text-[#7a7268]">Negotiable</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-[#7a7268]">
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-[#c8963c]" />
            <span>{car.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-[#c8963c]" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-[#c8963c]" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#c8963c]" />
            <span>{car.year}</span>
          </div>
        </div>

        <div className="border-t border-[#d8d2c8] pt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2 text-[#7a7268]">
            <MapPin className="w-4 h-4 text-[#c8963c]" />
            <span>{car.location}</span>
          </div>
          <div className="flex items-center gap-2 text-[#7a7268]">
            <Phone className="w-4 h-4 text-[#c8963c]" />
            <span>{car.seller} • {car.phone}</span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-[#c8963c] text-white rounded-[2px] text-sm font-semibold uppercase hover:bg-[#e8b455] transition-all">
            Contact Seller
          </button>
          <button className="px-4 py-2 border border-[#d8d2c8] text-[#0f1923] rounded-[2px] text-sm font-semibold uppercase hover:border-[#c8963c] transition-all">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
