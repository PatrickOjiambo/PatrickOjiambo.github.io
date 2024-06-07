import { SiTensorflow, SiSpringboot, SiAmazonaws } from "react-icons/si";
import {
  FaJava,
  FaPython,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaLinux,
  FaRust,
} from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { IoGitMergeOutline } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";

function Body() {
  return (
    <div className="2xl:pb-20 px-3 mt-12  bg-backGroundColor  text-white flex flex-col items-center pt-5 2xl:h-auto">
      <div className="flex  items-center 2xl:pt-20 md:pt-10">
        <img src="../images/Me.png" className=" w-36" />
        <div className="md:pl-20 pl-3">
            <br/>
          <p className=" ">Hello 🙂🙂, I am</p>
          <p className="text-aqua text-lg md:text-2xl inline">
            Patrick Ojiambo
          </p>
          <p className=" mt-1 md:mt-6 text-sm">A Software developer who is</p>
          <p className="md:text-3xl text-sm">
            Building Tomorrow's Digital World,
          </p>
          <p className="md:text-3xl inline text-sm">
            One Line of Code at a time...
          </p>
        </div>
      </div>
      <div className="pt-10  max-w-3xl px-2 text-wrap md:pl-16">
       <p className="text-lg font-semibold">About me</p>

        <p className="mt-3 text-left">
          Skilled backend software developer with experience in building web and
          mobile applications. I am passionate about building software solutions
          that solve real-world problems. I am a fast learner and I am always
          eager to learn new technologies. Currently working on Web3 projects on Solana, Algorand and Ethereum.
        </p>
      </div>
      <div className=" pt-4 px-1 text-sm pb-4">
        <p className="  text-purple-100 text-lg md:text-2xl text-center mr-20 font-semibold">
          Skills
        </p>
        <ul className="grid grid-cols-3 md:text-base gap-x-4 gap-y-2 text-aqua">
          <li className="flex items-center ">
            <FaPython /> <p className="pl-1">Python</p>
          </li>
          <li className="flex items-center ">
            <FaNodeJs /> <p className="pl-1">Node.js</p>
          </li>
          <li className="flex items-center ">
            <RiFlutterFill /> <p className="pl-1">Flutter</p>
          </li>
          <li className="flex items-center ">
            <FaReact /> <p className="pl-1">React</p>
          </li>
          <li className="flex items-center ">
            <FaJava /> <p className="pl-1">Java</p>
          </li>
          <li className="flex items-center ">
            <SiSpringboot /> <p className="pl-1">Spring Boot</p>
          </li>
         
          <li className="flex items-center ">
            <FaDocker /> <p className="pl-1">Docker</p>
          </li>
          <li className="flex items-center ">
            <GrMysql /> <p className="pl-1">MySQL</p>
          </li>
          <li className="flex items-center">
            <IoGitMergeOutline /> <p className="pl-1">Git and Github</p>
          </li>
          <li className="flex items-center">
            <SiAmazonaws /> <p className="pl-1">Amazon AWS</p>
          </li>
          <li className="flex items-center">
            <FaLinux /> <p className="pl-1">Linux</p>
          </li>
          <li className="flex items-center">
            <FaRust /> <p className="pl-1">Rust</p>
          </li>
          <li className="flex items-center">
            <TbBrandNextjs /> <p className="pl-1">Next.js</p>
            </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Body;
