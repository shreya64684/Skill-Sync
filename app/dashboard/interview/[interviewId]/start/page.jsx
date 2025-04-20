
// // 'use client'
// // import React, { useEffect, useState } from 'react';
// // import { db } from '@/utils/db';
// // import { MockInterview } from '@/utils/schema';
// // import { eq } from 'drizzle-orm';
// // import { useParams } from 'next/navigation';
// // import QuestionsSection from './_components/QuestionsSection';
// // import RecordAnswerSection from './_components/RecordAnswerSection';
// // import { Button } from '@/components/ui/button';
// // import Link from 'next/link';

// // const StartInterview = () => {
// //     const params = useParams();
// //     const [interviewData, setInterviewData] = useState(null);
// //     const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
// //     const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

// //     useEffect(() => {
// //         if (params?.interviewId) {
// //             GetInterviewDetails();
// //         }
// //     }, [params]);

// //     const cleanJSON = (jsonString) => {
// //         try {
// //             // Remove trailing commas before ] or }
// //             return jsonString
// //                 .replace(/,\s*]/g, "]") // Fix trailing commas before array closing
// //                 .replace(/,\s*}/g, "}"); // Fix trailing commas before object closing
// //         } catch (error) {
// //             console.error("Error cleaning JSON:", error);
// //             return null;
// //         }
// //     };

// //     const GetInterviewDetails = async () => {
// //         if (!params?.interviewId) return;

// //         try {
// //             const result = await db
// //                 .select()
// //                 .from(MockInterview)
// //                 .where(eq(MockInterview.mockId, params.interviewId));

// //             if (result.length === 0) {
// //                 console.error("No interview found for the given ID.");
// //                 return;
// //             }

// //             let jsonMockResp = result[0]?.jsonMockResp;
// //             if (!jsonMockResp) {
// //                 console.error("Empty JSON response.");
// //                 return;
// //             }

// //             // Clean the JSON string
// //             let cleanedJson = cleanJSON(jsonMockResp);

// //             let parsedQuestions;
// //             try {
// //                 parsedQuestions = JSON.parse(cleanedJson);

// //                 if (!Array.isArray(parsedQuestions)) {
// //                     console.error("Invalid JSON format: Expected an array.");
// //                     return;
// //                 }
// //             } catch (error) {
// //                 console.error("Error parsing JSON:", error.message);
// //                 return;
// //             }

// //             setMockInterviewQuestion(parsedQuestions);
// //             setInterviewData(result[0]);
// //         } catch (error) {
// //             console.error("Database query error:", error);
// //         }
// //     };

// //     return (
// //         <div>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
// //                 {/* Left - Questions Section */}
// //                 <QuestionsSection
// //                     mockInterviewQuestion={mockInterviewQuestion}
// //                     activeQuestionIndex={activeQuestionIndex}
// //                 />

// //                 {/* Right - Answer Recording Section */}
// //                 <RecordAnswerSection
// //                     mockInterviewQuestion={mockInterviewQuestion}
// //                     activeQuestionIndex={activeQuestionIndex}
// //                     interviewData={interviewData}
// //                 />
// //             </div>

// //             {/* Navigation Buttons */}
// //             <div className="flex justify-end gap-6 mt-5">
// //                 {activeQuestionIndex > 0 && (
// //                     <Button
// //                         className="bg-purple-800 text-white hover:bg-purple-500 hover:font-bold hover:scale-105 hover:shadow-md transition-all cursor-pointer"
// //                         onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
// //                     >
// //                         Previous Question
// //                     </Button>
// //                 )}

// //                 {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
// //                     <Button
// //                         className="bg-purple-800 text-white hover:bg-purple-500 hover:font-bold hover:scale-105 hover:shadow-md transition-all cursor-pointer"
// //                         onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
// //                     >
// //                         Next Question
// //                     </Button>
// //                 )}

// //                 {activeQuestionIndex === mockInterviewQuestion?.length - 1 && interviewData?.mockId && (
// //                     <Link href={`/dashboard/interview/${interviewData.mockId}/feedback`}>
// //                         <Button className="bg-purple-800 text-white">End Interview</Button>
// //                     </Link>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default StartInterview;



// // new1

// // 'use client'
// // import React, { useEffect, useState } from 'react';
// // import { db } from '@/utils/db';
// // import { MockInterview } from '@/utils/schema';
// // import { eq } from 'drizzle-orm';
// // import { useParams } from 'next/navigation';
// // import QuestionsSection from './_components/QuestionsSection';
// // import RecordAnswerSection from './_components/RecordAnswerSection';
// // import { Button } from '@/components/ui/button';
// // import Link from 'next/link';

// // const StartInterview = () => {
// //     const params = useParams();
// //     const [interviewData, setInterviewData] = useState(null);
// //     const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
// //     const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

// //     useEffect(() => {
// //         if (params?.interviewId) {
// //             GetInterviewDetails();
// //         }
// //     }, [params]);

// //     const cleanJSON = (jsonString) => {
// //         try {
// //             return jsonString
// //                 .replace(/,\s*]/g, "]")
// //                 .replace(/,\s*}/g, "}");
// //         } catch (error) {
// //             console.error("Error cleaning JSON:", error);
// //             return null;
// //         }
// //     };

// //     const GetInterviewDetails = async () => {
// //         if (!params?.interviewId) return;

// //         try {
// //             const result = await db
// //                 .select()
// //                 .from(MockInterview)
// //                 .where(eq(MockInterview.mockId, params.interviewId));

// //             if (result.length === 0) {
// //                 console.error("No interview found for the given ID.");
// //                 return;
// //             }

// //             let jsonMockResp = result[0]?.jsonMockResp;
// //             if (!jsonMockResp) {
// //                 console.error("Empty JSON response.");
// //                 return;
// //             }

// //             let cleanedJson = cleanJSON(jsonMockResp);

// //             let parsedQuestions;
// //             try {
// //                 parsedQuestions = JSON.parse(cleanedJson);

// //                 if (!Array.isArray(parsedQuestions)) {
// //                     console.error("Invalid JSON format: Expected an array.");
// //                     return;
// //                 }
// //             } catch (error) {
// //                 console.error("Error parsing JSON:", error.message);
// //                 return;
// //             }

// //             setMockInterviewQuestion(parsedQuestions);
// //             setInterviewData(result[0]);
// //         } catch (error) {
// //             console.error("Database query error:", error);
// //         }
// //     };

// //     return (
// //         <div className="glassmorphism-container p-6 rounded-lg shadow-lg">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 <QuestionsSection
// //                     mockInterviewQuestion={mockInterviewQuestion}
// //                     activeQuestionIndex={activeQuestionIndex}
// //                 />

// //                 <RecordAnswerSection
// //                     mockInterviewQuestion={mockInterviewQuestion}
// //                     activeQuestionIndex={activeQuestionIndex}
// //                     interviewData={interviewData}
// //                 />
// //             </div>

// //             <div className="flex justify-end gap-4 mt-4">
// //                 {activeQuestionIndex > 0 && (
// //                     <Button
// //                         className="bg-purple-800 text-white hover:bg-purple-500 hover:font-bold hover:scale-105 hover:shadow-md transition-all cursor-pointer"
// //                         onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
// //                     >
// //                         Previous Question
// //                     </Button>
// //                 )}

// //                 {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
// //                     <Button
// //                         className="bg-purple-800 text-white hover:bg-purple-500 hover:font-bold hover:scale-105 hover:shadow-md transition-all cursor-pointer"
// //                         onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
// //                     >
// //                         Next Question
// //                     </Button>
// //                 )}

// //                 {activeQuestionIndex === mockInterviewQuestion?.length - 1 && interviewData?.mockId && (
// //                     <Link href={`/dashboard/interview/${interviewData.mockId}/feedback`}>
// //                         <Button className="bg-purple-800 text-white">End Interview</Button>
// //                     </Link>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default StartInterview;


// // new 2

// 'use client'
// import React, { useEffect, useState } from 'react';
// import { db } from '@/utils/db';
// import { MockInterview } from '@/utils/schema';
// import { eq } from 'drizzle-orm';
// import { useParams } from 'next/navigation';
// import QuestionsSection from './_components/QuestionsSection';
// import RecordAnswerSection from './_components/RecordAnswerSection';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// const StartInterview = () => {
//     const params = useParams();
//     const [interviewData, setInterviewData] = useState(null);
//     const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
//     const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

//     useEffect(() => {
//         if (params?.interviewId) {
//             GetInterviewDetails();
//         }
//     }, [params]);

//     const cleanJSON = (jsonString) => {
//         try {
//             return jsonString
//                 .replace(/,\s*]/g, "]") 
//                 .replace(/,\s*}/g, "}"); 
//         } catch (error) {
//             console.error("Error cleaning JSON:", error);
//             return null;
//         }
//     };

//     const GetInterviewDetails = async () => {
//         if (!params?.interviewId) return;

//         try {
//             const result = await db
//                 .select()
//                 .from(MockInterview)
//                 .where(eq(MockInterview.mockId, params.interviewId));

//             if (result.length === 0) {
//                 console.error("No interview found for the given ID.");
//                 return;
//             }

//             let jsonMockResp = result[0]?.jsonMockResp;
//             if (!jsonMockResp) {
//                 console.error("Empty JSON response.");
//                 return;
//             }

//             let cleanedJson = cleanJSON(jsonMockResp);

//             let parsedQuestions;
//             try {
//                 parsedQuestions = JSON.parse(cleanedJson);

//                 if (!Array.isArray(parsedQuestions)) {
//                     console.error("Invalid JSON format: Expected an array.");
//                     return;
//                 }
//             } catch (error) {
//                 console.error("Error parsing JSON:", error.message);
//                 return;
//             }

//             setMockInterviewQuestion(parsedQuestions);
//             setInterviewData(result[0]);
//         } catch (error) {
//             console.error("Database query error:", error);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-purple-300 p-6">
//             <div className="glassmorphism-effect p-8 w-full mx-auto rounded-3xl shadow-2xl">
//                 {/* Page Title */}
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
//                     🎤 Mock Interview Session
//                 </h2>

//                 <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//                     {/* Left - Questions Section */}
//                     <div className="w-full md:w-[48%] p-6 rounded-3xl bg-white/20 backdrop-blur-lg shadow-lg">
//                         <QuestionsSection
//                             mockInterviewQuestion={mockInterviewQuestion}
//                             activeQuestionIndex={activeQuestionIndex}
//                         />
//                     </div>

//                     {/* Right - Answer Recording Section */}
//                     <div className="w-full md:w-[48%] p-6 rounded-3xl bg-white/20 backdrop-blur-lg shadow-lg">
//                         <RecordAnswerSection
//                             mockInterviewQuestion={mockInterviewQuestion}
//                             activeQuestionIndex={activeQuestionIndex}
//                             interviewData={interviewData}
//                         />
//                     </div>
//                 </div>

//                 {/* Navigation Buttons */}
//                 <div className="flex justify-center md:justify-end gap-6 mt-6">
//                     {activeQuestionIndex > 0 && (
//                         <Button
//                             className="bg-purple-800 text-white hover:bg-purple-600 hover:scale-105 transition-all px-6 py-3 rounded-xl"
//                             onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
//                         >
//                             ⬅ Previous Question
//                         </Button>
//                     )}

//                     {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
//                         <Button
//                             className="bg-purple-800 text-white hover:bg-purple-600 hover:scale-105 transition-all px-6 py-3 rounded-xl"
//                             onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
//                         >
//                             Next Question ➡
//                         </Button>
//                     )}

//                     {activeQuestionIndex === mockInterviewQuestion?.length - 1 && interviewData?.mockId && (
//                         <Link href={`/dashboard/interview/${interviewData.mockId}/feedback`}>
//                             <Button className="bg-purple-800 text-white hover:bg-purple-600 hover:scale-105 transition-all px-6 py-3 rounded-xl">
//                                 🎯 End Interview
//                             </Button>
//                         </Link>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StartInterview;



'use client'
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { useParams } from 'next/navigation';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const StartInterview = () => {
    const params = useParams();
    const [interviewData, setInterviewData] = useState(null);
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    useEffect(() => {
        if (params?.interviewId) {
            GetInterviewDetails();
        }
        
        // Add this to close sidebar when component mounts
        const sidebarToggle = document.querySelector('[data-sidebar-toggle]');
        if (sidebarToggle && window.innerWidth < 1024) {
            sidebarToggle.click();
        }
    }, [params]);

    const cleanJSON = (jsonString) => {
        try {
            return jsonString
                .replace(/,\s*]/g, "]") 
                .replace(/,\s*}/g, "}"); 
        } catch (error) {
            console.error("Error cleaning JSON:", error);
            return null;
        }
    };

    const GetInterviewDetails = async () => {
        if (!params?.interviewId) return;

        try {
            const result = await db
                .select()
                .from(MockInterview)
                .where(eq(MockInterview.mockId, params.interviewId));

            if (result.length === 0) {
                console.error("No interview found for the given ID.");
                return;
            }

            let jsonMockResp = result[0]?.jsonMockResp;
            console.log("Raw jsonMockResp:", jsonMockResp);
            if (!jsonMockResp) {
                console.error("Empty JSON response.");
                return;
            }

            let cleanedJson = cleanJSON(jsonMockResp);
            console.log("cleanedJson: ", cleanedJson)

            let parsedQuestions;
            try {
                parsedQuestions = JSON.parse(cleanedJson);
                console.log("parsedQuestions: ", parsedQuestions)

                if (!Array.isArray(parsedQuestions)) {
                    console.error("Invalid JSON format: Expected an array.");
                    return;
                }
            } catch (error) {
                console.error("Error parsing JSON:", error.message);
                return;
            }
            console.log("parsedQuestions: ", parsedQuestions)

            setMockInterviewQuestion(parsedQuestions);
            setInterviewData(result[0]);
        } catch (error) {
            console.error("Database query error:", error);
        }
    };

    return (
        <div className="w-full min-h-screen p-4 sm:p-6 max-w-7xl mx-auto bg-gradient-to-br from-purple-300 via-blue-300 to-pink-300">
            {/* Page Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-white drop-shadow-lg">
                🎤 Mock Interview Session
            </h2>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                {/* Left - Questions Section */}
                <div className="w-full lg:w-1/2 rounded-xl bg-white/20 backdrop-blur-md shadow-xl border border-white/30">
                    <QuestionsSection
                        mockInterviewQuestion={mockInterviewQuestion}
                        activeQuestionIndex={activeQuestionIndex}
                    />
                </div>

                {/* Right - Answer Recording Section */}
                <div className="w-full lg:w-1/2 rounded-xl bg-white/20 backdrop-blur-md shadow-xl border border-white/30">
                    <RecordAnswerSection
                        mockInterviewQuestion={mockInterviewQuestion}
                        activeQuestionIndex={activeQuestionIndex}
                        interviewData={interviewData}
                    />
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center sm:justify-end gap-3 sm:gap-4 mt-6">
                {activeQuestionIndex > 0 && (
                    <Button
                        className="px-3 py-2 sm:px-4 bg-gradient-to-r from-purple-700 to-indigo-700 text-white hover:from-purple-600 hover:to-indigo-600 transition-all rounded-lg text-sm sm:text-base shadow-lg hover:shadow-xl"
                        onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
                    >
                        ⬅ Previous
                    </Button>
                )}

                {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
                    <Button
                        className="px-3 py-2 sm:px-4 bg-gradient-to-r from-purple-700 to-indigo-700 text-white hover:from-purple-600 hover:to-indigo-600 transition-all rounded-lg text-sm sm:text-base shadow-lg hover:shadow-xl"
                        onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
                    >
                        Next ➡
                    </Button>
                )}

                {activeQuestionIndex === mockInterviewQuestion?.length - 1 && interviewData?.mockId && (
                    <Link href={`/dashboard/interview/${interviewData.mockId}/feedback`}>
                        <Button className="px-3 py-2 sm:px-4 bg-gradient-to-r from-purple-700 to-indigo-700 text-white hover:from-purple-600 hover:to-indigo-600 transition-all rounded-lg text-sm sm:text-base shadow-lg hover:shadow-xl">
                            🎯 End Interview
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default StartInterview;