import { Star, MapPin, Wrench, Award, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Mechanics() {
  const mechanics = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      specialization: 'Engine Specialist',
      rating: 4.9,
      reviews: 234,
      experience: '15 years',
      location: 'Mumbai, Maharashtra',
      services: ['Engine Repair', 'Transmission', 'Diagnostics'],
      price: '₹500/hour',
    },
    {
      id: 2,
      name: 'Amit Sharma',
      specialization: 'Electrical & AC Expert',
      rating: 4.8,
      reviews: 189,
      experience: '12 years',
      location: 'Delhi, NCR',
      services: ['AC Service', 'Electrical', 'Wiring'],
      price: '₹450/hour',
    },
    {
      id: 3,
      name: 'Suresh Patel',
      specialization: 'Body & Paint Master',
      rating: 4.9,
      reviews: 312,
      experience: '18 years',
      location: 'Ahmedabad, Gujarat',
      services: ['Body Work', 'Painting', 'Dent Removal'],
      price: '₹600/hour',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      specialization: 'All-Round Mechanic',
      rating: 4.7,
      reviews: 156,
      experience: '10 years',
      location: 'Pune, Maharashtra',
      services: ['General Service', 'Oil Change', 'Brakes'],
      price: '₹400/hour',
    },
    {
      id: 5,
      name: 'Mohammed Khan',
      specialization: 'Diesel Engine Expert',
      rating: 4.9,
      reviews: 267,
      experience: '20 years',
      location: 'Bangalore, Karnataka',
      services: ['Diesel Engine', 'Turbo', 'Fuel System'],
      price: '₹550/hour',
    },
    {
      id: 6,
      name: 'Arun Reddy',
      specialization: 'Suspension & Steering',
      rating: 4.8,
      reviews: 198,
      experience: '14 years',
      location: 'Hyderabad, Telangana',
      services: ['Suspension', 'Steering', 'Alignment'],
      price: '₹480/hour',
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
                Certified Professionals
              </span>
            </div>
            <h1 className="font-serif text-[clamp(48px,5vw,72px)] leading-[1.1] tracking-[-1px] mb-6">
              Find <em className="text-[#c8963c] italic">Expert Mechanics</em> Near You
            </h1>
            <p className="text-[17px] text-[rgba(255,255,255,0.75)] leading-relaxed">
              Browse our network of 500+ certified mechanics across India. All verified, experienced, and ready to serve.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-[#d8d2c8]">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]">
              <option>All Specializations</option>
              <option>Engine Specialist</option>
              <option>Electrical Expert</option>
              <option>Body & Paint</option>
              <option>AC Service</option>
            </select>
            <select className="px-4 py-2 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]">
              <option>All Locations</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Pune</option>
            </select>
            <select className="px-4 py-2 border border-[#d8d2c8] rounded-[2px] focus:outline-none focus:border-[#c8963c]">
              <option>Sort by Rating</option>
              <option>Sort by Experience</option>
              <option>Sort by Price</option>
            </select>
          </div>
        </div>
      </section>

      {/* Mechanics Grid */}
      <section className="py-12">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mechanics.map((mechanic) => (
              <MechanicCard key={mechanic.id} mechanic={mechanic} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function MechanicCard({ mechanic }: { mechanic: any }) {
  return (
    <div className="bg-white rounded-lg border border-[#d8d2c8] p-6 hover:border-[#c8963c] hover:shadow-[0_8px_40px_rgba(15,25,35,0.1)] transition-all">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-[#c8963c] to-[#e8b455] rounded-full flex items-center justify-center text-white text-2xl font-serif flex-shrink-0">
          {mechanic.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-[#0f1923] mb-1">{mechanic.name}</h3>
          <p className="text-sm text-[#c8963c] mb-2">{mechanic.specialization}</p>
          <div className="flex items-center gap-2 text-sm text-[#7a7268]">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-[#c8963c] text-[#c8963c]" />
              <span className="font-medium">{mechanic.rating}</span>
            </div>
            <span>•</span>
            <span>{mechanic.reviews} reviews</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4 text-sm text-[#7a7268]">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[#c8963c]" />
          <span>{mechanic.experience} experience</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#c8963c]" />
          <span>{mechanic.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Wrench className="w-4 h-4 text-[#c8963c]" />
          <span>{mechanic.services.join(', ')}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-[#d8d2c8]">
        <div className="font-semibold text-[#0f1923]">{mechanic.price}</div>
        <Link
          to="/booking"
          className="px-4 py-2 bg-[#c8963c] text-white rounded-[2px] text-sm font-semibold uppercase hover:bg-[#e8b455] transition-all"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
