
import React, { useEffect, useMemo, useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle,
  Smartphone,
  QrCode,
  Loader2,
  AlertCircle,
  FileText,
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const API_URL =
  'https://vighnavibackend-production.up.railway.app/api/career-guidance/add';

const UPI_ID = '9390642779@ybl';
const PAYEE_NAME = 'Vighnavi Academy';

export default function PaymentModal({
  isOpen,
  onClose,
  feeAmount = 29,
  itemTitle = 'Booking Registration Fee',
  careerPayload,
  onPaySuccess,
}) {
  const [utrNumber, setUtrNumber] = useState('');
  const [paymentStarted, setPaymentStarted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const amount = Number(feeAmount);
  const validAmount = Number.isFinite(amount) && amount > 0;

  const formattedAmount = validAmount
    ? amount.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : '0.00';

  const upiPaymentUrl = useMemo(() => {
    if (!validAmount) return '';

    const params = new URLSearchParams({
      pa: UPI_ID,
      pn: PAYEE_NAME,
      am: amount.toFixed(2),
      cu: 'INR',
      tn: String(itemTitle || 'Booking Registration Fee'),
    });

    return `upi://pay?${params.toString()}`;
  }, [validAmount, amount, itemTitle]);

  useEffect(() => {
    if (!isOpen) {
      setUtrNumber('');
      setPaymentStarted(false);
      setProcessing(false);
      setErrorMsg('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePhonePePayment = () => {
    if (!validAmount || !upiPaymentUrl) {
      setErrorMsg('Invalid booking fee. Please try again.');
      return;
    }

    setErrorMsg('');
    setPaymentStarted(true);

    // Opens a compatible UPI app where supported.
    window.location.href = upiPaymentUrl;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (processing) return;

    if (!validAmount) {
      setErrorMsg('Invalid booking fee.');
      return;
    }

    if (
      !careerPayload?.bookingDetails ||
      !careerPayload?.studentDetails
    ) {
      setErrorMsg('Booking or student details are missing.');
      return;
    }

    if (!paymentStarted) {
      setErrorMsg('Please initiate payment using the QR code or UPI button.');
      return;
    }

    const cleanedUtr = utrNumber.trim();

    if (!/^[A-Za-z0-9]{6,30}$/.test(cleanedUtr)) {
      setErrorMsg('Enter a valid UTR or transaction reference number.');
      return;
    }

    setProcessing(true);
    setErrorMsg('');

    const payload = {
      bookingDetails: careerPayload.bookingDetails,
      studentDetails: careerPayload.studentDetails,
      paymentDetails: {
        paymentMethod: 'UPI',
        paymentGateway: 'UPI',
        bookingFeePaid: amount,
        amountExpected: amount,
        currency: 'INR',
        transactionId: cleanedUtr,
        utrNumber: cleanedUtr,
        paymentStatus: 'Pending Verification',
        submittedAt: new Date().toISOString(),
      },
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success !== true || !result?.data) {
        throw new Error(
          result?.message ||
            `Booking submission failed. HTTP ${response.status}.`
        );
      }

      // Only the backend can verify that payment was received.
      const verified =
        result.data.paymentStatus === 'Completed' &&
        result.data.paymentVerified === true;

      if (typeof onPaySuccess === 'function') {
        onPaySuccess({
          ...result.data,
          paymentStatus: verified
            ? 'Completed'
            : 'Pending Verification',
          paymentVerified: verified,
          utrNumber: cleanedUtr,
        });
      } else {
        setErrorMsg(
          'Booking submitted, but the confirmation callback is missing.'
        );
      }
    } catch (error) {
      console.error('Career booking payment error:', error);

      setErrorMsg(
        error.message || 'Network error. Please try again.'
      );
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget &&
          !processing &&
          typeof onClose === 'function'
        ) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="payment-modal-title"
        className="relative my-auto w-full max-w-md space-y-5 rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-2xl sm:p-7"
      >
        <button
          type="button"
          onClick={onClose}
          disabled={processing}
          aria-label="Close payment modal"
          className="absolute right-5 top-5 rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white disabled:opacity-50"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-1 pr-9">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Step 3 of 3
          </span>

          <h2
            id="payment-modal-title"
            className="text-2xl font-bold text-white"
          >
            Registration Fee Payment
          </h2>

          <p className="text-sm text-slate-400">
            Scan the QR code or pay using PhonePe.
          </p>
        </div>

        {/* Booking fee summary */}
        <div className="space-y-3 rounded-2xl border border-slate-700/80 bg-slate-800/80 p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-slate-300">
              {itemTitle}
            </span>

            <span className="shrink-0 text-xl font-black text-white">
              ₹{formattedAmount}
            </span>
          </div>

          <div className="border-t border-slate-700 pt-3">
            <p className="text-xs leading-relaxed text-emerald-400">
              Pay ₹{formattedAmount} to submit your booking request.
              The remaining session fee, if any, is payable separately.
            </p>
          </div>
        </div>

        {/* QR code */}
        <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <QrCode className="h-5 w-5 text-emerald-400" />
            <h3 className="font-bold text-white">Scan & Pay</h3>
          </div>

          <p className="mb-4 text-xs leading-relaxed text-slate-400">
            Open a UPI app on another device and scan this QR code.
          </p>

          <div className="mx-auto inline-flex rounded-xl bg-white p-3">
            {validAmount ? (
              <QRCodeSVG
                value={upiPaymentUrl}
                size={210}
                level="H"
                title="Booking fee UPI QR code"
              />
            ) : (
              <p className="p-8 text-sm text-red-600">
                Invalid payment amount.
              </p>
            )}
          </div>

          <p className="mt-4 text-lg font-bold text-white">
            ₹{formattedAmount}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Fixed amount · INR
          </p>
        </div>

        {/* PhonePe / UPI button */}
        <button
          type="button"
          onClick={handlePhonePePayment}
          disabled={!validAmount || processing}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#5f259f] px-4 py-4 text-white shadow-lg transition hover:bg-[#4b1c80] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
            <Smartphone className="h-6 w-6 text-[#5f259f]" />
          </span>

          <span className="text-left">
            <span className="block font-bold">Pay with PhonePe</span>
            <span className="block text-xs text-purple-100">
              ₹{formattedAmount}
            </span>
          </span>
        </button>

        <div className="flex items-start gap-2 text-xs leading-relaxed text-slate-400">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
          <p>
            Verify the recipient and amount in your UPI app before
            approving payment.
          </p>
        </div>

        {/* UTR form */}
        {paymentStarted && (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-700 bg-slate-800/60 p-4"
          >
            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />

              <div>
                <h3 className="font-bold text-white">Already paid?</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Return to this page and enter the UTR or transaction
                  reference generated by your payment app.
                </p>
              </div>
            </div>

            <div>
              <label
                htmlFor="booking-utr"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                UTR / Transaction Reference Number
              </label>

              <input
                id="booking-utr"
                name="utrNumber"
                type="text"
                value={utrNumber}
                onChange={(event) =>
                  setUtrNumber(
                    event.target.value.replace(/\s/g, '')
                  )
                }
                placeholder="Enter actual UTR number"
                autoComplete="off"
                maxLength={30}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-500"
              />

              <p className="mt-2 text-xs text-slate-500">
                Enter the actual reference from your payment receipt.
                The UTR is generated by your bank after the transaction.
              </p>
            </div>

            <button
              type="submit"
              disabled={processing || !utrNumber.trim()}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3.5 font-bold text-white transition hover:from-emerald-500 hover:to-teal-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit UTR & Booking'
              )}
            </button>
          </form>
        )}

        {errorMsg && (
          <div
            role="alert"
            className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="flex items-start gap-2 border-t border-slate-800 pt-4 text-xs leading-relaxed text-slate-500">
          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            Your booking remains pending until payment is verified by
            your backend.
          </p>
        </div>
      </div>
    </div>
  );
}
