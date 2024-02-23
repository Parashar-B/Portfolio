"use client";
import { AiOutlineHome } from "react-icons/ai";
import { SiTask } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { TbTools } from "react-icons/tb";
import { GoPackage } from "react-icons/go";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activePageIndex, setActivePageIndex] = useState(0);
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

  function NavbarItems(props: {
    icon: JSX.Element;
    name: String;
    index: number;
  }) {
    return (
      <div
        className={`${
          activePageIndex === props.index
            ? "bg-gray-900 text-white"
            : " bg-transparent text-gray-400"
        } flex items-center py-[1.8rem] px-[2.5rem] text-[1.4rem] rounded-l-[5rem] cursor-pointer`}
        onClick={() => {
          setActivePageIndex(props.index);
        }}
      >
        <span className="px-[1rem] rounded-full text-[2rem]">{props.icon}</span>
        <h3 className=" pl-[0.5rem]">{props.name}</h3>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-[3rem] pt-[10rem] pl-[2rem] rounded-[1rem] bg-black">
      {navItems.map((item, index) => {
        return (
          <NavbarItems
            key={index}
            icon={item.icon}
            name={item.name}
            index={index}
          />
        );
      })}
      <div className="flex gap-[2rem] px-[3rem] pt-[5rem] text-gray-500 ">
        {accounts.map((item, index) => {
          return (
            <div key={index}>
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
