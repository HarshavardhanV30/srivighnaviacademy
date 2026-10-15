import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Header({ setActiveScreen }) {
  return (
    <div className="w-full border-b transition-colors duration-200 bg-neutral-100 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 py-2 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center space-x-1.5 font-bold text-neutral-900 dark:text-white">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white animate-pulse"></span>
            <span>Admissions & Bookings Open</span>
          </span>
          <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">|</span>
          <span className="hidden sm:inline">Wisdom • Knowledge • Success</span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setActiveScreen && setActiveScreen('contact')}
            className="inline-flex items-center space-x-1.5 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
            <span>Support: +91 93906 42779</span>
          </button>
          <span className="hidden md:inline text-neutral-300 dark:text-neutral-700">|</span>
          <button
            onClick={() => setActiveScreen && setActiveScreen('contact')}
            className="hidden md:inline-flex items-center space-x-1.5 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
            <span>support@vighnaviacademy.com</span>
          </button>
        </div>
      </div>
    </div>
  );
}