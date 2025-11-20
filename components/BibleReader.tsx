import React from 'react';
import { JOHN_9_VERSES, Verse } from '../constants';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
    onNext: () => void;
    onPrev: () => void;
}

export const BibleReader: React.FC<Props> = ({ onNext, onPrev }) => {
    return (
        <div className="relative h-full w-full max-w-4xl mx-auto bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm overflow-hidden flex flex-col shadow-2xl group">
            <div className="flex justify-between items-center p-3 md:p-6 border-b border-slate-600 bg-slate-900/50 z-10 shrink-0">
                <h3 className="text-lg md:text-2xl font-serif text-brand-accent">João 9</h3>
                <span className="text-xs md:text-sm text-slate-400 bg-slate-900 px-2 py-1 rounded">NVI</span>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scroll p-3 md:p-6 space-y-2 text-base md:text-lg leading-relaxed text-slate-300 text-justify font-serif relative">
                {JOHN_9_VERSES.map((verse) => (
                    <VerseItem key={verse.number} verse={verse} />
                ))}
                <div className="h-10 md:h-20"></div> {/* Bottom spacer */}
            </div>

            {/* Navigation Overlay Buttons - Visible on hover or active, ONLY on desktop/tablet to save space on mobile */}
            <button 
                onClick={onPrev}
                className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 rounded-full text-slate-300 hover:text-white hover:bg-brand-primary transition-all opacity-0 group-hover:opacity-100 z-20"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={32} />
            </button>
            <button 
                onClick={onNext}
                className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 rounded-full text-slate-300 hover:text-white hover:bg-brand-primary transition-all opacity-0 group-hover:opacity-100 z-20"
                aria-label="Next Slide"
            >
                <ChevronRight size={32} />
            </button>
        </div>
    );
};

const VerseItem: React.FC<{ verse: Verse }> = ({ verse }) => {
    // Base text color
    const baseClass = "inline relative px-1 py-0.5 transition-all duration-500 hover:bg-white/5 rounded";
    
    // Highlight styles
    const highlightClass = "bg-brand-accent/20 text-brand-highlight font-medium rounded shadow-[0_0_10px_rgba(234,179,8,0.1)] decoration-brand-accent/30 underline underline-offset-4 decoration-2";
    
    // Special highlight is more intense
    const specialHighlightClass = "bg-brand-primary/20 text-brand-highlightStrong font-bold border-b-2 border-brand-primary shadow-[0_0_15px_rgba(59,130,246,0.2)] px-1 rounded mx-1";

    if (verse.hasSpecialHighlight) {
        return (
            <span className="inline leading-loose">
                <sup className="text-[0.65rem] md:text-xs text-slate-500 mr-1 font-sans select-none">{verse.number}</sup>
                <span className={verse.isHighlighted ? highlightClass : baseClass}>
                    {verse.preSpecial}
                </span>
                <motion.span 
                    initial={{ backgroundColor: "rgba(59,130,246,0)" }}
                    animate={{ backgroundColor: "rgba(59,130,246,0.15)" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className={specialHighlightClass}
                >
                    {verse.specialPhrase}
                </motion.span>
                <span className={verse.isHighlighted ? highlightClass : baseClass}>
                    {verse.postSpecial}
                </span>
                {" "}
            </span>
        );
    }

    return (
        <span className="inline leading-loose">
             <sup className="text-[0.65rem] md:text-xs text-slate-500 mr-1 font-sans select-none">{verse.number}</sup>
             <span className={verse.isHighlighted ? highlightClass : baseClass}>
                {verse.text}
             </span>
             {" "}
        </span>
    );
};