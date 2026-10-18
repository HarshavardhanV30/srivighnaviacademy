import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import academyLogo from '../assets/logovighnaviacademy.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black text-neutral-400 border-t border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <img
                src={academyLogo}
                alt="Vighnavi Academy Logo"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-xl font-extrabold tracking-tight text-white">
                Vighnavi Academy
              </span>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Empowering engineers and tech enthusiasts with hands-on development, career guidance, and live mentorship.
            </p>
            <div className="pt-2 text-xs text-neutral-500 font-mono">
              Wisdom • Knowledge • Success
            </div>
          </div>

          {/* Quick Programs */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/courses" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link to="/courses" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Python & AI Engineering
                </Link>
              </li>
              <li>
                <Link to="/courses" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Java Spring Boot
                </Link>
              </li>
              <li>
                <Link to="/courses" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Data Analytics & SQL
                </Link>
              </li>
              <li>
                <Link to="/workshops" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Live Weekend Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Hub */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Student Hub
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/guidance" onClick={scrollToTop} className="hover:text-white transition-colors">
                  1-on-1 Career Mentorship
                </Link>
              </li>
              <li>
                <Link to="/internships" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Industry Internships
                </Link>
              </li>
              <li>
                <Link to="/btech-projects" onClick={scrollToTop} className="hover:text-white transition-colors">
                  B.Tech IEEE Projects
                </Link>
              </li>
              <li>
                <Link to="/mtech-projects" onClick={scrollToTop} className="hover:text-white transition-colors">
                  M.Tech Advanced Projects
                </Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Student Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                <span>Hyderabad / Bangalore Tech Hubs, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <span>+91 93906 42779</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <span>support@vighnaviacademy.com</span>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-semibold text-xs hover:bg-neutral-800 transition"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Vighnavi Academy. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/about" onClick={scrollToTop} className="hover:text-white transition">
              About Us
            </Link>
            <Link to="/privacypolicy" onClick={scrollToTop} className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/termsconditions" onClick={scrollToTop} className="hover:text-white transition">
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}