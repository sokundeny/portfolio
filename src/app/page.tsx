import LadingPage from "./_components/landingPage";
import AboutMe from "./_components/aboutMe";
import TechStack from "./_components/techStack";
import Work from "./_components/work";
import Footer from '@/components/footer'
import ContactMe from "./_components/contactMe";

export default function Home() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-300 xl:px-0 px-4">
        <LadingPage/>
        <AboutMe/>
        <TechStack/>
        <Work />
        <ContactMe/>
        <Footer/>
      </div>
    </div>
  );
}
