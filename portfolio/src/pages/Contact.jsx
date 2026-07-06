import React, { useState } from "react";
import { FaPhoneAlt, FaGithub,FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdMailOpen, IoMdSend } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const text = `Hello Saksham Sharma,

Name: ${form.name}

Email: ${form.email}

Subject: ${form.subject}

Message:
${form.message}`;

    const url = `https://wa.me/+916398553009?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Get In Touch
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or looking for a React Developer?
            Feel free to contact me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

            <h3 className="text-3xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <p className="text-gray-400 leading-7 mb-10">
              I'm always open to discussing new opportunities,
              freelance projects and collaborations.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <IoMdMailOpen className="text-cyan-400" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">
                    samuk0398@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <FaPhoneAlt className="text-cyan-400" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Phone
                  </h4>

                  <p className="text-gray-400">
                    +91 6398553009
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <LuMapPin className="text-cyan-400" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Address
                  </h4>

                  <p className="text-gray-400">
                    Sector 22 Noida , UP
                  </p>
                </div>
              </div>

            </div>

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition"
              >
                <FaGithub className="text-white" />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition"
              >
                <FaLinkedin className="text-white" />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition"
              >
                <FaInstagram className="text-white" />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <form
            onSubmit={handleWhatsApp}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-8 space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              required
              value={form.message}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-5 py-4 text-white outline-none resize-none focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-lg text-white font-semibold"
            >
              <IoMdSend size={20} />
              Send
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;