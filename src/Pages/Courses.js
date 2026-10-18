
import React from 'react';
import { useNavigate } from 'react-router-dom';

const COURSES = [
  {
    id: 1,
    courseId: 'CRS-JAVA-101',
    title: 'Java Development',
    tag: 'Bestseller',
    academy: 'VIGHNAVI ACADEMY',
    rating: '4.9',
    learners: '2,850+',
    description:
      'Master Java programming, OOP concepts and enterprise development with practical projects.',
    features: ['Core Java', 'OOP', 'Collections', 'Spring Boot', 'SQL'],
    price: 5000,
    gradient: 'from-[#0f1115] to-[#450a0a]',
  },
  {
    id: 2,
    courseId: 'CRS-PYTHON-101',
    title: 'Python Development',
    tag: 'Popular',
    academy: 'VIGHNAVI ACADEMY',
    rating: '4.9',
    learners: '3,200+',
    description:
      'Build strong Python fundamentals and develop real-world applications with confidence.',
    features: ['Python', 'OOP', 'Data Structures', 'Django', 'Projects'],
    price: 6500,
    gradient: 'from-[#1e3a8a] to-[#a16207]',
  },
  {
    id: 3,
    courseId: 'CRS-JAVA-FS-101',
    title: 'Java Full Stack',
    tag: 'Career Track',
    academy: 'VIGHNAVI ACADEMY',
    rating: '4.8',
    learners: '2,100+',
    description:
      'Become a complete full-stack developer with Java, Spring Boot, React and databases.',
    features: ['Java', 'Spring Boot', 'HTML/CSS', 'React', 'MySQL'],
    price: 8000,
    gradient: 'from-[#4c1d95] to-[#be123c]',
  },
  {
    id: 4,
    courseId: 'CRS-PYTHON-FS-101',
    title: 'Python Full Stack',
    tag: 'Trending',
    academy: 'VIGHNAVI ACADEMY',
    rating: '4.9',
    learners: '2,400+',
    description:
      'Learn modern full-stack development using Python, Django, React and databases.',
    features: ['Python', 'Django', 'React', 'JavaScript', 'PostgreSQL'],
    price: 7500,
    gradient: 'from-[#082f49] to-[#0f766e]',
  },
  {
    id: 5,
    courseId: 'CRS-AI-101',
    title: 'Full-stack AI Development',
    tag: 'AI Career Track',
    academy: 'VIGHNAVI ACADEMY',
    rating: '4.9',
    learners: '1,500+',
    description:
      'Learn full-stack development, AI integration and modern application development.',
    features: ['Python', 'React', 'APIs', 'AI Integration', 'Projects'],
    price: 4999,
    gradient: 'from-[#312e81] to-[#0369a1]',
  },
];

const Courses = () => {
  const navigate = useNavigate();

  const handleEnroll = (course) => {
    navigate('/student-details', {
      state: { course },
    });
  };

  return (
    <div className="min-h-screen bg-[#0f1115] p-6 font-sans text-gray-200 sm:p-8">
      <div className="mx-auto max-w-[1400px]">
        <h1 className="mb-3 text-center text-3xl font-bold text-gray-100 md:text-4xl">
          Explore Our Programs
        </h1>

        <p className="mb-10 text-center text-sm text-gray-400">
          Choose your course and start learning with Vighnavi Academy.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {COURSES.map((course) => (
            <div
              key={course.courseId}
              className="flex flex-col overflow-hidden rounded-xl border border-[#2a2d35] bg-[#1a1d24] transition-all duration-300 hover:border-[#090949] hover:shadow-[0_0_20px_rgba(9,9,73,0.4)]"
            >
              <div
                className={`relative flex h-40 flex-col justify-end bg-gradient-to-br ${course.gradient} p-4`}
              >
                <span className="absolute left-4 top-4 rounded-full bg-[#0ea5e9] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  {course.tag}
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">
                  {course.academy}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center gap-1 text-sm font-semibold text-[#eab308]">
                  ★ {course.rating}
                  <span className="font-normal text-gray-400">
                    ({course.learners} learners)
                  </span>
                </div>

                <h2 className="mb-2 text-xl font-bold text-gray-100">
                  {course.title}
                </h2>

                <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-400">
                  {course.description}
                </p>

                <div className="mb-5 space-y-2 rounded-lg border border-[#2a2d35] bg-[#14161b] p-4">
                  {course.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span className="text-emerald-400">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mb-5 mt-auto text-xs font-medium text-gray-500">
                  🎓 Career-focused learning
                </div>

                <div className="mb-3 text-xl font-bold text-white">
                  ₹{course.price.toLocaleString('en-IN')}
                </div>

                <button
                  type="button"
                  onClick={() => handleEnroll(course)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#090949] py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c0c66] hover:shadow-[0_8px_15px_rgba(9,9,73,0.5)] active:translate-y-0"
                >
                  <span>Enroll for ₹{course.price.toLocaleString('en-IN')}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
