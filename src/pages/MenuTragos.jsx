import React from 'react';
import menuData from '../data/menu.json';
import { Link } from 'react-router-dom';

export default function MenuTragos() {
  const tragos = menuData.tragos || [];

  return (
    <div className="min-h-screen bg-brand-light p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <Link to="/" className="text-brand-terra font-bold hover:underline mb-4 inline-block">&larr; Volver al Inicio</Link>
          <h1 className="text-4xl md:text-5xl text-brand-terra text-stroke-comic uppercase font-display tracking-wider">Tragos y Cervezas</h1>
        </header>

        {tragos.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-3xl text-brand-brown border-b-4 border-brand-terra pb-2 mb-6 uppercase inline-block font-display text-stroke-comic !text-brand-terra">
              {section.section}
            </h2>
            <div className="flex flex-col gap-6">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex gap-4 items-start border-b border-brand-brown/20 pb-4">
                  {/* Placeholder Image Container */}
                  <div className="w-24 h-24 shrink-0 bg-brand-ochre/20 rounded-xl border-2 border-brand-blue flex items-center justify-center overflow-hidden">
                    <svg className="w-8 h-8 text-brand-terra/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0V17a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5z"></path>
                    </svg>
                  </div>
                  
                  {/* Content Container */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-xl font-bold text-brand-dark leading-tight">{item.name}</h3>
                      <div className="font-bold text-brand-terra text-xl bg-brand-terra/10 px-3 py-1 rounded shrink-0 box-shadow-comic border border-brand-terra/20">
                        ${item.price.toLocaleString('es-AR')}
                      </div>
                    </div>
                    {item.description && <p className="text-brand-brown/80 mt-2 italic font-medium text-sm leading-snug">{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
