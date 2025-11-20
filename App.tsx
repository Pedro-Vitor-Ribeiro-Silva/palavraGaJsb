import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { SLIDES_CONTENT } from './constants';
import { SlideRenderer } from './components/SlideRenderer';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES_CONTENT.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentProgress = ((currentSlideIndex + 1) / SLIDES_CONTENT.length) * 100;

  return (
    <div className="relative w-full h-[100dvh] bg-brand-dark text-slate-50 overflow-hidden flex flex-col">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative w-full h-full z-10 p-3 md:p-8 lg:p-12 flex flex-col overflow-hidden">
        <AnimatePresence mode='wait'>
            <motion.div
                key={currentSlideIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex-1 w-full h-full flex flex-col"
            >
                <SlideRenderer 
                    slide={SLIDES_CONTENT[currentSlideIndex]} 
                    onNext={nextSlide}
                    onPrev={prevSlide}
                />
            </motion.div>
        </AnimatePresence>
      </main>

      {/* Controls UI */}
      <div className="relative z-20 p-3 md:p-6 flex justify-between items-center bg-slate-900 border-t border-slate-800/50">
        <div className="flex items-center space-x-4">
             <span className="text-xs md:text-sm font-mono text-slate-400">
                {currentSlideIndex + 1} / {SLIDES_CONTENT.length}
             </span>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
            <button 
                onClick={prevSlide}
                disabled={currentSlideIndex === 0}
                className="p-2 md:p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 hover:text-brand-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
            >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
            
            <button 
                onClick={toggleFullscreen}
                className="p-2 md:p-3 rounded-full hover:bg-slate-800/50 transition-colors hidden md:block"
                title="Toggle Fullscreen"
            >
               {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>

            <button 
                onClick={nextSlide}
                disabled={currentSlideIndex === SLIDES_CONTENT.length - 1}
                className="p-2 md:p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 hover:text-brand-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
            >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-brand-primary/20 w-full z-30">
        <motion.div 
            className="h-full bg-brand-accent shadow-[0_0_10px_rgba(234,179,8,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${currentProgress}%` }}
            transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default App;