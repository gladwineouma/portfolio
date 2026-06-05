import PillHeading from '../ui/PillHeading'

export default function Skills() {
    // Exact lists from your mockup image
    const engineeringStrengths = [
        "API integration", "End-to-end delivery",
        "System architecture", "Quality assurance"
    ];

    const skillSet = [
        "Backend Engineering", "REST API Design", "Data Modeling",
        "Frontend & Mobile", "Web Deployment", "Testing & QA"
    ];

    const techBadges = [
        { label: 'Dj', bg: 'bg-[#15803d]/20 text-[#22c55e] border-[#22c55e]/30' }, // Django
        { label: 'Re', bg: 'bg-[#1d4ed8]/20 text-[#3b82f6] border-[#3b82f6]/30' }, // React
        { label: 'Nx', bg: 'bg-[#262626]/40 text-[#a3a3a3] border-[#a3a3a3]/30' }, // Next.js
        { label: 'RN', bg: 'bg-[#4338ca]/20 text-[#6366f1] border-[#6366f1]/30' }, // React Native
        { label: 'SQ', bg: 'bg-[#7c2d12]/30 text-[#ea580c] border-[#ea580c]/30' }, // SQL
        { label: 'Gh', bg: 'bg-[#7f1d1d]/30 text-[#ef4444] border-[#ef4444]/30' }  // GitHub
    ];

    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-16 px-6 md:px-16 bg-gradient-to-r from-[#020005] via-[#0d011a] to-[#2b0054]">
            <div className="max-w-6xl w-full">

                {/* Pill Heading Container */}
                <div className="mb-10">
                    <div className="inline-block px-9 py-3 bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#4c1d95] rounded-full font-bold text-2xl italic text-black shadow-lg">
                        Skills & Expertise
                    </div>
                </div>

                {/* Big Glassmorphism Panel Wrapper */}
                <div className="w-full bg-[#160b2b]/30 backdrop-blur-xl border border-purple-500/20 rounded-[32px] p-8 md:p-12 shadow-[0_0_50px_rgba(147,51,234,0.08)]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* LEFT COLUMN: SKILLS, BACKEND, INTERESTS */}
                        <div className="flex flex-col gap-10">

                            {/* Section: Technical Skills Circle Badges */}
                            <div>
                                <h3 className="text-white text-xl font-bold italic tracking-wide mb-5">Technical skills</h3>
                                <div className="flex flex-wrap gap-4">
                                    {techBadges.map((badge, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-11 h-11 rounded-full flex items-center justify-center text-[15px] font-bold border tracking-tight shadow-md transform hover:scale-105 transition-transform duration-200 cursor-default ${badge.bg}`}
                                        >
                                            {badge.label}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section: Backend & Systems */}
                            <div>
                                <h3 className="text-white text-xl font-bold italic tracking-wide mb-4">Backend & Systems</h3>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                    <div className="text-gray-300 text-[15px] tracking-wide">REST APIs & Architecture</div>
                                    <div className="text-gray-300 text-[15px] tracking-wide">Django services</div>
                                    <div className="text-gray-300 text-[15px] tracking-wide">ERD & data modeling</div>
                                    <div className="text-gray-300 text-[15px] tracking-wide">M-Pesa Daraja, EmailJS</div>
                                </div>
                            </div>

                            {/* Section: Interests */}
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

                        {/* RIGHT COLUMN: STRENGTHS, SKILLSET, LANGUAGES */}
                        <div className="flex flex-col gap-10">

                            {/* Section: Engineering Strengths */}
                            <div>
                                <h3 className="text-white text-xl font-bold italic tracking-wide mb-4">Engineering strengths</h3>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-300 text-[15px] tracking-wide">
                                    {engineeringStrengths.map((str, idx) => (
                                        <div key={idx}>{str}</div>
                                    ))}
                                </div>
                            </div>

                            {/* Section: Skill set */}
                            <div>
                                <h3 className="text-white text-xl font-bold italic tracking-wide mb-4">Skill set</h3>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-300 text-[15px] tracking-wide">
                                    {skillSet.map((item, idx) => (
                                        <div key={idx}>{item}</div>
                                    ))}
                                </div>
                            </div>

                            {/* Section: Languages */}
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
