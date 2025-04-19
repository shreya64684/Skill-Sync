// 'use client'
// import { UserButton } from '@clerk/nextjs'
// import React, { useEffect } from "react";
// import AddNewInterview from './_components/AddNewInterview'
// import InterviewList from './_components/InterviewList'

// import { Navigation } from "swiper/modules";
// import Swiper from "swiper";
// import "swiper/css"; 
// import "swiper/css/navigation"; 
// import "swiper/css/pagination";

// const Dashboard = () => {
//   useEffect(() => {
//     new Swiper(".successSwiper", {
//       modules: [Navigation],
//       slidesPerView: 1,
//       spaceBetween: 20,
//       loop: true,
//       navigation: {
//         nextEl: "#nextSlide",
//         prevEl: "#prevSlide",
//       },
//       breakpoints: {
//         640: { slidesPerView: 1 },
//         768: { slidesPerView: 2 },
//         1024: { slidesPerView: 3 },
//       },
//     });
//   }, []);

//   const testimonials = [
//     { name: "Jane Doe", image: "/ai2.jpg", text: "This platform changed my career!" },
//     { name: "John Smith", image: "/ai2.jpg", text: "An amazing experience with AI-driven hiring!" },
//     { name: "Alice Johnson", image: "/ai2.jpg", text: "I landed my dream job thanks to this!" },
//   ];

//   return (
//     <>
//       <header className="bg-[url('/bg.jpg')] bg-cover bg-center text-white py-20 text-center shadow-lg">
//         <h2 className="text-4xl font-bold">AI-Powered Internship & Job Platform</h2>
//         <p className="mt-4 text-lg">Smart AI-driven matching for students and recruiters</p>
//         <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg btn">Get Started</button>
//       </header>


//       {/* How It Works */}
//       <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-20 text-white text-center">
//         <h2 className="text-4xl font-bold mb-10">✨ How It Works?</h2>
//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:scale-105 transition">
//             <h3 className="text-xl font-semibold text-indigo-300 mb-4">📜 Step 1: Upload Your Resume</h3>
//             <p className="text-lg">Our AI scans your resume, analyzes key details, and provides feedback.</p>
//           </div>
//           <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:scale-105 transition">
//             <h3 className="text-xl font-semibold text-indigo-300 mb-4">🎤 Step 2: Start an AI Mock Interview</h3>
//             <p className="text-lg">Simulate real interview scenarios with AI-generated questions.</p>
//           </div>
//           <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:scale-105 transition">
//             <h3 className="text-xl font-semibold text-indigo-300 mb-4">🚀 Step 3: Get Instant Feedback</h3>
//             <p className="text-lg">Receive AI-driven insights and track your improvement over time.</p>
//           </div>
//         </div>
//       </section>

//     {/* Features Section */}
// <section className="max-w-7xl mx-auto py-20 px-8 grid md:grid-cols-2 gap-12">
    
//     {/* Left Section: AI Mock Interview Benefits */}
//     <div className="  relative bg-gradient-to-br from-blue-50 to-white backdrop-blur-lg p-12 shadow-2xl rounded-xl border border-gray-200 text-gray-800 h-[500px] flex flex-col justify-center transition-transform hover:scale-105 hover:shadow-3xl">
//         <h3 className="text-4xl font-extrabold text-blue-600 mb-6 flex items-center">
//             <span className="mr-2">🤖</span> Why Choose AI Mock Interviews?
//         </h3>
//         <p className="text-lg text-gray-700 leading-relaxed">
//             Our AI-driven mock interviews help you prepare like a pro by simulating real-world interview scenarios, analyzing your responses, and providing actionable insights.
//         </p>
//         <ul className="mt-6 space-y-4 text-lg">
//             <li className="flex items-center"><span className="text-green-500 text-xl mr-2">✔</span> Personalized AI-powered interview questions</li>
//             <li className="flex items-center"><span className="text-green-500 text-xl mr-2">✔</span> Instant AI feedback on your answers</li>
//             <li className="flex items-center"><span className="text-green-500 text-xl mr-2">✔</span> Performance tracking & improvement tips</li>
//             <li className="flex items-center"><span className="text-green-500 text-xl mr-2">✔</span> Resume enhancement suggestions for better job matches</li>
//         </ul>
//         <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
//             Try AI Interview
//         </button>
//     </div>

//     {/* Right Section: Latest Updates */}
//     <div className="relative bg-gradient-to-br from-pink-50 to-white backdrop-blur-lg px-10 py-15 shadow-2xl rounded-xl border border-gray-200 text-gray-800 h-[500px] flex flex-col justify-center transition-transform hover:scale-105 hover:shadow-3xl">
//         <h3 className="text-4xl font-extrabold text-red-500 mb-6 flex items-center">
//             <span className="mr-2">🚀</span> What’s New?
//         </h3>
//         <p className="text-lg text-gray-700 leading-relaxed">
//             Stay updated with the latest AI innovations, new platform features, and expert insights to boost your career prospects.
//         </p>
//         <ul className="mt-6 space-y-4 text-lg">
//             <li><span className="text-yellow-500 font-bold">🌟 AI Interview Boost:</span> Behavioral & situational questions now available!</li>
//             <li><span className="text-yellow-500 font-bold">🎤 Live Webinar:</span> "How AI is Changing Hiring" – Join us! <a href="#" className="text-blue-500 underline">Register Now</a></li>
//             <li><span className="text-yellow-500 font-bold">✨ UI Revamp:</span> Smoother experience, new dashboards & analytics.</li>
//             <li><span className="text-yellow-500 font-bold">📖 Career Insights:</span> Read top hiring trends for 2025. <a href="#" className="text-blue-500 underline">Explore Now</a></li>
//         </ul>
//         <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
//             Read More
//         </button>
//     </div>

// </section>




      


// {/* // main section starts */}
//     {/* <div className='p-10 mt-5 bg-blue-200 text-black rounded-lg shadow-lg'>
//         <h2 className='font-bold text-2xl'>Dashboard</h2>
//         <h2 className='text-gray-500'>Create and Start your AI Mockup Interview</h2>

//         <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
//             <AddNewInterview />
//         </div>

//         <InterviewList />
//     </div> */}


//     <div className='p-8 mt-4 bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-200 text-white rounded-xl shadow-2xl border border-indigo-500'>

//     {/* Header Section */}
//     <h2 className='font-extrabold text-3xl text-white drop-shadow-lg tracking-wide text-center'>
//         AI-Powered Mock Interview
//     </h2>
//     <h2 className='text-base text-indigo-200 mt-2 italic text-center'>
//         Create and Start Your AI Mock Interview
//     </h2>

//     {/* Add New Interview Section */}
//     <div className='grid grid-cols-1 md:grid-cols-3 my-6 gap-6'>
//         <div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg border border-indigo-400 hover:border-indigo-300 hover:shadow-2xl transition duration-300 transform hover:scale-105">
//             <h3 className="text-xl font-bold text-indigo-300 text-center mb-4">Start New Interview</h3>
//             <AddNewInterview />
//         </div>
//     </div>

//     {/* Interview List */}
//     <div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg border border-indigo-400 hover:border-indigo-300 hover:shadow-2xl transition duration-300 transform hover:scale-105">
//         <h3 className="text-xl font-bold text-indigo-300 text-center mb-4">Your Past Interviews</h3>
//         <InterviewList />
//     </div>
//     </div>


// {/* // main section ends */}


//       {/* <section className="max-w-6xl mx-auto py-12 px-6">
//         <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Why Choose Us?</h3>
//         <div className="grid md:grid-cols-3 gap-6">
//           {["ai1.png", "ai1.jpg", "ai3.jpg"].map((image, index) => (
//             <div key={index} className="bg-white p-6 shadow-md rounded-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//               <img src={image} alt="Feature" className="w-full h-40 object-cover rounded-lg mb-4" />
//               <h4 className="text-xl font-bold text-blue-700">Feature Title</h4>
//               <p className="mt-2 text-gray-600">Feature description.</p>
//             </div>
//           ))}
//         </div>
//       </section> */}

// <section className="max-w-6xl mx-auto py-16 px-6">
//     <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">🚀 Why Choose Us?</h3>
//     <div className="grid md:grid-cols-3 gap-8">
//         {[
//             {
//                 image: "ai1.png",
//                 title: "AI-Powered Mock Interviews",
//                 description: "Get real-time AI feedback to improve your interview skills and boost confidence."
//             },
//             {
//                 image: "ai2.jpg",
//                 title: "Personalized Resume Analysis",
//                 description: "Receive expert AI-driven suggestions to optimize your resume for top recruiters."
//             },
//             {
//                 image: "ai3.jpg",
//                 title: "Behavioral Insights",
//                 description: "Analyze your speaking tone, body language, and response accuracy with AI."
//             },
          
//         ].map((feature, index) => (
//             <div key={index} className="bg-white p-6 shadow-lg rounded-xl text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
//                 <img src={feature.image} alt={feature.title} className="w-full h-44 object-cover rounded-lg mb-4" />
//                 <h4 className="text-xl font-semibold text-blue-700">{feature.title}</h4>
//                 <p className="mt-2 text-gray-600">{feature.description}</p>
//             </div>
//         ))}
//     </div>
// </section>

// {/* // old success stories section */}
//       {/* <section className="max-w-6xl mx-auto py-20 px-6 text-center relative">

//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 opacity-30 blur-3xl"></div>

//       <h3 className="text-4xl font-bold text-gray-900 drop-shadow-lg mb-12">
//         Success Stories
//       </h3>

//       <div className="relative max-w-4xl mx-auto">

//         <div className="swiper successSwiper">
//           <div className="swiper-wrapper">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="swiper-slide bg-white/40 backdrop-blur-md p-8 shadow-2xl rounded-3xl text-center border border-gray-300 hover:border-gray-500 transition-all hover:scale-105 hover:shadow-xl"
//               >
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-400 shadow-lg"
//                 />
//                 <h4 className="text-2xl font-semibold text-gray-900 drop-shadow-md">
//                   {testimonial.name}
//                 </h4>
//                 <p className="mt-3 text-gray-800 italic text-lg">
//                   "{testimonial.text}"
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           id="prevSlide"
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-lg text-gray-800 px-5 py-3 rounded-full shadow-md hover:bg-white/50 transition border border-gray-400"
//         >
//           &#10094;
//         </button>
//         <button
//           id="nextSlide"
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-lg text-gray-800 px-5 py-3 rounded-full shadow-md hover:bg-white/50 transition border border-gray-400"
//         >
//           &#10095;
//         </button>
//       </div>
//     </section> */}

// <section className="max-w-6xl mx-auto py-20 px-6 text-center">
//   {/* Title */}
//   <h3 className="text-4xl font-bold text-gray-900 mb-12">
//     🚀 Success Stories
//   </h3>

//   {/* Success Story Boxes */}
//   <div className="grid md:grid-cols-3 gap-6">
//     {/* Box 1 */}
//     <div className="bg-gradient-to-br from-blue-100 to-white p-6 shadow-lg rounded-xl border border-gray-200 text-center">
//       <img src="success1.jpg" alt="Aarav Patel" className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-indigo-400" />
//       <h4 className="text-2xl font-semibold text-gray-900">Aarav Patel</h4>
//       <p className="mt-2 text-gray-700 italic">"AI-driven interviews helped me land my job at Google!"</p>
//     </div>

//     {/* Box 2 */}
//     <div className="bg-gradient-to-br from-indigo-100 to-white p-6 shadow-lg rounded-xl border border-gray-200 text-center">
//       <img src="success2.jpg" alt="Sofia Mehta" className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-indigo-400" />
//       <h4 className="text-2xl font-semibold text-gray-900">Sofia Mehta</h4>
//       <p className="mt-2 text-gray-700 italic">"Personalized resume insights helped me secure my Microsoft role!"</p>
//     </div>

//     {/* Box 3 */}
//     <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow-lg rounded-xl border border-gray-200 text-center">
//       <img src="success3.jpg" alt="Rohan Iyer" className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-indigo-400" />
//       <h4 className="text-2xl font-semibold text-gray-900">Rohan Iyer</h4>
//       <p className="mt-2 text-gray-700 italic">"Behavioral analysis improved my confidence in interviews!"</p>
//     </div>
//   </div>
// </section>


//       <footer className="bg-blue-600 text-white text-center py-4 mt-10">
//         <p>&copy; 2025 Next Gen - Ignis. All rights reserved.</p>
//       </footer>

//     </>
//   )
// }

// export default Dashboard


// claude ui
'use client'
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  FileText, 
  Layers, 
  Briefcase,
  ArrowRight,
} from 'lucide-react';

const Dashboard = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  
  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveFeature('interview');
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Main features data
  const features = [
    {
      id: 'interview',
      title: 'AI Mock Interview',
      description: 'Practice with our AI-powered interview simulator and receive feedback on your performance.',
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      buttonText: 'Start Practice',
      metric: '12 Sessions'
    },
    {
      id: 'resume',
      title: 'Resume Analyzer',
      description: 'Get professional feedback on your resume with actionable improvements.',
      icon: <FileText className="w-8 h-8 text-teal-500" />,
      buttonText: 'Analyze Resume',
      metric: '4 Analyses'
    },
    {
      id: 'matcher',
      title: 'Resume-Job Matcher',
      description: 'Match your resume with job descriptions to identify compatibility and areas to improve.',
      icon: <Layers className="w-8 h-8 text-purple-500" />,
      buttonText: 'Match Now',
      metric: '82% Match Rate'
    },
    {
      id: 'opportunities',
      title: 'Job Opportunities',
      description: 'Discover personalized job and internship opportunities based on your resume.',
      icon: <Briefcase className="w-8 h-8 text-orange-500" />,
      buttonText: 'Find Jobs',
      metric: '28 New Listings'
    }
  ];

  // Recent activity data
  const recentActivity = [
    { id: 1, title: 'Mock Interview: Software Engineer', time: '2 hours ago', status: 'Completed', score: '86%' },
    { id: 2, title: 'Resume Analysis', time: 'Yesterday', status: 'Completed', score: '92%' },
    { id: 3, title: 'Job Application: Frontend Developer', time: '3 days ago', status: 'Applied', score: '94% Match' }
  ];

  return (
    <>
      {/* Welcome section */}
      <div className="mb-8 pt-4">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Welcome back, John!</h1>
        <p className="text-slate-500">Let's continue enhancing your career prospects</p>
      </div>

      {/* Featured tools */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${activeFeature === feature.id ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => setActiveFeature(feature.id)}
          >
            <div className="h-full p-6">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
              <div className="flex items-center justify-between">
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 px-4 py-1.5 rounded-md border border-blue-200 bg-blue-50 hover:bg-blue-100 transition-colors">
                  {feature.buttonText}
                </button>
                <span className="text-xs font-medium text-slate-500">{feature.metric}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Stats & Activities section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Stats */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-slate-100 shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-slate-800">Your Progress</h3>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-600">Profile Completion</span>
              <span className="text-sm font-medium text-slate-800">85%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-teal-500 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-600">Interview Readiness</span>
              <span className="text-sm font-medium text-slate-800">72%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-600">Resume Strength</span>
              <span className="text-sm font-medium text-slate-800">90%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-sm font-medium text-slate-700 mb-3">Suggested Next Steps</h4>
            <ul className="space-y-2">
              <li className="text-sm text-slate-600 flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                Complete 2 more mock interviews
              </li>
              <li className="text-sm text-slate-600 flex items-center">
                <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                Add project portfolio links to resume
              </li>
            </ul>
          </div>
        </div>

        {/* Recent activity */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Recent Activity</h3>
            <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">View All</button>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map(activity => (
              <div 
                key={activity.id}
                className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-slate-800 font-medium">{activity.title}</h4>
                    <p className="text-slate-500 text-xs mt-1">{activity.time}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                      {activity.status}
                    </span>
                    <span className="text-xs text-slate-600 mt-1">Score: {activity.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium">
              See more activity
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;