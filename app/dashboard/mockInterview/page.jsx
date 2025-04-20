// 'use client'
// import { UserButton } from '@clerk/nextjs'
// import React, { useEffect } from "react";
// import AddNewInterview from '../_components/AddNewInterview';
// import InterviewList from '../_components/InterviewList';

// const mockInterview = () => {
//   return (
//     <div>
//             {/* // main section starts */}
         


//             <div className='p-8 mt-4 bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-200 text-white rounded-xl shadow-2xl border border-indigo-500'>

//         {/* Header Section */}
//         <h2 className='font-extrabold text-3xl text-white drop-shadow-lg tracking-wide text-center'>
//             AI-Powered Mock Interview
//         </h2>
//         <h2 className='text-base text-indigo-200 mt-2 italic text-center'>
//             Create and Start Your AI Mock Interview
//         </h2>

//         {/* Add New Interview Section */}
//         <div className='grid grid-cols-1 md:grid-cols-3 my-6 gap-6'>
//             <div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg border border-indigo-400 hover:border-indigo-300 hover:shadow-2xl transition duration-300 transform hover:scale-105">
//                 <h3 className="text-xl font-bold text-indigo-300 text-center mb-4">Start New Interview</h3>
//                 <AddNewInterview />
//             </div>
//         </div>

//         {/* Interview List */}
//         <div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg border border-indigo-400 hover:border-indigo-300 hover:shadow-2xl transition duration-300 transform hover:scale-105">
//             <h3 className="text-xl font-bold text-indigo-300 text-center mb-4">Your Past Interviews</h3>
//             <InterviewList />
//         </div>
//         </div>


//         {/* // main section ends */}
//     </div>
//   )
// }

// export default mockInterview



'use client'
import { UserButton } from '@clerk/nextjs';
import React from "react";
import AddNewInterview from '../_components/AddNewInterview';
import InterviewList from '../_components/InterviewList';
import { motion } from "framer-motion";

const MockInterview = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-8 px-4"
    >
      <motion.div 
        className="max-w-6xl mx-auto p-10 mt-6 bg-gradient-to-br from-purple-700/90 via-indigo-600/85 to-blue-400/80 text-white rounded-2xl shadow-2xl border border-purple-300/30 backdrop-blur-md relative overflow-hidden"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Background Decorations */}
        <div className="absolute -top-28 -right-28 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-40 -left-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl z-0" />

        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl font-extrabold drop-shadow-xl tracking-tight">
            AI-Powered Mock Interview
          </h1>
          <p className="text-lg mt-3 italic text-indigo-100 font-light">
            Practice with AI to gain real-world confidence and skills
          </p>
        </motion.div>

        {/* Add Interview Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 my-12 gap-8 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div 
            className="p-8 bg-purple-900/50 backdrop-blur-md rounded-xl shadow-lg border border-purple-300/30 transition-all hover:shadow-2xl hover:scale-105 hover:border-purple-200/50 hover:bg-purple-800/40 duration-300"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 280 }}
          >
            <h2 className="text-2xl font-semibold text-purple-200 text-center mb-6">
              Start New Interview
            </h2>
            <AddNewInterview />
          </motion.div>
        </motion.div>

        {/* Past Interviews */}
        <motion.div 
          className="p-8 bg-purple-900/50 backdrop-blur-md text-white rounded-xl shadow-lg border border-purple-300/30 transition-all hover:shadow-2xl hover:border-purple-200/50 hover:bg-purple-800/40 duration-300 relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-purple-200 text-center mb-6">
            Your Past Interviews
          </h2>
          <InterviewList />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MockInterview;
