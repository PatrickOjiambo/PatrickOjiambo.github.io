import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 border-2 border-neon rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
            animate={{
                x: mousePosition.x - 12,
                y: mousePosition.y - 12,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        />
    );
};
