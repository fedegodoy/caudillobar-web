import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function DeliveryReservas() {
  return (
    <section className="bg-brand-terra py-24 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/patron_mosaico_crema.png')] mix-blend-overlay"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        
        {/* Delivery Block */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="delivery"
          className="bg-brand-cream p-10 md:p-14 rounded-3xl border-4 border-brand-blue box-shadow-comic flex flex-col items-center text-center group"
        >
          <div className="w-48 h-48 bg-brand-ochre rounded-full mb-8 border-4 border-brand-blue flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
             {/* Placeholder for Caudillo on Bike */}
             <span className="text-6xl">🚲</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black text-brand-terra text-stroke-comic uppercase font-display mb-4">
            Delivery
          </h3>
          
          <p className="text-xl md:text-2xl font-bold text-brand-blue mb-8">
            Pedí tu delivery al medio de la nada. Llegamos a Saavedra, Núñez y Belgrano.
          </p>
          
          <a 
            href="https://www.rappi.com.ar/restaurantes/259123-caudillo-bar" 
            target="_blank" 
            rel="noreferrer" 
            className="w-full bg-[#FF4C29] text-white px-8 py-5 rounded-2xl font-black text-2xl uppercase tracking-wider border-4 border-brand-blue box-shadow-comic hover:translate-y-1 hover:shadow-[2px_2px_0px_#14294a] transition-all"
          >
            Pedir por Rappi
          </a>
        </motion.div>

        {/* Reservas Block */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-brand-blue p-10 md:p-14 rounded-3xl border-4 border-brand-cream box-shadow-comic flex flex-col items-center text-center group"
        >
          <div className="w-48 h-48 bg-brand-terra rounded-full mb-8 border-4 border-brand-cream flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
             {/* Placeholder for Events/Toast Image */}
             <span className="text-6xl">🍻</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black text-brand-cream text-stroke-comic uppercase font-display mb-4">
            Eventos
          </h3>
          
          <p className="text-xl md:text-2xl font-bold text-brand-cream mb-8">
            Festejá tu cumple, despedida o juntada con nosotros. Armamos mesa en la vereda.
          </p>
          
          <Link 
            to="/reservas" 
            className="w-full bg-brand-cream text-brand-terra px-8 py-5 rounded-2xl font-black text-2xl uppercase tracking-wider border-4 border-brand-cream box-shadow-comic hover:translate-y-1 hover:shadow-[2px_2px_0px_#fff4e4] transition-all"
          >
            Reservar Mesa
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
