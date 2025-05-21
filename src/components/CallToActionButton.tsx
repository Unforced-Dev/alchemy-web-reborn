
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonProps } from '@/components/ui/button'; // Using shadcn Button
import { cn } from '@/lib/utils';

interface CallToActionButtonProps extends ButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({ to, href, children, className, variant = 'default', size = 'lg', ...props }) => {
  const buttonClasses = cn(
    'font-semibold',
    className
  );

  if (to) {
    return (
      <Button asChild variant={variant} size={size} className={buttonClasses} {...props}>
        <Link to={to}>{children}</Link>
      </Button>
    );
  }

  if (href) {
    return (
      <Button asChild variant={variant} size={size} className={buttonClasses} {...props}>
        <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
      </Button>
    );
  }
  
  return (
    <Button variant={variant} size={size} className={buttonClasses} {...props}>
      {children}
    </Button>
  );
};

export default CallToActionButton;
