import React from 'react';
import { motion } from 'framer-motion';

import bomb1 from '../src/assets/bomb1.png'
import bomb2 from '../src/assets/bomb2.png'
import bomb3 from '../src/assets/bomb3.png'
import bomb4 from '../src/assets/bomb4.png'
import bomb5 from '../src/assets/bomb5.png'
import bomb6 from '../src/assets/bomb6.png'
import bomb7 from '../src/assets/bomb7.png'
import bomb8 from '../src/assets/bomb8.png'
import bomb9 from '../src/assets/bomb9.png'
import bomb10 from '../src/assets/bomb10.png'
import bomb11 from '../src/assets/bomb11.png'
import bomb12 from '../src/assets/bomb12.png'
import bomb13 from '../src/assets/bomb13.png'
import bomb14 from '../src/assets/bomb14.png'
import bomb15 from '../src/assets/bomb15.png'
import bomb16 from '../src/assets/bomb16.png'
import bomb17 from '../src/assets/bomb17.png'


// The array of items you want to display in the ticker
const tickerItems = [
    { src: bomb1, alt: "Cokeholic" },
    { src: bomb2, alt: "Sunrise" },
    { src: bomb3, alt: "Mango Tango" },
    { src: bomb4, alt: "Mean Girls" },
    { src: bomb5, alt: "Dawgs Gold" },
    { src: bomb6, alt: "Georgia Peach" },
    { src: bomb7, alt: "Waikiki Bomb" },
    { src: bomb8, alt: "Mystery White" },
    { src: bomb9, alt: "Diet Green T" },
    { src: bomb10, alt: "Cranberry" },
    { src: bomb11, alt: "Shark Attack" },
    { src: bomb12, alt: "Sake Mama" },
    { src: bomb13, alt: "Snow White" },
    { src: bomb14, alt: "Bullseye" },
    { src: bomb15, alt: "Sakerita" },
    { src: bomb16, alt: "Kamikaze" },
    { src: bomb17, alt: "Hot Tox" },
];

const Ticker = () => {
  // We need to duplicate the items to create the seamless scrolling effect
  const extendedItems = [...tickerItems, ...tickerItems];

  const tickerVariants = {
    animate: {
        x: [0, '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50, // Increased duration for a smoother, slower scroll
          ease: "linear",
        },
      },
    },
  };

 return (
    <div className="w-full flex overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap items-center gap-4 md:gap-8" // Smaller gap on mobile
        variants={tickerVariants}
        animate="animate"
      >
        {extendedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-48 md:w-80"> {/* Smaller width on mobile */}
            <img src={item.src} alt={item.alt} className="w-full h-auto" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;