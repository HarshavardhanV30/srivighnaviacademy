import React, { useState, useEffect } from 'react';
import { X, Calendar, ArrowRight } from 'lucide-react';

// Get today's date in YYYY-MM-DD format for live date enforcement
const getTodayDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

// Generate time slots from 10:00 AM to 9:30 PM
const generateStartTimes = () => {
  const times = [];
  for (let i = 10; i <= 21; i++) {
    const hour = i > 12 ? i - 12 : i === 0 ? 12 : i;
    const ampm = i >= 12 ? 'PM' : 'AM';
    times.push(`${hour}:00 ${ampm}`);
    times.push(`${hour}:30 ${ampm}`);
  }
  return times;
};

const START_TIMES = generateStartTimes();

// Calculate end time dynamically based on selected duration
const getEndTime = (startTime, duration) => {
  const [time, period] = startTime.split(' ');
  let [hours, minutes] = time.split(':').map(Number);

  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  const addMinutes = duration === '30 Minutes' ? 30 : 60;
  minutes += addMinutes;

  if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }

  const endPeriod = hours >= 12 && hours < 24 ? 'PM' : 'AM';
  let endHours = hours % 12;
  endHours = endHours ? endHours : 12;
  const endMinutes = minutes.toString().padStart(2, '0');

  return `${endHours}:${endMinutes} ${endPeriod}`;
};

export default function BookSlotModal({ isOpen, onClose, initialData, onProceed }) {
  const [date, setDate] = useState(getTodayDate());
  const [selectedStartTime, setSelectedStartTime] = useState('10:00 AM');
  const [duration, setDuration] = useState(initialData?.duration || '30 Minutes');

  // Update date if modal opens on a new day
  useEffect(() => {
    if (isOpen) {
      const today = getTodayDate();
      if (date < today) setDate(today);
    }
  }, [isOpen, date]);

  if (!isOpen) return null;

  const handleNext = () => {
    const price = duration === '30 Minutes' ? 49 : 99;
    const endTime = getEndTime(selectedStartTime, duration);
    onProceed({
      date,
      startTime: selectedStartTime,
      endTime,
      slot: `${selectedStartTime} - ${endTime}`,
      duration,
      totalSessionPrice: price
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 1 of 3</span>
          <h3 className="text-2xl font-bold text-white">Book a Slot</h3>
        </div>

        {/* Radio toggles to pick session duration */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Session Duration</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setDuration('30 Minutes')}
              className={`p-3 rounded-xl border text-sm font-semibold transition ${
                duration === '30 Minutes'
                  ? 'bg-violet-600/30 border-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
              }`}
            >
              30 Mins (₹49)
            </button>
            <button
              type="button"
              onClick={() => setDuration('1 Hour')}
              className={`p-3 rounded-xl border text-sm font-semibold transition ${
                duration === '1 Hour'
                  ? 'bg-violet-600/30 border-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
              }`}
            >
              1 Hour (₹99)
            </button>
          </div>
        </div>

        {/* Date picker component (Live dates only) */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Select Date</label>
          <div className="relative">
            <input
              type="date"
              value={date}
              min={getTodayDate()}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
            />
            <Calendar className="w-4 h-4 text-slate-400 absolute right-4 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Dynamic time slot selection grid */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Select Time Slot</label>
          <div className="grid grid-cols-2 gap-2 max-h-52 overflow-y-auto pr-1">
            {START_TIMES.map((startTime) => {
              const endTime = getEndTime(startTime, duration);
              return (
                <button
                  key={startTime}
                  type="button"
                  onClick={() => setSelectedStartTime(startTime)}
                  className={`py-2.5 px-2 rounded-xl text-xs font-medium border transition text-center ${
                    selectedStartTime === startTime
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.15)]'
                      : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-700/50'
                  }`}
                >
                  {startTime} - {endTime}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold flex items-center justify-center space-x-2 shadow-lg shadow-violet-600/30 transition transform hover:-translate-y-0.5"
        >
          <span>Continue to Student Details</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}