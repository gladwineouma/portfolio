import { Mail, ChevronUp } from "lucide-react";

export default function Footer({ isContactOpen, setIsContactOpen }) {
    return (
        <footer className="w-full flex flex-col items-center justify-center pb-8 px-6 md:px-16">
            <div className="max-w-6xl w-full flex flex-col items-center gap-12">

                <div className="w-full bg-[#1e103c] backdrop-blur-xl border border-purple-500/15 rounded-[32px] py-16 px-8 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">

                    <h2 className="text-white text-3xl md:text-4xl font-bold italic tracking-wide mb-3">
                        Have a project <span className="bg-gradient-to-r from-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent not-italic">in mind?</span>
                    </h2>

                    <p className="text-gray-400 text-sm md:text-base font-normal tracking-wide mb-8">
                        Let's talk about what you're building.
                    </p>

                    <button
                        onClick={() => setIsContactOpen(!isContactOpen)}
                        className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#6b21a8] text-black font-semibold text-[14px] rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                        <span>{isContactOpen ? "Hide contact panel" : "Get in touch"}</span>
                        {isContactOpen ? <ChevronUp className="h-4 w-4 stroke-[2.5]" /> : <Mail className="h-4 w-4 stroke-[2.5]" />}
                    </button>
                </div>

                <p className="text-gray-600 text-xs tracking-wide font-normal">
                    © {new Date().getFullYear()} Gladwine Ouma
                </p>
            </div>
        </footer>
    );
}
