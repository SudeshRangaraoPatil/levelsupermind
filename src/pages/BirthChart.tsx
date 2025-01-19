import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function BirthChart() {
  const navigate = useNavigate();
  const [birthDetails, setBirthDetails] = useState<any>(null);

  useEffect(() => {
    const details = localStorage.getItem('birthDetails');
    if (details) {
      setBirthDetails(JSON.parse(details));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Compass className="h-16 w-16 text-yellow-300 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">Your Birth Chart</h2>
          <p className="text-gray-300 text-lg">
            Discover your spiritual path through the cosmic alignment at your birth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <img
              src="https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Natal Chart"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-white mb-2">Your Natal Chart</h3>
            <p className="text-gray-300">
              This is your unique cosmic fingerprint at the moment of your birth
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Houses & Planets</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p className="font-medium">Sun Sign:</p>
                  <p>Aries</p>
                </div>
                <div>
                  <p className="font-medium">Moon Sign:</p>
                  <p>Taurus</p>
                </div>
                <div>
                  <p className="font-medium">Ascending:</p>
                  <p>Gemini</p>
                </div>
                <div>
                  <p className="font-medium">Midheaven:</p>
                  <p>Cancer</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Daily Horoscope</h3>
              <p className="text-gray-300 mb-4">
                Today's cosmic energies suggest a period of introspection and growth. Focus on your
                personal development and spiritual journey.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/recommendations')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            View Your Recommendations
          </button>
        </div>
      </div>
    </div>
  );
}