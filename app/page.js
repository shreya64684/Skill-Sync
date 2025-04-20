// 'use client'
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import React, { useEffect } from "react";
// import Swiper from "swiper";
// // import "swiper/swiper-bundle.min.css";
// import "swiper/css"; 
// import "swiper/css/navigation"; 
// import "swiper/css/pagination";


// export default function Home() {

//   useEffect(() => {
//     const successSwiper = new Swiper(".successSwiper", {
//       slidesPerView: 1,
//       spaceBetween: 10,
//       loop: true,
//       autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//       },
//     });

//     document.getElementById("prevSlide").addEventListener("click", () => {
//       successSwiper.slidePrev();
//     });

//     document.getElementById("nextSlide").addEventListener("click", () => {
//       successSwiper.slideNext();
//     });
//   }, []);


//   return (
//     <div className="bg-gradient-to-r from-gray-200 to-blue-300">
//       <nav className="bg-gradient-to-r from-indigo-700 to-blue-300 text-white p-4 shadow-md">
//         <div className="max-w-6xl mx-auto flex justify-between items-center">
//           <h1 className="text-xl font-bold">Skill-Sync</h1>
//           <ul className="flex space-x-6">
//             <li><a href="#" className="nav-link">Home</a></li>
//             <li><a href="#" className="nav-link">Features</a></li>
//             <li><a href="#" className="nav-link">About</a></li>
//             <li><a href="#" className="nav-link">Contact</a></li>
//           </ul>
//           <div className="flex space-x-2">
//             <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg btn">Login</button>
//             <button className="px-4 py-2 bg-blue-700 text-white font-semibold rounded-lg btn">Sign Up</button>
//           </div>
//         </div>
//       </nav>

//       <header className="bg-[url('/bg.jpg')] bg-cover bg-center text-white py-20 text-center shadow-lg">
//         <h2 className="text-4xl font-bold">AI-Powered Internship & Job Platform</h2>
//         <p className="mt-4 text-lg">Smart AI-driven matching for students and recruiters</p>
//         <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg btn">Get Started</button>
//       </header>
      
//       <section className="max-w-6xl mx-auto py-12 px-6">
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
//       </section>
      
//       <section className="max-w-6xl mx-auto py-12 px-6">
//         <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Success Stories</h3>
//         <div className="relative max-w-4xl mx-auto">
//           <div className="swiper successSwiper">
//             <div className="swiper-wrapper">
//               {["Jane Doe", "John Smith", "Alice Johnson"].map((name, index) => (
//                 <div key={index} className="swiper-slide bg-gradient-to-r from-blue-100 to-indigo-200 p-6 shadow-md rounded-lg text-center hover:shadow-xl transition duration-300">
//                   <img src="https://via.placeholder.com/100" alt={name} className="mx-auto rounded-full mb-4" />
//                   <h4 className="text-xl font-bold text-blue-700">{name}</h4>
//                   <p className="mt-2 text-gray-600">"Amazing platform!"</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <button id="prevSlide" className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700">&#10094;</button>
//           <button id="nextSlide" className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700">&#10095;</button>
//         </div>
//       </section>
      
//       <footer className="bg-blue-600 text-white text-center py-4 mt-10">
//         <p>&copy; 2025 Next Gen - Ignis. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }


'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowRight, Check, Star, FileText, Briefcase, Linkedin, Sparkles, Users, Award, Zap , Podcast} from 'lucide-react'

export default function LandingPage() {
  const router = useRouter()

  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      title: "AI-Powered Mock Interviews",
      desc: "Practice with realistic AI interviews and get instant feedback on your performance."
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: "Resume Analyzer",
      desc: "Get actionable insights to optimize your resume for better job opportunities."
    },
    {
      icon: <Podcast className="w-6 h-6 text-green-500" />,
      title: "Ai-Powered Voice Interview Agent",
      desc: "Practice with realtime AI voice recruiter agent and improve your communication."
    },
    // {
    //   icon: <Linkedin className="w-6 h-6 text-sky-600" />,
    //   title: "Smart Job Recommendations",
    //   desc: "Get personalized job/internship opportunities scraped from LinkedIn based on your profile."
    // }
  ]

  const testimonials = [
    {
      name: "Sarah J.",
      role: "Software Engineer",
      text: "SkillSync helped me land interviews at 3 top tech companies. The AI interview practice made all the difference!"
    },
    {
      name: "Michael T.",
      role: "Marketing Specialist",
      text: "The resume analyzer pointed out key missing elements in my CV. After making the suggested changes, I got callbacks within days."
    },
    {
      name: "Priya K.",
      role: "Data Analyst",
      text: "The job matching feature saved me countless hours of searching. Found my perfect role in just two weeks!"
    }
  ]

  const stats = [
    { value: "87%", label: "Interview Success Rate" },
    { value: "10,000+", label: "Active Users" },
    { value: "94%", label: "Satisfaction Score" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6 md:p-12 flex flex-col overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-200/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-2/3 left-1/3 w-56 h-56 rounded-full bg-pink-200/20 blur-3xl"
        />
      </div>

      {/* Header/Nav */}
      <header className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center"
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SkillSync
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/dashboard')}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm shadow-md"
          >
            Get Started
          </motion.button>
        </motion.div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-blue-100 px-4 py-1 rounded-full mb-4"
          >
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-sm font-medium text-blue-600">The Future of Career Preparation</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Land Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dream Job</span> Faster
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            SkillSync combines AI-powered interview coaching, resume optimization, and smart job matching to give you an unbeatable edge.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 w-full"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="backdrop-blur-lg bg-white/60 p-6 rounded-2xl shadow-md border border-white/30"
            >
              <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="backdrop-blur-lg bg-white/60 p-6 rounded-2xl shadow-md border border-white/30"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 mr-1" fill="#eab308" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="backdrop-blur-lg bg-white/60 p-8 md:p-10 rounded-3xl shadow-xl border border-white/30 w-full max-w-3xl"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Career?</h2>
              <p className="text-gray-600 mb-6">Join thousands of candidates who improved their interview skills and landed better jobs.</p>
              
              <ul className="mb-6">
                {[
                  "Improve interview confidence by 80%",
                  "Optimize your resume for ATS systems",
                  "Get matched with relevant jobs daily",
                  "Receive personalized improvement tips"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center mb-3"
                  >
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-start"
              >
                <button
                  onClick={() => router.push('/dashboard')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center"
                >
                  Start Your Journey Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <p className="text-sm text-gray-500 mt-3">No credit card required • Free 14-day trial</p>
              </motion.div>
            </div>
            
            <div className="md:w-1/3">
              <motion.div
                whileHover={{ rotate: 3 }}
                className="backdrop-blur-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-2xl shadow-lg border border-white/50 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Benefits</h3>
                <ul className="text-left text-gray-700">
                  <li className="flex items-center mb-2">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Unlimited AI interviews</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Resume version tracking</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Priority job alerts</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto w-full mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-sm text-gray-500 py-6 border-t border-gray-200/50"
        >
          <p>© {new Date().getFullYear()} SkillSync. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  )
}