import { motion } from 'framer-motion';

const WavyText = ({ text, className = "" }) => {
    const letters = Array.from(text);

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { type: "spring" },
        },
    };

    const letterVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                // Initial pop-in animation for each letter
                delay: i * 0.025,
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        }),
    };
    
    // Separate variant for the continuous wave animation
    const waveVariant = {
        wave: (i) => ({
            y: [0, -6, 0],
            transition: {
                // The delay for each letter's wave is calculated based on its index
                delay: i * 0.05,
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
            },
        }),
    };

    return (
        <motion.div
            className={`flex justify-center overflow-hidden ${className}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {letters.map((letter, index) => (
                // This motion.span handles the initial staggered appearance
                <motion.span
                    key={`${letter}-${index}-initial`}
                    custom={index}
                    variants={letterVariants}
                >
                    {/* This nested motion.span handles the continuous wave */}
                    <motion.span
                        key={`${letter}-${index}-wave`}
                        custom={index}
                        variants={waveVariant}
                        animate="wave"
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                </motion.span>
            ))}
        </motion.div>
    );
};

export default WavyText