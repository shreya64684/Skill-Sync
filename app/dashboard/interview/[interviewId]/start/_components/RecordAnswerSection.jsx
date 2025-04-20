
// 'use client'
// import React, { useState, useEffect } from 'react';
// import Webcam from 'react-webcam';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import useSpeechToText from 'react-hook-speech-to-text';
// import { Mic, RotateCcw } from 'lucide-react';
// import { toast } from 'sonner';
// import { chatSession } from '@/utils/GeminiAiModel';
// import { UserAnswer } from '@/utils/schema';
// import { db } from '@/utils/db';
// import { useUser } from '@clerk/nextjs';
// import moment from 'moment';

// const RecordAnswerSection = ({ mockInterviewQuestion, activeQuestionIndex, interviewData }) => {
//     const [userAnswer, setUserAnswer] = useState('');
//     const { user } = useUser();
//     const [loading, setLoading] = useState(false);
//     const [feedback, setFeedback] = useState('');
//     const [rating, setRating] = useState('');
//     const [correctAnswer, setCorrectAnswer] = useState('');
//     const [isRecordingActive, setIsRecordingActive] = useState(false);

//     const {
//         error,
//         isRecording,
//         results,
//         startSpeechToText,
//         stopSpeechToText,
//         setResults,
//     } = useSpeechToText({
//         continuous: true,
//         useLegacyResults: false,
//         autoStart: false,
//     });

//     useEffect(() => {
//         if (results.length > 0) {
//             const recordedText = results.map(result => result.transcript).join(' ');
//             setUserAnswer(recordedText);
//             console.log("✅ User Answer Updated:", recordedText);
//         }
//     }, [results]);

//     const StartStopRecording = () => {
//         if (isRecording) {
//             stopSpeechToText();
//             setIsRecordingActive(false);
//         } else {
//             setUserAnswer('');
//             setResults([]);
//            startSpeechToText();
//            setIsRecordingActive(true);
//         }
//     };

//     const handleNewRecording = async () => {
//         console.log("🔄 New Recording Button Clicked");
    
//         // Stop existing recording first (if any)
//         if (isRecording && typeof stopSpeechToText === 'function') {
//             console.log("⏹ Stopping existing recording...");
//             stopSpeechToText();
//             await new Promise(resolve => setTimeout(resolve, 500)); // Add small delay
//         }
    
//         // Reset state for fresh recording
//         setUserAnswer('');
//         setResults([]);
//         setFeedback('');
//         setRating('');
//         setCorrectAnswer('');
//         setIsRecordingActive(false);

//          // Start a new recording
//     console.log("🎙 Starting new recording...");
//     if (typeof startSpeechToText === 'function') {
//         startSpeechToText();
//         setIsRecordingActive(true);
//     }

//         // Add this check
//     if (typeof stopSpeechToText === 'function' && isRecording) {
//         stopSpeechToText();
//     }
    
//     console.log("🔄 Reset State for New Question");
    
//         // // Start a new recording
//         // console.log("🎙 Starting new recording...");
//         // startSpeechToText();
//         // setIsRecordingActive(true);
//     };
    

//     const fetchFeedbackAndCorrectAnswer = async (answer) => {
//         console.log("🚀 Fetching feedback from Gemini with:", answer);
//         setLoading(true);
//         try {
//             if (!answer || answer.trim().length < 10) {
//                 toast.error("Answer too short. Please provide a more detailed response.");
//                 setLoading(false);
//                 return null;
//             }

//             const feedbackPrompt = `
//                 Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}
//                 User Answer: ${answer}
//                 Please provide a short feedback (4-5 lines), a rating (1-10), and a tentative correct answer.
//                 Respond in valid JSON format:
//                 {
//                     "rating": "Your Rating",
//                     "feedback": "Your feedback in 4-5 lines",
//                     "correctAnswer": "A short, near-correct answer"
//                 }
//             `;

//             const result = await chatSession.sendMessage(feedbackPrompt);
//             const rawText = await result.response.text();
//             console.log("🛠 Gemini API Raw Response:", rawText);

//             const jsonMatch = rawText.match(/\{[\s\S]*?\}/);
//             if (!jsonMatch) {
//                 throw new Error("Failed to extract valid JSON from response.");
//             }

//             const parsedResponse = JSON.parse(jsonMatch[0]);

//             setRating(parsedResponse.rating);
//             setFeedback(parsedResponse.feedback);
//             setCorrectAnswer(parsedResponse.correctAnswer);

//             console.log("✅ Feedback Updated:", parsedResponse.feedback);
//             console.log("✅ Rating Updated:", parsedResponse.rating);
//             console.log("✅ Correct Answer Updated:", parsedResponse.correctAnswer);

//             return parsedResponse;
//         } catch (error) {
//             console.error("❌ Error fetching feedback:", error);
//             toast.error("Failed to get feedback. Try again!");
//             return null;
//         } finally {
//             setLoading(false);
//         }
//     };

//     const saveAnswerToDB = async (answer) => {
//         console.log("🔹 saveAnswerToDB Called with:", answer);

//         if (!answer || answer.length < 10) {
//             console.log("❌ Answer too short. Not saving.");
//             toast.error("Answer too short. Please record again!");
//             return;
//         }

//         setLoading(true);
//         // ❗ Log before Gemini API call
//         console.log("🔸 Calling fetchFeedbackAndCorrectAnswer...");

//         const parsedResponse = await fetchFeedbackAndCorrectAnswer(answer);
//         if (!parsedResponse) {
//             console.log("❌ No response from fetchFeedbackAndCorrectAnswer");
//             setLoading(false);
//             return;
//         }

//         console.log("✅ Gemini API Response:", parsedResponse);

//         const dataToSave = {
//             userAns: answer,  // Ensure userAns is set correctly
//             feedback: parsedResponse.feedback,
//             rating: parsedResponse.rating,
//             correctAnswer: parsedResponse.correctAnswer,
//         };
    
//         console.log("🛠 Saving to DB:", dataToSave);

//         try {
//             await db.insert(UserAnswer).values({
//                 mockIdRef: interviewData?.mockId,
//                 question: mockInterviewQuestion[activeQuestionIndex]?.question,
//                 correctAns: parsedResponse.correctAnswer,
//                 userAns: answer,
//                 feedback: parsedResponse.feedback,
//                 rating: parsedResponse.rating,
//                 userEmail: user?.primaryEmailAddress.emailAddress,
//                 createdAt: moment().format('DD-MM-yyyy')
//             });

//             console.log("✅ Data Saved to DB:", {
//                 mockIdRef: interviewData?.mockId,
//                 question: mockInterviewQuestion[activeQuestionIndex]?.question,
//                 correctAns: parsedResponse.correctAnswer,
//                 userAns: answer,
//                 feedback: parsedResponse.feedback,
//                 rating: parsedResponse.rating,
//                 userEmail: user?.primaryEmailAddress.emailAddress,
//                 createdAt: moment().format('DD-MM-yyyy')
//             });

//             toast.success("User Answer recorded successfully!");
//             setUserAnswer('');
//             setResults([]);
//         } catch (error) {
//             console.error("❌ Error saving to database:", error);
//             toast.error("Failed to save answer. Try again!");
//         } finally {
//             setResults([]);
//             setLoading(false);
//         }
//     };

//     // useEffect(() => {
//     //     if (!isRecording) {
//     //         console.log("✅ Recording Stopped. Checking userAnswer...");
//     //         if (userAnswer.length > 10) {
//     //             console.log("🛠 Calling saveAnswerToDB:", userAnswer);
//     //             console.log("🛠 Final Object Sent to DB:", {
//     //                 userAns: userAnswer,  // Check if this is null here
//     //                 feedback,
//     //                 rating,
//     //                 correctAnswer,
//     //             });                
//     //             saveAnswerToDB(userAnswer);
//     //         }
//     //     }
//     // }, [isRecording]);


//     // FIXED: Modified the dependency array and added a ref to track initial mount
//     const initialMountRef = React.useRef(true);

//      // Reset states when moving to next question
//      useEffect(() => {
//         // Skip the effect on initial mount
//         if (initialMountRef.current) {
//             initialMountRef.current = false;
//             return;
//         }

//         setUserAnswer('');
//         setResults([]);
//         setFeedback('');
//         setRating('');
//         setCorrectAnswer('');
//         setIsRecordingActive(false);
//         // stopSpeechToText();
//         // Fix: Check if stopSpeechToText is available before calling it
//         if (isRecording && typeof stopSpeechToText === 'function') {
//             stopSpeechToText();
//         }
//         console.log("🔄 Reset State for New Question");
//     }, [activeQuestionIndex]);

//     const handleSaveAndNext = async () => {
//         if (!userAnswer || userAnswer.trim().length < 10) {
//             toast.error("Answer too short. Please record a complete response.");
//             return;
//         }
    
//         setLoading(true);
//         console.log("🔹 Saving answer before moving to next...");
    
//         const success = await saveAnswerToDB(userAnswer);
//         if (success) {
//             toast.success("Answer saved! Moving to next question...");
//             // Move to next question
//             if (activeQuestionIndex < mockInterviewQuestion.length - 1) {
//                 setActiveQuestionIndex(prev => prev + 1);
//             } else {
//                 toast.success("You've completed the interview!");
//             }
//         }
    
//         setLoading(false);
//     };
    
    
    

//     return (
//         // <div className='flex justify-center items-center flex-col'>
//         //     <div className='flex flex-col justify-center items-center rounded-lg p-5 mt-0 bg-black'>
//         //         <Image src={'/webcam.png'} width={200} height={100} className='absolute' alt='webcam' />
//         //         <Webcam mirrored={true} style={{ height: 200, width: '100%', zIndex: 10 }} />
//         //     </div>

//         //     <Button
//         //         disabled={loading}
//         //         variant='outline'
//         //         className={`mt-5 flex items-center ${isRecording ? 'bg-red-600 text-white' : 'bg-gray-300 text-black'}`}
//         //         onClick={StartStopRecording}>
//         //         {isRecording ? <h2 className='flex items-center gap-2'><Mic /><span>Recording...</span></h2> : 'Record Answer'}
//         //     </Button>

//         //     {/* <Button onClick={() => console.log("🛠 Current User Answer in State:", userAnswer)}>Show User Answer</Button> */}

//         //     <Button
//         //         disabled={loading}
//         //         variant='outline'
//         //         className='mt-3 bg-blue-500 text-white flex items-center'
//         //         onClick={handleNewRecording}>
//         //         <RotateCcw className="mr-2" /> New Recording
//         //     </Button>


//         //     <p className="mt-2 p-2 bg-gray-200 text-black rounded-md w-3/4 text-center">
//         //         {userAnswer.trim() || 'No speech recorded yet'}
//         //     </p>

//         //     {feedback && (
//         //         <div className="mt-4 p-3 bg-green-100 rounded-md text-black w-3/4">
//         //             <p><strong>Feedback:</strong> {feedback}</p>
//         //             <p><strong>Rating:</strong> {rating}/10</p>
//         //             <p><strong>Correct Answer:</strong> {correctAnswer}</p>
//         //         </div>
//         //     )}
            

//         //     <Button
//         //         disabled={loading}
//         //         variant='outline'
//         //         className='mt-3 bg-green-500 text-white flex items-center'
//         //         onClick={handleSaveAndNext}>
//         //         Save & Next
//         //     </Button>

//         //     {error && <p className="text-red-500 mt-4">{error}</p>}
//         // </div>

//         <>
        
//         <div className='flex flex-col items-center justify-center w-full'>
    
//     {/* Webcam Container with Glassmorphism */}
//     <div className='flex flex-col justify-center items-center rounded-2xl p-5 bg-white/20 backdrop-blur-lg shadow-lg w-[90%] md:w-[50%] relative'>
//         <Image src={'/webcam.png'} width={100} height={100} className='absolute' alt='webcam' />
//         <Webcam mirrored={true} style={{ height: 200, width: '100%', zIndex: 10 }} />
//     </div>

//     {/* Button Container */}
//     <div className="flex gap-4 mt-5">
//         {/* Record Answer Button */}
//         <Button
//             disabled={loading}
//             variant='outline'
//             className={`px-6 py-3 rounded-xl flex items-center transition-all duration-300
//                         ${isRecording ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
//             onClick={StartStopRecording}>
//             {isRecording ? <h2 className='flex items-center gap-2'><Mic /><span>Recording...</span></h2> : 'Record Answer'}
//         </Button>

//         {/* New Recording Button */}
//         <Button
//             disabled={loading}
//             variant='outline'
//             className='px-6 py-3 rounded-xl bg-blue-500 text-white flex items-center shadow-lg hover:bg-blue-600 transition-all duration-300'
//             onClick={handleNewRecording}>
//             <RotateCcw className="mr-2" /> New Recording
//         </Button>
//     </div>

//     {/* Answer Display */}
//     <p className="mt-4 p-3 rounded-xl bg-gray-200 text-black w-[80%] md:w-[60%] text-center shadow-md">
//         {userAnswer.trim() || 'No speech recorded yet'}
//     </p>

//     {/* Feedback Section */}
//     {feedback && (
//         <div className="mt-4 p-4 bg-green-100 rounded-xl text-black  shadow-md">
//             <p><strong>Feedback:</strong> {feedback}</p>
//             <p><strong>Rating:</strong> {rating}/10</p>
//             <p><strong>Correct Answer:</strong> {correctAnswer}</p>
//         </div>
//     )}

//     {/* Save & Next Button */}
//     <Button
//         disabled={loading}
//         variant='outline'
//         className='mt-5 px-6 py-3 rounded-xl bg-green-500 text-white flex items-center shadow-lg hover:bg-green-600 transition-all duration-300'
//         onClick={handleSaveAndNext}>
//         Save your Answer
//     </Button>

//     {/* Error Message */}
//     {error && <p className="text-red-500 mt-4">{error}</p>}
// </div>


//         </>
//     );
// };

// export default RecordAnswerSection;



// claude ui
'use client'
import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAiModel';
import { UserAnswer } from '@/utils/schema';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import ExpressionAnalyzer from "./ExpressionAnalyzer";
import SuggestionSnackbar from './SuggestionSnackbar';


const RecordAnswerSection = ({ mockInterviewQuestion, activeQuestionIndex, interviewData }) => {
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [emotion, setEmotion] = useState('');

    const [userAnswer, setUserAnswer] = useState('');
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [isRecordingActive, setIsRecordingActive] = useState(false);
   

    // All your existing logic remains unchanged
    const {
        error,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false,
        autoStart: false,
    });

    useEffect(() => {
        if (results.length > 0) {
            const recordedText = results.map(result => result.transcript).join(' ');
            setUserAnswer(recordedText);
            console.log("✅ User Answer Updated:", recordedText);
        }
    }, [results]);

    const StartStopRecording = () => {
        if (isRecording) {
            stopSpeechToText();
            setIsRecordingActive(false);
        } else {
            setUserAnswer('');
            setResults([]);
           startSpeechToText();
           setIsRecordingActive(true);
        }
    };

    const handleNewRecording = async () => {
        console.log("🔄 New Recording Button Clicked");
    
        if (isRecording && typeof stopSpeechToText === 'function') {
            console.log("⏹ Stopping existing recording...");
            stopSpeechToText();
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    
        setUserAnswer('');
        setResults([]);
        setFeedback('');
        setRating('');
        setCorrectAnswer('');
        setIsRecordingActive(false);

         if (typeof startSpeechToText === 'function') {
            startSpeechToText();
            setIsRecordingActive(true);
        }

        if (typeof stopSpeechToText === 'function' && isRecording) {
            stopSpeechToText();
        }
    };

    const fetchFeedbackAndCorrectAnswer = async (answer) => {
        // Your existing logic here
        console.log("🚀 Fetching feedback from Gemini with:", answer);
        setLoading(true);
        try {
            if (!answer || answer.trim().length < 10) {
                toast.error("Answer too short. Please provide a more detailed response.");
                setLoading(false);
                return null;
            }

            const feedbackPrompt = `
                Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}
                User Answer: ${answer}
                Please provide a short feedback (4-5 lines), a rating (1-10), and a tentative correct answer.
                Respond in valid JSON format:
                {
                    "rating": "Your Rating",
                    "feedback": "Your feedback in 4-5 lines",
                    "correctAnswer": "A short, near-correct answer"
                }
            `;

            const result = await chatSession.sendMessage(feedbackPrompt);
            const rawText = await result.response.text();
            console.log("🛠 Gemini API Raw Response:", rawText);

            const jsonMatch = rawText.match(/\{[\s\S]*?\}/);
            if (!jsonMatch) {
                throw new Error("Failed to extract valid JSON from response.");
            }

            const parsedResponse = JSON.parse(jsonMatch[0]);

            setRating(parsedResponse.rating);
            setFeedback(parsedResponse.feedback);
            setCorrectAnswer(parsedResponse.correctAnswer);

            console.log("✅ Feedback Updated:", parsedResponse.feedback);
            console.log("✅ Rating Updated:", parsedResponse.rating);
            console.log("✅ Correct Answer Updated:", parsedResponse.correctAnswer);

            return parsedResponse;
        } catch (error) {
            console.error("❌ Error fetching feedback:", error);
            toast.error("Failed to get feedback. Try again!");
            return null;
        } finally {
            setLoading(false);
        }
    };

    const saveAnswerToDB = async (answer) => {
        // Your existing logic here
        console.log("🔹 saveAnswerToDB Called with:", answer);

        if (!answer || answer.length < 10) {
            console.log("❌ Answer too short. Not saving.");
            toast.error("Answer too short. Please record again!");
            return;
        }

        setLoading(true);
        console.log("🔸 Calling fetchFeedbackAndCorrectAnswer...");

        const parsedResponse = await fetchFeedbackAndCorrectAnswer(answer);
        if (!parsedResponse) {
            console.log("❌ No response from fetchFeedbackAndCorrectAnswer");
            setLoading(false);
            return;
        }

        console.log("✅ Gemini API Response:", parsedResponse);

        const dataToSave = {
            userAns: answer,
            feedback: parsedResponse.feedback,
            rating: parsedResponse.rating,
            correctAnswer: parsedResponse.correctAnswer,
        };
    
        console.log("🛠 Saving to DB:", dataToSave);

        try {
            await db.insert(UserAnswer).values({
                mockIdRef: interviewData?.mockId,
                question: mockInterviewQuestion[activeQuestionIndex]?.question,
                correctAns: parsedResponse.correctAnswer,
                userAns: answer,
                feedback: parsedResponse.feedback,
                rating: parsedResponse.rating,
                userEmail: user?.primaryEmailAddress.emailAddress,
                createdAt: moment().format('DD-MM-yyyy')
            });

            console.log("✅ Data Saved to DB:", {
                mockIdRef: interviewData?.mockId,
                question: mockInterviewQuestion[activeQuestionIndex]?.question,
                correctAns: parsedResponse.correctAnswer,
                userAns: answer,
                feedback: parsedResponse.feedback,
                rating: parsedResponse.rating,
                userEmail: user?.primaryEmailAddress.emailAddress,
                createdAt: moment().format('DD-MM-yyyy')
            });

            toast.success("User Answer recorded successfully!");
            setUserAnswer('');
            setResults([]);
        } catch (error) {
            console.error("❌ Error saving to database:", error);
            toast.error("Failed to save answer. Try again!");
        } finally {
            setResults([]);
            setLoading(false);
        }
    };

    const initialMountRef = React.useRef(true);

    useEffect(() => {
        if (initialMountRef.current) {
            initialMountRef.current = false;
            return;
        }

        setUserAnswer('');
        setResults([]);
        setFeedback('');
        setRating('');
        setCorrectAnswer('');
        setIsRecordingActive(false);
        
        if (isRecording && typeof stopSpeechToText === 'function') {
            stopSpeechToText();
        }
        console.log("🔄 Reset State for New Question");
    }, [activeQuestionIndex]);

    const handleSaveAndNext = async () => {
        if (!userAnswer || userAnswer.trim().length < 10) {
            toast.error("Answer too short. Please record a complete response.");
            return;
        }
    
        setLoading(true);
        console.log("🔹 Saving answer before moving to next...");
    
        const success = await saveAnswerToDB(userAnswer);
        if (success) {
            toast.success("Answer saved! Moving to next question...");
            if (activeQuestionIndex < mockInterviewQuestion.length - 1) {
                setActiveQuestionIndex(prev => prev + 1);
            } else {
                toast.success("You've completed the interview!");
            }
        }
    
        setLoading(false);
    };

    useEffect(() => {
        if (emotion) {
          setShowSuggestion(true);
          const timer = setTimeout(() => setShowSuggestion(false), 3000); // show 3s
          return () => clearTimeout(timer);
        }
      }, [emotion]);

    return (
        <div className='p-3 sm:p-4 h-full flex flex-col items-center'>
            {/* Webcam Container */}
            <div className='relative w-full max-w-xs sm:max-w-sm rounded-lg overflow-hidden mb-3 sm:mb-4'>
                <Image 
                    src={'/webcam.png'} 
                    width={80} 
                    height={80} 
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-60' 
                    alt='webcam' 
                />
                {/* <Webcam 
                    ref={webcamRef}
                    audio={false}
                    mirrored={true} 
                    videoConstraints={{ facingMode: 'user' }}
                    style={{ width: '100%', height: 'auto', aspectRatio: '16/9', zIndex: 10 }} 
                    className="rounded-lg border border-white/50"
                />
              
                <ExpressionAnalyzer
                    videoRef={webcamRef}
                    onExpressionsDetected={handleExpressionsDetected}
                />
                <p className="mt-2 text-gray-700 text-sm">
                    Real-time Expression: {emotion || 'Detecting...'}
                </p> */}
                

                <ExpressionAnalyzer onEmotionChange={setEmotion}/>
                
                {showSuggestion && <SuggestionSnackbar emotion={emotion} />}
                <div className="mt-4 text-center">
                    <p className="text-lg font-medium">
                    Current Emotion: <span className="text-blue-600">{emotion}</span>
                    </p>
                </div>
            </div>

            {/* Control Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full mb-3">
                <Button
                    disabled={loading}
                    variant='outline'
                    className={`text-xs sm:text-sm py-1 px-2 sm:px-3 rounded-lg flex items-center transition-all duration-300
                                ${isRecording ? 
                                'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md' : 
                                'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400'}`}
                    onClick={StartStopRecording}>
                    {isRecording ? 
                        <span className='flex items-center gap-1'><Mic size={16} /><span>Recording...</span></span> : 
                        <span className='flex items-center gap-1'><Mic size={16} /><span>Record</span></span>}
                </Button>

                <Button
                    disabled={loading}
                    variant='outline'
                    className='text-xs sm:text-sm py-1 px-2 sm:px-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-400 hover:to-blue-500 flex items-center shadow-md transition-all duration-300'
                    onClick={handleNewRecording}>
                    <RotateCcw size={16} className="mr-1" /> <span>New</span>
                </Button>
            </div>

            {/* Answer Display */}
            <div className="w-full p-2 sm:p-3 rounded-lg bg-white/40 backdrop-blur-sm text-gray-800 text-xs sm:text-sm min-h-[60px] mb-3 border border-white/50 shadow-md">
                {userAnswer.trim() || 'No speech recorded yet'}
            </div>

            {/* Feedback Section */}
            {feedback && (
                <div className="w-full p-2 sm:p-3 bg-green-100/80 backdrop-blur-sm rounded-lg text-gray-800 text-xs sm:text-sm mb-3 border border-green-200 shadow-md">
                    <p><strong>Feedback:</strong> {feedback}</p>
                    <p><strong>Rating:</strong> {rating}/10</p>
                    <p><strong>Correct Answer:</strong> {correctAnswer}</p>
                </div>
            )}

            {/* Save Button */}
            <Button
                disabled={loading}
                variant='outline'
                className='text-xs sm:text-sm py-1 px-3 sm:px-4 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-400 hover:to-green-500 transition-all mt-auto shadow-md'
                onClick={handleSaveAndNext}>
                Save your Answer
            </Button>

            {/* Error Message */}
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
        </div>
    );
};

export default RecordAnswerSection;