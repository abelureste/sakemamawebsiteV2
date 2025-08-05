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
    { src: bomb1, alt: "Sake Bomb 1" },
    { src: bomb2, alt: "Sake Bomb 1" },
    { src: bomb3, alt: "Sake Bomb 1" },
    { src: bomb4, alt: "Sake Bomb 1" },
    { src: bomb5, alt: "Sake Bomb 1" },
    { src: bomb6, alt: "Sake Bomb 1" },
    { src: bomb7, alt: "Sake Bomb 1" },
    { src: bomb8, alt: "Sake Bomb 1" },
    { src: bomb9, alt: "Sake Bomb 1" },
    { src: bomb10, alt: "Sake Bomb 1" },
    { src: bomb11, alt: "Sake Bomb 1" },
    { src: bomb12, alt: "Sake Bomb 1" },
    { src: bomb13, alt: "Sake Bomb 1" },
    { src: bomb14, alt: "Sake Bomb 1" },
    { src: bomb15, alt: "Sake Bomb 1" },
    { src: bomb16, alt: "Sake Bomb 1" },
    { src: bomb17, alt: "Sake Bomb 1" },
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
          duration: 5, // Adjust duration for speed
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full backdrop-blur-2xl py-3 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap items-center gap-8" // Use gap for consistent spacing
        variants={tickerVariants}
        animate="animate"
      >
        {extendedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-80"> {/* Use a fixed width */}
            <img src={item.src} alt={item.alt} className="w-full h-auto" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;