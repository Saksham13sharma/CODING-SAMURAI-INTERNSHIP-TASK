import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import profile from "/profile.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
   <section className="min-h-screen flex items-center  overflow-hidden pt-28">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">

      {/* Left Content */}
      <div className="text-center lg:text-left">

        <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
           Welcome to my Portfolio
        </span>
        <p className="text-gray-300 text-xl font-medium mt-6">Hi I'm</p>

        <h1 className="text-4xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Saksham Sharma
          </span>
        </h1>

        <h2 className="typing-text mt-2 text-2xl md:text-3xl font-semibold text-white">
          React Developer
        </h2>

        <p className="mt-3 max-w-xl text-gray-400 text-lg leading-7">
          I'm a passionate{" "}
          <span className="text-cyan-400 font-semibold">
            React Developer
          </span>{" "}
          who enjoys building modern, responsive and high-performance web
          applications using React.js, JavaScript, Tailwind CSS and modern web
          technologies. I love turning ideas into clean, scalable and
          user-friendly digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

          <Link to="/projects" className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-cyan-500/30">
            View Projects
          </Link>

          <Link to="/contact" className="px-8 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300">
            Contact Me
          </Link>

        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center mt-12 lg:mt-0">
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[90px] opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative rounded-full p-2 bg-slate-900">
            <img
              src={profile}
              alt="Profile"
              className=" h-[350px] w-[350px] rounded-full object-cover border-4 border-cyan-300 group-hover:scale-105 transition  duration-500"
            />
          </div>

        </div>

      </div>

    </div>
    <div>
        {/* Social Icons */}
        <div className="flex gap-5 mt-10 justify-center lg:justify-start">

          <Link
            to="https://github.com/Saksham13sharma"
            className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition duration-300"
          >
            <FaGithub size={22} />
          </Link>

          <Link
            to="https://www.linkedin.com/in/saksham-sharma-852522354"
            className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition duration-300"
          >
            <FaLinkedin size={22} />
          </Link>

          <Link
            to=""
            className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition duration-300 "
          >
            <FaInstagram size={22} />
          </Link>

        </div>
    </div>
  </div>
</section>
  );
};

export default Hero;