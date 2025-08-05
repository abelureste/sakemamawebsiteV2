import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChevronLeftIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m15 18-6-6 6-6" />
    </svg>
);

const ChevronRightIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m9 18 6-6-6-6" />
    </svg>
);


// --- Reusable Image Carousel Component ---
const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const ImageCarousel = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We use the modulo operator to loop back to the first image
  const imageIndex = page % images.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative w-full aspect-[9/16] max-w-sm flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          alt={`Carousel image ${imageIndex + 1}`}
          custom={direction}
          variants={carouselVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {/* Next Button */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-black/40 p-1 rounded-full cursor-pointer hover:bg-black/60 transition-colors"
        onClick={() => paginate(1)}
      >
        <ChevronRightIcon className="text-white" />
      </div>

      {/* Previous Button */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-black/40 p-1 rounded-full cursor-pointer hover:bg-black/60 transition-colors"
        onClick={() => paginate(-1)}
      >
        <ChevronLeftIcon className="text-white" />
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setPage([i, i > (page % images.length) ? 1 : -1])}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${i === imageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel