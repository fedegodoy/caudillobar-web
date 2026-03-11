import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const instaPosts = [
  { img: "/images/afiche2.jpg", link: "https://instagram.com/caudillobar" },
  { img: "/images/afiche3.jpg", link: "https://instagram.com/caudillobar" },
  { img: "/images/afiche4.jpg", link: "https://instagram.com/caudillobar" },
  { img: "/images/placa_noches_criollas_1.png", link: "https://instagram.com/caudillobar" },
];

export default function InstaGrid() {
  return (
    <section className="py-24 bg-brand-terra w-full relative overflow-hidden">
      {/* Decorative abstract shape */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light rounded-full mix-blend-overlay blur-3xl opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-brand-cream text-stroke-comic uppercase max-w-lg font-display tracking-wide">
            Seguinos en Instagram
          </h2>
          <a
            href="https://instagram.com/caudillobar"
            target="_blank" rel="noreferrer"
            className="mt-8 md:mt-0 bg-brand-cream text-brand-terra font-bold text-xl px-10 py-4 rounded-full hover:scale-105 transition-transform box-shadow-comic flex items-center gap-3 border-4 border-brand-blue"
          >
            <span className="text-2xl">📸</span> @caudillobar
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {instaPosts.map((post, idx) => (
            <motion.a
              key={idx}
              href={post.link}
              target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2, boxShadow: "8px 8px 0px 0px var(--color-brand-blue)" }}
              className="block aspect-square overflow-hidden bg-brand-blue border-4 border-brand-blue box-shadow-comic relative group rounded-xl"
            >
              <img src={post.img} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-0 sm:grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-brand-terra/0 group-hover:bg-brand-terra/60 transition-colors flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100">
                <span className="text-brand-cream font-black text-xl uppercase tracking-widest drop-shadow-md border-2 border-brand-cream px-6 py-2 rounded-lg bg-brand-blue/80">Ver Post</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
