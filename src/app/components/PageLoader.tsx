import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface PageLoaderProps {
    onLoadingComplete: () => void;
}

export function PageLoader({ onLoadingComplete }: PageLoaderProps) {
    const [exit, setExit] = useState(false);

    useEffect(() => {
        // Simulate initial asset loading
        const timer = setTimeout(() => {
            setExit(true);
            setTimeout(onLoadingComplete, 800); // Wait for exit animation
        }, 2000);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={exit ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`fixed inset-0 z-[60] flex items-center justify-center bg-[#28708F] transition-all duration-800 ${exit ? 'pointer-events-none' : ''}`}
        >
            <div className="relative flex flex-col items-center">
                <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    src="/logowithouttagline.webp"
                    alt="Loading..."
                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-8"
                />
                <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                        className="w-full h-full bg-yellow-400"
                    />
                </div>
            </div>
        </motion.div>
    );
}
