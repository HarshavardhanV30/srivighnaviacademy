import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Loader2,
  AlertCircle,
  ShieldCheck,
  CheckCircle2,
  QrCode,
  Smartphone,
  ArrowLeft,
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const API_URL =
  'https://vighnavibackend-production.up.railway.app/api/courses/add';

const UPI_ID = '9390642779@ybl';
const PAYEE_NAME = 'Vighnavi Academy';

const CoursePayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { course, student } = location.state || {};

  const [utrNumber, setUtrNumber] = useState('');
  const [paymentStarted, setPaymentStarted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  // The amount comes from the selected course.
  // Students cannot edit the amount on this page.
  const amount = Number(course?.price);
  const validAmount = Number.isFinite(amount) && amount > 0;

  const formattedAmount = validAmount
    ? amount.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : '0.00';

  // Generate the QR code with the exact course amount.
  const upiPaymentUrl = useMemo(() => {
    if (!validAmount || !course) return '';

    const params = new URLSearchParams({
      pa: UPI_ID,
      pn: PAYEE_NAME,
      am: amount.toFixed(2),
      cu: 'INR',
      tn: `Course fee - ${course.title}`,
    });

    return `upi://pay?${params.toString()}`;
  }, [validAmount, amount, course]);

  // Open an installed UPI application where supported.
  const handlePhonePePayment = () => {
    if (!upiPaymentUrl) {
      setError('Unable to create the payment request.');
      return;
    }

    setError('');
    setPaymentStarted(true);

    window.location.href = upiPaymentUrl;
  };

  // Submit the actual bank-generated UTR for verification.
  const handleSubmitUtr = async (event) => {
    event.preventDefault();

    if (processing) return;

    if (!course || !student || !validAmount) {
      setError('Course or student details are missing.');
      return;
    }

    if (!paymentStarted) {
      setError(
        'Please initiate the UPI payment or scan the QR code first.'
      );
      return;
    }

    const cleanedUtr = utrNumber.trim();

    // UTR/reference formats vary between payment providers.
    if (!/^[A-Za-z0-9]{6,30}$/.test(cleanedUtr)) {
      setError('Please enter a valid UTR/reference number.');
      return;
    }

    setProcessing(true);
    setError('');

    const payload = {
      studentDetails: {
        name: student.name.trim(),
        email: student.email.trim(),
        phone: student.phone,
        qualification: student.qualification,
        degree: student.degree.trim(),
        year: student.year,
        employmentStatus: student.employmentStatus,
      },

      courseDetails: {
        courseId: course.courseId,
        title: course.title,
        price: amount,
      },

      paymentDetails: {
        paymentGateway: 'UPI',
        transactionId: cleanedUtr,
        utrNumber: cleanedUtr,
        paymentStatus: 'Pending Verification',
        amountPaid: 0,
        amountExpected: amount,
        currency: 'INR',
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
            `Enrollment submission failed. HTTP ${response.status}.`
        );
      }

      // A UTR supplied by a student is not proof of payment.
      // Only a trusted backend verification can confirm payment.
      const paymentVerified =
        result.data.paymentStatus === 'Paid' &&
        result.data.paymentVerified === true;

      navigate('/confirmation', {
        replace: true,
        state: {
          course,
          student,
          enrollment: result.data,
          apiResponse: result,
          paymentVerified,
          utrNumber: cleanedUtr,
        },
      });
    } catch (err) {
      console.error('Course enrollment error:', err);

      setError(
        err.message ||
          'Unable to connect to the server. Please try again.'
      );
    } finally {
      setProcessing(false);
    }
  };

  if (!course || !student) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0f1115] p-6 text-center text-gray-300">
        <div>
          <h2 className="text-xl font-bold">
            Enrollment details missing
          </h2>

          <p className="mt-2 text-gray-400">
            Please select a course and enter your student details again.
          </p>

          <button
            type="button"
            onClick={() => navigate('/courses')}
            className="mt-5 rounded-lg bg-[#090949] px-5 py-3 font-semibold text-white"
          >
            Restart Enrollment
          </button>
        </div>
      </div>
    );
  }

  if (!validAmount) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0f1115] p-6 text-center text-red-400">
        Invalid course price. Please select the course again.
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f1115] px-4 py-10 font-sans">
      <div className="w-full max-w-lg rounded-2xl border border-[#2a2d35] bg-[#1a1d24] p-5 shadow-2xl sm:p-8">

        {/* Header */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-5 flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="mb-4 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#090949]/50">
            <QrCode className="h-7 w-7 text-blue-400" />
          </div>
        </div>

        <h1 className="text-center text-3xl font-bold text-white">
          Course Payment
        </h1>

        <p className="mt-2 text-center text-sm text-gray-400">
          Scan the QR code or pay using PhonePe.
        </p>

        {/* Course Details */}
        <div className="mt-7 rounded-xl border border-[#30333d] bg-[#14161b] p-5">
          <p className="text-sm text-gray-400">Student Name</p>

          <p className="mt-1 break-words font-semibold text-gray-100">
            {student.name}
          </p>

          <div className="mt-4">
            <p className="text-sm text-gray-400">Course</p>

            <p className="mt-1 break-words font-semibold text-gray-100">
              {course.title}
            </p>
          </div>

          <div className="mt-4 border-t border-[#30333d] pt-4">
            <p className="text-sm text-gray-400">
              Exact amount payable
            </p>

            <p className="mt-1 text-3xl font-bold text-white">
              ₹{formattedAmount}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Fixed course price · INR
            </p>
          </div>
        </div>

        {/* QR Code */}
        <div className="mt-6 rounded-xl border border-[#30333d] bg-[#111319] p-5 text-center">
          <h2 className="text-lg font-bold text-white">
            Scan & Pay
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Open PhonePe or another UPI app on your phone.
          </p>

          <div className="mx-auto mt-5 flex w-fit items-center justify-center rounded-xl bg-white p-4">
            <QRCodeSVG
              value={upiPaymentUrl}
              size={220}
              level="H"
              marginSize={2}
              title="Course fee UPI payment QR code"
            />
          </div>

          <p className="mt-4 text-sm font-medium text-gray-200">
            Amount: ₹{formattedAmount}
          </p>

          <div className="mt-4 flex items-start gap-2 rounded-lg border border-blue-500/20 bg-blue-500/5 p-3 text-left">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

            <p className="text-xs leading-relaxed text-gray-400">
              Check that the recipient and amount are correct in your
              UPI app before approving the payment.
            </p>
          </div>
        </div>

        {/* PhonePe Button */}
        <button
          type="button"
          onClick={handlePhonePePayment}
          className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-[#5f259f] px-4 py-4 font-bold text-white transition hover:bg-[#4b1c80] active:scale-[0.99]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#5f259f]">
            <Smartphone className="h-5 w-5" />
          </span>

          <span className="text-left">
            <span className="block text-base">Pay with PhonePe</span>
            <span className="block text-xs font-normal text-purple-100">
              ₹{formattedAmount}
            </span>
          </span>
        </button>

        {/* UTR Entry */}
        {paymentStarted && (
          <div className="mt-5 rounded-xl border border-[#30333d] bg-[#14161b] p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />

              <div>
                <h2 className="font-bold text-white">
                  Already paid?
                </h2>

                <p className="mt-1 text-sm leading-relaxed text-gray-400">
                  Return to this page after payment and enter the
                  transaction reference provided by your UPI app.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmitUtr} className="mt-5">
              <label
                htmlFor="utrNumber"
                className="mb-2 block text-sm font-semibold text-gray-200"
              >
                UTR / Transaction Reference Number
              </label>

              <input
                id="utrNumber"
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
                className="w-full rounded-lg border border-[#343744] bg-[#0f1115] px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
              />

              <p className="mt-2 text-xs leading-relaxed text-gray-500">
                Your bank generates this reference after the transaction.
                Enter the actual number; do not use a sample number.
              </p>

              <button
                type="submit"
                disabled={processing || !utrNumber.trim()}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#090949] py-3.5 font-semibold text-white transition hover:bg-[#0c0c66] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {processing ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit UTR & Enrollment'
                )}
              </button>
            </form>
          </div>
        )}

        {/* Errors */}
        {error && (
          <div
            role="alert"
            className="mt-5 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 border-t border-[#30333d] pt-4">
          <p className="text-center text-xs leading-relaxed text-gray-500">
            Enrollment is subject to payment verification. Submitting
            a UTR does not itself confirm that funds were received.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoursePayment;
