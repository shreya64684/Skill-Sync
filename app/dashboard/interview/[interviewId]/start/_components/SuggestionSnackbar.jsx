// components/SuggestionSnackbar.jsx

import React from 'react';

const suggestionMap = {
  Confident: "✅ Great job! Your confidence really shows.",
  Stressed: "⚠️ Relax your face a bit to appear more calm.",
  Anxious: "⚠️ Take a deep breath and try to stay composed.",
  Nervous: "⚠️ You seem surprised. Try to stay steady and clear.",
  Relaxed: "🙂 Looking good! A bit more enthusiasm would help.",
  Unclear: "ℹ️ Make sure your face is clearly visible and expressive.",
};

const SuggestionSnackbar = ({ emotion }) => {
  if (!emotion) return null;

  return (
    <div className="fixed top-4 right-4 bg-white border border-gray-300 shadow-lg rounded-lg px-4 py-2 z-50 transition-all duration-300 animate-fade-in-down">
      <p className="text-sm font-medium text-gray-800">{suggestionMap[emotion]}</p>
    </div>
  );
};

export default SuggestionSnackbar;
