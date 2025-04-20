// pages/api/gemini.js

import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    // Initialize the Gemini API client
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    // Format messages for Gemini (may need adjustment based on actual Gemini API)
    const chatSession = model.startChat({
      history: messages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : msg.role,
        parts: [{ text: msg.content }]
      })),
    });
    
    const result = await chatSession.sendMessage('Continue the interview based on our conversation history.');
    const response = result.response.text();
    
    return res.status(200).json({ response });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return res.status(500).json({ error: 'Failed to process with Gemini API' });
  }
}