import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    width?: "fit-content" | "100%";
}

export function ScrollReveal({ children, delay = 0, width = "fit-content" }: ScrollRevealProps) {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
