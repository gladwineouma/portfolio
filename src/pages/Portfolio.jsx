import { useState } from 'react'
import NavBar from '../components/navbar/NavBar'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Highlights from '../components/highlights/Highlights'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

function Portfolio() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="portfolio min-h-screen text-white bg-gradient-to-r from-[#020005] via-[#0d011a] to-[#2b0054]">
            <NavBar setIsContactOpen={setIsContactOpen} />

            <main className="main-content">
                <About />
                <Skills />
                <Projects />
                <Highlights />

                <Contact isContactOpen={isContactOpen} />

                <Footer isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />
            </main>
        </div>
    )
}

export default Portfolio
