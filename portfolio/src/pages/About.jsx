import React from "react";
import journey from "/Myjourney.png";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { RiTargetFill } from "react-icons/ri";

const aboutInfo = [
  {
    icon: FaGraduationCap,
    title: "Education",
    description: "B.Tech (Information Technology) | 3rd Year Student",
  },
  {
    icon: FaCode,
    title: "Frontend Development",
    description:
      "React.js, JavaScript, Tailwind CSS, HTML5, CSS3 & Responsive Design",
  },
  {
    icon: FaFolderOpen,
    title: "Projects",
    description:
      "Developed responsive web applications including Restaurant Website, Portfolio and React-based projects.",
  },
  {
    icon: RiTargetFill,
    title: "Career Goal",
    description:
      "Aspiring Full Stack Developer seeking internship opportunities to gain real-world industry experience.",
  },
];

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            My Journey
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Get to know more about my background, technical skills and passion
            for creating modern web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div className="flex justify-center">
            <div className="relative group">

              <div className="absolute -inset-3 rounded-3xl bg-cyan-500 blur-3xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <img
                src={journey}
                alt="Profile"
                className="relative w-full max-w-md rounded-3xl border border-slate-700 object-cover transition duration-500 group-hover:scale-105"
              />

            </div>
          </div>

          {/* Right Side */}

          <div>

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Hi, I'm <span className="text-cyan-400">Saksham Sharma</span>
            </h3>

            <h4 className="text-xl text-cyan-400 font-semibold mt-3">
              React Developer
            </h4>

            <p className="text-gray-400 leading-8 mt-6 text-justify">
              I'm a passionate React Developer. I enjoy building modern, responsive and
              user-friendly web applications using React.js, JavaScript,
              Tailwind CSS, HTML and CSS. Writing clean, reusable code and
              creating visually appealing user interfaces are the aspects of
              development that motivate me the most.
            </p>

            <p className="text-gray-400 leading-8 mt-5 text-justify">
              Throughout my learning journey, I have developed several projects,
              including a Restaurant Website, Portfolio Website and other React
              applications. I have hands-on experience with React.js, Firebase,
              REST APIs, Git, GitHub and Vite. Every project has helped me
              improve my problem-solving skills and strengthen my understanding
              of modern web development.
            </p>

            <p className="text-gray-400 leading-8 mt-5 text-justify">
              My goal is to become a skilled Full Stack Developer and contribute
              to impactful products that solve real-world problems. I am
              continuously learning new technologies and currently looking for
              internship opportunities where I can collaborate with experienced
              developers, enhance my technical skills and gain valuable industry
              experience.
            </p>
          </div>
        </div>
        {/* Cards */}

            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-10">

              {aboutInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
                  >
                    <Icon className="text-cyan-400 mb-4" size={36} />

                    <h4 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-400 leading-7">
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>

      </div>
    </section>
  );
};

export default About;
