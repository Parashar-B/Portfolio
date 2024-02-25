"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import scrollLottie from "../../public/scroll_lottie.json";

export default function HeroSection(props: {
  accounts: Array<{ icon: JSX.Element; link: string }>;
}) {
  return (
    <div className="pt-[8rem]">
      <div className="flex justify-between ">
        <div>
          <h3 className="text-[2rem]">Hi👋,</h3>
          <h1 className="text-[3rem]">
            <span className="text-[1.8rem]">I am</span>{" "}
            <span className="text-gray-300 font-bold">Parashar Bharali</span>
          </h1>
        </div>
        <div className="w-[10rem] relative">
          <div className="absolute bottom-0 right-0 z-10 ">
            <div className="bg-black relative w-[8rem] h-[8rem] rounded-full overflow-hidden transition-all delay-100 ease-out">
              <Image
                src={"/profile/dp.jpg"}
                alt="profile_picture"
                className="object-cover opacity-[0.8] scale-[1.5] translate-y-6 translate-x-[0rem] transition-all delay-100 ease-out"
                fill={true}
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-[5rem] leading-[3.5rem]">
        <p className=" text-[1.8rem]">
          <span className="text-[3rem] text-gray-300 font-bold">Developer</span>{" "}
          with a passion for crafting elegant and efficient solutions. Pixel
          Perfection on UI development with the love for problem-solving, I
          thrive in the dynamic world of technology. As a developer, I believe
          in the power of collaboration and continuous learning.
        </p>
        {/* <p className=" text-[2rem] pt-[3rem]">
                  
                </p> */}
      </div>
      <div className="pt-[5rem]">
        <p className=" text-[1.8rem]">
          Let's connect and build something amazing together.
        </p>
        <div className="flex items-center gap-[2rem] pt-[2rem] text-gray-500">
          {props.accounts.map((item, index) => {
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
          <Link href="">
            <button className="bg-gray-500 text-black font-semibold text-[1.2rem] w-[9rem] h-[2.9rem] rounded-md">
              View Resume
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center pt-[6rem]">
        <Lottie animationData={scrollLottie} />
      </div>
    </div>
  );
}
