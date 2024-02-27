import Image from "next/image";

export default function ProjectsSection(){
    return(
        <div className="pt-[10rem]">
            <div className="relative w-[200px] h-[200px]">
                <Image
                    src={'/projects/project.svg'}
                    alt="project"
                    fill={true}
                    unoptimized={true}
                />
            </div>
        </div>
    );
}