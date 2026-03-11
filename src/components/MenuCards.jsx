import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const cards = [
  { title: "Nuestros Platos", path: "/menu", color: "bg-brand-brown", textColor: "text-brand-cream", rotate: "-rotate-2" },
  { title: "Menú Mediodía", path: "/mediodia", color: "bg-brand-terra", textColor: "text-brand-cream", rotate: "rotate-2" },
  { title: "Vinos", path: "/vinos", color: "bg-brand-cream", textColor: "text-brand-brown", rotate: "-rotate-1" },
  { title: "Tragos y Birras", path: "/tragos", color: "bg-brand-blue", textColor: "text-brand-ochre", rotate: "rotate-3" }
];

export default function MenuCards() {
  return (
    <section id="menus" className="py-24 bg-brand-cream w-full">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl text-center font-black !text-brand-terra text-stroke-comic mb-16 uppercase font-display">
          Nuestros Menúes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                boxShadow: "10px 10px 0px 0px var(--color-brand-blue)" 
              }}
              className={`${card.color} ${card.rotate} p-10 rounded-2xl flex items-center justify-center box-shadow-comic transition-all cursor-pointer border-4 border-brand-blue`}
            >
              <Link to={card.path} className="w-full h-full text-center flex items-center justify-center">
                <h3 className={`text-3xl md:text-4xl font-black uppercase text-center font-display tracking-wide ${card.textColor}`}>{card.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
