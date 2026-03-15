"use client";

import { useState,useEffect } from "react";
import Image from "next/image";
import { Github , ExternalLink } from "lucide-react";
import {Project, projects} from '@/repository/work'

const Work = () => {
  

  const [selectedProject, setSelectedProject] = useState<Project|null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedProject === null) return;
    setImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (selectedProject === null) return;
    setImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section className="w-full mb-32 flex flex-col gap-16">

      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-medium text-text-secondary">
        My Works
      </h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedProject(project);
              setImageIndex(0);
            }}
            className="cursor-pointer bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition"
          >

            {/* Thumbnail */}
            <div className="h-52 w-full">
              <Image
                src={project.thumnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">

              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-text-secondary-muted text-sm leading-6">
                {project.description}
              </p>

              {/* Repo Links */}
              <div className="flex flex-wrap gap-4">

                {project.repos.map((repo, i) => (
                  <a
                    key={i}
                    href={repo.link}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-text-secondary hover:text-primary transition"
                  >
                    <Github size={18} />
                    {repo.name}
                  </a>
                ))}

                {
                  project.link&&(
                    <a
                      href={project.link}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-text-secondary hover:text-primary transition"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )
                }

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Modal Gallery */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative flex items-center justify-center w-full h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="h-full w-full absolute left-0 top-0"
              onClick={() => setSelectedProject(null)}
            />

            <div className="absolute left-1/2 top-4 z-300 text-text-primary">
              {`${imageIndex+1} / ${selectedProject.images.length}`}
            </div>
            {/* Image */}
            <Image
              src={selectedProject.images[imageIndex]}
              alt="Project Screenshot"
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute cursor-pointer top-2 left-8 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl transition z-200"
            >
              ✕
            </button>

            {/* Prev / Next */}
            <button
              onClick={prevImage}
              className="absolute  max-h-[80vh] h-full cursor-pointer left-6 top-1/2 -translate-y-1/2  text-white w-12   flex items-center justify-center text-2xl transition"
            >
              <span className="hover:bg-text-secondary-muted h-12 aspect-square flex items-center justify-center rounded-full"> ‹</span>
            </button>
            <button
              onClick={nextImage}
              className="absolute max-h-[80vh] h-full right-6 top-1/2 -translate-y-1/2 cursor-pointer  text-white w-12 flex items-center justify-center text-2xl transition"
            >
              <span className="hover:bg-text-secondary-muted h-12 aspect-square flex items-center justify-center rounded-full"> ›</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;