"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const LandingPage = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Backend Developer",
      "Mobile App Developer",
      "Software Developer",
    ],
    loop: true,   
    delaySpeed: 2000, 
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <p className="text-xl md:text-3xl text-text-secondary">Hello! I'm</p>
      <h1 className="text-4xl md:text-7xl text-text-primary font-bold">SOKUN DENY</h1>
      <p className="text-xl md:text-3xl text-text-secondary flex items-center">
        {text}
        <Cursor cursorStyle="|" />
      </p>
    </div>
  );
};

export default LandingPage;