import { useState } from "react"; // 1. Imported useState
import { Link } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react"; // 2. Imported Menu and X icons
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false); // 3. Added menu state

    const navLinks = [
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
    ];

    const scrollTo = (id) => {
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
            });
        }
        setMenuOpen(false); // 4. Close mobile menu on click
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-purple-500/30 bg-gradient-to-r from-[#03000a] via-[#100021] to-[#1c0033] shadow-[0_0_40px_rgba(168,85,247,0.12)] backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 lg:px-16">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl italic font-bold tracking-tight text-glow"
                >
                    <span className="bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#4c1d95] bg-clip-text text-transparent">
                        Gladwine Ouma
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-14 md:flex">
                    <div className="flex items-center gap-12">
                        {navLinks.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className="text-[20px] font-normal text-white/75 transition-all duration-300 hover:text-purple-400 hover:text-glow"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <SocialIcon
                            href="https://github.com/gladwineouma"
                            icon={FiGithub}
                        />

                        <SocialIcon
                            href="https://www.linkedin.com/in/gladwine-ouma"
                            icon={FiLinkedin}
                        />

                        <SocialIcon
                            href="mailto:oumagladwineesther@gmail.com"
                            icon={Mail}
                        />
                    </div>
                </div>

                {/* 5. Hamburger Button (visible on mobile only) */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white hover:text-purple-400 transition-colors md:hidden focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* 6. Mobile Menu Overlay Dropdown */}
            {menuOpen && (
                <div className="border-t border-purple-500/20 bg-gradient-to-b from-[#100021] to-[#1c0033] px-8 py-6 md:hidden">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className="text-left text-[18px] font-normal text-white/75 transition-all duration-300 hover:text-purple-400 hover:pl-2"
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* Mobile Social Row */}
                        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                            <SocialIcon
                                href="https://github.com/gladwineouma"
                                icon={FiGithub}
                            />

                            <SocialIcon
                                href="https://www.linkedin.com/in/gladwine-ouma"
                                icon={FiLinkedin}
                            />

                            <SocialIcon
                                href="mailto:oumagladwineesther@gmail.com"
                                icon={Mail}
                            />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

function SocialIcon({ href, icon: Icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-white/15
        bg-white/5
        text-white/75
        transition-all duration-300
        hover:-translate-y-1
        hover:border-purple-400/60
        hover:bg-purple-500/10
        hover:text-purple-300
        hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
      "
        >
            <Icon className="h-5 w-5" />
        </a>
    );
}
