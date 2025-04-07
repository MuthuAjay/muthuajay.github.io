import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  // Prevent scrolling when loading screen is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.5,
              ease: "easeInOut" 
            }
          }}
        >
          <div className="relative">
            {/* Main logo */}
            <motion.div
              className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
            >
              MA
            </motion.div>
            
            {/* Animated rings */}
            <motion.div 
              className="absolute inset-0 border-2 border-teal-500/20 rounded-full"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ 
                scale: [0.6, 1.4, 1.4, 0.6],
                opacity: [0, 0.8, 0.8, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: 0.3
                }
              }}
            />
            
            <motion.div 
              className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ 
                scale: [0.6, 1.8, 1.8, 0.6],
                opacity: [0, 0.6, 0.6, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut"
                }
              }}
            />
          </div>
          
          {/* Loading text */}
          <motion.div 
            className="mt-12 text-slate-500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: 0.5,
                duration: 0.5
              }
            }}
          >
            <div className="flex items-center space-x-3">
              <div className="text-teal-400 font-medium">Loading</div>
              <div className="flex">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    className="w-2 h-2 mx-0.5 bg-teal-400 rounded-full"
                    initial={{ opacity: 0.4 }}
                    animate={{ 
                      opacity: [0.4, 1, 0.4],
                      transition: {
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot * 0.2
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;