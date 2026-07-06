import React from 'react'
import Hero from '../components/Hero'
import { techStack } from '../data/techStackData';
import { educationData } from "../data/educationData";

const Home = () => {
    return (
        <div className='bg-gradient-to-br from-slate-950 via-slate-900 to-black'>
            <Hero />
            {/* skills */}
            <section className="py-24 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">

                    <div className="text-center mb-16">
                        <span className="text-cyan-400 uppercase tracking-[4px] font-semibold">My Skills</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Tech Stack</h2>
                        <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>
                        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                            Technologies and tools I use to build modern, fast and responsive web applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {techStack.map((tech) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={tech.id}
                                    className="group bg-slate-900/70 border border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                                >
                                    <Icon className={`text-5xl ${tech.color} transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`} />
                                    <h3 className="mt-5 text-white font-semibold text-lg text-center">{tech.name}</h3>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
            {/* education */}
            <section className='pb-10'>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-cyan-400 uppercase tracking-[4px] font-semibold">
                            Qualification
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
                            Education
                        </h2>
                        <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>
                        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                            My academic journey that helped me build a strong foundation in technology and software development.
                        </p>
                    </div>

                    <div className="relative border-l-2 border-cyan-500 ml-4">
                        {educationData.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.id} className="relative mb-12 ml-10">
                                    <div className="absolute -left-[58px] top-1 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/30">
                                        <Icon size={22} className="text-white" />
                                    </div>

                                    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <h3 className="text-2xl font-semibold text-white">
                                                {item.title}
                                            </h3>
                                            <div className='flex justify-between'>
                                            <span className="mt-2 font-medium text-cyan-400 md:mt-0">
                                                {item.duration}
                                            </span>
                                            <span className="mt-2 font-medium text-cyan-400 md:mt-0">
                                                {item.precentage}
                                            </span>

                                            </div>
                                        </div>

                                        <h4 className="mt-2 text-lg text-gray-300">
                                            {item.institute}
                                        </h4>

                                        <p className="mt-4 leading-7 text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home

