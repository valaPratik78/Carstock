import { Link } from 'react-router-dom';
import { Car, Wrench, Shield, Clock, Star, TrendingUp } from 'lucide-react';

export function Home() {
  return (
    <div className="pt-[68px]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f1923] via-[#1e3a5f] to-[#0f2d45]">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] right-[-5%] w-[70%] h-[140%] border border-[rgba(200,150,60,0.12)] rounded-full transform rotate-[-15deg]" />
          <div className="absolute top-[10%] right-[5%] w-[50%] h-full border border-[rgba(200,150,60,0.07)] rounded-full transform rotate-[-10deg]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="container max-w-[1320px] mx-auto px-10 relative z-10">
          <div className="max-w-[660px]">
            <div className="flex items-center gap-2.5 mb-7 animate-fade-in">
              <div className="w-10 h-[1px] bg-[#c8963c]" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#c8963c]">
                India's Premier Auto Platform
              </span>
            </div>
            <h1 className="font-serif text-[clamp(52px,6vw,96px)] leading-[0.95] tracking-[-1px] mb-7 text-white animate-fade-in-up">
              Expert<br />
              <em className="text-[#c8963c] italic">Mechanics</em><br />
              On Demand
            </h1>
            <p className="text-[17px] text-[rgba(255,255,255,0.65)] leading-[1.75] mb-11 max-w-[460px] animate-fade-in-up animation-delay-200">
              Book certified mechanics for your car in minutes. Trusted by 50,000+ vehicle owners across India.
            </p>
            <div className="flex gap-3.5 flex-wrap animate-fade-in-up animation-delay-300">
              <Link
                to="/mechanics"
                className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-[#c8963c] text-white hover:bg-[#e8b455] hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(200,150,60,0.35)] transition-all"
              >
                Find a Mechanic →
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-transparent text-white border-[1.5px] border-[rgba(255,255,255,0.25)] hover:border-white transition-all"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="absolute bottom-0 right-0 w-[420px] bg-[rgba(255,255,255,0.04)] border-l border-t border-[rgba(255,255,255,0.08)] p-9 grid grid-cols-2 gap-7 max-md:hidden">
          <div>
            <div className="font-serif text-[40px] text-[#c8963c] leading-none font-bold">50K+</div>
            <div className="text-[11px] text-[rgba(255,255,255,0.4)] tracking-[2px] uppercase mt-1">
              Happy Customers
            </div>
          </div>
          <div>
            <div className="font-serif text-[40px] text-[#c8963c] leading-none font-bold">500+</div>
            <div className="text-[11px] text-[rgba(255,255,255,0.4)] tracking-[2px] uppercase mt-1">
              Expert Mechanics
            </div>
          </div>
          <div>
            <div className="font-serif text-[40px] text-[#c8963c] leading-none font-bold">48H</div>
            <div className="text-[11px] text-[rgba(255,255,255,0.4)] tracking-[2px] uppercase mt-1">
              Avg. Response
            </div>
          </div>
          <div>
            <div className="font-serif text-[40px] text-[#c8963c] leading-none font-bold">4.9★</div>
            <div className="text-[11px] text-[rgba(255,255,255,0.4)] tracking-[2px] uppercase mt-1">
              Avg. Rating
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-[rgba(255,255,255,0.3)] text-[11px] tracking-[2px] uppercase max-md:hidden">
          <span>Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-transparent animate-pulse" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#f5f2ee]">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3.5">
              <div className="w-8 h-[1px] bg-[#c8963c]" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#c8963c]">What We Offer</span>
            </div>
            <h2 className="text-[clamp(36px,4vw,56px)] font-serif leading-[1.1] tracking-[-1px] text-[#0f1923] mb-4">
              Our Services
            </h2>
            <p className="text-[17px] text-[#7a7268] max-w-[560px] mx-auto">
              From routine maintenance to complex repairs — we've got your vehicle covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon="⚙️"
              title="Engine Repair"
              description="Complete engine diagnostics and repair by certified engineers with modern tools."
              price="₹2,499"
              link="/booking"
            />
            <ServiceCard
              icon="🛢️"
              title="Oil Change"
              description="Premium quality engine oil replacement with filter change included."
              price="₹799"
              link="/booking"
            />
            <ServiceCard
              icon="🔧"
              title="Brake Service"
              description="Comprehensive brake inspection, pad replacement, and fluid top-up service."
              price="₹1,299"
              link="/booking"
            />
            <ServiceCard
              icon="🚗"
              title="Tire Replacement"
              description="Premium tire installation with balancing and alignment services."
              price="₹4,999"
              link="/booking"
            />
            <ServiceCard
              icon="❄️"
              title="AC Service"
              description="Complete AC system check, gas refill, and cooling optimization."
              price="₹1,899"
              link="/booking"
            />
            <ServiceCard
              icon="🎨"
              title="Body Work"
              description="Professional dent removal, paint job, and body restoration services."
              price="₹5,999"
              link="/booking"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-[#c8963c]" />}
              title="Certified Mechanics"
              description="All our mechanics are certified and background-verified professionals."
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-[#c8963c]" />}
              title="24/7 Support"
              description="Round-the-clock customer support for all your automotive needs."
            />
            <FeatureCard
              icon={<Star className="w-8 h-8 text-[#c8963c]" />}
              title="Quality Service"
              description="Premium quality parts and service with warranty coverage."
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-[#c8963c]" />}
              title="Transparent Pricing"
              description="No hidden costs. Get detailed quotes before any work begins."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0f1923] to-[#1e3a5f] text-white">
        <div className="container max-w-[1320px] mx-auto px-10 text-center">
          <h2 className="text-[clamp(36px,4vw,56px)] font-serif leading-[1.1] tracking-[-1px] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-[17px] text-[rgba(255,255,255,0.65)] max-w-[560px] mx-auto mb-10">
            Join thousands of satisfied customers who trust CarStock for their automotive needs.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-[#c8963c] text-white hover:bg-[#e8b455] hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(200,150,60,0.35)] transition-all"
          >
            Create Account →
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  price,
  link,
}: {
  icon: string;
  title: string;
  description: string;
  price: string;
  link: string;
}) {
  return (
    <Link
      to={link}
      className="bg-white p-8 rounded-lg border border-[#d8d2c8] hover:border-[#c8963c] hover:shadow-[0_8px_60px_rgba(15,25,35,0.14)] transition-all group cursor-pointer"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#0f1923] mb-3 group-hover:text-[#c8963c] transition-colors">
        {title}
      </h3>
      <p className="text-[#7a7268] mb-6 leading-relaxed">{description}</p>
      <div className="text-[#c8963c] font-semibold">
        {price} <span className="text-[#7a7268] text-sm">starting from</span>
      </div>
    </Link>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-[#0f1923] mb-2">{title}</h3>
      <p className="text-[#7a7268] leading-relaxed">{description}</p>
    </div>
  );
}
