// // import { Lightbulb, Volume2 } from 'lucide-react';
// // import React from 'react'

// // const QuestionsSection = ({mockInterviewQuestion, activeQuestionIndex}) => {

// //     const textToSpeech = (text) =>{
// //       if('speechSynthesis' in window){
// //         const speech = new SpeechSynthesisUtterance(text);
// //         window.speechSynthesis.speak(speech)
// //       }
// //       else{
// //         alert('Sorry, your Browser does not support Text to Speech')
// //       }
// //     }

  
// //   return mockInterviewQuestion && (
// //     <div className='p-5 border rounded-lg my-10'>
// //         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
// //             {/* {mockInterviewQuestion && mockInterviewQuestion.map((question, index) => {
// //                  <h2 className='p-2 bg-secondary rounded-full'>Question #{index+1}</h2>
// //              })} */}


// //             {mockInterviewQuestion && mockInterviewQuestion.map((question, index) => {
// //                  return ( // Added return statement here
// //                     // <h2 key={index} className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer
// //                     // ${activeQuestionIndex===index ? 'bg-purple-800 text-white' : ''}`}>
// //                     //   Question #{index + 1}
// //                     // </h2>

// //                     <h2 
// //                     key={index} 
// //                     className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer transition-all duration-300 
// //                     ${activeQuestionIndex === index ? 'bg-purple-800 text-white' : 'bg-secondary text-black'}`}
// //                   >
// //                     Question #{index + 1}
// //                   </h2>

// //                   );
// //              })}
// //         </div>

// //         <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
// //         <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)} />

// //         <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
// //             <h2 className='flex gap-2 items-center text-blue-700'>
// //                 <Lightbulb />
// //                 <strong>Note : </strong>
// //             </h2>
// //             <h2 className='text-sm text-blue-700 my-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum porro in saepe optio! Recusandae iure, quisquam sint cumque quae tempore porro debitis minima obcaecati ratione maxime ipsum exercitationem itaque natus praesentium ullam.</h2>
// //         </div>
      
// //     </div>
// //   )
// // }

// // export default QuestionsSection


// import { Lightbulb, Volume2 } from 'lucide-react';
// import React from 'react';

// const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
//   const textToSpeech = (text) => {
//     if ('speechSynthesis' in window) {
//       const speech = new SpeechSynthesisUtterance(text);
//       window.speechSynthesis.speak(speech);
//     } else {
//       alert('Sorry, your Browser does not support Text to Speech');
//     }
//   };

//   return (
//     mockInterviewQuestion && (
//       <div className='p-5 rounded-xl bg-white/20 backdrop-blur-lg shadow-lg  mx-auto'>
        
//         {/* Questions Navigation */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//           {mockInterviewQuestion.map((question, index) => (
//             <h2
//               key={index}
//               className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer transition-all duration-300 
//                           ${
//                             activeQuestionIndex === index
//                               ? 'bg-purple-800 text-white'  // Keeping existing purple button styling
//                               : 'bg-gray-300 text-black hover:bg-gray-400'
//                           }`}
//             >
//               Question #{index + 1}
//             </h2>
//           ))}
//         </div>


//         {/* Active Question Display */}
//         <div className='flex justify-between items-end mt-6 bg-white/20 backdrop-blur-lg p-4 rounded-lg shadow-md'>
//           <h2 className='text-md md:text-lg flex-1 self-end'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
//           <Volume2 
//             size={28} // Adjust size as needed
//             className='cursor-pointer hover:text-blue-500 transition-all duration-300 self-end'
//             onClick={() => textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}
//           />
//         </div>


//         {/* Note Section */}
//         <div className='border rounded-xl p-4 bg-blue-100 mt-8 shadow-md'>
//           <h2 className='flex gap-2 items-center text-blue-700'>
//             <Lightbulb />
//             <strong>Note:</strong>
//           </h2>
//           <h2 className='text-sm text-blue-700 my-2'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum porro in saepe optio! Recusandae iure, quisquam sint cumque quae tempore porro debitis minima obcaecati ratione maxime ipsum exercitationem itaque natus praesentium ullam.
//           </h2>
//         </div>
//       </div>
//     )
//   );
// };

// export default QuestionsSection;


// claude ui
import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react';

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, your Browser does not support Text to Speech');
    }
  };

  return (
    mockInterviewQuestion && (
      <div className='p-3 sm:p-4 h-full flex flex-col'>
        
        {/* Questions Navigation */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3'>
          {mockInterviewQuestion.map((question, index) => (
            <h2
              key={index}
              className={`p-1 sm:p-2 rounded-full text-xs text-center cursor-pointer transition-all duration-300
                          ${
                            activeQuestionIndex === index
                              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                              : 'bg-white/40 hover:bg-white/60 text-gray-800 backdrop-blur-sm'
                          }`}
            >
              Q #{index + 1}
            </h2>
          ))}
        </div>

        {/* Active Question Display */}
        <div className='flex justify-between items-end mt-4 bg-white/40 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-md border border-white/50'>
          <h2 className='text-sm sm:text-base md:text-lg flex-1 mr-2 text-gray-800'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
          <Volume2 
            size={24}
            className='cursor-pointer hover:text-purple-700 transition-all flex-shrink-0'
            onClick={() => textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}
          />
        </div>

        {/* Note Section */}
        <div className='border border-blue-200 rounded-lg p-3 sm:p-4 bg-blue-100/70 backdrop-blur-sm mt-4 sm:mt-auto mb-2 shadow-md'>
          <h2 className='flex gap-2 items-center text-blue-700'>
            <Lightbulb size={16} className="text-blue-600" />
            <strong>Note:</strong>
          </h2>
          <h2 className='text-xs sm:text-sm text-blue-700 mt-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum porro in saepe optio! Recusandae iure, quisquam sint cumque quae tempore.
          </h2>
        </div>
      </div>
    )
  );
};

export default QuestionsSection;