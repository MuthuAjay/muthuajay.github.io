import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext'; // Add theme context

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  width,
  height
}) => {
  const { theme } = useTheme(); // Get current theme
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {inView ? (
        <>
          <img
            src={src}
            alt={alt}
            className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
            onLoad={handleLoad}
            onError={handleError}
            width={width}
            height={height}
          />
          
          {/* Placeholder shown while image is loading */}
          {!isLoaded && !error && (
            <div className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-700 transition-colors duration-300" />
          )}
          
          {/* Error state */}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">
              Unable to load image
            </div>
          )}
        </>
      ) : (
        <div className="animate-pulse bg-slate-200 dark:bg-slate-700 w-full h-full rounded transition-colors duration-300" />
      )}
    </div>
  );
};

export default LazyImage;