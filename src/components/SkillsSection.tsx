import Image from "next/image";

export default function () {
  return (
    <div className="">
      <div className="relative w-[200px] h-[200px]">
        <Image src={"/skills/coding3.svg"} alt="coding" fill={true} unoptimized={true}/>
      </div>
    </div>
  );
}
