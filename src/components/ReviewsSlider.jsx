import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const reviews = [
  { text: "Excelente atención y la comida buenísima. Precios acordes. Vuelvo seguro.", author: "Juan P." },
  { text: "Lugar re lindo ambientado, la comida muy rica y porciones abundantes. El flan mixto es un 10.", author: "María G." },
  { text: "Un clásico de Saavedra que no falla. La milanesa de bife de chorizo es espectacular.", author: "Carlos M." },
];

export default function ReviewsSlider() {
  return (
    <section className="py-24 bg-brand-cream w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-brand-terra mb-16 uppercase text-center font-display tracking-wide text-stroke-comic">
          Lo que dicen de nosotros
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-brand-light p-10 border-4 border-brand-blue box-shadow-comic relative mt-6 md:mt-0 flex flex-col justify-between"
            >
              <div className="absolute -top-8 -left-4 text-8xl text-brand-ochre font-serif leading-none tracking-tighter">"</div>
              
              <div className="mb-8 relative z-10 pt-4">
                <p className="text-xl font-medium text-brand-dark leading-relaxed">
                  {review.text}
                </p>
              </div>
              
              <div className="flex flex-col gap-2 mt-auto border-t-2 border-brand-terra/20 pt-6">
                <div className="flex text-brand-ochre text-xl">
                  ★★★★★
                </div>
                <p className="font-bold text-brand-brown uppercase text-sm tracking-widest">
                  — {review.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
