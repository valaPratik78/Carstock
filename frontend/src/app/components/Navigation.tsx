import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(244,246,249,0.94)] backdrop-blur-md border-b border-[#dde1e7]">
        <div className="max-w-[1320px] mx-auto px-10">
          <div className="flex items-center justify-between h-[68px] gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 font-serif text-[22px] tracking-wide text-[#0d0f12] font-bold flex-shrink-0">
              <div className="w-[34px] h-[34px] bg-[#0d0f12] rounded-full flex items-center justify-center text-[15px]">
                🔧
              </div>
              <span>
                CAR<em className="text-[#e63946] not-italic">STOCK</em>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
              <Link
                to="/"
                className={`text-[12px] font-medium tracking-wider uppercase transition-colors relative ${isActive('/') ? 'text-[#0d0f12]' : 'text-[#7a7268] hover:text-[#0d0f12]'
                  }`}
              >
                Home
                {isActive('/') && <div className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-[#e63946]" />}
              </Link>
              <Link
                to="/mechanics"
                className={`text-[12px] font-medium tracking-wider uppercase transition-colors relative ${isActive('/mechanics') ? 'text-[#0d0f12]' : 'text-[#7a7268] hover:text-[#0d0f12]'
                  }`}
              >
                Mechanics
                {isActive('/mechanics') && <div className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-[#e63946]" />}
              </Link>
              <Link
                to="/booking"
                className={`text-[12px] font-medium tracking-wider uppercase transition-colors relative ${isActive('/booking') ? 'text-[#0d0f12]' : 'text-[#7a7268] hover:text-[#0d0f12]'
                  }`}
              >
                Book Service
                {isActive('/booking') && <div className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-[#e63946]" />}
              </Link>
              <Link
                to="/used-cars"
                className={`text-[12px] font-medium tracking-wider uppercase transition-colors relative ${isActive('/used-cars') ? 'text-[#0d0f12]' : 'text-[#7a7268] hover:text-[#0d0f12]'
                  }`}
              >
                🚗 Buy/Sell Cars
                {isActive('/used-cars') && <div className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-[#e63946]" />}
              </Link>
              <Link
                to="/modify"
                className={`text-[12px] font-medium tracking-wider uppercase transition-colors relative ${isActive('/modify') ? 'text-[#0d0f12]' : 'text-[#7a7268] hover:text-[#0d0f12]'
                  }`}
              >
                🔩 Mods & Accessories
                {isActive('/modify') && <div className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-[#e63946]" />}
              </Link>
              <Link
                to="/about"
                className={`text-[12px] font-medium tracking-wider uppercase transition-colors relative ${isActive('/about') ? 'text-[#0d0f12]' : 'text-[#7a7268] hover:text-[#0d0f12]'
                  }`}
              >
                About Us
                {isActive('/about') && <div className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-[#e63946]" />}
              </Link>
              {isLoggedIn && (
                <Link
                  to="/dashboard"
                  className={`text-[12px] font-medium tracking-wider uppercase transition-colors relative ${isActive('/dashboard') ? 'text-[#0d0f12]' : 'text-[#7a7268] hover:text-[#0d0f12]'
                    }`}
                >
                  Dashboard
                  {isActive('/dashboard') && <div className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-[#e63946]" />}
                </Link>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex gap-2 items-center flex-shrink-0">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 px-[26px] py-[11px] rounded-[2px] text-[13px] font-semibold tracking-wide uppercase cursor-pointer border-none transition-all bg-transparent text-[#0d0f12] border-[1.5px] border-solid border-[#d1d5db] hover:border-[#0f1923] hover:text-[#0d0f12]"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 px-[26px] py-[11px] rounded-[2px] text-[13px] font-semibold tracking-wide uppercase cursor-pointer border-none transition-all bg-[#0d0f12] text-white hover:bg-[#1a1a2e] hover:shadow-lg hover:-translate-y-[1px]"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center gap-2 px-[26px] py-[11px] rounded-[2px] text-[13px] font-semibold tracking-wide uppercase cursor-pointer border-none transition-all bg-transparent text-[#0d0f12] border-[1.5px] border-solid border-[#d1d5db] hover:border-[#0f1923] hover:text-[#0d0f12]"
                  >
                    Logout
                  </button>
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center gap-2 px-[18px] py-[11px] rounded-[2px] text-[13px] font-semibold tracking-wide uppercase cursor-pointer border-none transition-all bg-[#0d0f12] text-white hover:bg-[#1a1a2e] hover:shadow-lg hover:-translate-y-[1px]"
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div
              className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="w-[22px] h-[1.5px] bg-[#0d0f12] transition-all" />
              <span className="w-[22px] h-[1.5px] bg-[#0d0f12] transition-all" />
              <span className="w-[22px] h-[1.5px] bg-[#0d0f12] transition-all" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-[68px] md:hidden">
          <div className="flex flex-col p-8 gap-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg text-[#0d0f12] hover:text-[#e63946]"
            >
              🏠 Home
            </Link>
            <Link
              to="/mechanics"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg text-[#0d0f12] hover:text-[#e63946]"
            >
              🔧 Mechanics
            </Link>
            <Link
              to="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg text-[#0d0f12] hover:text-[#e63946]"
            >
              📅 Book Service
            </Link>
            <Link
              to="/used-cars"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg text-[#0d0f12] hover:text-[#e63946]"
            >
              🚗 Buy/Sell Cars
            </Link>
            <Link
              to="/modify"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg text-[#0d0f12] hover:text-[#e63946]"
            >
              🔩 Mods & Accessories
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg text-[#0d0f12] hover:text-[#e63946]"
            >
              ℹ️ About Us
            </Link>
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-[#0d0f12] hover:text-[#e63946]"
                >
                  🔑 Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-[#0d0f12] hover:text-[#e63946]"
                >
                  ✨ Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-[#0d0f12] hover:text-[#e63946]"
                >
                  📊 Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-lg text-[#0d0f12] hover:text-[#e63946]"
                >
                  🚪 Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
