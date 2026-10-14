import { useState } from 'react';
import { Globe, RefreshCw, Code2, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="relative w-full h-[350px] [perspective:1000px] group">
            <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>

                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-[#1e103c] backdrop-blur-xl border border-purple-500/15 rounded-[32px] p-8 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_10px_40px_rgba(0,0,0,0.3)]">

                    <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2a1354]/50 border border-purple-500/20 text-purple-400">
                            {project.id === 1 && <Globe className="h-5 w-5 text-purple-400" />}
                            {project.id === 2 && (
                                <div className="grid grid-cols-2 gap-0.5 w-4 h-4 text-purple-400">
                                    <div className="border border-purple-400 rounded-sm"></div>
                                    <div className="border border-purple-400 rounded-sm bg-purple-400"></div>
                                    <div className="border border-purple-400 rounded-sm bg-purple-400"></div>
                                    <div className="border border-purple-400 rounded-sm"></div>
                                </div>
                            )}
                            {project.id === 3 && (
                                <div className="flex gap-1 items-center justify-center text-purple-400">
                                    <div className="w-2 h-2 rounded-full border border-purple-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            {project.status && (
                                <span className={`text-[10px] font-bold tracking-widest uppercase ${project.status === 'IN PRODUCTION' ? 'text-green-400/80 bg-green-500/10 px-2 py-0.5 rounded-md border border-green-500/20' : 'text-purple-400/40'}`}>
                                    {project.status}
                                </span>
                            )}
                            <button onClick={handleFlip} className="p-1.5 rounded-full text-gray-500 hover:text-purple-400 transition-colors">
                                <RefreshCw className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col flex-grow mt-5 text-left">
                        <h3 className="text-white text-2xl font-bold tracking-wide mb-1">{project.title}</h3>
                        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">{project.role}</p>
                        <p className="text-gray-300 text-[14px] leading-relaxed tracking-wide font-normal line-clamp-4">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex justify-end mt-2">
                        <button
                            onClick={handleFlip}
                            className="flex items-center gap-2 px-5 py-2 bg-[#211145]/40 border border-purple-500/20 rounded-full text-purple-300 text-xs font-medium hover:bg-[#2d185c]/60 hover:border-purple-400/40 transition-all duration-300"
                        >
                            <span>Code & live</span>
                            <RefreshCw className="h-3 w-3 text-purple-400/70" />
                        </button>
                    </div>

                </div>

                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1c0a35] border border-purple-500/30 rounded-[32px] p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(147,51,234,0.15)]">
                    <div className="flex items-center justify-between">
                        <h4 className="text-purple-300 font-bold text-sm tracking-wider uppercase">Project Assets</h4>
                        <button onClick={handleFlip} className="p-1.5 rounded-full text-gray-400 hover:text-purple-400 transition-colors">
                            <RefreshCw className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-4 text-left my-auto">
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">Built With:</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, idx) => (
                                    <span key={idx} className="px-2.5 py-1 bg-purple-900/40 border border-purple-500/20 rounded-md text-xs text-purple-200 font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {project.links ? (
                        <div className="flex flex-col gap-2.5 w-full text-left bg-[#250d4f]/30 border border-purple-500/10 p-4 rounded-2xl text-xs text-gray-300 font-medium tracking-wide">
                            {project.links.map((group, index) => (
                                <div key={index} className="flex items-center justify-between border-b border-purple-500/5 pb-1.5 last:border-0 last:pb-0">
                                    <span className="text-purple-300 font-semibold">{group.component}:</span>
                                    <div className="flex items-center gap-3">
                                        {group.code && (
                                            <a href={group.code} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors group/link">
                                                <Code2 className="h-3 w-3 text-purple-400 group-hover/link:text-white" />
                                                <span>Code</span>
                                            </a>
                                        )}
                                        {group.code && (group.demo || group.Wireframes) && <span className="text-purple-500/30">|</span>}
                                        {(group.demo || group.Wireframes) && (
                                            <a
                                                href={group.demo || group.Wireframes}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1 hover:text-white transition-colors group/link"
                                            >
                                                <ExternalLink className="h-3 w-3 text-purple-400 group-hover/link:text-white" />
                                                <span>
                                                    {group.Wireframes ? 'Wireframes' : (group.component === 'Design Assets' ? 'Wireframes' : 'Live Demo')}
                                                </span>
                                            </a>
                                        )}

                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-3 w-full">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-medium transition-colors"
                            >
                                <Code2 className="h-4 w-4" />
                                <span>Source Code</span>
                            </a>
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 py-2.5 bg-[#250d4f] border border-purple-500/30 text-purple-300 rounded-xl text-sm font-medium hover:border-purple-400 transition-colors"
                            >
                                <ExternalLink className="h-4 w-4" />
                                <span>Live Demo</span>
                            </a>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
