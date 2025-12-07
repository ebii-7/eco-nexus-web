import ArticleCard from "@/components/ArticleCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const articles = [
  {
    title: "The Ultimate Guide to Starting a Community Garden",
    description: "Learn everything you need to know to cultivate a thriving community garden, from picking a location to harvesting your first crops.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/96ea59e7-e0af-46f0-b72e-77e8b09f4e2c/community-garden-oqepbi5-1765088530689.webp",
    tags: ["Gardening", "Community", "Food"],
  },
  {
    title: "Recycling 101: A Beginner's Guide",
    description: "Demystify the world of recycling with our easy-to-follow guide. Learn what you can and can't recycle, and how to do it properly.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/96ea59e7-e0af-46f0-b72e-77e8b09f4e2c/recycling-bins-n44zzun-1765088536419.webp",
    tags: ["Recycling", "Waste Reduction", "Lifestyle"],
  },
  {
    title: "Harnessing the Sun: An Introduction to Solar Power",
    description: "Discover the benefits of solar energy for your home and the planet. This guide covers the basics of solar panels and how they work.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/96ea59e7-e0af-46f0-b72e-77e8b09f4e2c/solar-panel-cjgpf4i-1765088542965.webp",
    tags: ["Renewable Energy", "Solar Power", "Technology"],
  },
];

const recommendedArticles = [
    {
        title: "Zero-Waste Kitchen: A Practical Guide",
        description: "Reduce your kitchen waste to nearly zero with these practical, easy-to-implement tips for a more sustainable kitchen.",
        image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/96ea59e7-e0af-46f0-b72e-77e8b09f4e2c/recycling-bins-n44zzun-1765088536419.webp",
        tags: ["Zero-Waste", "Kitchen", "Lifestyle"],
    },
    {
        title: "Composting for Beginners",
        description: "Turn your food scraps into nutrient-rich soil. This guide makes getting started with composting simple and accessible for everyone.",
        image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/96ea59e7-e0af-46f0-b72e-77e8b09f4e2c/community-garden-oqepbi5-1765088530689.webp",
        tags: ["Composting", "Gardening", "Waste Reduction"],
    },
];

const ResourceLibrary = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Resource Library</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Your one-stop shop for knowledge and inspiration on sustainable living.</p>
      </div>
      <div className="mb-8 max-w-lg mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input placeholder="Search for articles..." className="pl-10" />
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recommended for You</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {recommendedArticles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceLibrary;