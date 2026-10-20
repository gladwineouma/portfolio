import { useEffect, useRef, useState } from 'react'; 
import { Mail, Phone, MessageCircle, MapPin, Send, Sparkles } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact({ isContactOpen }) {
    const sectionRef = useRef(null);
    const [status, setStatus] = useState(''); 

    const directContacts = [
        { icon: Mail, label: 'EMAIL', value: 'oumagladwineesther@gmail.com', href: 'mailto:oumagladwineesther@gmail.com' },
        { icon: Phone, label: 'PHONE', value: '+254 742 838 976', href: 'tel:+254742838976' },
        { icon: MessageCircle, label: 'WHATSAPP', value: '+254 742 838 976', href: 'https://wa.me' },
        { icon: MapPin, label: 'LOCATION', value: 'Nairobi, Kenya', href: null },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/xrpevjao", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setStatus('Message sent successfully! Thanks for reaching out. I look forward to working with you.');
                e.target.reset(); 
            } else {
                setStatus('Oops! Something went wrong.');
            }
        } catch (error) {
            setStatus('Oops! Something went wrong.');
        }
    };

    useEffect(() => {
        if (isContactOpen) {
            setTimeout(() => {
                sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 150);
        }
    }, [isContactOpen]);

    return (
        <section
            ref={sectionRef}
            id="contact"
            className={`w-full flex flex-col items-center justify-center px-6 md:px-16 transition-all duration-700 ease-in-out overflow-hidden ${isContactOpen ? "max-h-[1400px] opacity-100 py-16" : "max-h-0 opacity-0 py-0 pointer-events-none"
                }`}
        >
            <div className="max-w-6xl w-full">

                <div className="text-left flex flex-col gap-4 max-w-2xl mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs rounded-full w-fit font-medium">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Let's collaborate</span>
                    </div>
                    <h2 className="text-white text-4xl md:text-5xl font-extrabold italic tracking-wide leading-tight">
                        Have a project <br />
                        <span className="bg-gradient-to-r from-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent not-italic">in mind?</span>
                    </h2>
                    <p className="text-gray-400 text-[15px] leading-relaxed font-normal tracking-wide">
                        Whether it's a backend system, a mobile app, a polished frontend, or UX research — I'd love to hear about it. Drop me a message and I'll reply as soon as I can.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="w-full bg-[#160b2b]/30 backdrop-blur-xl border border-purple-500/15 rounded-[24px] p-6 text-left shadow-lg">
                            <h3 className="text-white text-lg font-bold tracking-wide mb-6">Reach me directly</h3>
                            <div className="flex flex-col gap-5">
                                {directContacts.map((contact, idx) => {
                                    const Icon = contact.icon;
                                    const content = (
                                        <div className="flex items-start gap-4 group cursor-pointer">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2a1354]/50 border border-purple-500/20 text-purple-400 group-hover:border-purple-400 transition-all duration-300">
                                                <Icon className="h-4 w-4" />
                                            </div>
                                            <div className="flex flex-col text-left">
                                                <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase mb-0.5">{contact.label}</span>
                                                <span className="text-[14px] text-gray-300 font-medium group-hover:text-purple-300 transition-colors break-all">{contact.value}</span>
                                            </div>
                                        </div>
                                    );
                                    return contact.href ? <a key={idx} href={contact.href} target="_blank" rel="noreferrer">{content}</a> : <div key={idx}>{content}</div>;
                                })}
                            </div>
                        </div>

                        <div className="w-full bg-[#160b2b]/30 backdrop-blur-xl border border-purple-500/15 rounded-[24px] p-6 text-left shadow-lg">
                            <h3 className="text-white text-lg font-bold tracking-wide mb-5">Find me online</h3>
                            <div className="flex flex-wrap gap-3">
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#211145]/40 border border-purple-500/15 rounded-full text-gray-300 text-xs font-medium hover:bg-[#2d185c]/60 hover:text-purple-300 transition-all duration-300">
                                    <FiGithub className="h-3.5 w-3.5" /> <span>GitHub</span>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#211145]/40 border border-purple-500/15 rounded-full text-gray-300 text-xs font-medium hover:bg-[#2d185c]/60 hover:text-purple-300 transition-all duration-300">
                                    <FiLinkedin className="h-3.5 w-3.5" /> <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="lg:col-span-7 w-full bg-[#160b2b]/30 backdrop-blur-xl border border-purple-500/15 rounded-[28px] p-8 flex flex-col gap-5 shadow-lg">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">YOUR NAME</label>
                            <input name="name" type="text" placeholder="Gladwine Ouma" required className="w-full bg-[#1a0e36]/60 border border-purple-500/20 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-400 transition-all duration-300" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">EMAIL</label>
                            <input name="email" type="email" placeholder="gladwine@gmail.com" required className="w-full bg-[#1a0e36]/60 border border-purple-500/20 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-400 transition-all duration-300" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">PROJECT DETAILS</label>
                            <textarea name="message" rows={5} placeholder="Tell me about your project, timeline, and goals..." required className="w-full bg-[#1a0e36]/60 border border-purple-500/20 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 resize-none focus:outline-none focus:border-purple-400 transition-all duration-300"></textarea>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#6b21a8] text-black font-semibold text-sm rounded-full shadow-lg transition-all duration-300">
                                <span>Send message</span>
                                <Send className="h-3.5 w-3.5 stroke-[2.5]" />
                            </button>
                            {status && <span className="text-xs text-purple-400 font-medium transition-all duration-300">{status}</span>}
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}
