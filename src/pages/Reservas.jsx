import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

export default function Reservas() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // NOTE: These are placeholder IDs for EmailJS. 
    // They need to be replaced with actual user credentials.
    const serviceID = 'service_caudillo'; 
    const templateID = 'template_reservas';
    const publicKey = 'YOUR_PUBLIC_KEY'; 

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', date: '', guests: '', message: '' });
      })
      .catch((error) => {
        console.error('Email error:', error);
        setStatus('error');
      });
  };

  return (
    <div className="bg-brand-cream min-h-screen text-brand-dark font-sans">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-brand-terra mb-4 uppercase tracking-wider text-stroke-comic">
            Reservá tu Evento
          </h1>
          <p className="text-xl md:text-2xl font-bold text-brand-blue max-w-2xl mx-auto">
            Cumpleaños, juntadas, despedidas o cualquier excusa para brindar. ¡Armamos la movida en Caudillo!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-brand-light p-8 md:p-12 rounded-2xl border-4 border-brand-blue box-shadow-comic"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-brand-blue mb-2">Tu Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-blue rounded-lg bg-white focus:outline-none focus:ring-4 focus:ring-brand-terra/50 transition-shadow"
                  placeholder="Juan Pérez"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-bold text-brand-blue mb-2">Tu Email o Teléfono</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-blue rounded-lg bg-white focus:outline-none focus:ring-4 focus:ring-brand-terra/50 transition-shadow"
                  placeholder="juan@ejemplo.com / 11 1234..."
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-lg font-bold text-brand-blue mb-2">Fecha Estimada</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-blue rounded-lg bg-white focus:outline-none focus:ring-4 focus:ring-brand-terra/50 transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="guests" className="block text-lg font-bold text-brand-blue mb-2">Cantidad de Invitados</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-blue rounded-lg bg-white focus:outline-none focus:ring-4 focus:ring-brand-terra/50 transition-shadow"
                  placeholder="Ej: 15"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-bold text-brand-blue mb-2">Contanos de qué se trata el evento</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-brand-blue rounded-lg bg-white focus:outline-none focus:ring-4 focus:ring-brand-terra/50 transition-shadow resize-none"
                placeholder="Es mi cumple de 30 y quiero reservar unas mesas..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full md:w-auto px-8 py-4 bg-brand-terra text-brand-cream font-black text-xl md:text-2xl uppercase tracking-wider rounded-xl border-4 border-brand-blue box-shadow-comic hover:translate-y-1 hover:shadow-[2px_2px_0px_#14294a] transition-all disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Enviando...' : 'Pedir Reserva'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 font-bold text-lg mt-4 text-center">¡Solicitud enviada! Nos vamos a contactar pronto.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-bold text-lg mt-4 text-center">Hubo un error al enviar el mail. Por favor, escribinos directo por Instagram.</p>
            )}
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
