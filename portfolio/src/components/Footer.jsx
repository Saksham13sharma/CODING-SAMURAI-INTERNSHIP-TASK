import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              Saksham Sharma
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Passionate React Developer dedicated to building modern,
              responsive and user-friendly web applications with clean code
              and great user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact & Social */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Connect With Me
            </h3>

            <div className="flex items-center gap-3 text-gray-400 mb-6">
              <FaEnvelope className="text-cyan-400 text-lg" />
              <span>samuk0398@gmail.com</span>
            </div>

            <div className="flex gap-4">

              <Link
                to="https://github.com/Saksham13sharma"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition duration-300"
              >
                <FaGithub className="text-white text-xl" />
              </Link>

              <Link
                to="https://www.linkedin.com/in/saksham-sharma-852522354"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition duration-300"
              >
                <FaLinkedin className="text-white text-xl" />
              </Link>

              <Link
                to=""
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition duration-300"
              >
                <FaInstagram className="text-white text-xl" />
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-cyan-400 font-semibold">
              Saksham Sharma
            </span>
            . All Rights Reserved.
          </p>

          <a
            href="#top"
            className="w-11 h-11 rounded-full bg-cyan-500 hover:bg-cyan-600 transition duration-300 flex items-center justify-center"
          >
            <FaArrowUp className="text-white" />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;