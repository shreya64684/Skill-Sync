'use client'
import React from 'react';
import {
  Home,
  Calendar,
  FileText,
  Podcast,
  Briefcase,
  Settings,
  MessageSquare,
  Layers,
  User,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // ✅ Import
import { SignOutButton } from "@clerk/nextjs";


const Sidebar = ({ isCollapsed = false, onToggle }) => {
  const pathname = usePathname(); // ✅ Get current path

  const navItems = [
    { name: 'Dashboard', icon: <Home />, path: '/dashboard' },
    { name: 'AI Mock Interviews', icon: <Calendar />, path: '/dashboard/mockInterview' },
    { name: 'AI Voice Interview', icon: <Podcast />, path: '/dashboard/voiceInterview' },
    { name: 'Resume Analyzer', icon: <FileText />, path: '/dashboard/resume' },
    
  ];

  return (
    <aside 
      className={`bg-white border-r border-slate-200 shadow-sm fixed top-0 left-0 h-full transition-all duration-300 z-10 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-100">
        {!isCollapsed && (
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">
              S
            </div>
            <span className="font-bold text-slate-800">Skill Sync</span>
          </div>
        )}
        {isCollapsed && (
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mx-auto">
            S
          </div>
        )}
        <button 
          onClick={onToggle}
          className="text-slate-500 hover:text-slate-700 flex items-center justify-center w-6 h-6"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Nav Items */}
      <nav className="pt-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`flex items-center px-4 py-3 transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  <span className={`${isCollapsed ? 'mx-auto' : 'mr-3'}`}>
                    {React.cloneElement(item.icon, { 
                      size: isCollapsed ? 20 : 18,
                      className: isCollapsed ? 'mx-auto' : ''
                    })}
                  </span>
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="mt-auto">
          <SignOutButton>
              <button
                className={`flex items-center w-full px-4 py-2 text-slate-600 hover:text-red-600 transition-colors rounded-md ${
                  isCollapsed ? 'justify-center' : ''
                }`}
              >
                <LogOut size={18} className={isCollapsed ? 'mx-auto' : 'mr-2'} />
                {!isCollapsed && <span>Logout</span>}
              </button>
          </SignOutButton>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
