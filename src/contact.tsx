import {  TbPhone } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
const ContactIcons = () => {
    return (
        <div className="flex items-center space-x-4 text-gray-950">
            {/* Phone with hover tooltip */}
            <div className="relative group">
                <TbPhone className="w-6 h-6 hover:text-black transition-colors cursor-pointer" />
                <span className="absolute hidden group-hover:block -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    +254742220881
                </span>
            </div>

            {/* Email */}
            <a href="mailto:patrickojiambo206@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdOutlineEmail className="w-6 h-6 hover:text-black transition-colors" />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/patrick-ojiambo-bb9272221/" target="_blank" rel="noopener noreferrer">
                <PiLinkedinLogoThin className="w-6 h-6 hover:text-black transition-colors" />
            </a>

            {/* Twitter/X */}
            <a href="https://x.com/Patrick50083212" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-6 h-6 hover:text-black transition-colors" />
            </a>

            {/* GitHub */}
            <a href="https://github.com/PatrickOjiambo" target="_blank" rel="noopener noreferrer">
                <VscGithubAlt className="w-6 h-6 hover:text-black transition-colors" />
            </a>
        </div>
    );
};
export default ContactIcons;