import React from 'react';
import { motion } from 'framer-motion';

import beer1 from '../src/assets/beer1.png'
import beer2 from '../src/assets/beer2.png'
import beer3 from '../src/assets/beer3.png'
import beer4 from '../src/assets/beer4.png'
import beer5 from '../src/assets/beer5.png'
import beer6 from '../src/assets/beer6.png'
import beer7 from '../src/assets/beer7.png'
import beer8 from '../src/assets/beer8.png'
import beer9 from '../src/assets/beer9.png'
import beer10 from '../src/assets/beer10.png'

// The array of items you want to display in the ticker
const tickerItems = [
    { src: beer1, alt: "Cokeholic" },
    { src: beer2, alt: "Cokeholic" },
    { src: beer3, alt: "Cokeholic" },
    { src: beer4, alt: "Cokeholic" },
    { src: beer5, alt: "Cokeholic" },
    { src: beer6, alt: "Cokeholic" },
    { src: beer7, alt: "Cokeholic" },
    { src: beer8, alt: "Cokeholic" },
    { src: beer9, alt: "Cokeholic" },
    { src: beer10, alt: "Cokeholic" },
];

const TickerBeer = () => {
  // We need to duplicate the items to create the seamless scrolling effect
  const extendedItems = [...tickerItems, ...tickerItems];

  const tickerVariants = {
    animate: {
        x: ['-50%', 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // Increased duration for a smoother, slower scroll
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full flex backdrop-blur-2xl overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap items-center gap-8"
        variants={tickerVariants}
        animate="animate"
      >
        {extendedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-80">
            <img src={item.src} alt={item.alt} className="w-full h-auto" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TickerBeer;