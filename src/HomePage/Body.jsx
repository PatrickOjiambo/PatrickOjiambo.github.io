import { SiTensorflow, SiSpringboot, SiAmazonaws } from "react-icons/si";
import { FaJava, FaPython, FaNodeJs, FaReact, FaDocker, FaLinux } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { IoGitMergeOutline } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
function Body() {
    return (
        <div className="bg-backGroundColor text-white h-screen flex flex-col items-center pt-5 ">
            <div className="flex  items-center">
                <img src="../images/Me.png" className="w-96" />
                <div className="pl-5">
                    <p className=" font-preahvihear inline">Hello! I am</p>
                    <p className="text-purple-600 text-2xl font-preahvihear inline ml-2">Patrick Ojiambo</p>
                    <p className="font-preahvihear mt-6">A developer who is</p>
                    <p className="text-3xl font-preahvihear">Building Tomorrow's Digital World,</p>
                    <p className="text-3xl font-preahvihear inline">One Line of Code at a </p>
                    <p className="text-3xl font-preahvihear inline text-pBlue">Time </p>
                    <p className=" text-3xl font-plus-jakarta-sans inline md:text-3xl sm:text-xl">...</p>
                </div>
            </div>
            <div className="pt-5 font-preahvihear max-w-3xl ">
                <p className="text-3xl">I'm a Software Engineer. </p>
                <p>Currently, I'm a Software Engineering Student at ALX</p>
                <p className="mt-3 text-left">A dedicated software engineering student at ALX and a computer science enthusiast at the University of Nairobi. With a burning passion for both full-stack development and the limitless possibilities of artificial intelligence and Machine Learning, I'm on a mission to leave a lasting mark on the digital landscape.</p>
            </div>
            <div className=" pt-4">
                <p className=" font-preahvihear text-purple-100 text-2xl text-center mr-20">Skills</p>
                <ul className="grid grid-cols-3 gap-x-4 gap-y-2 text-purple-400">
                    <li className="flex items-center "><FaPython /> Python</li>
                    <li className="flex items-center "><FaNodeJs /> Node.js</li>
                    <li className="flex items-center "><RiFlutterFill /> Flutter</li>
                    <li className="flex items-center "><FaReact /> React</li>
                    <li className="flex items-center "><FaJava /> Java</li>
                    <li className="flex items-center "><SiSpringboot /> Spring Boot</li>
                    <li className="flex items-center "><SiTensorflow /> Machine Learning</li>
                    <li className="flex items-center "><FaDocker /> Docker</li>
                    <li className="flex items-center "><GrMysql /> MySQL</li>
                    <li className="flex items-center"><IoGitMergeOutline /> Git and Github</li>
                    <li className="flex items-center"><SiAmazonaws /> Amazon AWS</li>
                    <li className="flex items-center"><FaLinux /> Linux</li>
                </ul>
            </div>
        </div>
    );
}

export default Body;