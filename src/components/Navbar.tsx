"use client";
import { AiOutlineHome } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { TbTools } from "react-icons/tb";
import { GoPackage } from "react-icons/go";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { HiOutlineSun } from "react-icons/hi";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  // const pageIndicatorSlider = useRef(null);
  const navItems = [
    {
      icon: <AiOutlineHome />,
      name: "Home",
    },
    {
      icon: <TbTools />,
      name: "Skills",
    },
    {
      icon: <GoPackage />,
      name: "Projects",
    },
    {
      icon: <BsPersonWorkspace />,
      name: "Experience",
    },
    {
      icon: <GrArticle />,
      name: "Blogs",
    },
  ];

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
    <div className="sticky bg-[#141422] rounded-b-[1rem]">
      <div className="relative flex items-center justify-center gap-[3rem] px-[4rem] pt-[1rem]">
        {navItems.map((item, index) => {
          return (
            <div
              className={`${
                activePageIndex === index
                  ? " bg-[#030308] text-white"
                  : " bg-transparent text-gray-400 "
              } relative flex items-center py-[1rem] px-[1.8rem] text-[1.1rem] cursor-pointer rounded-t-[1rem]`}
              onClick={() => {
                setActivePageIndex(index);
              }}
            >
              <span className="pr-[1rem] rounded-full text-[1.5rem]">
                {item.icon}
              </span>
              <h3 className=" pl-[0.5rem]">{item.name}</h3>
            </div>
          );
        })}
        <div className="mb-[0.5rem] p-[0.5rem] bg-gray-800 hover:bg-gray-700 rounded-full text-gray-300 cursor-pointer">
          <HiOutlineSun size={15} />
        </div>
        {/* <div className="absolute bg-[#030308] bottom-0 w-[]" ref={pageIndicatorSlider}></div> */}
      </div>
    </div>
  );
}

// function NavbarItems(props: {
//   icon: JSX.Element;
//   name: String;
//   index: number;
// }) {

//   return (

//   );
// }
