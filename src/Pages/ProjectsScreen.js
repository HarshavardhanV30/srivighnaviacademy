import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECT_CATEGORIES, PROJECTS_LIST } from '../Data/mockData';
import { BookText, FileCode2, Presentation, HelpCircle, Search, Sparkles, X, ChevronRight, Layers } from 'lucide-react';

export default function ProjectsScreen({ type = 'B.Tech' }) {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const badges = [
    { label: 'Abstract', icon: BookText },
    { label: 'Modules', icon: FileCode2 },
    { label: 'Documentation', icon: BookText },
    { label: 'Source Code', icon: FileCode2 },
    { label: 'PPT', icon: Presentation },
    { label: 'Demo', icon: Presentation },
    { label: 'Viva Support', icon: HelpCircle }
  ];

  const filtered = PROJECTS_LIST.filter((p) => {
    const matchDegree = type === 'All' || p.degree === 'Both' || p.degree === type;
    const matchCat = selectedCat === 'All' || p.category === selectedCat;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchDegree && matchCat && matchSearch;
  });

  const handleEnquiry = (projectTitle) => {
    navigate('/project-enquiry', { state: { initialDomain: projectTitle } });
  };

  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden font-sans text-[#EAEFF8] py-16">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#005BFF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-[#C0C8D6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center space-x-2 bg-[#005BFF]/10 text-[#00D4FF] border border-[#00D4FF]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,212,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Excellence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#EAEFF8] to-[#8b99b3] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#005BFF]">{type} Projects</span>
          </h1>
          <p className="text-[#a4b4cb] text-base sm:text-lg font-medium">
            IEEE standard source code, architecture modules, comprehensive documentation, and complete defense support for final semester students.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#060a13]/80 backdrop-blur-xl border border-[#1a2b4c] rounded-2xl p-4 shadow-[0_0_30px_rgba(0,91,255,0.1)] flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3.5 text-[#00D4FF] w-5 h-5 opacity-70" />
            <input
              type="text"
              placeholder="Search project titles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl pl-12 pr-4 py-3 text-[#EAEFF8] text-sm placeholder-[#4a5b7c] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
            />
          </div>
          <div className="relative sm:w-64">
            <Layers className="absolute left-4 top-3.5 text-[#00D4FF] w-5 h-5 opacity-70 pointer-events-none" />
            <select
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value)}
              className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl pl-12 pr-10 py-3 text-[#EAEFF8] text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all appearance-none cursor-pointer"
            >
              <option value="All" className="bg-[#060a13]">All Categories</option>
              {PROJECT_CATEGORIES.map((cat) => (
                <option key={cat} value={cat} className="bg-[#060a13]">{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-[#060a13]/60 backdrop-blur-md border border-[#005BFF]/20 rounded-2xl p-6 shadow-inner">
          <p className="text-xs uppercase tracking-widest text-[#00D4FF] font-bold text-center mb-5">
            All Project Packages Include Following Deliverables
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {badges.map((b, i) => {
              const Icon = b.icon;
              return (
                <span key={i} className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-[#005BFF]/10 text-[#C0C8D6] border border-[#00D4FF]/20 text-xs font-semibold shadow-[0_0_10px_rgba(0,212,255,0.05)] hover:border-[#00D4FF]/50 transition-colors">
                  <Icon className="w-4 h-4 text-[#00D4FF]" />
                  <span>{b.label}</span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="group relative bg-[#060a13]/80 backdrop-blur-xl border border-[#1a2b4c] hover:border-[#00D4FF]/50 rounded-3xl p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,212,255,0.3)] overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#005BFF] to-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-4">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-md bg-[#005BFF]/10 text-[#00D4FF] border border-[#005BFF]/30 shadow-[0_0_10px_rgba(0,91,255,0.2)]">
                    {proj.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#EAEFF8] group-hover:text-[#00D4FF] transition-colors duration-300 leading-snug line-clamp-2">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-[#8b99b3] line-clamp-3 leading-relaxed">
                    {proj.description || "Complete modular backend routes, responsive frontend views, optimized database design, and comprehensive research base paper included."}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#1a2b4c] flex items-center justify-between">
                  <span className="text-xs text-[#a4b4cb] group-hover:text-[#EAEFF8] transition-colors font-medium flex items-center">
                    Click for details
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEnquiry(proj.title);
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#005BFF] to-[#00D4FF] hover:from-[#004bbd] hover:to-[#00bfff] text-white text-xs font-bold shadow-[0_0_15px_rgba(0,91,255,0.4)] transition-all flex items-center space-x-1"
                  >
                    <span>Enquire</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border border-dashed border-[#1a2b4c] rounded-3xl bg-[#060a13]/50">
              <BookText className="w-12 h-12 text-[#4a5b7c] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#EAEFF8]">No Projects Found</h3>
              <p className="text-[#8b99b3] mt-2">Try adjusting your search or category filters.</p>
            </div>
          )}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#060a13]/95 backdrop-blur-2xl border-t border-l border-[#00D4FF]/40 border-b border-r border-[#005BFF]/20 rounded-[2rem] max-w-2xl w-full p-6 sm:p-10 space-y-8 relative shadow-[0_0_50px_rgba(0,91,255,0.2)] my-8">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-[#a4b4cb] hover:text-[#00D4FF] p-2 rounded-xl bg-[#0a1122] border border-[#1a2b4c] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4 pr-8">
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-md bg-[#005BFF]/20 text-[#00D4FF] border border-[#005BFF]/40 shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                {selectedProject.category} | {selectedProject.degree}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C0C8D6] leading-tight">
                {selectedProject.title}
              </h2>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#00D4FF] uppercase tracking-widest">Project Overview</h4>
              <p className="text-[#a4b4cb] text-sm sm:text-base leading-relaxed">
                {selectedProject.description || "This project includes a complete implementation of modular backend components, an interactive and responsive frontend interface, an optimized relational/NoSQL database architecture, and a detailed research base paper adhering to IEEE standards. It is designed specifically to help final year students defend their academic projects successfully."}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#00D4FF] uppercase tracking-widest">Included Deliverables</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {badges.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={i} className="flex items-center space-x-2 bg-[#0a1122] border border-[#1a2b4c] p-2.5 rounded-xl">
                      <Icon className="w-4 h-4 text-[#00D4FF]" />
                      <span className="text-xs font-medium text-[#C0C8D6]">{b.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#1a2b4c] flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  handleEnquiry(selectedProject.title);
                  setSelectedProject(null);
                }}
                className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#005BFF] to-[#00D4FF] hover:from-[#004bbd] hover:to-[#00bfff] text-white font-extrabold flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(0,91,255,0.4)] transition-all transform hover:-translate-y-1"
              >
                <span>Request This Project</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedProject(null)}
                className="py-4 px-6 rounded-xl bg-[#0a1122] hover:bg-[#1a2b4c] border border-[#1a2b4c] hover:border-[#00D4FF]/50 text-[#C0C8D6] font-bold transition-all"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}