import { motion } from "framer-motion";

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference"
        >
            <div className="font-syncopate font-bold text-xl tracking-tighter">
                <span className="text-neon">P</span>O.
            </div>
            <div className="font-mono text-xs md:text-sm hidden sm:flex space-x-6">
                <a href="#about" className="hover:text-neon transition-colors">ABOUT</a>
                <a href="#work" className="hover:text-neon transition-colors">WORK</a>
                <a href="#projects" className="hover:text-neon transition-colors">PROJECTS</a>
            </div>
        </motion.nav>
    );
};
