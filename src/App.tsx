import { TbWorld } from "react-icons/tb";
import ContactIcons from "./contact";
import ExperienceSection from "./experiences";
import SkillsSection from "./skills";
const App = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800 bg-white">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold">Patrick Ojiambo</h1>
                <p className="text-lg text-gray-600">
                    Backend Developer || Web3 developer
                </p>
                <div className="flex items-center space-x-2 mt-2 text-gray-500">
                    <TbWorld />
                    <p className="">Nairobi, Kenya</p>
                </div>


            </header>
            <ContactIcons />
            <div className="border-t border-gray-300 my-6"></div>

            {/* About Section */}
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed">
                    As a passionate backend and Web3 developer with 2 years of experience,
                    I specialize in building robust systems and decentralized applications. My current
                    focus is on AI development, particularly AI agents, where I'm actively creating
                    innovative AI-powered products. I thrive on solving complex technical challenges
                    and continuously expanding my skill set. With a strong foundation in backend technologies
                    and blockchain development, combined with my growing expertise in AI, I aim to bridge these
                    domains to build the next generation of intelligent, decentralized systems. I'm committed to
                    writing clean, efficient code and contributing to meaningful projects that push technological boundaries.
                </p>
            </section>

            <div className="border-t border-gray-300 my-6"></div>
            <ExperienceSection />
           <SkillsSection/>
        </div>
    );
};

export default App;