import { Link } from "react-router-dom";
import { ImGithub } from "react-icons/im";
import React from "react";
function Header() {
    return (
        <div className="bg-backGroundColor flex fixed top-0 justify-around items-center text-white w-full h-16 md:h-20 md:text-xl font-semibold shadow-md font-plus-jakarta-sans">
            <img src="../images/Logo.png" className="h-6 w-auto md:h-[2.448rem] md:w-9" />

            <Link to="/">
                <p className="hover:underline-offset-0">Home</p>
            </Link>
            <Link to="/projects">
                <p className="hover:underline-offset-0">Projects</p>
            </Link>
            {/* <Link to="certifications">
                <p className="hover:underline-offset-0">Certifications</p>
            </Link> */}
            <a href="https://github.com/PatrickOjiambo" className="p-2 text-lg md:text-3xl hover:text-4xl" target="_blank">
                <ImGithub />
            </a>

        </div>
    );
}

export default Header;