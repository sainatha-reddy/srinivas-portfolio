import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

export function TiltCard({ children, className = '' }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Add spring physics to make the movement smoother
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

    // Map mouse position to rotation values (-15deg to 15deg)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

    const isTouch = useMediaQuery('(pointer: coarse)');

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current || isTouch) return;
        // ... (rest of mouse move logic remains same, but won't run if touch)

        // Get dimensions of the element
        const rect = ref.current.getBoundingClientRect();

        // Calculate mouse position relative to center of element (-0.5 to 0.5)
        // Left/Top edge = -0.5, Right/Bottom edge = 0.5
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const xPos = (e.clientX - centerX) / rect.width;
        const yPos = (e.clientY - centerY) / rect.height;

        // Constrain to slightly smaller area than full bounds for extreme corners
        x.set(Math.max(-0.5, Math.min(0.5, xPos)));
        y.set(Math.max(-0.5, Math.min(0.5, yPos)));
    };

    const handleMouseLeave = () => {
        // Reset back to center when mouse leaves
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            className={`relative rounded-[inherit] ${className}`}
        >
            {/* Inner container to pop out content visually */}
            <div
                style={{ transform: 'translateZ(50px)' }}
                className="w-full h-full rounded-[inherit]"
            >
                {children}
            </div>

            {/* Subtle glare effect that moves with the mouse */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-tr from-white/5 to-transparent opacity-0 mix-blend-overlay transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
                style={{
                    // We can map the background position to the inverse of the rotation for a cool fake lighting effect
                    backgroundPosition: useTransform(mouseXSpring, [-0.5, 0.5], ['0% 0%', '100% 100%'])
                }}
            />
        </motion.div>
    );
}
