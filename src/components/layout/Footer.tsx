export const Footer = () => {
    return (
        <footer className="w-full border-t border-white/10 p-6 mt-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center font-mono text-xs text-white/50">
                <p>&copy; {new Date().getFullYear()} PATRICK OJIAMBO. ALL RIGHTS RESERVED.</p>
                <p className="mt-4 md:mt-0">SYSTEM ONLINE /// STATUS: OPTIMAL</p>
            </div>
        </footer>
    );
};
