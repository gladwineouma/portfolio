// About.jsx
import { Mail, Phone, MessageCircle } from 'lucide-react'
import Typewriter from './Typewriter'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import ContactRowWithIcon from './ContactRow' // Verify your file path here

export default function About() {
    const roles = ['UI/UX Designer', 'Backend dev', 'Mobile dev', 'QA tester', 'Researcher', 'Product manager']

    return (
        /* The entire section now uses your beautiful dark purple background gradient */
        <section id="about" className="min-h-screen flex items-center justify-center py-16 px-6 md:px-16 bg-gradient-to-r from-[#020005] via-[#0d011a] to-[#2b0054]">
            <div className="max-w-6xl w-full">

                {/* Perfect prominent Pill Heading sizing */}
                <div className="mb-10">
                    <div className="inline-block px-9 py-3 bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#4c1d95] rounded-full font-bold text-2xl italic text-black shadow-lg">
                        About me
                    </div>
                </div>

                {/* Main 12-Column Responsive Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Column Area: Biographic Details (7 Spans out of 12) */}
                    <div className="md:col-span-7 flex flex-col gap-5 text-left">
                        {/* Greeting */}
                        <p className="text-white text-[16px] md:text-[17px] font-normal tracking-wide">Hi!</p>

                        {/* Name Header */}
                        <p className="text-white text-[16px] md:text-[17px] font-normal tracking-wide">
                            My name is <span className="text-[#a855f7] font-semibold">Gladwine Ouma</span>.
                        </p>

                        {/* Description Text */}
                        <p className="text-gray-300 text-[15px] md:text-[16px] leading-relaxed font-normal tracking-wide">
                            I am a <Typewriter words={roles} /> based in Nairobi, Kenya — building production web apps, REST APIs and interactive dashboards with Django, React and modern JavaScript.
                        </p>

                        {/* Objective Statement Block */}
                        <p className="text-gray-300 text-[15px] md:text-[16px] leading-relaxed font-normal tracking-wide mt-2">
                            <span className="text-[#a855f7] font-semibold">My objective:</span> Design and ship scalable end-to-end systems, deepen my work in AI and automation, and contribute meaningfully to engineering teams solving real problems.
                        </p>

                        {/* Contact Information Sub-Section Area */}
                        <div className="mt-6">
                            <h3 className="text-white text-2xl font-bold italic mb-6 tracking-wide">Contact</h3>

                            {/* Flex/Grid system built specifically to give email row more horizontal width */}
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-4 gap-x-4 max-w-2xl">

                                {/* Row 1: Email (Spans 7 blocks) & Phone (Spans 5 blocks) */}
                                <div className="sm:col-span-7">
                                    <ContactRowWithIcon icon={Mail} text="oumagladwineesther@gmail.com" href="mailto:oumagladwineesther@gmail.com" />
                                </div>
                                <div className="sm:col-span-5">
                                    <ContactRowWithIcon icon={Phone} text="+254 742 838 976" href="tel:+254742838976" />
                                </div>

                                {/* Row 2: WhatsApp (Spans 7 blocks) & LinkedIn (Spans 5 blocks) */}
                                <div className="sm:col-span-7">
                                    <ContactRowWithIcon icon={MessageCircle} text="WhatsApp: +254 742 838 976" href="https://wa.me" />
                                </div>
                                <div className="sm:col-span-5">
                                    <ContactRowWithIcon icon={FiLinkedin} text="linkedin.com/in/gladwine-ouma" href="https://linkedin.com" />
                                </div>

                                {/* Row 3: GitHub (Spans full width) */}
                                <div className="sm:col-span-12">
                                    <ContactRowWithIcon icon={FiGithub} text="github.com/gladwineouma" href="https://github.com" />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right Column Area: Profile Image Display (5 Spans out of 12) */}
                    <div className="md:col-span-5 flex items-center justify-center md:justify-end w-full">
                        <div className="relative">
                            {/* Purple Glow Effect Aura */}
                            <div className="absolute inset-0 rounded-full bg-purple-600/25 blur-[50px] transform scale-110 pointer-events-none" />

                            {/* Image container frame matching the target look */}
                            <div className="relative rounded-[50px] overflow-hidden border border-purple-500/20 shadow-[0_0_60px_rgba(147,51,234,0.2)]">
                                <img
                                    src="/portfolio.png" // Serves directly from your Vite static public folder base
                                    alt="Gladwine Ouma"
                                    className="w-72 h-72 md:w-[350px] md:h-[350px] object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}