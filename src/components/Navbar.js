
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import academyLogo from '../assets/logovighnaviacademy.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Career Guidance', path: '/guidance' },
    { name: 'Workshops', path: '/workshops' },
    {
      name: 'Courses',
      subLinks: [
        { name: 'All Courses', path: '/courses' },
        { name: 'Internships', path: '/internships' },
      ],
    },
    {
      name: 'Projects',
      subLinks: [
        { name: 'B.Tech Projects', path: '/btech-projects' },
        { name: 'M.Tech Projects', path: '/mtech-projects' },
        { name: 'PhD Research Papers', path: '/phd-research' },
      ],
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNav = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdownOpen((current) =>
      current === name ? null : name
    );
  };

  const isDropdownActive = (subLinks) =>
    subLinks.some((link) => location.pathname === link.path);

  const linkClass = (isActive) =>
    `flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold
    transition-all duration-300 ${
      isActive
        ? 'bg-[#005BFF]/15 text-[#00D4FF] border border-[#00D4FF]/30 shadow-[0_0_15px_rgba(0,212,255,0.15)]'
        : 'text-[#8b99b3] border border-transparent hover:text-[#EAEFF8] hover:bg-[#1a2b4c]/50'
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#060a13]/90 backdrop-blur-xl border-b border-[#1a2b4c] text-[#EAEFF8] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo Only */}
        <button
          type="button"
          onClick={() => handleNav('/')}
          aria-label="Go to Vighnavi Academy home"
          className="relative flex items-center justify-center shrink-0 cursor-pointer group"
        >
          <span className="absolute inset-0 rounded-full bg-[#00D4FF] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

          <img
            src={academyLogo}
            alt="Vighnavi Academy"
            className="relative z-10 block w-[220px] h-[64px] sm:w-[260px] sm:h-[68px] lg:w-[280px] lg:h-[72px] object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
            onError={(e) => {
              e.currentTarget.style.visibility = 'hidden';
            }}
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center space-x-1.5">
          {navLinks.map((link) => {
            if (link.subLinks) {
              const isActive = isDropdownActive(link.subLinks);

              return (
                <div key={link.name} className="relative group">
                  <button
                    type="button"
                    className={linkClass(isActive)}
                    aria-haspopup="true"
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Desktop Dropdown */}
                  <div className="absolute top-full left-0 mt-1 w-56 bg-[#060a13]/95 backdrop-blur-xl border border-[#1a2b4c] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0 overflow-hidden z-50">
                    <div className="py-2 flex flex-col">
                      {link.subLinks.map((sub) => {
                        const isSubActive =
                          location.pathname === sub.path;

                        return (
                          <button
                            type="button"
                            key={sub.path}
                            onClick={() => handleNav(sub.path)}
                            className={`text-left px-4 py-2.5 text-sm font-bold transition-colors ${
                              isSubActive
                                ? 'text-[#00D4FF] bg-[#1a2b4c]/40'
                                : 'text-[#8b99b3] hover:text-[#EAEFF8] hover:bg-[#1a2b4c]/50'
                            }`}
                          >
                            {sub.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            const isActive = location.pathname === link.path;

            return (
              <button
                type="button"
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={linkClass(isActive)}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="p-2 rounded-xl bg-[#0a1122] border border-[#1a2b4c] text-[#8b99b3] hover:text-[#EAEFF8] transition-colors"
            aria-label={
              mobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#060a13] border-b border-[#1a2b4c] px-4 pt-4 pb-6 space-y-2 absolute top-full left-0 w-full shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map((link) => {
            if (link.subLinks) {
              const isActive = isDropdownActive(link.subLinks);
              const isDropdownOpen =
                mobileDropdownOpen === link.name;

              return (
                <div key={link.name} className="w-full flex flex-col">
                  <button
                    type="button"
                    onClick={() =>
                      toggleMobileDropdown(link.name)
                    }
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-[#005BFF]/15 text-[#00D4FF] border border-[#00D4FF]/30 shadow-[0_0_15px_rgba(0,212,255,0.1)]'
                        : 'text-[#8b99b3] hover:text-[#EAEFF8] hover:bg-[#1a2b4c]/40'
                    }`}
                    aria-expanded={isDropdownOpen}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Mobile Submenu */}
                  {isDropdownOpen && (
                    <div className="flex flex-col space-y-1 mt-1 pl-4 pr-2">
                      {link.subLinks.map((sub) => {
                        const isSubActive =
                          location.pathname === sub.path;

                        return (
                          <button
                            type="button"
                            key={sub.path}
                            onClick={() => handleNav(sub.path)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                              isSubActive
                                ? 'text-[#00D4FF] bg-[#1a2b4c]/30'
                                : 'text-[#8b99b3] hover:text-[#EAEFF8] hover:bg-[#1a2b4c]/20'
                            }`}
                          >
                            {sub.name}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = location.pathname === link.path;

            return (
              <button
                type="button"
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
