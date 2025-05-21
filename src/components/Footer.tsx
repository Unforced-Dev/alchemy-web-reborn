
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 text-muted-foreground py-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm mb-2">
          &copy; {currentYear} Chloe Good Coaching. All rights reserved.
        </p>
        <div className="space-x-4">
          <Link to="/privacy-policy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
        </div>
        {/* Optional: Add social media icons here if Chloe uses them professionally */}
      </div>
    </footer>
  );
};

export default Footer;
