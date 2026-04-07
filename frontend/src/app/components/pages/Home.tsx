import { Link } from 'react-router-dom';
import { Shield, Clock, Star, TrendingUp } from 'lucide-react';

export function Home() {
  return (
    <div className="pt-[68px]">
      {/* Hero Section with Live Video Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0f12]">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
            poster="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1920"
          >
            <source src="https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/1409899/1409899-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(13,15,18,0.90)] via-[rgba(13,15,18,0.65)] to-[rgba(20,8,8,0.82)]" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[rgba(230,57,70,0.10)] to-transparent" />
        </div>
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-[-20%] right-[-5%] w-[70%] h-[140%] border border-[rgba(230,57,70,0.09)] rounded-full transform rotate-[-15deg]" />
          <div className="absolute top-[10%] right-[5%] w-[50%] h-full border border-[rgba(230,57,70,0.05)] rounded-full transform rotate-[-10deg]" />
        </div>
        <div className="container max-w-[1320px] mx-auto px-10 relative z-10">
          <div className="max-w-[660px]">
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-10 h-[1px] bg-[#e63946]" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#e63946]">India's Premier Auto Platform</span>
            </div>
            <h1 className="font-serif text-[clamp(52px,6vw,96px)] leading-[0.95] tracking-[-1px] mb-7 text-white">
              Expert<br />
              <em className="text-[#e63946] italic">Mechanics</em><br />
              On Demand
            </h1>
            <p className="text-[17px] text-[rgba(255,255,255,0.70)] leading-[1.75] mb-11 max-w-[460px]">
              Book certified mechanics for your car in minutes. Trusted by 50,000+ vehicle owners across India.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Link to="/mechanics" className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-[#e63946] text-white hover:bg-[#ff4d5a] hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(230,57,70,0.45)] transition-all">
                Find a Mechanic →
              </Link>
              <Link to="/booking" className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-transparent text-white border-[1.5px] border-[rgba(255,255,255,0.28)] hover:border-white hover:bg-[rgba(255,255,255,0.06)] transition-all">
                Book Service
              </Link>
            </div>
          </div>
        </div>
        {/* Stats Panel */}
        <div className="absolute bottom-0 right-0 w-[420px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border-l border-t border-[rgba(255,255,255,0.08)] p-9 grid grid-cols-2 gap-7 max-md:hidden z-10">
          {[['50K+', 'Happy Customers'], ['500+', 'Expert Mechanics'], ['48H', 'Avg. Response'], ['4.9★', 'Avg. Rating']].map(([n, l]) => (
            <div key={l}>
              <div className="font-serif text-[40px] text-[#e63946] leading-none font-bold">{n}</div>
              <div className="text-[11px] text-[rgba(255,255,255,0.4)] tracking-[2px] uppercase mt-1">{l}</div>
            </div>
          ))}
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-[rgba(255,255,255,0.30)] text-[11px] tracking-[2px] uppercase max-md:hidden z-10">
          <span>Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[rgba(255,255,255,0.30)] to-transparent animate-pulse" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#f4f6f9]">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3.5">
              <div className="w-8 h-[1px] bg-[#e63946]" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#e63946]">What We Offer</span>
            </div>
            <h2 className="text-[clamp(36px,4vw,56px)] font-serif leading-[1.1] tracking-[-1px] text-[#0d0f12] mb-4">Our Services</h2>
            <p className="text-[17px] text-[#6b7280] max-w-[560px] mx-auto">From routine maintenance to complex repairs — we've got your vehicle covered.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '⚙️', title: 'Engine Repair', desc: 'Complete engine diagnostics and repair by certified engineers with modern tools.', price: '₹2,499' },
              { icon: '🛢️', title: 'Oil Change', desc: 'Premium quality engine oil replacement with filter change included.', price: '₹799' },
              { icon: '🔧', title: 'Brake Service', desc: 'Comprehensive brake inspection, pad replacement, and fluid top-up service.', price: '₹1,299' },
              { icon: '🚗', title: 'Tire Replacement', desc: 'Premium tire installation with balancing and alignment services.', price: '₹4,999' },
              { icon: '❄️', title: 'AC Service', desc: 'Complete AC system check, gas refill, and cooling optimization.', price: '₹1,899' },
              { icon: '🎨', title: 'Body Work', desc: 'Professional dent removal, paint job, and body restoration services.', price: '₹5,999' },
            ].map(s => (
              <Link key={s.title} to="/booking" className="bg-white p-8 rounded-lg border border-[#dde1e7] hover:border-[#e63946] hover:shadow-[0_8px_60px_rgba(230,57,70,0.10)] transition-all group cursor-pointer">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-[#0d0f12] mb-3 group-hover:text-[#e63946] transition-colors">{s.title}</h3>
                <p className="text-[#6b7280] mb-6 leading-relaxed">{s.desc}</p>
                <div className="text-[#e63946] font-semibold">{s.price} <span className="text-[#6b7280] text-sm">starting from</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Shield, title: 'Certified Mechanics', desc: 'All our mechanics are certified and background-verified professionals.' },
              { Icon: Clock, title: '24/7 Support', desc: 'Round-the-clock customer support for all your automotive needs.' },
              { Icon: Star, title: 'Quality Service', desc: 'Premium quality parts and service with warranty coverage.' },
              { Icon: TrendingUp, title: 'Transparent Pricing', desc: 'No hidden costs. Get detailed quotes before any work begins.' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="flex justify-center mb-4"><Icon className="w-8 h-8 text-[#e63946]" /></div>
                <h3 className="text-lg font-semibold text-[#0d0f12] mb-2">{title}</h3>
                <p className="text-[#6b7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0d0f12] to-[#1a1a2e] text-white">
        <div className="container max-w-[1320px] mx-auto px-10 text-center">
          <h2 className="text-[clamp(36px,4vw,56px)] font-serif leading-[1.1] tracking-[-1px] mb-6">Ready to Get Started?</h2>
          <p className="text-[17px] text-[rgba(255,255,255,0.65)] max-w-[560px] mx-auto mb-10">
            Join thousands of satisfied customers who trust CarStock for their automotive needs.
          </p>
          <Link to="/register" className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-[#e63946] text-white hover:bg-[#ff4d5a] hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(230,57,70,0.40)] transition-all">
            Create Account →
          </Link>
        </div>
      </section>
    </div>
  );
}
