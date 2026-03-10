import { motion } from "framer-motion";
import { GlitchText } from "../ui/GlitchText";

const projects = [
    {
        title: "On-Device AI Knowledge Graph & Search",
        description: "A privacy-first web application that transforms browsing history into an interactive, visual knowledge graph. Engineered a 100% in-browser AI system using Gemini Nano for on-device content summarization. Integrated pglite and pgvector to create a local-first vector database for powerful semantic search directly in the browser.",
        tech: ["Gemini Nano AI", "pglite", "pgvector", "Vector DB"],
        link: "#"
    },
    {
        title: "Cognitive AI Chrome Extension",
        description: "Built a privacy-first browser extension using Chrome's built-in Gemini Nano AI for on-device text adaptation. Developed sophisticated prompts for features like 'Simplify Complex Ideas' and 'Better Visual Organization', demonstrating local LLM capability to restructure content and reduce cognitive load securely.",
        tech: ["Chrome AI", "Prompt API", "JavaScript", "Local LLM"],
        link: "#"
    },
    {
        title: "NSE Stock Tokenisation",
        description: "Led full-stack development of a blockchain-based share tokenisation system that reduced NSE trade settlement from T+3 days to near-instant. Selected for the NSE Incubator Program after winning 1st Runner-Up at the UoN/NSE Hedera Hackathon.",
        tech: ["React", "Hedera Hashgraph", "Node.js", "Smart Contracts"],
        link: "#"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 relative border-t border-white/10 z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="flex items-end mb-16"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-4xl md:text-6xl font-syncopate font-bold uppercase leading-none">
                        Projects
                    </h2>
                    <span className="text-neon text-xl md:text-3xl ml-4 font-mono mb-1">/ SYSTEM_DUMP</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`border border-white/10 p-8 flex flex-col group relative overflow-hidden bg-obsidian ${index === 0 ? "md:col-span-2 md:p-12 hover:border-magenta/50" : "hover:border-neon/50"} transition-colors bg-opacity-50`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="absolute top-0 right-0 p-4 text-white/[0.03] group-hover:text-white/[0.08] transition-colors font-syncopate text-[8rem] leading-none pointer-events-none z-0">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <h3 className="text-2xl md:text-3xl font-syncopate font-bold uppercase mb-4 relative z-10 w-fit leading-tight mt-6">
                                <GlitchText text={project.title} />
                            </h3>

                            <p className="font-mono text-sm text-white/70 leading-relaxed mb-12 relative z-10 mt-2 max-w-3xl">
                                {project.description}
                            </p>

                            <div className="mt-auto flex flex-col xl:flex-row justify-between xl:items-end gap-6 relative z-10">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-mono border border-white/10 px-3 py-1 text-white/80 bg-white/[0.02]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.link !== "#" ? (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="text-xs font-mono border border-white/20 px-6 py-3 hover:bg-white hover:text-obsidian transition-colors whitespace-nowrap uppercase w-fit">
                                        [ Launch Project ]
                                    </a>
                                ) : (
                                    <span className="text-xs font-mono border border-white/5 px-6 py-3 text-white/30 uppercase w-fit cursor-not-allowed">
                                        [ Source Confined ]
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
