import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0d0f12] text-white">
            {/* Main footer grid */}
            <div className="container max-w-[1320px] mx-auto px-10 pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2.5 font-serif text-[22px] tracking-wide text-white font-bold mb-4">
                            <div className="w-[34px] h-[34px] bg-[#e63946] rounded-full flex items-center justify-center text-[15px]">🔧</div>
                            CAR<em className="text-[#e63946] not-italic">STOCK</em>
                        </Link>
                        <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed mb-6">
                            India's premier automotive platform — connecting vehicle owners with certified mechanics, used cars, and premium modifications since 2021.
                        </p>
                        {/* Social icons */}
                        <div className="flex gap-3">
                            {[
                                { href: 'https://instagram.com/carstockin', Icon: Instagram, label: 'Instagram', bg: 'hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045]' },
                                { href: 'https://twitter.com/carstockin', Icon: Twitter, label: 'Twitter', bg: 'hover:bg-[#1da1f2]' },
                                { href: 'https://linkedin.com/company/carstock', Icon: Linkedin, label: 'LinkedIn', bg: 'hover:bg-[#0077b5]' },
                                { href: 'https://facebook.com/carstockin', Icon: Facebook, label: 'Facebook', bg: 'hover:bg-[#1877f2]' },
                                { href: 'https://youtube.com/@carstockin', Icon: Youtube, label: 'YouTube', bg: 'hover:bg-[#ff0000]' },
                            ].map(({ href, Icon, label, bg }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                                    className={`w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.07)] flex items-center justify-center text-[rgba(255,255,255,0.6)] hover:text-white transition-all ${bg}`}>
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[11px] tracking-[3px] uppercase text-[#e63946] font-semibold mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/mechanics', label: 'Find Mechanics' },
                                { to: '/booking', label: 'Book a Service' },
                                { to: '/used-cars', label: 'Buy / Sell Cars' },
                                { to: '/modify', label: 'Mods & Accessories' },
                                { to: '/about', label: 'About Us' },
                                { to: '/login', label: 'Login' },
                                { to: '/register', label: 'Sign Up' },
                            ].map(({ to, label }) => (
                                <li key={to}>
                                    <Link to={to} className="text-[rgba(255,255,255,0.55)] hover:text-[#e63946] text-sm transition-colors flex items-center gap-1.5 group">
                                        <span className="w-3 h-[1px] bg-[rgba(255,255,255,0.2)] group-hover:bg-[#e63946] group-hover:w-5 transition-all" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[11px] tracking-[3px] uppercase text-[#e63946] font-semibold mb-5">Our Services</h4>
                        <ul className="space-y-3">
                            {[
                                'Engine Repair',
                                'Oil Change',
                                'Brake Service',
                                'Tire Replacement',
                                'AC Service',
                                'Body Work',
                                'Car Detailing',
                                'Roadside Assistance',
                            ].map(s => (
                                <li key={s}>
                                    <Link to="/booking" className="text-[rgba(255,255,255,0.55)] hover:text-[#e63946] text-sm transition-colors flex items-center gap-1.5 group">
                                        <span className="w-3 h-[1px] bg-[rgba(255,255,255,0.2)] group-hover:bg-[#e63946] group-hover:w-5 transition-all" />
                                        {s}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[11px] tracking-[3px] uppercase text-[#e63946] font-semibold mb-5">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-[#e63946] flex-shrink-0 mt-0.5" />
                                <span className="text-[rgba(255,255,255,0.55)] text-sm">
                                    CarStock HQ, Prahlad Nagar,<br />Ahmedabad, Gujarat — 380015
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-[#e63946] flex-shrink-0" />
                                <a href="tel:+918000000000" className="text-[rgba(255,255,255,0.55)] hover:text-white text-sm transition-colors">+91 80000 00000</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-[#e63946] flex-shrink-0" />
                                <a href="mailto:support@carstock.in" className="text-[rgba(255,255,255,0.55)] hover:text-white text-sm transition-colors">support@carstock.in</a>
                            </li>
                        </ul>

                        {/* App badges */}
                        <div className="mt-6">
                            <div className="text-[11px] tracking-[2px] uppercase text-[rgba(255,255,255,0.35)] mb-3">Download App</div>
                            <div className="flex gap-2 flex-wrap">
                                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                                    className="px-3 py-2 bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.10)] rounded-lg text-xs font-medium text-[rgba(255,255,255,0.70)] hover:text-white transition-all border border-[rgba(255,255,255,0.08)]">
                                    📱 Google Play
                                </a>
                                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                                    className="px-3 py-2 bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.10)] rounded-lg text-xs font-medium text-[rgba(255,255,255,0.70)] hover:text-white transition-all border border-[rgba(255,255,255,0.08)]">
                                    🍎 App Store
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[rgba(255,255,255,0.07)]" />

            {/* Bottom bar */}
            <div className="container max-w-[1320px] mx-auto px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-[rgba(255,255,255,0.35)] text-xs">
                    © {year} CarStock Technologies Pvt. Ltd. All rights reserved.
                </div>
                <div className="flex items-center gap-6 flex-wrap justify-center">
                    {[
                        { to: '/privacy-policy', label: 'Privacy Policy' },
                        { to: '/terms', label: 'Terms of Service' },
                        { to: '/refund-policy', label: 'Refund Policy' },
                        { to: '/sitemap', label: 'Sitemap' },
                    ].map(({ to, label }) => (
                        <Link key={to} to={to} className="text-[rgba(255,255,255,0.35)] hover:text-[#e63946] text-xs transition-colors">
                            {label}
                        </Link>
                    ))}
                </div>
                <div className="text-[rgba(255,255,255,0.25)] text-xs">
                    Made with ❤️ in India
                </div>
            </div>
        </footer>
    );
}
