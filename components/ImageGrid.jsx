import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import sakeimg1 from "../src/assets/sakeimg1.JPG"
import sakeimg2 from "../src/assets/sakeimg2.JPG"
import sakeimg3 from "../src/assets/sakeimg3.JPG"
import sakeimg4 from "../src/assets/sakeimg4.JPG"
import sakeimg5 from "../src/assets/sakeimg5.JPG"
import sakeimg6 from "../src/assets/sakeimg6.JPG"

import sakedance from "../src/assets/sakedance.gif"
import sakedance2 from "../src/assets/sakedance2.gif"

// A reusable component for each grid item with its own animation logic
const GridItem = ({ src, alt, id }) => {
  // Animation variants for Framer Motion. This defines *how* the item animates.
  const itemVariants = {
    // Initial state before the animation starts
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    // State when the element is in view
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    // The 'variants' prop is inherited from the parent motion component.
    <motion.div
      className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg"
      variants={itemVariants}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        // Fallback placeholder image in case the primary src fails
        onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x600/e2e8f0/4a5568?text=Image+${id}`}}
      />
    </motion.div>
  );
};

// This component now controls the animation for all its children.
const ImageGrid = () => {
  // Array of image data for the grid.
  const images = [
    { id: 1, src: sakedance },
    { id: 2, src: sakeimg2 },
    { id: 3, src: sakeimg6 },
    { id: 4, src: sakeimg4 },
    { id: 5, src: sakeimg5 },
    { id: 6, src: sakedance2 },
  ];
  // Ref to track when the grid itself is in view.
  const ref = useRef(null);
  // Trigger animation when 20% of the grid is visible.
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Variants for the container to orchestrate the staggered animation.
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        // Each child will animate 0.2 seconds after the previous one.
        staggerChildren: 0.2
      }
    }
  };

  return (
    // The main grid container is now a motion.div that controls its children.
    <motion.div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {images.map((image) => (
        <motion.div
            whileHover={{
             scale: 1.03,
             rotate: -4,
          }}
            whileTap={{
              scale: 1.03,
              rotate: -4,
          }}
            transition={{
              type: 'spring',
              stiffness: 300,
          }}
        >
          <GridItem key={image.id} src={image.src} alt={image.alt} id={image.id} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImageGrid;