
const ExperienceSection = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800 bg-white">
            {/* Work Experience Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200">Work Experience</h2>

                {/* ACAIF */}
                <div className="mb-8">
                    <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-lg font-semibold">ACAIF</h3>
                        <p className="text-gray-600">Software Developer</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-3">
                        <p>Nairobi</p>
                        <p>SEPTEMBER 2024 - MAY 2025</p>
                    </div>
                    <ul className="list-disc list-inside  text-gray-700 ml-4">
                        <li>Engineered the backend for an AI-driven influencer marketing platform (trendai.app), scaling to 3,000+ monthly users</li>
                        <li>Built AI agents to assist brands with campaign management</li>
                        <li>Backend using Nest.js, MongoDB and Redis</li>
                        <li>Won 1st Runners up at the Connected Africa Award ceremony 2025, hosted by the ICT Authority</li>
                    </ul>
                </div>

                {/* Vank LLC */}
                <div className="mb-8">
                    <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-lg font-semibold">Vank LLC</h3>
                        <p className="text-gray-600">Software Developer (Remote)</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-3">
                        <p>Nigeria</p>
                        <p>NOVEMBER 2024 - APRIL 2025</p>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>Developed a fractional real estate investment platform on Algorand, onboarding 5,000 active users within 4 months</li>
                        <li>Integrated secure wallet transactions, achieving 99.9% uptime for 5,000+ users</li>
                        <li>Smartcontract using python, backend using node.js</li>
                    </ul>
                </div>

                {/* Poma Protocol */}
                <div className="mb-8">
                    <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-lg font-semibold">Poma Protocol</h3>
                        <p className="text-gray-600">Software Developer (Remote)</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-3">
                        <p>Italy</p>
                        <p>NOVEMBER 2024 - APRIL 2025</p>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>Spearheaded development of a multi-chain game-to-earn system on Algorand and Arbitrum</li>
                        <li>Smartcontract using Python and solidity, Backend using node.js</li>
                    </ul>
                </div>

                {/* Kade */}
                <div className="mb-8">
                    <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-lg font-semibold">Kade</h3>
                        <p className="text-gray-600">Software Developer (Remote)</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-3">
                        <p>Nairobi</p>
                        <p>JANUARY 2024 - SEPTEMBER 2024</p>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>Built a decentralised social media app (Poseidon) on Aptos blockchain, increasing daily active users by 15% post-launch</li>
                        <li>Designed RESTful APIs handling 10,000+ requests per second</li>
                    </ul>
                </div>
            </section>

            {/* Projects Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200">Projects</h2>

                {/* Payment System */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">A Decentralised Payment System</h3>
                    <p className="text-gray-700">
                        Built a stablecoin payment gateway for merchants, with well-documented APIs for easy integration
                    </p>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>Built On the Aptos Blockchain</li>
                        <li>Smartcontracts using Move programming language</li>
                        <li>Backend and Indexers using typescript</li>
                        <li>Mobile App using React Native</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">An AI trading Assistant</h3>
                    <p className="text-gray-700">
                        Built an agentic AI trading assistant that does technical assistant for traders with high precision. The system interprets users' natural strategies from natural language into steps that an AI can understand, it then does the technical analysis using tools provided and provides precise signals                    </p>
                    <ul className="list-disc list-inside  text-gray-700 ml-4">
                        <li>Reduces the time spent on technical analysis from hours to seconds spent on confirming AI output.</li>
                        
                    </ul>
                </div>
                {/* NSE Platform */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">NSE Stock Tokenisation Platform</h3>
                    <ul className="list-disc list-inside  text-gray-700 ml-4">
                        <li>Led development of blockchain-based system to tokenise NSE shares, reducing trade settlement from 3 days to seconds</li>
                        <li>Selected for NSE Incubator Program after winning 1st Runner-Up at UoN/NSE Hedera Hackathon</li>
                    </ul>
                </div>
            </section>

            {/* Achievements Section */}
            <section>
                <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200">Achievements</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>1st Runner-Up, NSE/Hedera Hackathon (April 2025)</li>
                    <li>1st Place, UoN Algorand Hackathon (March 2024)</li>
                    <li>1st Place, Algorand Global Hackathon (March 2023)</li>
                    <li>1st Runner-up, UoN Data Science Hackathon (March 2022)</li>
                </ul>
            </section>
        </div>
    );
};

export default ExperienceSection;