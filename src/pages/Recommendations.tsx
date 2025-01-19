import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Italic as Crystal, Flame, Shield } from 'lucide-react';

export default function Recommendations() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Crystal className="h-16 w-16 text-yellow-300 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">Spiritual Recommendations</h2>
          <p className="text-gray-300 text-lg">
            Personalized guidance for your spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <Crystal className="h-6 w-6 mr-2 text-purple-300" />
              Gemstone Suggestions
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-medium">Primary Stone:</span> Amethyst
                <p className="text-sm">Enhances spiritual awareness and meditation</p>
              </li>
              <li>
                <span className="font-medium">Secondary Stone:</span> Rose Quartz
                <p className="text-sm">Promotes self-love and emotional healing</p>
              </li>
              <li>
                <span className="font-medium">Supporting Stone:</span> Clear Quartz
                <p className="text-sm">Amplifies energy and spiritual connection</p>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <Flame className="h-6 w-6 mr-2 text-orange-300" />
              Ritual Recommendations
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-medium">Morning Ritual:</span>
                <p className="text-sm">Sun salutation with crystal meditation</p>
              </li>
              <li>
                <span className="font-medium">Evening Ritual:</span>
                <p className="text-sm">Moonlight gratitude practice</p>
              </li>
              <li>
                <span className="font-medium">Weekly Ritual:</span>
                <p className="text-sm">Sacred space cleansing with sage</p>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-green-300" />
              Do's and Don'ts
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-medium text-green-300">Do's:</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Meditate during sunrise</li>
                  <li>Wear copper accessories</li>
                  <li>Practice gratitude daily</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-red-300">Don'ts:</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Avoid major decisions on Mondays</li>
                  <li>Limit exposure to negative energy</li>
                  <li>Skip spiritual practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/chat')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Chat with SoulBuddy AI
          </button>
        </div>
      </div>
    </div>
  );
}