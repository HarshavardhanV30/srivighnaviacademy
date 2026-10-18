
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CourseStudentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    employmentStatus: '',
    degree: '',
    year: '',
  });

  const [error, setError] = useState('');

  const inputClass =
    'w-full rounded-lg border border-[#2a2d35] bg-[#14161b] p-3 text-gray-200 placeholder-gray-600 transition-all focus:border-[#090949] focus:outline-none focus:ring-1 focus:ring-[#090949]';

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);

      setFormData((previous) => ({
        ...previous,
        phone: digitsOnly,
      }));
      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      setError('Enter a valid 10-digit Indian mobile number.');
      return;
    }

    navigate('/payment', {
      state: {
        course,
        student: {
          ...formData,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone,
        },
      },
    });
  };

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0f1115] p-8 text-center text-gray-400">
        <div>
          <p>No course selected. Please return to the courses page.</p>
          <button
            type="button"
            onClick={() => navigate('/courses')}
            className="mt-4 rounded-lg bg-[#090949] px-5 py-3 text-white"
          >
            Browse Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f1115] px-4 py-12 font-sans">
      <div className="relative w-full max-w-lg rounded-xl border border-[#2a2d35] bg-[#1a1d24] p-6 shadow-lg sm:p-8">
        <h2 className="mb-2 text-3xl font-bold text-gray-100">
          Student Details
        </h2>

        <p className="mb-8 text-gray-400">
          Enrolling in:{' '}
          <strong className="text-gray-200">{course.title}</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-400">
              Full Name
            </label>
            <input
              required
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-400">
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-400">
              Phone Number
            </label>
            <input
              required
              type="tel"
              name="phone"
              inputMode="numeric"
              autoComplete="tel-national"
              value={formData.phone}
              onChange={handleChange}
              minLength={10}
              maxLength={10}
              pattern="[6-9][0-9]{9}"
              title="Enter a valid 10-digit Indian mobile number."
              className={inputClass}
              placeholder="10-digit mobile number"
            />
            <p className="mt-1 text-xs text-gray-500">
              {formData.phone.length}/10 digits
            </p>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-400">
              Highest Qualification
            </label>
            <select
              required
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select qualification</option>
              <option value="Under Graduate">Under Graduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="Diploma">Diploma</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-400">
              Degree
            </label>
            <input
              required
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. B.Tech / M.Tech / MCA"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-400">
                Year
              </label>
              <select
                required
                name="year"
                value={formData.year}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Final Year">Final Year</option>
                <option value="2025">2025 (Pass out)</option>
                <option value="2024">2024 (Pass out)</option>
                <option value="2023">2023 (Pass out)</option>
                <option value="Earlier">Earlier</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-400">
                Employment Status
              </label>
              <select
                required
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select</option>
                <option value="Student">Student</option>
                <option value="Job Holder">Job Holder</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Unemployed">Looking for Job</option>
              </select>
            </div>
          </div>

          {error && (
            <p role="alert" className="rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-[#090949] py-3.5 font-semibold tracking-wide text-white transition-all hover:-translate-y-1 hover:bg-[#0c0c66] hover:shadow-[0_8px_15px_rgba(9,9,73,0.5)] active:translate-y-0"
          >
            Proceed to Payment <span>→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseStudentDetails;
