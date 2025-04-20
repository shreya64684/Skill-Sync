const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  export const safetySettings = [
    {
      category: "HARM_CATEGORY_HATE_SPEECH",
      threshold: 3, // Adjust as needed
    },
    {
      category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      threshold: 3,
    },
    {
      category: "HARM_CATEGORY_DANGEROUS_CONTENT",
      threshold: 3,
    }
  ];
  
  export const chatSession = model.startChat({
    generationConfig,
    safetySettings,  // Now it's defined properly
  });
  