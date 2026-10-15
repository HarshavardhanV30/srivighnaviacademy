import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import academyLogo from '../assets/logovighnaviacademy.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Career Guidance', path: '/guidance' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Courses', path: '/courses' },
    { name: 'Internships', path: '/internships' },
    { name: 'B.Tech Projects', path: '/btech-projects' },
    { name: 'M.Tech Projects', path: '/mtech-projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNav = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full transition-colors duration-300 bg-[#060a13]/90 backdrop-blur-xl border-b border-[#1a2b4c] text-[#EAEFF8] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => handleNav('/')} 
          className="cursor-pointer flex items-center space-x-3 group select-none relative"
        >
          <div className="absolute inset-0 bg-[#00D4FF] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
          <img
            src={academyLogo}
            alt="Vighnavi Academy Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 relative z-10"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="relative z-10">
            <span className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C0C8D6] block leading-tight">
              Vighnavi Academy
            </span>
            <p className="text-[10px] text-[#00D4FF] tracking-widest uppercase font-bold drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
              Technical Excellence
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center space-x-1.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#005BFF]/15 text-[#00D4FF] border border-[#00D4FF]/30 shadow-[0_0_15px_rgba(0,212,255,0.15)]'
                    : 'text-[#8b99b3] border border-transparent hover:text-[#EAEFF8] hover:bg-[#1a2b4c]/50'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Mobile Action Buttons */}
        <div className="xl:hidden flex items-center space-x-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#0a1122] border border-[#1a2b4c] text-[#8b99b3] hover:text-[#EAEFF8] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#060a13] border-b border-[#1a2b4c] px-4 pt-4 pb-6 space-y-2 absolute w-full shadow-2xl">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#005BFF]/15 text-[#00D4FF] border border-[#00D4FF]/30 shadow-[0_0_15px_rgba(0,212,255,0.1)]'
                    : 'text-[#8b99b3] hover:text-[#EAEFF8] hover:bg-[#1a2b4c]/40'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}