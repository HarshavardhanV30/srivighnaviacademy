import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  
  // Expanded data structure to match the design in the provided image
  const [courses, setCourses] = useState([
    { 
      id: 1, 
      title: 'Java Development', 
      tag: 'Bestseller',
      academy: 'VIGHNAVI ACADEMY',
      rating: '4.9',
      learners: '2,850+',
      description: 'Master Java programming, OOP concepts and enterprise development with practical projects.',
      features: ['Core Java', 'OOP', 'Collections', 'Spring Boot', 'SQL'],
      price: 5000,
      gradient: 'from-[#0f1115] to-[#450a0a]' // Simulating the red/dark background
    },
    { 
      id: 2, 
      title: 'Python Development', 
      tag: 'Popular',
      academy: 'VIGHNAVI ACADEMY',
      rating: '4.9',
      learners: '3,200+',
      description: 'Build strong Python fundamentals and develop real-world applications with confidence.',
      features: ['Python', 'OOP', 'Data Structures', 'Django', 'Projects'],
      price: 6500,
      gradient: 'from-[#1e3a8a] to-[#a16207]' // Simulating the blue/yellow background
    },
    { 
      id: 3, 
      title: 'Java Full Stack', 
      tag: 'Career Track',
      academy: 'VIGHNAVI ACADEMY',
      rating: '4.8',
      learners: '2,100+',
      description: 'Become a complete full-stack developer with Java, Spring Boot, React and databases.',
      features: ['Java', 'Spring Boot', 'HTML/CSS', 'React', 'MySQL'],
      price: 8000,
      gradient: 'from-[#4c1d95] to-[#be123c]' // Simulating the purple/pink background
    },
    { 
      id: 4, 
      title: 'Python Full Stack', 
      tag: 'Trending',
      academy: 'VIGHNAVI ACADEMY',
      rating: '4.9',
      learners: '2,400+',
      description: 'Learn modern full-stack development using Python, Django, React and databases.',
      features: ['Python', 'Django', 'React', 'JavaScript', 'PostgreSQL'],
      price: 7500,
      gradient: 'from-[#082f49] to-[#0f766e]' // Simulating the dark blue/teal background
    }
  ]);

  const handleEnroll = (course) => {
    navigate('/student-details', { state: { course } });
  };

  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-screen bg-[#0f1115] text-gray-200 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-100">
        Explore Our Programs
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="bg-[#1a1d24] border border-[#2a2d35] rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-[#090949] hover:shadow-[0_0_20px_rgba(9,9,73,0.4)]"
          >
            {/* Image / Banner Section */}
            <div className={`h-40 relative bg-gradient-to-br ${course.gradient} p-4 flex flex-col justify-end opacity-90`}>
              <span className="absolute top-4 left-4 bg-[#0ea5e9] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {course.tag}
              </span>
              <span className="text-gray-300 text-[10px] font-bold tracking-[0.2em] uppercase">
                {course.academy}
              </span>
            </div>

            {/* Content Section */}
            <div className="p-5 flex-1 flex flex-col">
              <div className="text-[#eab308] text-sm font-semibold mb-2 flex items-center gap-1">
                ★ {course.rating} <span className="text-gray-400 font-normal">({course.learners} learners)</span>
              </div>
              
              <h2 className="text-xl font-bold mb-2 text-gray-100">{course.title}</h2>
              <p className="text-sm text-gray-400 mb-5 line-clamp-2 leading-relaxed">
                {course.description}
              </p>
              
              {/* Features Box */}
              <div className="border border-[#2a2d35] rounded-lg p-4 mb-5 space-y-2 bg-[#14161b]">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-gray-500">✓</span> {feature}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 mb-5 mt-auto font-medium">
                🎓 Career-focused
              </div>
              
              {/* Price & Action Button */}
              <button 
                onClick={() => handleEnroll(course)}
                className="w-full bg-[#090949] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 
                           transition-all duration-300 ease-in-out
                           hover:bg-[#0c0c66] hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(9,9,73,0.5)]
                           active:translate-y-0 active:shadow-none"
              >
                <span>Enroll for ₹{course.price}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;