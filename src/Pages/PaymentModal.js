import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle } from 'lucide-react';

const METHODS = ['UPI', 'Google Pay', 'PhonePe', 'Paytm', 'Card', 'Net Banking'];

export default function PaymentModal({ isOpen, onClose, feeAmount = 29, itemTitle = 'Booking Registration Fee', onPaySuccess }) {
  const [selectedMethod, setSelectedMethod] = useState('UPI');
  const [processing, setProcessing] = useState(false);

  if (!isOpen) return null;

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      onPaySuccess();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 3 of 3</span>
          <h3 className="text-2xl font-bold text-white">Registration Fee Payment</h3>
        </div>

        {/* Order summary */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-300 font-medium">{itemTitle}</span>
            <span className="text-white font-black text-xl">₹{feeAmount}</span>
          </div>
          <p className="text-xs text-emerald-400 font-medium">
            *Pay ₹{feeAmount} to confirm your booking. Remaining session amount payable later.
          </p>
        </div>

        {/* Payment method radio cards */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Select Payment Method</label>
          <div className="grid grid-cols-2 gap-2.5">
            {METHODS.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setSelectedMethod(m)}
                className={`py-3 px-3.5 rounded-xl text-xs font-semibold border flex items-center justify-between transition ${
                  selectedMethod === m
                    ? 'bg-violet-600/20 border-violet-500 text-white shadow-md'
                    : 'bg-slate-800/60 border-slate-700/70 text-slate-300 hover:border-slate-600'
                }`}
              >
                <span>{m}</span>
                {selectedMethod === m && <CheckCircle className="w-4 h-4 text-emerald-400" />}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Encrypted simulated checkout protocol</span>
        </div>

        <button
          onClick={handlePay}
          disabled={processing}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold shadow-lg shadow-emerald-700/20 transition disabled:opacity-50"
        >
          {processing ? 'Processing...' : `Pay ₹${feeAmount} & Confirm Booking`}
        </button>
      </div>
    </div>
  );
}