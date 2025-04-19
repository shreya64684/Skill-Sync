// import React from 'react'
// import Header from '../../Header'

// const DashboardLayout = ({children}) => {
//   return (
//     <div>
//         {/* <Header /> */}
//         <div>
//             {children}
//         </div>
//     </div>
//   )
// }
// export default DashboardLayout


'use client'
import React, { useState } from 'react';
import Sidebar from './_components/Sidebar';

const DashboardLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 flex">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Sidebar Component */}
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={handleToggleSidebar} />

      {/* Main content - adjusts based on sidebar state */}
      <div 
        className={`transition-all duration-300 flex-1 ${
          sidebarCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        <main className="px-6 py-6">
          {children}
        </main>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;