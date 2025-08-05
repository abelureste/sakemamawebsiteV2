import { motion } from 'framer-motion'

const AuroraLight = ({ id, top, left, duration, color }) => {
    return (
        <motion.div
            key={`aurora-${id}`}
            initial={{ opacity: 0, top, left }}
            animate={{
                opacity: [0, 0.5, 0.6, 0.5, 0],
                x: [0, Math.random() * 400 - 200, 0],
                y: [0, Math.random() * 400 - 200, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
                delay: Math.random() * 2,
            }}
            style={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`,
                filter: 'blur(120px)',
                mixBlendMode: 'screen', // 'screen' or 'overlay' can create nice effects
            }}
        />
    );
};

export default AuroraLight