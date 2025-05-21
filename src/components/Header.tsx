
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming you have a shadcn Button

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Chloe', path: '/about' },
  { name: 'Attachment Alchemy', path: '/attachment-alchemy' },
  { name: 'Coaching', path: '/coaching' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-serif font-bold text-primary hover:text-primary/80 transition-colors">
            Chloe Good
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-foreground hover:text-primary transition-colors pb-1 ${
                    isActive ? 'font-semibold border-b-2 border-primary text-primary' : 'border-b-2 border-transparent'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact-cta">Book a Call</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background shadow-lg z-40 animate-fade-in">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg text-foreground hover:text-primary transition-colors ${
                    isActive ? 'font-semibold text-primary' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              <a href="#contact-cta">Book a Call</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
