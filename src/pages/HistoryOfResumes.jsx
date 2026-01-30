import React, { useState, useEffect } from 'react';
import axios from "axios";
import Navcomponent from "../components/Navcomponent";
import { FileText, Clock, ChevronRight, Loader2, AlertCircle } from 'lucide-react';

const HistoryOfResumes = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchResumes = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post('/api/getresumes');
      // Validate response structure
      if (response.data && Array.isArray(response.data.resumes)) {
        setResumes(response.data.resumes);
      } else {
        // Fallback if structure is different or empty
        setResumes([]);
      }
    } catch (err) {
      console.error("Error fetching resumes:", err);
      setError("Failed to load your resume history. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'Just now';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Helper to extract a title from resume content if potential content exists
  const getPreviewTitle = (content) => {
    if (!content) return "Untitled Resume";
    const lines = content.split('\n');
    // Try to find the first non-empty line
    const titleLine = lines.find(line => line.trim().length > 0 && !line.trim().startsWith('\\'));
    return titleLine ? titleLine.substring(0, 30) + (titleLine.length > 30 ? '...' : '') : "Resume Document";
  };

  return (
    <div className="min-h-screen bg-[#FDFBF6] text-[#1a1a1a] selection:bg-[#B8860B]/20 selection:text-[#1a1a1a] relative overflow-hidden">

      {/* Background Element matching other pages */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#B8860B]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#B8860B]/5 rounded-full blur-[100px]" />
      </div>

      <Navcomponent />

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 animate-fade-in-up">
            <div>
              <span className="font-serif italic text-xl text-[#B8860B] block mb-2">
                / Your Archives
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
                Resume History
              </h1>
            </div>
            <button
              onClick={fetchResumes}
              className="px-6 py-2 bg-white border border-[#1a1a1a]/10 rounded-full hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-sm text-sm font-medium"
            >
              Refresh List
            </button>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 text-[#4A4A4A]">
                <Loader2 className="w-10 h-10 animate-spin mb-4 text-[#B8860B]" />
                <p className="text-lg">Loading your resumes...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-20 text-red-500 bg-red-50/50 rounded-2xl border border-red-100">
                <AlertCircle className="w-10 h-10 mb-4" />
                <p className="text-lg font-medium">{error}</p>
                <button onClick={fetchResumes} className="mt-4 text-sm underline hover:text-red-700">Try Again</button>
              </div>
            ) : resumes.length === 0 ? (
              <div className="text-center py-20 bg-white/50 rounded-3xl border border-dashed border-[#1a1a1a]/20">
                <FileText className="w-16 h-16 mx-auto text-[#1a1a1a]/20 mb-4" />
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">No resumes found</h3>
                <p className="text-[#4A4A4A] mb-8">You haven't generated any resumes yet.</p>
                <a href="/details" className="px-8 py-3 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#B8860B] transition-colors font-medium inline-block">
                  Create Your First Resume
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumes.map((resume, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-[#1a1a1a]/5 hover:border-[#B8860B]/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-[#FDFBF6] rounded-xl text-[#B8860B] border border-[#B8860B]/10 group-hover:bg-[#B8860B] group-hover:text-white transition-colors">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-1 text-xs font-medium text-[#4A4A4A]/60 bg-[#1a1a1a]/5 px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3" />
                        {resume.date ? formatDate(resume.date) : 'Recent'}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 line-clamp-1 group-hover:text-[#B8860B] transition-colors">
                      {getPreviewTitle(resume.latexContent)}
                    </h3>

                    <div className="mb-6 flex-grow">
                      <p className="text-sm text-[#4A4A4A] line-clamp-3 font-mono bg-[#F9F9F9] p-3 rounded-lg border border-gray-100">
                        {resume.latexContent ? resume.latexContent.slice(0, 150) : "No content preview available."}...
                      </p>
                    </div>

                    <div className="flex items-center text-sm font-semibold text-[#1a1a1a] group-hover:translate-x-1 transition-transform">
                      View Details <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HistoryOfResumes;
