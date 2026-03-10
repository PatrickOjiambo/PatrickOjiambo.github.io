import { motion } from "framer-motion";

const experiences = [
    {
        company: "Zuse Technologies",
        role: "Software Developer",
        period: "MAR 2026 - PRESENT",
        tech: ["Next.js", "Gemini Live API", "Firebase", "Zustand"],
        details: [
            "Integrating Gemini Live API with WebSockets for real-time multimodal streaming.",
            "Implementing comprehensive authentication modules and optimizing application performance."
        ]
    },
    {
        company: "Kenya Reinsurance",
        role: "AI Automations Developer",
        period: "OCT 2025 - PRESENT",
        tech: ["Node.js", "Python", "RESTful APIs", "Microservices"],
        details: [
            "Designed a fully AI-powered automation platform, reducing facultative worksheet generation from days to minutes.",
            "Implemented secure access controls and handled System Integration Testing (SIT)."
        ]
    },
    {
        company: "OrionRamp",
        role: "Co-founder & Full Stack Dev",
        period: "SEP 2024 - PRESENT",
        tech: ["Node.js", "React", "Hedera", "Docker"],
        details: [
            "Co-founded and built an Onramp/Offramp fintech platform for DApps across Africa.",
            "Set up CI/CD pipelines and managed databases for high-volume transactions."
        ]
    },
    {
        company: "Poma Protocol",
        role: "Software Developer",
        period: "NOV 2024 - SEP 2025",
        tech: ["Next.js", "PostgreSQL", "Algorand"],
        details: [
            "Built a full-stack Speech Therapy platform (sceglilogopedista.it) connecting therapists with patients.",
            "Spearheaded multi-chain game-to-earn system development on Algorand and Arbitrum."
        ]
    },
    {
        company: "ACAIF",
        role: "Backend Developer",
        period: "SEP 2024 - MAY 2025",
        tech: ["NestJS", "MongoDB", "AI Agents"],
        details: [
            "Engineered backend for an AI-driven influencer marketing platform.",
            "Built AI agents for automated brand-campaign matching, reducing manual overhead by >60%."
        ]
    }
];

export const Work = () => {
    return (
        <section id="work" className="py-24 px-6 relative border-t border-white/10 z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="flex items-end mb-16"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-4xl md:text-6xl font-syncopate font-bold uppercase leading-none">
                        Work
                    </h2>
                    <span className="text-neon text-xl md:text-3xl ml-4 font-mono mb-1">/ HISTORY</span>
                </motion.div>

                <div className="space-y-16 md:space-y-0">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row gap-4 md:gap-12 group md:border-t md:border-white/10 md:py-12 relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Highlight on hover for desktop */}
                            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity hidden md:block -z-10 -mx-6 px-6" />

                            <div className="md:w-1/3 flex flex-col font-mono">
                                <span className="text-neon text-xs mb-2">{exp.period}</span>
                                <h3 className="text-2xl md:text-3xl font-syncopate font-bold text-white uppercase tracking-tighter">{exp.company}</h3>
                                <span className="text-white/60 text-sm mt-2">{exp.role}</span>
                            </div>

                            <div className="md:w-2/3 flex flex-col justify-between mt-4 md:mt-0">
                                <div className="space-y-4 font-mono text-sm text-white/80 leading-relaxed mb-8">
                                    {exp.details.map((detail, i) => (
                                        <p key={i} className="flex items-start">
                                            <span className="text-magenta mr-3 mt-[2px]">{">"}</span>
                                            <span>{detail}</span>
                                        </p>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-mono border border-white/20 px-3 py-1 text-white/60 group-hover:border-neon/50 group-hover:text-neon transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
