import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BarChart2, CheckCircle } from "lucide-react";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Your Profile</h1>
        <p className="mt-4 text-lg text-gray-600">Track your progress and celebrate your achievements!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Gamification Section */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Award className="h-8 w-8 text-yellow-500" />
            <CardTitle className="text-2xl font-bold">Your Eco-Points</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-gray-800 mb-4">1,250</p>
            <h3 className="text-xl font-semibold mb-4">Badges Earned</h3>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">Recycling Rookie</Badge>
              <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1">Garden Starter</Badge>
              <Badge className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1">Energy Saver</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Data Visualization Section */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <BarChart2 className="h-8 w-8 text-indigo-500" />
            <CardTitle className="text-2xl font-bold">Your Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Here is a placeholder for where your data visualizations will go. Track your carbon footprint reduction, water saved, and more!</p>
            <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-500">
              [Chart Placeholder]
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;