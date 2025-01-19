import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Moon, Sun, Stars } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Stars className="w-16 h-16 text-yellow-300" />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-300">
            SoulBuddy
          </h1>
          <p className="text-2xl mb-12 text-gray-300">
            Your AI-Powered Spiritual Guide
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Moon className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Personalized Insights</h3>
              <p className="text-gray-300">Discover your spiritual path through astrology and numerology</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Sun className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Daily Guidance</h3>
              <p className="text-gray-300">Receive daily horoscopes and spiritual recommendations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-pink-300" />
              <h3 className="text-xl font-semibold mb-2">AI Chat Support</h3>
              <p className="text-gray-300">Get instant spiritual advice from our AI guide</p>
            </div>
          </div>
          
          <button
            onClick={() => navigate('/birth-details')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
          >
            Begin Your Spiritual Journey
          </button>
        </div>
      </div>
    </div>
  );
}