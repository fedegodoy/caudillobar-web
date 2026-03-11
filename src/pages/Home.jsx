import React from 'react';
import Hero from '../components/Hero';
import MenuCards from '../components/MenuCards';
import ReviewsSlider from '../components/ReviewsSlider';
import InstaGrid from '../components/InstaGrid';
import Footer from '../components/Footer';
import DeliveryReservas from '../components/DeliveryReservas';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col w-full overflow-x-hidden">
      <Hero />
      <MenuCards />
      <DeliveryReservas />

      <ReviewsSlider />
      <InstaGrid />
      <Footer />
    </div>
  );
}
