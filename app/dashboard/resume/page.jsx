'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');


  // const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
  const API_URL = "http://127.0.0.1:8000";
  
  const handleFileChange = (e) => {

    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a resume file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setIsLoading(true);
    setError('');

    try {
      // Use template literals for clean URL construction
    // const endpoint = `${API_URL}/api/analyze-resume`;
    // console.log(`Sending request to: ${endpoint}`);
    // const response = await fetch(endpoint, {
    //   method: 'POST',
    //   body: formData,
    //   // Important for file uploads
    //   headers: {
    //     'Accept': 'application/json',
    //   },
    // });

    const response = await fetch('http://127.0.0.1:8000/api/analyze-resume', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to analyze resume');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message || 'An error occurred while analyzing the resume');
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200/30 blur-3xl"
        />
        <motion.div 
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-300/20 blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            AI Resume Analyzer
          </h1>
          <p className="text-blue-700/80 text-lg max-w-2xl mx-auto">
            Get personalized feedback on your resume with our AI-powered analysis. Discover your strengths, 
            areas for improvement, and tailored career recommendations.
          </p>
        </motion.div>

        {/* Upload Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="backdrop-blur-lg bg-white/40 rounded-2xl shadow-lg border border-white/30 overflow-hidden mb-10"
        >
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
              Upload Your Resume
            </h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="relative border-2 border-dashed border-blue-300/70 p-8 text-center rounded-lg bg-white/30 cursor-pointer transition-all hover:border-blue-400/70">
                <label htmlFor="resume" className="cursor-pointer flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="text-blue-700 font-medium">
                    {fileName ? fileName : 'Drag & drop or click to browse'}
                  </span>
                  <span className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md inline-block text-sm">
                    Select File
                  </span>
                </label>
                <input 
                  type="file" 
                  id="resume" 
                  onChange={handleFileChange} 
                  accept=".pdf,.doc,.docx,.txt"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className={`px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-lg font-medium shadow-md transition-all ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : 'Analyze Resume'}
              </motion.button>
            </form>

            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 p-4 bg-red-100/80 text-red-800 rounded-md"
              >
                {error}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Results Section */}
        {result && (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="backdrop-blur-lg bg-white/40 rounded-2xl shadow-lg border border-white/30 overflow-hidden mt-10"
  >
    <div className="p-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-3">
          🎯 Your Personalized Resume Analysis
        </h2>
        <p className="text-blue-700/80 text-lg">
          We've analyzed your resume and here's what we found
        </p>
      </div>

      <div className="grid gap-8">
        {/* Strengths Card */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white/80 p-6 rounded-xl shadow-sm border-l-4 border-green-400"
        >
          <div className="flex items-start mb-4">
            <div className="bg-green-100 p-2 rounded-full mr-4">
              <span className="text-2xl">💪</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Top Strengths</h3>
              <p className="text-blue-600/80 text-sm">These are your standout qualities</p>
            </div>
          </div>
          <ul className="space-y-3 pl-4">
            {result.strengths?.map((item, index) => (
              <li key={`strength-${index}`} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-blue-900/90">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Improvement Card */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white/80 p-6 rounded-xl shadow-sm border-l-4 border-yellow-400"
        >
          <div className="flex items-start mb-4">
            <div className="bg-yellow-100 p-2 rounded-full mr-4">
              <span className="text-2xl">🔍</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Areas to Improve</h3>
              <p className="text-blue-600/80 text-sm">Opportunities to make your resume stronger</p>
            </div>
          </div>
          <ul className="space-y-3 pl-4">
            {result.areas_of_improvement?.map((item, index) => (
              <li key={`improvement-${index}`} className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-blue-900/90">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Projects Card */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white/80 p-6 rounded-xl shadow-sm border-l-4 border-purple-400"
        >
          <div className="flex items-start mb-4">
            <div className="bg-purple-100 p-2 rounded-full mr-4">
              <span className="text-2xl">🚀</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Recommended Projects</h3>
              <p className="text-blue-600/80 text-sm">Boost your skills with these projects</p>
            </div>
          </div>
          <ul className="space-y-3 pl-4">
            {result.project_recommendations?.map((item, index) => (
              <li key={`project-${index}`} className="flex items-start">
                <span className="text-purple-500 mr-2">▸</span>
                <span className="text-blue-900/90">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Roadmap Card */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white/80 p-6 rounded-xl shadow-sm border-l-4 border-blue-400"
        >
          <div className="flex items-start mb-4">
            <div className="bg-blue-100 p-2 rounded-full mr-4">
              <span className="text-2xl">🗺️</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Career Roadmap</h3>
              <p className="text-blue-600/80 text-sm">Your path to career success</p>
            </div>
          </div>
          <div className="bg-blue-50/50 p-5 rounded-lg border border-blue-100">
            <div className="prose prose-blue max-w-none">
              <p className="text-blue-900/90 whitespace-pre-line leading-relaxed">
                {result.career_roadmap}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Courses Card */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white/80 p-6 rounded-xl shadow-sm border-l-4 border-red-400"
        >
          <div className="flex items-start mb-4">
            <div className="bg-red-100 p-2 rounded-full mr-4">
              <span className="text-2xl">📚</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Recommended Courses</h3>
              <p className="text-blue-600/80 text-sm">Expand your knowledge with these resources</p>
            </div>
          </div>
          <ul className="space-y-3 pl-4">
            {result.recommended_courses?.map((item, index) => (
              <li key={`course-${index}`} className="flex items-start">
                <span className="text-red-500 mr-2">☆</span>
                <span className="text-blue-900/90">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Final CTA */}
        <div className="text-center mt-8">
          <p className="text-blue-700/80 mb-4">🔥 Keep aiming high — your breakthrough moment is just around the corner!</p>
        
        </div>
      </div>
    </div>
  </motion.div>
)}
      </div>
    </div>
  );
}