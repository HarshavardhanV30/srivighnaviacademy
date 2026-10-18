
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loader2, AlertCircle, ShieldCheck } from 'lucide-react';

const API_URL =
  'https://vighnavibackend-production.up.railway.app/api/courses/add';

const CoursePayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { course, student } = location.state || {};

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = async () => {
    if (!course || !student || processing) return;

    setProcessing(true);
    setError('');

    // Demo transaction reference only. This does not represent
    // a real payment gateway transaction.
    const transactionId =
      `DEMO-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

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
        price: Number(course.price),
      },
      paymentDetails: {
        transactionId,
        paymentStatus: 'Pending',
        paymentGateway: null,
        amountPaid: 0,
        timestamp: new Date().toISOString(),
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
            `Enrollment failed. Server returned HTTP ${response.status}.`
        );
      }

      // Keep both the saved response and form information available.
      navigate('/confirmation', {
        replace: true,
        state: {
          course,
          student,
          enrollment: result.data,
          apiResponse: result,
        },
      });
    } catch (err) {
      console.error('Course enrollment API error:', err);
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
      <div className="flex min-h-screen items-center justify-center bg-[#0f1115] p-8 text-center text-gray-400">
        <div>
          <p>Missing course or student details.</p>
          <button
            type="button"
            onClick={() => navigate('/courses')}
            className="mt-4 rounded-lg bg-[#090949] px-5 py-3 text-white"
          >
            Restart Enrollment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f1115] px-4 py-12 font-sans">
      <div className="w-full max-w-md rounded-xl border border-[#2a2d35] bg-[#1a1d24] p-6 text-center shadow-lg sm:p-8">
        <h2 className="mb-6 text-3xl font-bold text-gray-100">
          Payment Summary
        </h2>

        <div className="mb-6 rounded-lg border border-[#2a2d35] bg-[#14161b] p-5 text-left">
          <p className="mb-2 break-words text-gray-400">
            Name:{' '}
            <span className="font-medium text-gray-200">
              {student.name}
            </span>
          </p>

          <p className="mb-2 break-words text-gray-400">
            Email:{' '}
            <span className="font-medium text-gray-200">
              {student.email}
            </span>
          </p>

          <p className="mb-2 text-gray-400">
            Course ID:{' '}
            <span className="font-medium text-gray-200">
              {course.courseId}
            </span>
          </p>

          <p className="mb-2 text-gray-400">
            Course:{' '}
            <span className="font-medium text-gray-200">
              {course.title}
            </span>
          </p>

          <div className="mt-4 border-t border-[#2a2d35] pt-4">
            <p className="text-sm text-gray-400">Course price</p>
            <p className="text-2xl font-bold text-gray-100">
              ₹{Number(course.price).toLocaleString('en-IN')}
            </p>
          </div>
        </div>

        <div className="mb-6 space-y-4 rounded-lg border border-[#090949]/30 bg-[#090949]/10 p-5 text-left text-sm text-gray-300">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 shrink-0 text-blue-400" />
            <p>
              <strong className="text-gray-200">Secure connection:</strong>{' '}
              Enrollment details are sent to your backend over HTTPS.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-xl">📚</span>
            <p>
              <strong className="text-gray-200">Online learning:</strong>{' '}
              Access course learning resources according to your course
              terms.
            </p>
          </div>
        </div>

        {error && (
          <div
            role="alert"
            className="mb-5 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-left text-sm text-red-400"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="button"
          onClick={handlePayment}
          disabled={processing}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#090949] py-3.5 text-lg font-semibold tracking-wide text-white transition-all hover:-translate-y-1 hover:bg-[#0c0c66] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {processing ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting Enrollment...
            </>
          ) : (
            `Submit Enrollment · ₹${Number(course.price).toLocaleString('en-IN')}`
          )}
        </button>

        <p className="mt-5 text-xs leading-relaxed text-gray-500">
          Demo mode: no real payment is collected by this button.
          Payment status will remain Pending until a real payment gateway
          confirms the transaction.
        </p>
      </div>
    </div>
  );
};

export default CoursePayment;
