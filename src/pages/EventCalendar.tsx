import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const events = [
  { title: "Community Tree Planting Day", date: "October 26, 2025", location: "Greenwood Park", type: "Volunteering" },
  { title: "Workshop: Intro to Urban Beekeeping", date: "November 9, 2025", location: "City Farm Co-op", type: "Workshop" },
  { title: "Local Farmer's Market & Sustainability Fair", date: "November 23, 2025", location: "Town Square", type: "Fair" },
];

const EventCalendar = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Event Calendar</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Get involved in your local community. Find workshops, volunteer opportunities, and more.</p>
      </div>
      <div className="space-y-6">
        {events.map((event) => (
          <Card key={event.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-semibold text-gray-800">{event.title}</CardTitle>
              <span className="font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full text-sm">{event.type}</span>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span>{event.location}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;