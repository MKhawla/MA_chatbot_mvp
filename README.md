# Morocco Travel Assistant 🇲🇦

A smart travel assistant that helps users find optimal routes between major Moroccan cities by combining real-time traffic data and train schedules. The system provides comprehensive travel recommendations, considering multiple transportation options and current conditions.

![Travel Assistant](https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200)

## Features

- **Multi-modal Transportation**: Compares both driving and train options (ONCF & Al Boraq)
- **Real-time Traffic Updates**: Provides current road conditions and congestion levels
- **Train Schedule Integration**: Shows available trains with departure times and seat availability
- **Smart Route Optimization**: Suggests the best route based on current conditions
- **Bilingual Support**: Supports both English and Arabic responses
- **Interactive Chat Interface**: Simple, natural language interaction

## Supported Routes

- Casablanca ⇔ Rabat
- Casablanca ⇔ Marrakech
- Rabat ⇔ Tangier
- Casablanca ⇔ El Jadida

## Project Structure

```
├── src/
│   ├── chatbot.py        # Python chatbot implementation
│   ├── App.tsx           # React frontend component
│   ├── main.tsx         # React entry point
│   └── index.css        # Tailwind CSS styles
├── package.json         # Node.js dependencies
└── README.md           # Project documentation
```

## Prerequisites

- Python 3.x
- Node.js 18+ and npm
- Modern web browser

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd morocco-travel-assistant
```

2. Install Node.js dependencies:
```bash
npm install
```

## Running the Application

### Python Chatbot (Command Line Interface)

To run the command-line version of the chatbot:

```bash
python3 src/chatbot.py
```

You can then interact with the chatbot by typing queries like:
- "How can I travel from Casablanca to Rabat?"
- "What's the route from Rabat to Tangier?"
- "كيف يمكنني السفر من الدار البيضاء إلى الرباط؟"

### Web Interface (React Frontend)

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Technical Details

### Backend (Python)

The Python implementation consists of three main components:

1. **TransportAPI**: Simulates real-world transportation APIs
   - Traffic data for major highways (A1, A3, A7, A5)
   - ONCF and Al Boraq train schedules
   - Route information

2. **RouteOptimizer**: Handles route calculations
   - Traffic analysis
   - Train schedule optimization
   - Travel time estimation

3. **TravelChatbot**: Processes user queries
   - Bilingual support (English/Arabic)
   - Multi-modal route suggestions
   - Response formatting

### Frontend (React + TypeScript)

The web interface is built with:
- React 18
- TypeScript
- Tailwind CSS
- Lucide React icons
- Vite build tool

## Current Limitations

- Limited to major routes between specific cities
- Uses simulated data instead of real API connections
- Basic natural language processing

## Future Enhancements

- Integration with real ONCF API
- Support for more cities and routes
- Advanced Arabic language support
- Real-time updates and notifications
- Mobile application support
- Weather data integration
- Fare comparison and booking integration
- Integration with local taxi services

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## Example

![page1](https://github.com/user-attachments/assets/8b669986-208f-4a27-b221-4550ad8fdcca)


![3](https://github.com/user-attachments/assets/713f0dc5-e26c-4b2d-b26a-2b00563e8023)


![2](https://github.com/user-attachments/assets/7038d086-f9f2-4c68-8e10-855ccd46cd71)

