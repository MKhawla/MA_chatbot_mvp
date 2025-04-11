import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Train, Car, Clock, MapPin, Globe2, Languages } from 'lucide-react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=2000&h=1000"
            alt="Morocco landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Morocco Travel Assistant 🇲🇦
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Your intelligent companion for navigating Morocco's transportation network. Get real-time updates on traffic, train schedules, and optimal routes between major cities.
          </p>
          <Link
            to="/chat"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            <MessageSquare className="w-6 h-6 mr-2" />
            Start Planning Your Journey
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Smart Travel Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Car className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold">Real-time Traffic</h3>
            </div>
            <p className="text-gray-600">
              Get live updates on road conditions and traffic status for major highways.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Train className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold">Train Schedules</h3>
            </div>
            <p className="text-gray-600">
              Access ONCF and Al Boraq train schedules with real-time availability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold">Route Optimization</h3>
            </div>
            <p className="text-gray-600">
              Find the fastest and most convenient routes between major cities.
            </p>
          </div>
        </div>
      </div>

      {/* Cities Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Supported Cities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['Casablanca', 'Rabat', 'Marrakech', 'Tangier'].map((city) => (
              <div key={city} className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="text-xl font-semibold">{city}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Globe2 className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold">Multi-modal Transportation</h3>
            </div>
            <p className="text-gray-600">
              Compare different transportation options including trains, buses, and driving routes to find the best option for your journey.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Languages className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold">Bilingual Support</h3>
            </div>
            <p className="text-gray-600">
              Get assistance in both English and Arabic to make your travel planning easier and more accessible.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Morocco Travel Assistant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;