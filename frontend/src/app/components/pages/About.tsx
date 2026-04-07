import { Users, Award, Target, Heart, ExternalLink, Instagram, Twitter, Linkedin, Facebook, Github } from 'lucide-react';

export function About() {
  return (
    <div className="pt-[68px] min-h-screen bg-[#f4f6f9]">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0d0f12] via-[#1a1a2e] to-[#14060a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(230,57,70,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[120%] border border-[rgba(230,57,70,0.10)] rounded-full transform rotate-[-12deg]" />
        <div className="container max-w-[1320px] mx-auto px-10 relative z-10">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#e63946]" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#e63946]">About CarStock</span>
            </div>
            <h1 className="font-serif text-[clamp(48px,5vw,72px)] leading-[1.1] tracking-[-1px] mb-6">
              India's Most Trusted <em className="text-[#e63946] italic">Auto Platform</em>
            </h1>
            <p className="text-[17px] text-[rgba(255,255,255,0.75)] leading-relaxed">
              We're revolutionizing the automotive service industry in India by connecting vehicle owners with certified mechanics and quality services.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FOUNDER SPOTLIGHT — Pratik Vala
         ══════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container max-w-[1320px] mx-auto px-10">
          {/* Label */}
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-[1px] bg-[#e63946]" />
            <span className="text-[11px] tracking-[3px] uppercase text-[#e63946]">Founder's Story</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Avatar + social */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="relative">
                {/* Founder avatar ring */}
                <div className="w-44 h-44 rounded-full bg-gradient-to-br from-[#e63946] via-[#ff6b6b] to-[#c1121f] flex items-center justify-center text-white text-6xl font-serif shadow-[0_20px_60px_rgba(230,57,70,0.40)]">
                  P
                </div>
                {/* Founder badge */}
                <div className="absolute -bottom-2 -right-2 bg-[#e63946] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Founder & CEO
                </div>
              </div>

              <div>
                <h2 className="font-serif text-[36px] text-[#0d0f12] leading-none">Pratik Vala</h2>
                <p className="text-[#e63946] font-medium mt-1 text-sm tracking-wide uppercase">Visionary Founder · CarStock</p>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-3 flex-wrap">
                <a href="https://www.linkedin.com/in/pratikvala" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0077b5] text-white text-sm font-medium hover:-translate-y-[1px] hover:shadow-lg transition-all">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://www.instagram.com/pratikvala" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-sm font-medium hover:-translate-y-[1px] hover:shadow-lg transition-all">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a href="https://twitter.com/pratikvala" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1da1f2] text-white text-sm font-medium hover:-translate-y-[1px] hover:shadow-lg transition-all">
                  <Twitter className="w-4 h-4" /> Twitter
                </a>
                <a href="https://github.com/pratikvala" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#24292e] text-white text-sm font-medium hover:-translate-y-[1px] hover:shadow-lg transition-all">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>

            {/* Story text */}
            <div>
              <h3 className="font-serif text-[28px] text-[#0d0f12] mb-5">How It All Started</h3>
              <div className="space-y-4 text-[#4b5563] leading-relaxed">
                <p>
                  Growing up in Gujarat, <strong className="text-[#0d0f12]">Pratik Vala</strong> witnessed firsthand the frustration of vehicle owners being overcharged by unverified mechanics with zero accountability. One afternoon in 2021, after his family's car broke down and the repair experience turned into a nightmare of hidden costs and delays, Pratik decided he'd had enough.
                </p>
                <p>
                  Armed with a laptop, a relentless drive, and deep roots in India's automotive culture, he started sketching out what would become <strong className="text-[#e63946]">CarStock</strong> — a platform where every mechanic is certified, every price is transparent, and every customer is treated fairly.
                </p>
                <p>
                  "I wanted to build the platform I wished existed," Pratik says. "A place where a first-time car owner from a small city gets the same quality service as someone in Mumbai."
                </p>
                <p>
                  Within a year, CarStock had onboarded over 200 verified mechanics across 15 cities. Today, it serves 50,000+ customers and is expanding rapidly across India — all driven by the same simple mission Pratik wrote in his notebook on day one.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-8 border-l-2 border-[#e63946] pl-6 space-y-5">
                {[
                  { year: '2021', event: 'CarStock idea born after a frustrating car repair experience' },
                  { year: '2022', event: 'Launched MVP with 200 mechanics across 15 Indian cities' },
                  { year: '2023', event: 'Crossed 25,000 customers & added Used Cars marketplace' },
                  { year: '2024', event: '50,000+ customers, 500+ mechanics, 50+ cities nationwide' },
                  { year: '2025', event: 'Launched Mods & Accessories platform + Series A funding' },
                ].map(item => (
                  <div key={item.year} className="relative">
                    <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[#e63946]" />
                    <div className="text-xs font-bold text-[#e63946] tracking-widest uppercase mb-0.5">{item.year}</div>
                    <div className="text-sm text-[#374151]">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Founder quote */}
          <div className="mt-16 bg-gradient-to-r from-[#0d0f12] to-[#1a1a2e] rounded-2xl p-10 text-white text-center relative overflow-hidden">
            <div className="absolute top-4 left-8 text-[120px] text-[rgba(230,57,70,0.15)] font-serif leading-none select-none">"</div>
            <p className="text-[22px] font-serif italic text-[rgba(255,255,255,0.92)] max-w-[700px] mx-auto relative z-10">
              The Indian car owner deserves transparency, quality, and dignity in every service interaction. That's not a luxury — it's a right.
            </p>
            <div className="mt-4 text-[#e63946] font-medium text-sm tracking-wide">— Pratik Vala, Founder & CEO</div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#f4f6f9]">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-1px] text-[#0d0f12] mb-6">Our Story</h2>
              <p className="text-[#6b7280] leading-relaxed mb-4">CarStock was founded with a simple mission: to make quality automotive services accessible, transparent, and affordable for every Indian vehicle owner.</p>
              <p className="text-[#6b7280] leading-relaxed mb-4">We understand the challenges of finding trustworthy mechanics and fair pricing. That's why we've built a platform that connects you with certified professionals who take pride in their work.</p>
              <p className="text-[#6b7280] leading-relaxed">From routine maintenance to complex repairs, buying and selling used cars, to customizing your vehicle with premium modifications — we're your one-stop automotive solution.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[['50K+', 'Happy Customers'], ['500+', 'Expert Mechanics'], ['100K+', 'Services Completed'], ['50+', 'Cities Covered']].map(([n, l]) => (
                <div key={l} className="bg-white p-6 rounded-lg border border-[#dde1e7] text-center">
                  <div className="font-serif text-[40px] text-[#e63946] leading-none font-bold mb-2">{n}</div>
                  <div className="text-[13px] text-[#6b7280] uppercase tracking-wide">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-1px] text-[#0d0f12] mb-4">Our Core Values</h2>
            <p className="text-[#6b7280] max-w-[600px] mx-auto">These principles guide everything we do at CarStock.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Award, title: 'Excellence', desc: 'We maintain the highest standards in every service we provide.' },
              { Icon: Heart, title: 'Customer First', desc: 'Your satisfaction and trust are our top priorities.' },
              { Icon: Target, title: 'Transparency', desc: 'Clear pricing and honest communication, always.' },
              { Icon: Users, title: 'Community', desc: 'Building lasting relationships with customers and mechanics.' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="text-center p-8 bg-[#f4f6f9] rounded-lg">
                <div className="flex justify-center mb-4"><Icon className="w-10 h-10 text-[#e63946]" /></div>
                <h3 className="text-xl font-semibold text-[#0d0f12] mb-3">{title}</h3>
                <p className="text-[#6b7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          PARTNERS SECTION (separated)
         ══════════════════════════════════ */}
      <section className="py-20 bg-[#f4f6f9]">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#e63946]" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#e63946]">Co-Founders & Partners</span>
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-1px] text-[#0d0f12] mb-4">
              The Partners Who Built CarStock
            </h2>
            <p className="text-[#6b7280] max-w-[600px] mx-auto">
              Alongside Pratik, these co-founders brought the technical and operational expertise needed to scale CarStock across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
            {/* Abinav Singh */}
            <div className="bg-white p-8 rounded-xl border border-[#dde1e7] hover:border-[#e63946] hover:shadow-[0_8px_40px_rgba(230,57,70,0.10)] transition-all">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1a1a2e] to-[#374151] rounded-full flex items-center justify-center text-white text-2xl font-serif flex-shrink-0">
                  A
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0d0f12]">Abinav Singh</h3>
                  <div className="text-[#e63946] text-sm font-medium">Co-Founder & CTO</div>
                  <div className="inline-block mt-1 px-2 py-0.5 bg-[#e63946]/10 text-[#e63946] text-xs font-semibold rounded-full">Technology</div>
                </div>
              </div>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-5">
                Abinav is the technical backbone of CarStock. With a background in distributed systems and mobile engineering, he architected the platform from scratch — building a real-time mechanic-matching engine that scales across India.
              </p>
              <div className="flex gap-2">
                <a href="https://linkedin.com/in/abinavsingh" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0077b5]/10 text-[#0077b5] text-xs font-medium hover:bg-[#0077b5]/20 transition-colors">
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </a>
                <a href="https://twitter.com/abinavsingh" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1da1f2]/10 text-[#1da1f2] text-xs font-medium hover:bg-[#1da1f2]/20 transition-colors">
                  <Twitter className="w-3 h-3" /> Twitter
                </a>
                <a href="https://github.com/abinavsingh" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#24292e]/10 text-[#24292e] text-xs font-medium hover:bg-[#24292e]/20 transition-colors">
                  <Github className="w-3 h-3" /> GitHub
                </a>
              </div>
            </div>

            {/* Dhruv Patel */}
            <div className="bg-white p-8 rounded-xl border border-[#dde1e7] hover:border-[#e63946] hover:shadow-[0_8px_40px_rgba(230,57,70,0.10)] transition-all">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1a1a2e] to-[#374151] rounded-full flex items-center justify-center text-white text-2xl font-serif flex-shrink-0">
                  D
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0d0f12]">Dhruv Patel</h3>
                  <div className="text-[#e63946] text-sm font-medium">Co-Founder & COO</div>
                  <div className="inline-block mt-1 px-2 py-0.5 bg-[#e63946]/10 text-[#e63946] text-xs font-semibold rounded-full">Operations</div>
                </div>
              </div>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-5">
                Dhruv manages CarStock's nationwide mechanic network, quality assurance, and operations at scale. His deep relationships with automotive workshops and his operational rigor have been central to CarStock's rapid expansion across 50+ cities.
              </p>
              <div className="flex gap-2">
                <a href="https://linkedin.com/in/dhruvpatel" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0077b5]/10 text-[#0077b5] text-xs font-medium hover:bg-[#0077b5]/20 transition-colors">
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </a>
                <a href="https://twitter.com/dhruvpatel" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1da1f2]/10 text-[#1da1f2] text-xs font-medium hover:bg-[#1da1f2]/20 transition-colors">
                  <Twitter className="w-3 h-3" /> Twitter
                </a>
                <a href="https://www.instagram.com/dhruvpatel" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#833ab4]/10 text-[#833ab4] text-xs font-medium hover:bg-[#833ab4]/20 transition-colors">
                  <Instagram className="w-3 h-3" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0d0f12] to-[#1a1a2e] text-white">
        <div className="container max-w-[1320px] mx-auto px-10 text-center">
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-1px] mb-6">Join the CarStock Family</h2>
          <p className="text-[rgba(255,255,255,0.75)] max-w-[560px] mx-auto mb-10">Experience the difference with India's most trusted automotive platform.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/register" className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-[#e63946] text-white hover:bg-[#ff4d5a] transition-all">Get Started Today</a>
            <a href="/mechanics" className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-transparent border-[1.5px] border-white text-white hover:bg-white hover:text-[#0d0f12] transition-all">Find a Mechanic</a>
          </div>
        </div>
      </section>
    </div>
  );
}
