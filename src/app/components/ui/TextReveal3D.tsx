import { motion } from 'motion/react';

interface TextReveal3DProps {
    text: string;
    className?: string;
    delay?: number;
}

export function TextReveal3D({ text, className = '', delay = 0 }: TextReveal3DProps) {
    // Split text into words, then words into characters for granular animation
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay * 0.1
            },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90, // Start rotated backwards in 3D space
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ display: 'flex', flexWrap: 'wrap', perspective: '1000px' }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ marginRight: '0.25em', display: 'inline-flex', whiteSpace: 'nowrap' }}>
                    {Array.from(word).map((letter, index) => (
                        <motion.span
                            key={`${wordIndex}-${index}`}
                            variants={child}
                            style={{ display: 'inline-block', transformOrigin: '50% 100% -50px', whiteSpace: 'pre' }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.div>
    );
}
