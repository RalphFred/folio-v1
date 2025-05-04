"use client"
import { Send } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Define the type for a message object
interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}

export default function PlaygroundPage() {
    // State to hold chat messages, using the defined type
    const [messages, setMessages] = useState<ChatMessage[]>([]); // Initialize with empty array, will load from sessionStorage or default

    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false); 

    // Effect to load messages from sessionStorage on component mount
    useEffect(() => {
        const savedMessages = sessionStorage.getItem('chatMessages');
        if (savedMessages) {
            try {
                setMessages(JSON.parse(savedMessages));
            } catch (e) {
                console.error("Failed to parse messages from sessionStorage", e);
                // Fallback to default message if parsing fails
                setMessages([{ sender: 'bot', text: 'Hello, how can I help you?' }]);
            }
        } else {
            // Set initial bot message if no messages are found in sessionStorage
            setMessages([{ sender: 'bot', text: 'Hello, how can I help you?' }]);
        }
    }, []); // Empty dependency array means this effect runs only once on mount

    // Effect to save messages to sessionStorage whenever messages state changes
    useEffect(() => {
        // Avoid saving initially when messages is empty or only has the default bot message before loading from storage
         if (messages.length > 0) {
            sessionStorage.setItem('chatMessages', JSON.stringify(messages));
         }
    }, [messages]); // Dependency array includes messages, runs whenever messages state changes


    const sendMessage = async () => {
        if (input.trim() && !isLoading) { // Prevent sending if input is empty or loading
            const userMessage: ChatMessage = { sender: 'user', text: input };
            // Optimistically add user message to display
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setInput(''); // Clear input immediately
            setIsLoading(true); // Set loading state

            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: userMessage.text }), // Send only the text
                });

                if (!response.ok) {
                    // Handle non-2xx responses
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to fetch bot response');
                }

                const data = await response.json();
                // Ensure the response text is a string before creating the bot message
                if (typeof data.text !== 'string') {
                     throw new Error('Invalid response format from bot');
                }
                const botMessage: ChatMessage = { sender: 'bot', text: data.text };


                // Add bot message to display
                setMessages((prevMessages) => [...prevMessages, botMessage]);

            } catch (error) {
                console.error('Error sending message:', error);
                // Optionally show an error message to the user
                 setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: "Sorry, I encountered an error. Please try again." }]);
            } finally {
                setIsLoading(false); // Unset loading state
            }
        }
    };

    return (
        <div className="flex-1 text-white overflow-y-auto lg:p-6">
            <section id="playground" className="">
                <h2 className="text-3xl font-bold mb-3">Playground</h2>
                <div className="w-16 h-1 bg-primary-300 mb-6 rounded-full"></div>

                {/* Chat Window */}
                <div className="flex flex-col h-[75vh] lg:h-[65vh] bg-dark-300 rounded-md p-4">
                    {/* Message Display Area */}
                    <div className="flex-1 overflow-y-auto chat-scrollbar mb-4 pr-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <span className={`inline-block p-2 rounded-lg lg:max-w-xl ${msg.sender === 'user' ? 'bg-primary-500 text-white' : 'bg-primary-200 text-dark-400'}`}>
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                         {/* Add a loading indicator or placeholder for bot response here if needed */}
                         {isLoading && (
                             <div className={`mb-2 text-left`}>
                                <span className="inline-block p-2 rounded-lg bg-primary-200 text-dark-400 animate-pulse">...</span>
                             </div>
                         )}
                    </div>

                    {/* Input Area */}
                    <div className="flex relative">
                        <input
                            type="text"
                            className="flex-1 p-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-primary-300"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    sendMessage();
                                }
                            }}
                             disabled={isLoading} // Disable input while loading
                        />
                        <button
                            onClick={sendMessage}
                            className={`px-4 py-[10px] absolute right-0 top-0 rounded-r-md transition duration-200 pointer ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700 '}`}
                            disabled={isLoading} 
                        >
                             <Send className="w-5 h-5 text-primary-300" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
