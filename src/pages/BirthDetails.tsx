import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function BirthDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    gender: '',
    state: '',
    city: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store the data in localStorage or state management
    localStorage.setItem('birthDetails', JSON.stringify(formData));
    navigate('/birth-chart');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8">
        <div className="flex justify-center mb-6">
          <Star className="h-12 w-12 text-yellow-300" />
        </div>
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Your Birth Details
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full rounded-md bg-white/5 border border-gray-500 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-200">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              required
              className="mt-1 block w-full rounded-md bg-white/5 border border-gray-500 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="timeOfBirth" className="block text-sm font-medium text-gray-200">
              Time of Birth
            </label>
            <input
              type="time"
              name="timeOfBirth"
              id="timeOfBirth"
              required
              className="mt-1 block w-full rounded-md bg-white/5 border border-gray-500 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-200">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              required
              className="mt-1 block w-full rounded-md bg-white/5 border border-gray-500 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-200">
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              required
              className="mt-1 block w-full rounded-md bg-white/5 border border-gray-500 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-200">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              required
              className="mt-1 block w-full rounded-md bg-white/5 border border-gray-500 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-md font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Generate Birth Chart
          </button>
        </form>
      </div>
    </div>
  );
}