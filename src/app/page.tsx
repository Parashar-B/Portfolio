'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";
import scrollLottie from "../../public/scroll_lottie.json";

export default function Home() {
  const accounts = [
    {
      icon: <FaGithubSquare size={30} className="hover:text-gray-200"/>,
      link: "https://github.com/Parashar-B",
    },
    {
      icon: <FaLinkedin size={30} className="hover:text-gray-200"/>,
      link: "https://in.linkedin.com/in/parashar-bharali-800b89234",
    },
  ];

  return (
    <main className="h-screen flex text-gray-400">
      {/* <div className="w-full max-w-[110rem] mx-auto h-fit px-[2rem] py-[2rem] border border-gray-500 rounded-[2rem]">
        <h3 className=" text-[2rem]">Hey<span className=" text-[2.5rem]">👋</span>,</h3>
        <h1 className=" text-[3rem] ">I am Parashar a Passionate Frontend Developer</h1>
      </div> */}
      <div className="flex h-full w-full max-w-[140rem] mx-auto">
        <Navbar />
        <div className=" flex-grow h-full border-l border-gray-900 font-light bg-[#030308]">
          <div className="px-[4rem] pb-[1rem] ">
            <div className="flex ">
              <div className="pt-[5rem] relative ">
                <div className="pt-[5rem]">
                  <h3 className="text-[2rem]">Hi👋,</h3>
                  <h1 className="text-[3.5rem]">
                    <span className="text-[2rem]">I am</span>{" "}
                    <span className="text-gray-300 font-bold">
                      Parashar Bharali
                    </span>
                  </h1>
                </div>
                <div className="w-[95%] pt-[5rem]">
                  <p className=" text-[2rem]">
                    <span className="text-[3.5rem] text-gray-300 font-bold">
                      Developer
                    </span>{" "}
                    with a passion for crafting elegant and efficient solutions.
                    Pixel Perfection on UI development with the love for
                    problem-solving, I thrive in the dynamic world of
                    technology. As a developer, I believe in the power of
                    collaboration and continuous learning.
                  </p>
                  {/* <p className=" text-[2rem] pt-[3rem]">
                  
                </p> */}
                </div>
                <div className="pt-[5rem]">
                  <p className=" text-[2rem]">
                    Let's connect and build something amazing together!
                  </p>
                  <div className="flex gap-[2rem] pt-[2rem] text-gray-500">
                    {accounts.map((item, index) => {
                      return (
                        <div key={index}>
                          <Link
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.icon}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="w-[70rem] relative ">
                <div className="absolute top-0 right-0 z-10 ">
                  <div className="bg-black relative w-[22.5rem] h-[40rem] rounded-b-full overflow-hidden transition-all delay-100 ease-out">
                    <Image
                      src={"/profile/dp.jpg"}
                      alt="profile_picture"
                      className=" object-cover opacity-[0.8] hover:scale-125 transition-all delay-100 ease-out"
                      fill={true}
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-[6rem]">
              <Lottie animationData={scrollLottie} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
