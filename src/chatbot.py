import json
from datetime import datetime
from typing import Dict, List, Optional

class TransportAPI:
    def __init__(self):
        # Simulated API data for Moroccan roads and trains
        self.traffic_data = {
            "A1": {"congestion": "heavy", "speed": 80, "route": "Casablanca-Rabat"},
            "A3": {"congestion": "light", "speed": 120, "route": "Rabat-Tangier"},
            "A7": {"congestion": "moderate", "speed": 90, "route": "Casablanca-Marrakech"},
            "A5": {"congestion": "light", "speed": 110, "route": "Casablanca-El Jadida"}
        }
        
        self.train_schedules = {
            "Casablanca-Rabat": [
                {"departure": "08:00", "arrival": "08:45", "available_seats": 45, "type": "ONCF"},
                {"departure": "10:00", "arrival": "10:45", "available_seats": 20, "type": "Al Boraq"},
            ],
            "Rabat-Casablanca": [
                {"departure": "09:00", "arrival": "09:45", "available_seats": 30, "type": "ONCF"},
                {"departure": "11:00", "arrival": "11:45", "available_seats": 50, "type": "Al Boraq"},
            ],
            "Casablanca-Marrakech": [
                {"departure": "08:30", "arrival": "11:30", "available_seats": 40, "type": "ONCF"},
                {"departure": "14:30", "arrival": "17:30", "available_seats": 35, "type": "ONCF"},
            ],
            "Rabat-Tangier": [
                {"departure": "07:00", "arrival": "09:30", "available_seats": 55, "type": "Al Boraq"},
                {"departure": "15:00", "arrival": "17:30", "available_seats": 25, "type": "Al Boraq"},
            ]
        }

    def get_traffic_status(self, road_id: str) -> Dict:
        return self.traffic_data.get(road_id, {"congestion": "unknown", "speed": 0})

    def get_train_schedule(self, route: str) -> List[Dict]:
        return self.train_schedules.get(route, [])

class RouteOptimizer:
    def __init__(self, transport_api: TransportAPI):
        self.api = transport_api
        
    def find_optimal_route(self, start: str, end: str, preferred_mode: str) -> Dict:
        if preferred_mode == "car":
            # Moroccan routes mapping
            routes = {
                ("Casablanca", "Rabat"): ["A1"],
                ("Rabat", "Casablanca"): ["A1"],
                ("Casablanca", "Marrakech"): ["A7"],
                ("Marrakech", "Casablanca"): ["A7"],
                ("Rabat", "Tangier"): ["A3"],
                ("Tangier", "Rabat"): ["A3"],
                ("Casablanca", "El Jadida"): ["A5"],
                ("El Jadida", "Casablanca"): ["A5"]
            }
            
            route_roads = routes.get((start, end), [])
            if not route_roads:
                return {"status": "error", "message": "لم يتم العثور على طريق - No route found"}
            
            # Check traffic on each road
            total_time = 0
            congestion_status = []
            for road in route_roads:
                traffic = self.api.get_traffic_status(road)
                total_time += 100 / traffic["speed"]  # Simplified time calculation
                congestion_status.append(f"{road}: {traffic['congestion']}")
            
            return {
                "status": "success",
                "mode": "car",
                "estimated_time": round(total_time, 1),
                "traffic_info": congestion_status
            }
            
        elif preferred_mode == "train":
            route_key = f"{start}-{end}"
            schedules = self.api.get_train_schedule(route_key)
            if not schedules:
                return {"status": "error", "message": "لا توجد قطارات متوفرة - No trains found"}
            
            # Find next available train
            current_time = datetime.now().strftime("%H:%M")
            for schedule in schedules:
                if schedule["departure"] > current_time and schedule["available_seats"] > 0:
                    return {
                        "status": "success",
                        "mode": "train",
                        "type": schedule["type"],
                        "departure": schedule["departure"],
                        "arrival": schedule["arrival"],
                        "available_seats": schedule["available_seats"]
                    }
            
            return {"status": "error", "message": "لا توجد قطارات متوفرة - No available trains"}
        
        return {"status": "error", "message": "وسيلة نقل غير مدعومة - Unsupported transport mode"}

class TravelChatbot:
    def __init__(self):
        self.transport_api = TransportAPI()
        self.route_optimizer = RouteOptimizer(self.transport_api)
        self.supported_cities = ["Casablanca", "Rabat", "Marrakech", "Tangier", "El Jadida"]
        
    def process_query(self, query: str) -> str:
        query = query.lower()
        
        # Extract cities from query
        cities = [city for city in self.supported_cities if city.lower() in query]
        
        if len(cities) >= 2:
            start = cities[0]
            end = cities[1]
            
            # Check both car and train options
            car_route = self.route_optimizer.find_optimal_route(start, end, "car")
            train_route = self.route_optimizer.find_optimal_route(start, end, "train")
            
            response = f"🚗 Travel options from {start} to {end}:\n\n"
            
            if car_route["status"] == "success":
                response += "🚘 By Car:\n"
                response += f"⏱️ Estimated time: {car_route['estimated_time']} hours\n"
                response += "🚦 Traffic conditions:\n"
                for info in car_route['traffic_info']:
                    response += f"- {info}\n"
                response += "\n"
            
            if train_route["status"] == "success":
                response += "🚂 By Train:\n"
                response += f"Next available {train_route['type']}:\n"
                response += f"- 🕒 Departure: {train_route['departure']}\n"
                response += f"- 🏁 Arrival: {train_route['arrival']}\n"
                response += f"- 💺 Available seats: {train_route['available_seats']}\n"
            
            return response
            
        return """Welcome to Morocco Travel Assistant! 🇲🇦

I can help you find routes between:
- Casablanca ⇔ Rabat
- Casablanca ⇔ Marrakech
- Rabat ⇔ Tangier
- Casablanca ⇔ El Jadida

Try asking: "How can I travel from Casablanca to Rabat?"
أو: "كيف يمكنني السفر من الدار البيضاء إلى الرباط؟"
"""

def main():
    chatbot = TravelChatbot()
    
    print("🇲🇦 Welcome to Morocco Travel Assistant! (Type 'quit' to exit)")
    print("You can ask about routes between major Moroccan cities")
    print("Example: How can I travel from Casablanca to Rabat?")
    
    while True:
        user_input = input("\nYou: ")
        if user_input.lower() == 'quit':
            break
            
        response = chatbot.process_query(user_input)
        print(f"\nAssistant: {response}")

if __name__ == "__main__":
    main()