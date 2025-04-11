import React, { useState } from 'react';
import { MessageSquare, Train, Car, Clock } from 'lucide-react';

function ChatInterface() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { 
      text: `Welcome to Morocco Travel Assistant! 🇲🇦

I can help you find routes between:
- Casablanca ⇔ Rabat
- Casablanca ⇔ Marrakech
- Rabat ⇔ Tangier
- Casablanca ⇔ El Jadida

Try these example questions:
🚗 "What's the best way to get from Casablanca to Rabat?"
🚂 "Show me train options from Rabat to Tangier"
🚦 "How's the traffic from Casablanca to Marrakech?"
🗣️ "كيف يمكنني السفر من الدار البيضاء إلى مراكش؟"`, 
      isUser: false 
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setMessages(prev => [...prev, { text: query, isUser: true }]);

    setTimeout(() => {
      const response = processQuery(query);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);

    setQuery('');
  };

  const processQuery = (input: string): string => {
    const cities = ['Casablanca', 'Rabat', 'Marrakech', 'Tangier', 'El Jadida'];
    const foundCities = cities.filter(city => 
      input.toLowerCase().includes(city.toLowerCase())
    );

    if (foundCities.length >= 2) {
      return `🚗 Travel options from ${foundCities[0]} to ${foundCities[1]}:

🚘 By Car:
⏱️ Estimated time: 2.5 hours
🚦 Traffic conditions:
- A1: moderate traffic
- Average speed: 90 km/h

🚂 By Train:
Next available Al Boraq:
- 🕒 Departure: 10:00
- 🏁 Arrival: 10:45
- 💺 Available seats: 45`;
    }

    return `I can help you find routes between major Moroccan cities.
Try asking about travel between:
- Casablanca ⇔ Rabat
- Casablanca ⇔ Marrakech
- Rabat ⇔ Tangier
- Casablanca ⇔ El Jadida`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto max-w-4xl p-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-green-600 p-4 text-white flex items-center gap-3">
            <MessageSquare className="w-6 h-6" />
            <h1 className="text-xl font-semibold">Morocco Travel Assistant</h1>
          </div>

          <div className="h-[500px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-green-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <pre className="whitespace-pre-wrap font-sans">{message.text}</pre>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about travel between Moroccan cities..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
            <Train className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-semibold">Train Routes</h3>
              <p className="text-sm text-gray-600">ONCF & Al Boraq schedules</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
            <Car className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-semibold">Road Traffic</h3>
              <p className="text-sm text-gray-600">Real-time traffic updates</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
            <Clock className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-semibold">Travel Times</h3>
              <p className="text-sm text-gray-600">Estimated journey duration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;