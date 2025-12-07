import { Link, NavLink } from 'react-router-dom';
import { Leaf, User } from 'lucide-react';

const Header = () => {
  const navLinkClasses = (isActive: boolean) =>
    `text-lg font-medium transition-colors ${isActive ? 'text-green-700' : 'text-gray-600 hover:text-green-700'}`;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">EcoConnect</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={({ isActive }) => navLinkClasses(isActive)}>
              Home
            </NavLink>
            <NavLink to="/resource-library" className={({ isActive }) => navLinkClasses(isActive)}>
              Resources
            </NavLink>
            <NavLink to="/community-forum" className={({ isActive }) => navLinkClasses(isActive)}>
              Forum
            </NavLink>
            <NavLink to="/event-calendar" className={({ isActive }) => navLinkClasses(isActive)}>
              Events
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => navLinkClasses(isActive)}>
              <User className='h-5 w-5' />
            </NavLink>
          </nav>
          <button className="md:hidden rounded-md p-2 text-gray-600 hover:text-green-700 hover:bg-gray-100">
            <span className="sr-only">Open menu</span>
            {/* Add menu icon here */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;