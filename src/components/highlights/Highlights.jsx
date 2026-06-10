// src/components/highlights/Highlights.jsx
import { Cpu, Database, PenTool, Sparkles, Layers, Box } from 'lucide-react'

export default function Highlights() {
    const highlights = [
        {
            icon: Cpu,
            title: 'End-to-end systems',
            description: 'Concept → architecture → deployment.'
        },
        {
            icon: Database,
            title: 'Scalable APIs',
            description: 'REST services & data models built across stacks.'
        },
        {
            icon: PenTool,
            title: 'Reliability focus',
            description: 'Structured testing & production deployments.'
        },
        {
            icon: Sparkles,
            title: 'AI exposure',
            description: 'Generative AI, chatbots & API automation.'
        },
        {
            icon: Layers,
            title: 'Cross-stack delivery',
            description: 'Frontend, backend & mobile collaboration.'
        },
        {
            icon: Box,
            title: 'Product engineering',
            description: 'PRDs, ERDs & system design with Lucidchart.'
        }
    ]

    return (
        <section id="highlights" className="min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-16 bg-[#1e103c]">
            <div className="max-w-6xl w-full text-left">

                {/* Main Heading Pill Element */}
                <div className="mb-14">
                    <div className="inline-block px-9 py-3 bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#4c1d95] rounded-full font-bold text-2xl italic text-black shadow-lg">
                        Engineering highlights
                    </div>
                </div>

                {/* 3-Column Light Glassmorphism Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                    {highlights.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-[24px] p-7 flex flex-col gap-4 shadow-[0_15px_35px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-white/[0.07] hover:border-purple-400/40 transition-all duration-300 group"
                            >
                                {/* Vector Outline Icons */}
                                <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                                    <IconComponent className="h-5 w-5 stroke-[1.5]" />
                                </div>

                                {/* Typography Blocks */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-white text-[16px] font-bold tracking-wide">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 text-[13.5px] leading-relaxed tracking-wide font-normal">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
