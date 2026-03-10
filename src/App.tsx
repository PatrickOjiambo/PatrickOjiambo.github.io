import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Cursor } from "./components/layout/Cursor";
import { Hero } from "./components/sections/Hero";
import { Work } from "./components/sections/Work";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";

const App = () => {
    return (
        <div className="min-h-screen bg-obsidian text-white relative">
            <div className="bg-noise fixed inset-0 z-0"></div>
            <Cursor />
            <Navbar />

            <main className="relative z-10 w-full overflow-hidden">
                <Hero />
                <Work />
                <Projects />
                <Skills />
            </main>

            <Footer />
        </div>
    );
};

export default App;