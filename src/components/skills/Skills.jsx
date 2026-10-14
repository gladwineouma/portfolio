import PillHeading from '../ui/PillHeading'

export default function Skills() {
    const techBadges = [
        { label: 'Dj', fullName: 'Django', bg: 'bg-[#15803d]/20 text-[#22c55e] border-[#22c55e]/30' },
        { label: 'Re', fullName: 'React', bg: 'bg-[#1d4ed8]/20 text-[#3b82f6] border-[#3b82f6]/30' },
        { label: 'Nx', fullName: 'Next.js', bg: 'bg-[#262626]/40 text-[#a3a3a3] border-[#a3a3a3]/30' },
        { label: 'RN', fullName: 'React Native', bg: 'bg-[#4338ca]/20 text-[#6366f1] border-[#6366f1]/30' },
        { label: 'SQ', fullName: 'SQL', bg: 'bg-[#7c2d12]/30 text-[#ea580c] border-[#ea580c]/30' },
        { label: 'Gh', fullName: 'GitHub', bg: 'bg-[#7f1d1d]/30 text-[#ef4444] border-[#ef4444]/30' }
    ];

    const engineeringStrengths = [
        "API integration", "End-to-end delivery",
        "System architecture", "Quality assurance"
    ];

    const skillSet = [
        "Backend Engineering", "REST API Design", "Data Modeling",
        "Frontend & Mobile", "Web Deployment", "Testing & QA"
    ];

    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-16 px-6 md:px-16 bg-gradient-to-r from-[#020005] via-[#0d011a] to-[#2b0054]">
            <div className="max-w-6xl w-full">

                <div className="mb-10">
                    <div className="inline-block px-9 py-3 bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#4c1d95] rounded-full font-bold text-2xl italic text-black shadow-lg">
                        Skills & Expertise
                    </div>
                </div>

                <div className="w-full bg-[#160b2b]/30 backdrop-blur-xl border border-purple-500/20 rounded-[32px] p-8 md:p-12 shadow-[0_0_50px_rgba(147,51,234,0.08)]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        <div className="flex flex-col gap-10">

                            <div>
                                <h3 className="text-white text-xl font-bold italic tracking-wide mb-5">Technical skills</h3>
                                <div className="flex flex-wrap gap-4">
                                    {techBadges.map((badge, idx) => (
                                        <div key={idx} className="group relative">
                                            
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 scale-95 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 z-10">
                                                <div className="bg-[#120720] text-gray-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-purple-500/30 whitespace-nowrap shadow-[0_4px_20px_rgba(147,51,234,0.2)]">
                                                    {badge.fullName}
                                                </div>
                                                <div className="w-2 h-2 bg-[#120720] border-r border-b border-purple-500/30 absolute left-1/2 -translate-x-1/2 -bottom-1 rotate-45"></div>
                                            </div>
                                            
                                            <div
                                                className={`w-11 h-11 rounded-full flex items-center justify-center text-[15px] font-bold border tracking-tight shadow-md transform hover:scale-105 transition-transform duration-200 cursor-default ${badge.bg}`}
                                            >
                                                {badge.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white text-xl font-bold italic tracking-wide mb-4">Backend & Systems</h3>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                    <div className="text-gray-300 text-[15px] tracking-wide">REST APIs & Architecture</div>
                                    <div className="text-gray-300 text-[15px] tracking-wide">Django services</div>
                                    <div className="text-gray-300 text-[15px] tracking-wide">ERD & data modeling</div>
                                    <div className="text-gray-300 text-[15px] tracking-wide">M-Pesa Daraja, EmailJS</div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white text-xl font-bold italic tracking-wide mb-4">Interests</h3>
                                <div className="flex items-center flex-wrap gap-x-4 text-gray-300 text-[15px] tracking-wide">
                                    <span>Generative AI</span>
                                    <span className="text-purple-500/40">|</span>
                                    <span>Automation</span>
                                    <span className="text-purple-500/40">|</span>
                                    <span>System Design</span>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col gap-10">

                            <div>
                                <h3 className="text-white text-xl font-bold italic tracking-wide mb-4">Engineering strengths</h3>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-300 text-[15px] tracking-wide">
                                    {engineeringStrengths.map((str, idx) => (
                                        <div key={idx}>{str}</div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white text-xl font-bold italic tracking-wide mb-4">Skill set</h3>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-300 text-[15px] tracking-wide">
                                    {skillSet.map((item, idx) => (
                                        <div key={idx}>{item}</div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white text-xl font-bold italic tracking-wide mb-4">Languages</h3>
                                <div className="flex items-center flex-wrap gap-x-4 text-gray-300 text-[15px] tracking-wide">
                                    <span>English (Fluent)</span>
                                    <span className="text-purple-500/40">|</span>
                                    <span>Swahili (Native)</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
