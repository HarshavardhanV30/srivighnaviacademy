import React from 'react';
import { Check, Calendar, Video, Download } from 'lucide-react';

export default function ConfirmationModal({ isOpen, onClose, bookingData }) {
  if (!isOpen) return null;

  // Format date visually for the user if bookingData exists
  const displayDate = bookingData?.booking_date 
    ? new Date(bookingData.booking_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    : 'N/A';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 text-center relative shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
          <Check className="w-8 h-8" />
        </div>

        <div>
          <span className="text-2xl font-bold text-white">🎉 Booking Confirmed!</span>
          <p className="text-slate-400 text-sm mt-1">Your guidance session slot is officially reserved.</p>
          {bookingData?.id && <p className="text-xs text-slate-500 mt-2">Booking ID: #{bookingData.id}</p>}
        </div>

        {/* Booking details summary card */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 text-left space-y-3 text-sm">
          <div className="flex justify-between border-b border-slate-700/60 pb-2">
            <span className="text-slate-400">Student</span>
            <span className="text-white font-medium">{bookingData?.full_name || 'Student Name'}</span>
          </div>
          <div className="flex justify-between border-b border-slate-700/60 pb-2">
            <span className="text-slate-400">Date & Time</span>
            <span className="text-white font-medium">{displayDate} | {bookingData?.start_time || 'TBD'}</span>
          </div>
          <div className="flex justify-between border-b border-slate-700/60 pb-2">
            <span className="text-slate-400">Duration</span>
            <span className="text-white font-medium">{bookingData?.duration || '30 Minutes'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Fee Paid</span>
            <span className="text-emerald-400 font-bold">₹{bookingData?.booking_fee_paid || '0'}</span>
          </div>
        </div>

        {/* Meeting link box */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="truncate">
            <span className="text-xs text-slate-400 block">Meeting Link</span>
            <span className="text-xs text-violet-400 font-mono select-all">https://meet.vighnavi.com/cg-session</span>
          </div>
          <a
            href="https://meet.google.com"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 whitespace-nowrap shadow-md"
          >
            <Video className="w-3.5 h-3.5" />
            <span>Join Session</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={() => alert('Calendar invite (.ics) created and scheduled!')}
            className="py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-2 border border-slate-700"
          >
            <Calendar className="w-4 h-4" />
            <span>Add to Calendar</span>
          </button>
          <button
            onClick={() => alert('Downloading official confirmation receipt PDF...')}
            className="py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-2 border border-slate-700"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}