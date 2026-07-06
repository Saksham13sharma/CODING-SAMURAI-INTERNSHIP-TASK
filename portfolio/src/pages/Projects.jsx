import React from "react";
import { projectData } from "../data/projectData";
// import { Github, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            My Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Featured Projects
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects built using modern web technologies.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400 border border-cyan-500/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 text-white transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-white transition hover:bg-cyan-600"
                  >
                    <IoIosLink size={18} />
                    Live Demo
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;