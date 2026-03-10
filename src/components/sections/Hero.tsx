import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-6 relative pt-20">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-syncopate font-bold uppercase leading-[0.9] tracking-tighter mb-4 mix-blend-difference selection:bg-transparent">
                        PATRICK<br />
                        <span className="text-neon ml-8 md:ml-32 md:inline-block mt-2">OJIAMBO</span>
                    </h1>
                </motion.div>

                <motion.div
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 md:mt-24 border-t border-white/20 pt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <div className="max-w-md">
                        <p className="font-mono text-sm md:text-base text-white/80 leading-relaxed mb-6 selection:bg-magenta">
                            Full Stack Developer & Web3 Engineer specializing in AI Agent systems.
                            Architecting uncompromising digital infrastructure from Nairobi, Kenya.
                        </p>
                        <div className="flex space-x-4 font-mono text-xs text-neon mt-4">
                            <a href="https://github.com/PatrickOjiambo" target="_blank" rel="noreferrer" className="hover:text-magenta transition-colors">[ GITHUB ]</a>
                            <a href="mailto:patrickojiambo206@gmail.com" className="hover:text-magenta transition-colors">[ EMAIL ]</a>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-0 font-mono text-xs md:text-right opacity-50 uppercase grid grid-cols-2 gap-x-8 gap-y-2">
                        <span>[ SYS ]</span><span className="text-neon font-bold">OPTIMAL</span>
                        <span>[ LOC ]</span><span>NAIROBI_KE</span>
                        <span>[ ROLE ]</span><span>DEV /// AI</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
