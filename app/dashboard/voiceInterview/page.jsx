// app/voiceInterview/page.jsx

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaMicrophone, FaUser } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';

const VoiceInterview = () => {
  const [isRecruiterSpeaking, setIsRecruiterSpeaking] = useState(false);
  const [isUserSpeaking, setIsUserSpeaking] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [interviewActive, setInterviewActive] = useState(false);
  const [interviewHistory, setInterviewHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Speech recognition reference
  const recognitionRef = useRef(null);
  
  // Initialize speech recognition on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';
        
        recognitionRef.current.onstart = () => {
          console.log("Voice recognition started");
          setIsUserSpeaking(true);
        };
        
        recognitionRef.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          console.log("Recognized:", transcript);
          setUserMessage(transcript);
        };
        
        recognitionRef.current.onend = () => {
          console.log("Voice recognition ended");
          setIsUserSpeaking(false);
          
          // Process the response if we have a message
          if (userMessage && interviewActive) {
            processUserResponse(userMessage);
          }
        };
        
        recognitionRef.current.onerror = (event) => {
          console.error("Recognition error:", event.error);
          setIsUserSpeaking(false);
          
          // Restart recognition on error if interview is active
          if (interviewActive) {
            setTimeout(() => startListening(), 1000);
          }
        };
      } else {
        console.error("Speech recognition not supported in this browser");
      }
    }
    
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          console.log("Clean up error:", e);
        }
      }
    };
  }, []);
  
  // Start listening function that can be called independently
  const startListening = () => {
    if (recognitionRef.current && !isUserSpeaking) {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error("Could not start recognition:", e);
      }
    }
  };
  
  // Listen for userMessage changes to trigger processing
  useEffect(() => {
    if (userMessage && !isUserSpeaking && interviewActive) {
      processUserResponse(userMessage);
    }
  }, [userMessage, isUserSpeaking]);
  
  // Process user's spoken response
  const processUserResponse = async (response) => {
    if (!response || isLoading) return;
    
    setIsLoading(true);
    
    try {
      // Add user's message to history
      const newHistory = [...interviewHistory, { role: 'user', content: response }];
      setInterviewHistory(newHistory);
      setUserMessage(''); // Clear for next input
      
      // Simple mock responses for quick implementation
      const aiResponses = [
        "That's interesting. Could you tell me about a challenging project you worked on?",
        "Great answer! What technical skills do you think are most important for this role?",
        "I see. How do you handle tight deadlines and pressure?",
        "Could you elaborate on your experience with team collaboration?",
        "How do you stay updated with the latest trends in your field?"
      ];
      
      const responseIndex = Math.floor(Math.random() * aiResponses.length);
      const aiResponse = aiResponses[responseIndex];
      
      // Simulate API delay - replace with actual Gemini call
      setTimeout(() => {
        setInterviewHistory([...newHistory, { role: 'assistant', content: aiResponse }]);
        speakMessage(aiResponse);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error processing response:', error);
      setIsLoading(false);
    }
  };
  
  // Speak message using text-to-speech
  const speakMessage = (text) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      
      setIsRecruiterSpeaking(true);
      setCurrentMessage(text);
      
      utterance.onend = () => {
        setIsRecruiterSpeaking(false);
        setTimeout(() => {
          if (interviewActive) {
            startListening();
          }
        }, 500);
      };
      
      window.speechSynthesis.speak(utterance);
    }
  };
  
  // Start the interview process
  const startInterview = () => {
    setInterviewActive(true);
    setInterviewHistory([]);
    
    const initialPrompt = "Hello, I'm your AI interviewer. Please introduce yourself and tell me what position you're interviewing for.";
    setInterviewHistory([{ role: 'assistant', content: initialPrompt }]);
    
    setTimeout(() => {
      speakMessage(initialPrompt);
    }, 500);
  };
  
  // Stop the interview
  const stopInterview = () => {
    if (typeof window !== 'undefined') {
      window.speechSynthesis?.cancel();
    }
    
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (e) {
        console.log("Stop error:", e);
      }
    }
    
    setIsRecruiterSpeaking(false);
    setIsUserSpeaking(false);
    setInterviewActive(false);
  };

  // Manual trigger for listening if automatic detection fails
  const triggerListening = () => {
    if (interviewActive && !isRecruiterSpeaking && !isUserSpeaking) {
      startListening();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">AI Mock Interview</h2>
      
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        {/* Recruiter Avatar */}
        <div className="w-full sm:w-1/5 flex flex-col items-center">
          <div 
            className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100 flex items-center justify-center ${
              isRecruiterSpeaking ? 'ring-4 ring-blue-300 animate-pulse' : ''
            }`}
          >
            <MdComputer className="text-blue-600 text-2xl sm:text-3xl" />
            {isRecruiterSpeaking && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full"></span>
            )}
          </div>
          <p className="mt-2 text-sm font-medium">AI Recruiter</p>
        </div>
        
        {/* Interview Content */}
        <div className="w-full sm:w-3/5 h-60 sm:h-72 p-3 bg-gray-50 rounded-lg overflow-y-auto border border-gray-200">
          {interviewHistory.map((message, index) => (
            <div 
              key={index} 
              className={`p-2 mb-2 rounded ${
                message.role === 'assistant' ? 'bg-blue-50' : 'bg-green-50 ml-4'
              }`}
            >
              <p className="text-sm">
                <strong>{message.role === 'assistant' ? 'Recruiter: ' : 'You: '}</strong>
                {message.content}
              </p>
            </div>
          ))}
          {isLoading && (
            <div className="p-2 mb-2 rounded bg-gray-100">
              <p className="text-gray-500">Processing...</p>
            </div>
          )}
          {isUserSpeaking && (
            <div className="p-2 mb-2 rounded bg-green-100 ml-4 animate-pulse">
              <p className="text-green-600">Listening...</p>
            </div>
          )}
        </div>
        
        {/* User Avatar */}
        <div className="w-full sm:w-1/5 flex flex-col items-center">
          <div 
            className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 flex items-center justify-center ${
              isUserSpeaking ? 'ring-4 ring-green-300 animate-pulse' : ''
            }`}
            onClick={triggerListening}
          >
            <FaUser className="text-green-600 text-2xl sm:text-3xl" />
            {isUserSpeaking && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full"></span>
            )}
          </div>
          <p className="mt-2 text-sm font-medium">You</p>
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex justify-center gap-4">
        {!interviewActive ? (
          <button 
            onClick={startInterview}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Start Interview
          </button>
        ) : (
          <>
            <button 
              onClick={triggerListening}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              disabled={isUserSpeaking || isRecruiterSpeaking}
            >
              <FaMicrophone className="inline-block mr-1" /> Speak
            </button>
            <button 
              onClick={stopInterview}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              End Interview
            </button>
          </>
        )}
      </div>
      
      {interviewActive && (
        <div className="mt-4 text-center text-sm text-gray-600">
          {isUserSpeaking ? (
            "Listening to you..."
          ) : isRecruiterSpeaking ? (
            "AI is speaking..."
          ) : (
            "Click 'Speak' when ready to answer"
          )}
        </div>
      )}
    </div>
  );
};

export default VoiceInterview;