import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import axios from 'axios';

const BASE_API_URL = "https://api.langflow.astra.datastax.com";
const LANGFLOW_ID = "0b4f6ef5-3286-4dfc-889a-4c9821995229";
const FLOW_ID = "253666c0-3c89-44eb-8a62-d8e45b1b9b2f";
const APPLICATION_TOKEN = "AstraCS:kckBcXXCzHqwfEhKvsFMyzsA:32a86c1ff5000ad6d176b7c01c62907fab132a348e8f5bab0ed54acbe3bdc292";

interface Message {
  text: string;
  isUser: boolean;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your spiritual guide. How can I assist you on your journey today?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${BASE_API_URL}/lf/${LANGFLOW_ID}/api/v1/run/${FLOW_ID}`,
        {
          input_value: userMessage,
          output_type: "chat",
          input_type: "chat",
        },
        {
          headers: {
            Authorization: `Bearer ${APPLICATION_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botResponse = response.data.result || "I apologize, but I couldn't process that request.";
      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          text: "I apologize, but I'm having trouble connecting right now. Please try again later.",
          isUser: false,
        },
      ]);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-4xl mx-auto pt-8 px-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden">
          <div className="p-4 border-b border-gray-700 flex items-center">
            <MessageCircle className="h-6 w-6 text-yellow-300 mr-2" />
            <h2 className="text-xl font-semibold text-white">SoulBuddy Chat</h2>
          </div>

          <div className="h-[600px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isUser
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/20 text-gray-100'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/20 text-gray-100 rounded-lg px-4 py-2">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={sendMessage} className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask for spiritual guidance..."
                className="flex-1 bg-white/5 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}