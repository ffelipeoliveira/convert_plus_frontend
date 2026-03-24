import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import Logo from '../../common/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Converter' },
    { path: '/about', label: 'About' },
    { path: '/supported', label: 'Formats' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed backdrop-blur-sm top-0 left-0 right-0 z-50" style={{ backgroundColor: '#171717c6', borderBottom: '1px solid #2a2a2a' }}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold" style={{ color: '#e5e5e5' }}>
            <Logo/>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="transition-colors duration-200 hover:text-[#86efac]"
                style={{ color: isActive(item.path) ? '#9ede93' : '#9ca3af' }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-[#2a2a2a]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" style={{ color: '#e2e2e2' }} />
            ) : (
              <FiMenu className="w-6 h-6" style={{ color: '#dcdcdc' }} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t" style={{ borderColor: '#2a2a2a' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 transition-colors duration-200 hover:text-[#86efac]"
                style={{ color: isActive(item.path) ? '#86efac' : '#9ca3af' }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;