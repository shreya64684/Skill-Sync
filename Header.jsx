// 'use client'
// import { UserButton } from '@clerk/nextjs'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import React from 'react'
// import { useEffect } from 'react'

// const Header = () => {

//     const path = usePathname();
//     useEffect(() => {
//       console.log(path)
//     })
    

//   return (
//     <>
    
//     <div className="bg-gradient-to-r from-gray-200 to-blue-300">
//   <nav className="bg-gradient-to-r from-indigo-700 to-blue-300 text-white py-3 shadow-md">
//     <div className="max-w-6xl mx-auto flex justify-between items-center">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-2">
//         <Image src={'/logo.svg'} width={60} height={35} alt='logo' />
//         <h1 className="text-xl font-bold">Skill Sync</h1>
//       </div>

//       {/* Navigation Links */}
//       <ul className="flex space-x-6 text-lg font-semibold">
//         <li><a href="/dashboard" className="hover:text-yellow-300 transition">Home</a></li>
//         <li><a href="/dashboard/jobListing" className="hover:text-yellow-300 transition">Jobs Listing</a></li>
//         <li><a href="/dashboard" className="hover:text-yellow-300 transition">AI Mock Interview</a></li>
//         <li><a href="/dashboard/resume" className="hover:text-yellow-300 transition">Resume Analyzer</a></li>
//         <li><a href="/dashboard/JDmatcher" className="hover:text-yellow-300 transition">Job Description Matcher</a></li>
//         <li><a href="#" className="hover:text-yellow-300 transition">Contact Us</a></li>
//       </ul>

//       {/* User Button */}
//       <UserButton className="text-lg font-bold px-5 py-3 bg-yellow-400 text-gray-900 rounded-lg shadow-md hover:bg-yellow-500 transition scale-110" />
//     </div>
//   </nav>
// </div>


//     </>
//   )
// }

// export default Header


// claude ui
// components/Header.jsx
'use client'
import React, { useState } from 'react';
import { Search, Bell } from 'lucide-react';

const Header = () => {
  const [notifications, setNotifications] = useState(3);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo for mobile - only visible on small screens */}
        <div className="flex items-center lg:hidden">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs">SS</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-blue-600 font-medium">Home</a>
          <a href="/jobs" className="text-slate-600 hover:text-slate-800 transition-colors">Jobs Listing</a>
          <a href="/interview" className="text-slate-600 hover:text-slate-800 transition-colors">AI Mock Interview</a>
          <a href="/resume" className="text-slate-600 hover:text-slate-800 transition-colors">Resume Analyzer</a>
          <a href="/matcher" className="text-slate-600 hover:text-slate-800 transition-colors">Job Description Matcher</a>
          <a href="/contact" className="text-slate-600 hover:text-slate-800 transition-colors">Contact Us</a>
        </nav>

        {/* Right side - Search and user options */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-48 pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          </div>
          
          <div className="relative">
            <button className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-slate-600" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
          </div>
          
          <a href="/profile" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-sm">
              JS
            </div>
          </a>
        </div>
      </div>

      {/* Mobile Navigation - dropdown menu could be added here */}
    </header>
  );
};

export default Header;