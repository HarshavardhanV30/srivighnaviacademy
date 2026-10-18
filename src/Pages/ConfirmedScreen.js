
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, Copy, MessageCircle, BookOpen } from 'lucide-react';

const ConfirmedScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { course, student, enrollment, apiResponse } = location.state || {};

  // Prefer the record returned by the backend.
  const saved = enrollment || {};

  const displayName = saved.name || student?.name || 'Student';
  const displayCourse = saved.title || course?.title || 'Course';
  const enrollmentId = saved.id;
  const courseId = saved.course_id || course?.courseId || 'N/A';
  const price = Number(saved.price ?? course?.price ?? 0);
  const amountPaid = Number(saved.amount_paid ?? 0);
  const paymentStatus = saved.payment_status || 'Pending';
  const transactionId = saved.transaction_id || 'Not available';
  const createdAt = saved.created_at || saved.payment_timestamp;

  const whatsappLink =
    'https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE';

  const handleJoinWhatsApp = () => {
    // Replace YOUR_GROUP_INVITE_CODE with your actual WhatsApp
    // group invite code before publishing the website.
    if (whatsappLink.includes('YOUR_GROUP_INVITE_CODE')) {
      alert('Please configure your official WhatsApp group invite link.');
      return;
    }

    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  const handleCopyTransaction = async () => {
    try {
      await navigator.clipboard.writeText(String(transactionId));
      alert('Transaction ID copied.');
    } catch {
      alert(`Transaction ID: ${transactionId}`);
    }
  };

  const formatDate = (value) => {
    if (!value) return 'Not available';

    const parsed = new Date(value);

    if (Number.isNaN(parsed.getTime())) return value;

    return parsed.toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  };

  if (!enrollment) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0f1115] px-4 py-12 font-sans">
        <div className="w-full max-w-md rounded-xl border border-[#2a2d35] bg-[#1a1d24] p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-gray-100">
            Enrollment Details Unavailable
          </h2>

          <p className="text-sm text-gray-400">
            No saved enrollment response was found. Please check your
            enrollment status before submitting another request.
          </p>

          <button
            type="button"
            onClick={() => navigate('/courses')}
            className="mt-6 w-full rounded-lg bg-[#090949] py-3 font-semibold text-white hover:bg-[#0c0c66]"
          >
            Return to Courses
          </button>
        </div>
      </div>
    );
  }

  const details = [
    ['Enrollment ID', enrollmentId ?? 'Not available'],
    ['Course ID', courseId],
    ['Student Name', displayName],
    ['Email', saved.email || student?.email || 'Not available'],
    ['Phone', saved.phone || student?.phone || 'Not available'],
    ['Qualification', saved.qualification || student?.qualification || 'Not available'],
    ['Degree', saved.degree || student?.degree || 'Not available'],
    ['Year', saved.year || student?.year || 'Not available'],
    [
      'Employment Status',
      saved.employment_status ||
        student?.employmentStatus ||
        'Not available',
    ],
    ['Course', displayCourse],
    ['Course Price', `₹${price.toLocaleString('en-IN')}`],
    ['Amount Paid', `₹${amountPaid.toLocaleString('en-IN')}`],
    ['Transaction ID', transactionId],
    ['Payment Gateway', saved.payment_gateway || 'Not available'],
    ['Payment Status', paymentStatus],
    ['Enrollment Created', formatDate(saved.created_at)],
    ['Payment Timestamp', formatDate(saved.payment_timestamp)],
  ];

  const isCompleted =
    String(paymentStatus).toLowerCase() === 'completed';

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f1115] px-4 py-12 font-sans">
      <div className="w-full max-w-lg rounded-xl border border-[#2a2d35] bg-[#1a1d24] p-6 text-center shadow-lg sm:p-8">

        <div
          className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${
            isCompleted
              ? 'bg-emerald-500/10'
              : 'bg-blue-500/10'
          }`}
        >
          {isCompleted ? (
            <CheckCircle2 className="h-10 w-10 text-emerald-400" />
          ) : (
            <BookOpen className="h-10 w-10 text-blue-400" />
          )}
        </div>

        <h2 className="mb-3 text-3xl font-bold text-gray-100">
          {apiResponse?.message || 'Enrollment Submitted!'}
        </h2>

        <p className="mb-8 text-lg text-gray-400">
          Thank you,{' '}
          <span className="font-semibold text-gray-200">
            {displayName}
          </span>
          ! Your enrollment request for{' '}
          <strong className="text-gray-200">{displayCourse}</strong>{' '}
          has been received.
        </p>

        <div className="mb-6 rounded-lg border border-[#2a2d35] bg-[#14161b] p-5 text-left">
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#2a2d35] pb-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Enrollment ID
              </p>
              <p className="mt-1 text-2xl font-bold text-blue-400">
                #{enrollmentId ?? 'N/A'}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                isCompleted
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-amber-500/10 text-amber-400'
              }`}
            >
              {paymentStatus}
            </span>
          </div>

          <div className="space-y-3">
            {details.map(([label, value]) => (
              <div
                key={label}
                className="flex items-start justify-between gap-4 border-b border-[#2a2d35]/70 pb-2 last:border-0"
              >
                <span className="text-left text-sm text-gray-400">
                  {label}
                </span>

                <span className="break-all text-right text-sm font-medium text-gray-200">
                  {String(value)}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleCopyTransaction}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-[#2a2d35] bg-[#1a1d24] py-2.5 text-sm text-gray-300 hover:border-blue-500"
          >
            <Copy className="h-4 w-4" />
            Copy Transaction ID
          </button>
        </div>

        {!isCompleted && (
          <div className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 text-left text-sm text-amber-300">
            Your enrollment record was received, but payment is not
            marked as completed. Complete payment through your configured
            payment gateway before granting paid course access.
          </div>
        )}

        <div className="mb-6 rounded-lg border border-[#2a2d35] bg-[#14161b] p-5">
          <div className="mb-3 flex items-center justify-center gap-2 text-gray-200">
            <MessageCircle className="h-5 w-5 text-emerald-400" />
            <h3 className="font-bold">Join Our WhatsApp Group</h3>
          </div>

          <p className="mb-5 text-sm leading-relaxed text-gray-400">
            Join the official Vighnavi Academy group for course updates,
            class schedules, and learning materials.
          </p>

          <button
            type="button"
            onClick={handleJoinWhatsApp}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#090949] py-3 font-semibold tracking-wide text-white transition-all hover:-translate-y-1 hover:bg-[#0c0c66] hover:shadow-[0_8px_15px_rgba(9,9,73,0.5)] active:translate-y-0"
          >
            <MessageCircle className="h-5 w-5" />
            Join WhatsApp Group
          </button>
        </div>

        <button
          type="button"
          onClick={() => navigate('/courses')}
          className="w-full rounded-lg border border-[#2a2d35] bg-[#14161b] py-3 font-semibold text-gray-200 transition hover:bg-[#252830]"
        >
          Return to Courses
        </button>
      </div>
    </div>
  );
};

export default ConfirmedScreen;
