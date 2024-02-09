import { SiTensorflow, SiSpringboot, SiAmazonaws } from "react-icons/si";
import { FaJava, FaPython, FaNodeJs, FaReact, FaDocker, FaLinux } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { IoGitMergeOutline } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
function Body() {
    return (
        <div className="px-3 mt-12 font-roboto bg-backGroundColor min-h-screen text-white flex flex-col items-center pt-5 ">
            <div className="flex  items-center">
                <img src="../images/Me.png" className="md:w-96 w-36" />
                <div className="md:pl-5 pl-3">
                    <p className=" ">Hello  🙂🙂, I am</p>
                    <p className="text-purple-600 text-lg md:text-2xl inline ml-2">Patrick Ojiambo</p>
                    <p className=" mt-1 md:mt-6 text-sm">A developer who is</p>
                    <p className="md:text-3xl text-sm">Building Tomorrow's Digital World,</p>
                    <p className="md:text-3xl inline text-sm">One Line of Code at a time...</p>
                    
                </div>
            </div>
            <div className="pt-5  max-w-3xl px-2 text-wrap">
                <p className="md:text-3xl">Software Engineer. </p>
               
                <p className="mt-3 text-sm text-left">I am a committed student of software engineering at ALX and pursuing a degree in computer science at the University of Nairobi. Fueled by a profound enthusiasm for full-stack development and the boundless potential of artificial intelligence and machine learning, I am determined to make a lasting impact on the ever-evolving digital landscape.
</p>
            </div>
            <div className=" pt-4 px-1 text-sm">
                <p className="  text-purple-100 text-lg md:text-2xl text-center mr-20">Skills</p>
                <ul className="grid grid-cols-3 md:text-base gap-x-4 gap-y-2 text-purple-400">
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
            <div className="text-sm text-purple-300 md:text-base text-left w-full ml-3 mt-4">
                        <p className="text-center text-purple-300 font-bold text-lg ">Contacts</p>
                <p className="md:text-center"><b>Phone:</b> 0742220881</p>
                <p className="md:text-center"><b>Personal Email</b>: pashrick237@gmail.com</p>
                <p className="md:text-center"><b>Email:</b> pashrick237@students.uonbi.ac.ke</p>
                
                <p className="md:text-center"><b>Work email:</b> corporate.zuse@gmail.com</p>
                
            </div>
        </div>
    );
}

export default Body;