import Image from "next/image";
import LadingPage from "./_components/landingPage";
import AboutMe from "./_components/aboutMe";
import TechStack from "./_components/techStack";
import Work from "./_components/work";

export default function Home() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-300">
        <LadingPage/>
        <AboutMe/>
        <TechStack/>
        <Work/>
      </div>
    </div>
  );
}
