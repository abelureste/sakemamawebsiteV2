import React from 'react';
import { motion } from 'framer-motion';

// The array of items you want to display in the ticker
const tickerItems = [
    "Sunrise", 
    "Mango Tango", 
    "MEANGirls", 
    "DAWGSGold", 
    "Georgia Peach",
    "Waikiki Bomb",
    "MYSTERY WHITE",
    "BloodyMelon",
    "CokeHOLIC",
    "GreenT",
    "Cranberry",
    "SHARK ATTACK", 
    "SAKE MAMA", 
    "Snow White",
    "BULLSEYE",
    "SAKERITA",
    "KAMIKAZE",
    "HOT TOX",
    "Sunrise", 
    "Mango Tango", 
    "MEANGirls", 
    "DAWGSGold", 
    "Georgia Peach",
    "Waikiki Bomb",
    "MYSTERY WHITE",
    "BloodyMelon",
    "CokeHOLIC",
    "GreenT",
    "Cranberry",
    "SHARK ATTACK", 
    "SAKE MAMA", 
    "Snow White",
    "BULLSEYE",
    "SAKERITA",
    "KAMIKAZE",
    "HOT TOX",
    "Sunrise", 
    "Mango Tango", 
    "MEANGirls", 
    "DAWGSGold", 
    "Georgia Peach",
    "Waikiki Bomb",
    "MYSTERY WHITE",
    "BloodyMelon",
    "CokeHOLIC",
    "GreenT",
    "Cranberry",
    "SHARK ATTACK", 
    "SAKE MAMA", 
    "Snow White",
    "BULLSEYE",
    "SAKERITA",
    "KAMIKAZE",
    "HOT TOX",
];

const Ticker = () => {
  // We need to duplicate the items to create the seamless scrolling effect
  const extendedItems = [...tickerItems, ...tickerItems];

  const tickerVariants = {
    animate: {
      x: [0, -100 * tickerItems.length / extendedItems.length + '%'], // Move from start to the end of the original list
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 45, // Adjust duration for speed
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full bg-gray-500 py-3 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        variants={tickerVariants}
        animate="animate"
      >
        {extendedItems.map((item, index) => (
          <span key={index} className="mx-4 text-white text-shadow-md text-shadow-white sm:py-4 sm:text-5xl">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;