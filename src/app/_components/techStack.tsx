"use client";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiFlutter,
  SiDart,
  SiPostgresql,
  SiMysql,
  SiNestjs,
  SiExpress,
  SiC,
  SiCplusplus,
  SiPython
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const TechStack = () => {

  const tech = [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiHtml5, name: "HTML" },
    { icon: SiCss, name: "CSS" },
    { icon: SiFlutter, name: "Flutter" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiNestjs, name: "NestJS" },
    { icon: SiExpress, name: "ExpressJS" },
    { icon: SiC, name: "C" },
    { icon: SiCplusplus, name: "C++" },
    { icon: SiDart, name: "Dart" },
    { icon: SiPython, name: "Python" },
    { icon: FaJava, name: "Java" },
  ];


  return (
    <section className="w-full my-63 flex flex-col gap-24">

      {/* Title */}
      <h2 className="text-6xl font-medium text-text-secondary ">
        My Tech Stack
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {tech.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
              flex flex-col items-center justify-center
              gap-4 p-8
              rounded-2xl
              bg-neutral-800
              text-text-secondary
              hover:text-primary
              hover:-translate-y-1.5
              hover:bg-neutral-700
              transition-all duration-300
              shadow-md
              "
            >
              <Icon size={42} />
              <p className="text-sm font-medium">{item.name}</p>
            </div>
          );
        })}

      </div>

    </section>
  );
};

export default TechStack;