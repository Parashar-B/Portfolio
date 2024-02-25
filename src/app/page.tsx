import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";


export default function Home() {
  const accounts = [
    {
      icon: <FaGithubSquare size={30} className="hover:text-gray-200" />,
      link: "https://github.com/Parashar-B",
    },
    {
      icon: <FaLinkedin size={30} className="hover:text-gray-200" />,
      link: "https://in.linkedin.com/in/parashar-bharali-800b89234",
    },
  ];

  return (
    <main className="h-screen flex text-gray-400">
      {/* <div className="w-full max-w-[110rem] mx-auto h-fit px-[2rem] py-[2rem] border border-gray-500 rounded-[2rem]">
        <h3 className=" text-[2rem]">Hey<span className=" text-[2.5rem]">👋</span>,</h3>
        <h1 className=" text-[3rem] ">I am Parashar a Passionate Frontend Developer</h1>
      </div> */}
      <div className="h-full w-full max-w-[80rem] mx-auto">
        <Navbar />
        <div className=" h-full font-light bg-[#030308] tracking-wide">
          <div className="px-[8rem] pb-[1rem] ">
            <HeroSection accounts={accounts}/>
            <SkillsSection/>
            <ProjectsSection/>
          </div>
        </div>
      </div>
    </main>
  );
}
