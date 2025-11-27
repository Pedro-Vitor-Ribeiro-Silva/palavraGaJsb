
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Swords, Droplets, Drama } from 'lucide-react';

interface SlideData {
    id: string;
    type: string;
    title: string;
    subtitle?: string;
    content?: string;
    quote?: string;
    summary?: string;
    items?: { icon: string; text: string }[];
}

interface Props {
    slide: SlideData;
    onNext: () => void;
    onPrev: () => void;
}

export const SlideRenderer: React.FC<Props> = ({ slide }) => {
    switch (slide.type) {
        case 'intro':
            return (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 md:space-y-8">
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full"
                    >
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-brand-primary to-brand-accent opacity-30 blur-2xl rounded-full"></div>
                        <h1 className="relative text-4xl sm:text-5xl md:text-8xl font-serif font-bold text-white tracking-tight text-shadow-lg px-2">
                            {slide.title}
                        </h1>
                    </motion.div>
                    <motion.h2 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-3xl text-brand-accent font-light tracking-widest uppercase"
                    >
                        {slide.subtitle}
                    </motion.h2>
                </div>
            );

        case 'content':
            return (
                <div className="h-full flex flex-col justify-center max-w-5xl mx-auto overflow-y-auto custom-scroll px-1 md:px-0">
                    <div className="py-2 md:py-6">
                        <motion.h2 
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-accent mb-4 md:mb-8 font-serif leading-tight"
                        >
                            {slide.title}
                        </motion.h2>
                        
                        <div className="space-y-4 md:space-y-8">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-base sm:text-lg md:text-2xl text-slate-200 leading-relaxed whitespace-pre-line font-sans border-l-2 md:border-l-4 border-slate-600 pl-4 md:pl-6"
                            >
                                {slide.content}
                            </motion.div>

                            {slide.quote && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-brand-primary/10 p-4 md:p-6 rounded-xl border border-brand-primary/20"
                                >
                                    <p className="text-brand-highlight text-lg md:text-xl italic font-serif">
                                        {slide.quote}
                                    </p>
                                </motion.div>
                            )}

                            {slide.summary && (
                                <motion.div 
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-4 md:mt-8 text-center pb-4"
                                >
                                    <p className="text-lg md:text-2xl font-bold text-white bg-gradient-to-r from-brand-primary to-purple-600 bg-clip-text text-transparent">
                                        {slide.summary}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            );

        case 'list':
            return (
                <div className="h-full flex flex-col items-center justify-center max-w-4xl mx-auto overflow-y-auto custom-scroll">
                    <motion.h2 
                         initial={{ y: -30, opacity: 0 }}
                         animate={{ y: 0, opacity: 1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-12 font-serif text-center border-b-2 border-brand-accent pb-2 md:pb-4 inline-block shrink-0"
                    >
                        {slide.title}
                    </motion.h2>
                    <div className="grid gap-3 md:gap-6 w-full pb-4">
                        {slide.items?.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center p-3 md:p-4 bg-slate-800/60 rounded-xl border border-slate-700 hover:border-brand-accent transition-colors group"
                            >
                                <div className="p-2 md:p-3 bg-slate-900 rounded-lg mr-3 md:mr-4 text-brand-accent group-hover:scale-110 transition-transform shrink-0">
                                    {getIcon(item.icon)}
                                </div>
                                <span className="text-base md:text-xl text-slate-100 font-medium leading-tight">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            );

        default:
            return <div>Unknown Slide Type</div>;
    }
};

const getIcon = (name: string) => {
    const iconSize = typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 24;
    
    switch(name) {
        case 'heart': return <Heart size={iconSize} fill="currentColor" />;
        case 'sword': return <Swords size={iconSize} />;
        case 'droplet': return <Droplets size={iconSize} />;
        case 'mask': return <Drama size={iconSize} />;
        default: return <div />;
    }
};
