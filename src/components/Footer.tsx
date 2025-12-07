import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-gray-800">EcoConnect</span>
          </div>
          <p className="text-gray-600 text-center md:text-right">
            © 2025 EcoConnect. Inspiring sustainable communities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;