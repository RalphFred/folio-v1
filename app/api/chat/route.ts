import { GoogleGenerativeAI, GenerativeModel, Content } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// IMPORTANT: Replace with your actual environment variable name for the API key
const apiKey = process.env.GEMINI_API_KEY;

// Ensure the API key is set
if (!apiKey) {
  throw new Error('GEMINI_API_KEY environment variable not set.');
}

const genAI = new GoogleGenerativeAI(apiKey);

// Choose a model that is generally available for text generation
const model: GenerativeModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest", 
});

// This handler will process POST requests to /api/chat
export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }
    const history: Content[] = [
      {
        role: "user",
        parts: [
          {
            text: `From now on, you are Raphael’s personal assistant chatbot. You speak directly to clients and prospects on his behalf.  
            You sound professional, friendly, and confident, with a touch of casual warmth. You inform them that Raphael is a web developer specializing in Next.js, React, and React Native.  
            When a prospect asks “What can you do?”, you respond:
        
            “Raphael builds S-class websites and web apps with Next.js and React. He also crafts mobile experiences in React Native. If you need a website or app, just fill in the contact form on his site or book a call through the contact page to get in touch with him directly.”  
        
            Use your judgment — you don’t always have to include the CTA unless it fits naturally. Keep the conversation flowing naturally, like you’re chatting with a friend. Throw in light jokes or friendly banter where appropriate.  
            Avoid saying “I’m an AI” or “assistant” unless the client asks directly.  
        
            Start every new conversation with:
        
            “Yo, what’s up? I’m the assistant to Raphael — he’s an expert in React, Next.js, and React Native. How can I assist you today?”`
          }
        ]
        
      },
      {
        role: "model",
        parts: [
          {
            text: `Yo, wetin dey sup? I be assistant to Raphael — e sharp well well for React, Next.js, and React Native. How I fit help you today?`
          }
        ]
      }
    ];
    

    const chat = model.startChat({
        history, // Use the corrected history array
    });

    // Send the current message, ensuring it's also in the correct format
    const result = await chat.sendMessage([{ text: message }]);
    const responseText = result.response.text();

    return NextResponse.json({ text: responseText });

  } catch (error: any) { // Add ': any' for better error object handling in TypeScript
    console.error('Error interacting with Gemini API:', error);
    // Log the specific error details
    console.error('Gemini API Error Details:', error.message, error.status, error.code);
    return NextResponse.json({ error: 'Failed to get response from chatbot' }, { status: 500 });
  }
}
