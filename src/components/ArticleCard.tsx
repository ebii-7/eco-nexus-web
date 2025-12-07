import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { toast } from "sonner";

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, description, tags }) => {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg flex flex-col">
      <CardHeader className="p-0">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-bold text-gray-800 mb-2">{title}</CardTitle>
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col items-start">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-green-100 text-green-800">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Was this helpful?</span>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.success("Thanks for your feedback!")}>
            <ThumbsUp className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.error("We\'ll try to improve. Thanks for the feedback!")}>
            <ThumbsDown className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;