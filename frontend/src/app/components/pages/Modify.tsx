import { Link } from 'react-router-dom';
import { Wrench, Sparkles, Shield, Zap } from 'lucide-react';

export function Modify() {
  const categories = [
    {
      name: 'Performance',
      icon: '⚡',
      items: [
        { name: 'Cold Air Intake', price: '₹8,999', description: 'Boost engine performance and efficiency' },
        { name: 'Exhaust System', price: '₹25,999', description: 'Premium stainless steel performance exhaust' },
        { name: 'Turbo Kit', price: '₹85,000', description: 'Complete turbocharger kit with installation' },
        { name: 'ECU Remap', price: '₹15,000', description: 'Professional ECU tuning for more power' },
      ],
    },
    {
      name: 'Exterior',
      icon: '✨',
      items: [
        { name: 'Body Kit', price: '₹35,000', description: 'Complete aerodynamic body kit' },
        { name: 'Alloy Wheels', price: '₹45,000', description: 'Premium 17" forged alloy wheels set' },
        { name: 'LED Headlights', price: '₹18,000', description: 'High-intensity LED headlight upgrade' },
        { name: 'Roof Spoiler', price: '₹8,500', description: 'Carbon fiber rear spoiler' },
      ],
    },
    {
      name: 'Interior',
      icon: '🪑',
      items: [
        { name: 'Racing Seats', price: '₹42,000', description: 'Premium bucket seats with lumbar support' },
        { name: 'Steering Wheel', price: '₹12,000', description: 'Leather-wrapped sport steering wheel' },
        { name: 'Audio System', price: '₹35,000', description: 'Premium sound system with subwoofer' },
        { name: 'Floor Mats', price: '₹3,500', description: 'Custom-fit premium floor mats' },
      ],
    },
    {
      name: 'Safety',
      icon: '🛡️',
      items: [
        { name: 'Dash Cam', price: '₹8,999', description: 'Dual camera with night vision' },
        { name: 'Reverse Camera', price: '₹6,500', description: 'HD parking camera with guidelines' },
        { name: 'Parking Sensors', price: '₹4,999', description: 'Front & rear parking sensors' },
        { name: 'Blind Spot Mirror', price: '₹1,999', description: 'Wide-angle blind spot mirrors' },
      ],
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
                Customize Your Ride
              </span>
            </div>
            <h1 className="font-serif text-[clamp(48px,5vw,72px)] leading-[1.1] tracking-[-1px] mb-6">
              Car <em className="text-[#c8963c] italic">Modifications</em> & Accessories
            </h1>
            <p className="text-[17px] text-[rgba(255,255,255,0.75)] leading-relaxed">
              Transform your vehicle with premium modifications and accessories. From performance upgrades to aesthetic enhancements.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Wrench className="w-8 h-8 text-[#c8963c]" />}
              title="Expert Installation"
              description="Professional installation by certified technicians"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-[#c8963c]" />}
              title="Genuine Parts"
              description="100% authentic parts with warranty coverage"
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8 text-[#c8963c]" />}
              title="Quality Assured"
              description="Premium quality products from trusted brands"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-[#c8963c]" />}
              title="Quick Service"
              description="Fast turnaround time for all modifications"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container max-w-[1320px] mx-auto px-10">
          {categories.map((category, index) => (
            <div key={category.name} className={index > 0 ? 'mt-16' : ''}>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl">{category.icon}</div>
                <div>
                  <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-1px] text-[#0f1923]">
                    {category.name}
                  </h2>
                  <div className="w-20 h-[2px] bg-[#c8963c] mt-2" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item) => (
                  <ModificationCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f1923] to-[#1e3a5f] text-white">
        <div className="container max-w-[1320px] mx-auto px-10 text-center">
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-1px] mb-6">
            Ready to Upgrade Your Car?
          </h2>
          <p className="text-[rgba(255,255,255,0.75)] max-w-[560px] mx-auto mb-10">
            Book a consultation with our modification experts and get a custom quote for your project.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-[#c8963c] text-white hover:bg-[#e8b455] transition-all"
            >
              Book Consultation
            </Link>
            <Link
              to="/mechanics"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-transparent border-[1.5px] border-white text-white hover:bg-white hover:text-[#0f1923] transition-all"
            >
              Find Specialists
            </Link>
          </div>
        </div>
      </section>
    </div>
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
      <p className="text-[#7a7268] leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function ModificationCard({ item }: { item: any }) {
  return (
    <div className="bg-white rounded-lg border border-[#d8d2c8] p-6 hover:border-[#c8963c] hover:shadow-[0_8px_40px_rgba(15,25,35,0.1)] transition-all">
      <h3 className="font-semibold text-lg text-[#0f1923] mb-2">{item.name}</h3>
      <p className="text-sm text-[#7a7268] mb-4 min-h-[40px]">{item.description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-[#d8d2c8]">
        <div className="text-[#c8963c] font-semibold text-lg">{item.price}</div>
        <Link
          to="/booking"
          className="px-4 py-2 bg-[#0f1923] text-white rounded-[2px] text-xs font-semibold uppercase hover:bg-[#1e3a5f] transition-all"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}
