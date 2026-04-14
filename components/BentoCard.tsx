import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'green' | 'yellow' | 'red';
  className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  children, 
  size = 'medium', 
  color = 'default',
  className = '' 
}) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1',
    large: 'col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2'
  };

  const colorClasses = {
    default: 'bento-card',
    green: 'bento-card bento-card-green',
    yellow: 'bento-card bento-card-yellow',
    red: 'bento-card bento-card-red'
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      {children}
    </div>
  );
};

export default BentoCard;
