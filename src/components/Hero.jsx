import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full bg-brand-cream flex flex-col items-center justify-center overflow-hidden">
      {/* Background Graphic/Pattern Placeholder */}
      <div className="absolute inset-0 bg-[url('/images/afiches_comic_caudillo_2.png')] bg-cover bg-center opacity-30"></div>
      

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        className="z-10 text-center px-4"
      >
        <p className="mt-6 text-3xl md:text-5xl text-brand-cream font-bold bg-brand-terra inline-block px-8 py-4 -rotate-2 box-shadow-comic font-display tracking-wide uppercase">
          De Saavedra al mundo
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20"
      >
        <span className="text-brand-cream font-bold mb-2 uppercase text-sm tracking-widest bg-brand-terra border-2 border-brand-blue px-6 py-2 rounded-full shadow-[2px_2px_0px_#14294a]">
          Escroleá para ver más
        </span>
        <svg className="w-8 h-8 text-brand-blue drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}
