import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users } from "lucide-react";

const discussions = [
  { title: "Composting Tips for Apartment Dwellers", category: "Urban Gardening", replies: 12, participants: 5 },
  { title: "Favorite Zero-Waste Swaps?", category: "Sustainable Lifestyle", replies: 34, participants: 15 },
  { title: "DIY Natural Cleaning Solutions", category: "Eco-Friendly Home", replies: 21, participants: 9 },
];

const CommunityForum = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Community Forum</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Connect with fellow eco-enthusiasts, share your journey, and learn from others.</p>
        <Button className="mt-6 bg-green-600 hover:bg-green-700">Start a New Discussion</Button>
      </div>
      <div className="space-y-6">
        {discussions.map((discussion) => (
          <Card key={discussion.title} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">{discussion.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center text-sm text-gray-500">
              <div className="font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">{discussion.category}</div>
              <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{discussion.replies} Replies</span>
                  </div>
                  <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{discussion.participants} Participants</span>
                  </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;