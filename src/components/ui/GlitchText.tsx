import { motion } from "framer-motion";

export const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => {
    return (
        <div className={`relative inline-block ${className} group`}>
            <span className="relative z-10">{text}</span>
            <motion.span
                className="absolute top-0 left-[2px] -ml-[2px] w-full h-full text-neon opacity-70 z-0 hidden group-hover:block"
                animate={{
                    x: [-2, 2, -1, 1, 0],
                    y: [1, -1, 2, -2, 0],
                }}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatType: "mirror"
                }}
            >
                {text}
            </motion.span>
            <motion.span
                className="absolute top-0 -left-[2px] ml-[2px] w-full h-full text-magenta opacity-70 z-0 hidden group-hover:block"
                animate={{
                    x: [2, -2, 1, -1, 0],
                    y: [-1, 1, -2, 2, 0],
                }}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: 0.05
                }}
            >
                {text}
            </motion.span>
        </div>
    );
};
