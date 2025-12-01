import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
  threshold?: number;
}

const RevealOnScroll: React.FC<RevealProps> = ({ 
  children, 
  animation = 'animate-fade-in-up', 
  delay = 0,
  className = '',
  threshold = 0.15 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If intersecting, show. If not, hide (to reset animation)
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const style: React.CSSProperties = {
    animationDelay: isVisible ? `${delay}ms` : '0ms',
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? 'visible' : 'hidden',
    transition: 'opacity 0.2s ease-in-out', // Smooths out the reset
  };

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? animation : ''}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;