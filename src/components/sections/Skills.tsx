import { motion } from "framer-motion";

const skills = {
    LANGUAGES: ["TypeScript", "JavaScript", "Python", "SQL", "Rust", "Go"],
    BACKEND: ["Node.js", "NestJS", "FastAPI", "Django", "GraphQL", "REST APIs"],
    FRONTEND: ["React", "Next.js", "React Native", "TailwindCSS", "Framer Motion"],
    DATABASES: ["PostgreSQL", "MongoDB", "MySQL", "pgvector", "Redis"],
    OPS: ["Docker", "AWS", "GitHub Actions", "CI/CD", "Linux"]
};

// Merged the array to be concise and high-impact.
const achievements = [
    "1ST PLACE / Kenya ReInsurance AI Hackathon 2025",
    "1ST PLACE / Africa Blockchain Championship 2025",
    "1ST RUNNER-UP / NSE Hedera Hackathon 2025",
    "1ST RUNNER-UP / Connected Africa Award 2025",
    "1ST PLACE / UoN Algorand Hackathon 2024",
    "1ST PLACE / Algorand Global Hackathon 2023",
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 relative border-t border-white/10 z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Skills Column */}
                <div className="lg:w-1/2">
                    <motion.div
                        className="flex items-end mb-16"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-4xl md:text-6xl font-syncopate font-bold uppercase leading-none">
                            Skills
                        </h2>
                        <span className="text-neon text-xl md:text-3xl ml-4 font-mono mb-1">/ PROTOCOLS</span>
                    </motion.div>

                    <div className="space-y-12">
                        {Object.entries(skills).map(([category, items], idx) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <h3 className="font-mono text-white/50 text-sm mb-4 border-b border-white/10 pb-2">
                                    [{category}]
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((item, i) => (
                                        <span
                                            key={i}
                                            className="font-syncopate text-xs md:text-sm border border-white/20 px-4 py-2 hover:bg-neon hover:text-obsidian hover:border-neon transition-colors cursor-default backdrop-blur-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Achievements Column */}
                <div className="lg:w-1/2">
                    <motion.div
                        className="flex items-end mb-16"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-4xl md:text-6xl font-syncopate font-bold uppercase leading-none">
                            Awards
                        </h2>
                        <span className="text-magenta text-xl md:text-3xl ml-4 font-mono mb-1">/ WINS</span>
                    </motion.div>

                    <div className="flex flex-col border-l border-white/20 ml-2 pl-6 md:ml-4 md:pl-8 space-y-8 relative">
                        <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-magenta via-neon to-transparent opacity-50" />

                        {achievements.map((achievement, idx) => (
                            <motion.div
                                key={idx}
                                className="relative group"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 bg-obsidian border-2 border-magenta rounded-full group-hover:bg-magenta transition-colors" />
                                <p className="font-mono text-sm md:text-base text-white/80 group-hover:text-white group-hover:translate-x-2 transition-transform cursor-default">
                                    {achievement}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
