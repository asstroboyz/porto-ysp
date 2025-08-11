import React, { useRef, useEffect, ReactNode } from 'react';

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ 
  children, 
  speed = 0.5,
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialOffsetY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      
      if (initialOffsetY.current === 0) {
        initialOffsetY.current = rect.top + scrollTop;
      }
      
      const offsetY = (scrollTop - initialOffsetY.current + window.innerHeight) * speed;
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        containerRef.current.style.transform = `translateY(${offsetY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};