import { Users, Award, Target, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="pt-[68px] min-h-screen bg-[#f5f2ee]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f1923] via-[#1e3a5f] to-[#0f2d45] text-white py-24">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#c8963c]" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#c8963c]">About CarStock</span>
            </div>
            <h1 className="font-serif text-[clamp(48px,5vw,72px)] leading-[1.1] tracking-[-1px] mb-6">
              India's Most Trusted <em className="text-[#c8963c] italic">Auto Platform</em>
            </h1>
            <p className="text-[17px] text-[rgba(255,255,255,0.75)] leading-relaxed">
              We're revolutionizing the automotive service industry in India by connecting vehicle owners with certified mechanics and quality services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-1px] text-[#0f1923] mb-6">
                Our Story
              </h2>
              <p className="text-[#7a7268] leading-relaxed mb-4">
                CarStock was founded with a simple mission: to make quality automotive services accessible, transparent, and affordable for every Indian vehicle owner.
              </p>
              <p className="text-[#7a7268] leading-relaxed mb-4">
                We understand the challenges of finding trustworthy mechanics and fair pricing. That's why we've built a platform that connects you with certified professionals who take pride in their work.
              </p>
              <p className="text-[#7a7268] leading-relaxed">
                From routine maintenance to complex repairs, buying and selling used cars, to customizing your vehicle with premium modifications - we're your one-stop automotive solution.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatBox number="50K+" label="Happy Customers" />
              <StatBox number="500+" label="Expert Mechanics" />
              <StatBox number="100K+" label="Services Completed" />
              <StatBox number="50+" label="Cities Covered" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-1px] text-[#0f1923] mb-4">
              Our Core Values
            </h2>
            <p className="text-[#7a7268] max-w-[600px] mx-auto">
              These principles guide everything we do at CarStock.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<Award className="w-10 h-10 text-[#c8963c]" />}
              title="Excellence"
              description="We maintain the highest standards in every service we provide."
            />
            <ValueCard
              icon={<Heart className="w-10 h-10 text-[#c8963c]" />}
              title="Customer First"
              description="Your satisfaction and trust are our top priorities."
            />
            <ValueCard
              icon={<Target className="w-10 h-10 text-[#c8963c]" />}
              title="Transparency"
              description="Clear pricing and honest communication, always."
            />
            <ValueCard
              icon={<Users className="w-10 h-10 text-[#c8963c]" />}
              title="Community"
              description="Building lasting relationships with customers and mechanics."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#f5f2ee]">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#c8963c]" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#c8963c]">Meet the Team</span>
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-1px] text-[#0f1923] mb-4">
              The People Behind CarStock
            </h2>
            <p className="text-[#7a7268] max-w-[600px] mx-auto">
              Our passionate team is dedicated to revolutionizing the automotive service industry in India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
            <TeamMember
              name="Pratik Vala"
              role="Founder & CEO"
              badge="Owner"
              description="Visionary leader driving CarStock's mission to transform automotive services across India."
            />
            <TeamMember
              name="Abhinav Singh"
              role="Co-Founder & CTO"
              description="Technical architect ensuring seamless platform experience and innovation."
            />
            <TeamMember
              name="Dhruv Patel"
              role="Co-Founder & COO"
              description="Operations expert managing nationwide mechanic network and service quality."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f1923] to-[#1e3a5f] text-white">
        <div className="container max-w-[1320px] mx-auto px-10 text-center">
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-1px] mb-6">
            Join the CarStock Family
          </h2>
          <p className="text-[rgba(255,255,255,0.75)] max-w-[560px] mx-auto mb-10">
            Experience the difference with India's most trusted automotive platform.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/register"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-[#c8963c] text-white hover:bg-[#e8b455] transition-all"
            >
              Get Started Today
            </a>
            <a
              href="/mechanics"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-transparent border-[1.5px] border-white text-white hover:bg-white hover:text-[#0f1923] transition-all"
            >
              Find a Mechanic
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-[#d8d2c8] text-center">
      <div className="font-serif text-[40px] text-[#c8963c] leading-none font-bold mb-2">{number}</div>
      <div className="text-[13px] text-[#7a7268] uppercase tracking-wide">{label}</div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-8 bg-[#f5f2ee] rounded-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#0f1923] mb-3">{title}</h3>
      <p className="text-[#7a7268] leading-relaxed">{description}</p>
    </div>
  );
}

function TeamMember({
  name,
  role,
  badge,
  description,
}: {
  name: string;
  role: string;
  badge?: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-lg border border-[#d8d2c8] text-center hover:border-[#c8963c] hover:shadow-[0_8px_40px_rgba(15,25,35,0.1)] transition-all">
      <div className="w-24 h-24 bg-gradient-to-br from-[#c8963c] to-[#e8b455] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-serif">
        {name.charAt(0)}
      </div>
      <h3 className="text-xl font-semibold text-[#0f1923] mb-1">{name}</h3>
      <div className="text-[#c8963c] text-sm font-medium mb-2">{role}</div>
      {badge && (
        <div className="inline-block px-3 py-1 bg-[#c8963c] text-white text-xs font-semibold rounded-full mb-4">
          {badge}
        </div>
      )}
      <p className="text-[#7a7268] text-sm leading-relaxed">{description}</p>
    </div>
  );
}
