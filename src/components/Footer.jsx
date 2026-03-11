import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[400px]" id="contacto">
      {/* Map Mockup / Area */}
      <div className="bg-brand-cream w-full h-64 md:h-full relative overflow-hidden flex items-center justify-center p-8">
        <iframe 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60 mix-blend-darken filter grayscale-[30%] contrast-125" 
          src="https://maps.google.com/maps?q=Caudillo+Bar,+Cramer+3198,+CABA&t=&z=16&ie=UTF8&iwloc=&output=embed" 
          frameBorder="0" 
          allowFullScreen 
          aria-hidden="false" 
          tabIndex="0"
        ></iframe>
        <div className="absolute inset-0 bg-brand-terra/10 pointer-events-none mix-blend-color"></div>
        <a 
          href="https://www.google.com/maps/place/Caudillo+Bar/data=!4m2!3m1!1s0x0:0x4258d795fdd55b8c?sa=X&ved=1t:2428&ictx=111"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 bg-brand-terra text-brand-cream p-8 border-4 border-brand-blue box-shadow-comic text-center max-w-sm -rotate-2 hover:rotate-0 transition-transform cursor-pointer group block"
        >
          <h3 className="font-display font-bold uppercase text-3xl mb-2 group-hover:underline">Visitanos en</h3>
          <p className="font-bold text-xl uppercase tracking-wider text-brand-ochre flex items-center justify-center gap-2">
            📍 Crámer 3198, Saavedra
          </p>
          <p className="text-sm mt-4 font-semibold opacity-90">(Click para abrir Google Maps)</p>
        </a>
      </div>

      {/* Info & Contact */}
      <div className="bg-brand-blue text-brand-cream p-10 md:p-16 flex flex-col justify-center">
        <div className="mb-10">
          <img src="/logo-negativo-rojo.png" alt="Caudillo" className="h-[90px] w-auto drop-shadow-md" />
        </div>
        
        <div className="space-y-6 text-xl">
          <p className="font-medium flex items-center gap-4">
            <span className="text-brand-ochre text-2xl">📍</span> <span className="font-bold">Crámer 3198, Saavedra</span>
          </p>
          <div className="font-medium flex items-start gap-4">
            <span className="text-brand-ochre text-2xl">🕒</span> 
            <div>
              <p className="font-bold mb-1">Mediodía: <span className="text-brand-cream/80 font-normal">12:00 a 16:00 hs</span></p>
              <p className="font-bold">Tarde/Noche: <span className="text-brand-cream/80 font-normal">19:00 a 23:30 hs</span></p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-cream/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold uppercase tracking-widest text-brand-ochre">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#menus" className="hover:text-brand-terra transition-colors">Menú</a>
            <a href="#delivery" className="hover:text-brand-terra transition-colors">Delivery</a>
            <a href="/reservas" className="hover:text-brand-terra transition-colors">Reservas</a>
            <a href="https://www.instagram.com/caudillobar" target="_blank" rel="noopener noreferrer" className="hover:text-brand-terra transition-colors">Instagram</a>
          </div>
          <p className="mt-4 md:mt-0 text-xs text-brand-cream/60 tracking-[0.2em] lowercase">design by soga</p>
        </div>
      </div>
    </footer>
  );
}
