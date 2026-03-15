"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project, projects } from "@/repository/work";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    if (!selectedProject) return;
    setImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="work" className="w-full mb-32 flex flex-col gap-16">
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
            <div className="h-52 w-full relative">
              <Image
                src={project.thumnail}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-text-secondary hover:text-primary transition"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                )}
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
            {/* Overlay for click */}
            <div
              className="h-full w-full absolute left-0 top-0"
              onClick={() => setSelectedProject(null)}
            />

            {/* Image counter */}
            <div className="absolute left-1/2 top-4 z-50 text-text-primary -translate-x-1/2">
              {`${imageIndex + 1} / ${selectedProject.images.length}`}
            </div>

            <div className="mx-auto max-h-[80vh] w-[90%] flex items-center justify-center">
              <Image
                src={selectedProject.images[imageIndex]}
                alt="Project Screenshot"
                width={1200}
                height={675}
                className="object-contain rounded-lg"
              />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 left-8 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl z-50 cursor-pointer transition"
            >
              ✕
            </button>

            {/* Prev / Next */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white w-16 h-full flex items-center justify-center cursor-pointer text-2xl"
            >
              <span className="hover:bg-text-secondary-muted h-12 aspect-square flex items-center justify-center rounded-full">
                ‹
              </span>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white w-16 h-full flex items-center justify-center cursor-pointer text-2xl"
            >
              <span className="hover:bg-text-secondary-muted h-12 aspect-square flex items-center justify-center rounded-full">
                ›
              </span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;