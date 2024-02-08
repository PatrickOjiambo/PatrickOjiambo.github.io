import { Link } from "react-router-dom";
import { ImGithub } from "react-icons/im";
import React from "react";
function Header() {
    return (
        <div className="bg-pPurple flex justify-around items-center text-white w-full h-28 text-xl font-semibold shadow-cusomShadow font-plus-jakarta-sans">
            <img src="../images/Logo.png" className="h-[2.448rem] w-9" />

            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/projects">
                <p>Projects</p>
            </Link>
            <a href="https://github.com/PatrickOjiambo" className="p-2 text-3xl hover:text-4xl" target="_blank">
                <ImGithub />
            </a>

        </div>
    );
}

export default Header;