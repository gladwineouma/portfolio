// src/components/projects/Projects.jsx
import ProjectCard from './ProjectCard';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'iCure Africa',
            description: 'A production informational website for a registered Community Based Organisation (CBO) empowering underprivileged youth in Nairobi. Built to map out their hands-on mobile electronics repair training courses, structural student sponsorship requests, e-waste recycling initiatives, and core mentorship pipelines.',
            tech: ['React', 'Vite', 'Tailwind CSS', 'Lucide Icons'],
            link: 'https://github.com', // Replace with your repository link
            demo: 'https://icure.africa', // Live hosted domain link
            role: 'FULL-STACK DEVELOPER',
            status: 'IN PRODUCTION'
        },
        {
            id: 2,
            title: 'MalipoFlex',
            description: 'Financial systems platform for savings, loans and inclusion targeting informal workers — building accessible transaction accounting APIs.',
            tech: ['Django', 'React Native', 'PostgreSQL', 'M-Pesa API'],
            link: '#',
            demo: '#',
            role: 'FULL-STACK ENGINEER',
            status: 'IN DEVELOPMENT'
        },
        {
            id: 3,
            title: 'EcoRise',
            description: 'Sustainability platform connecting recyclers with traders. React admin dashboard, M-Pesa automated micro-disbursements ledger tracker system.',
            tech: ['React', 'Django REST Framework', 'Tailwind CSS'],
            link: '#',
            demo: '#',
            role: 'FULL-STACK DEVELOPER',
            status: 'FOUNDATIONAL'
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-16 bg-gradient-to-r from-[#020005] via-[#0d011a] to-[#2b0054]">
            <div className="max-w-6xl w-full text-left">

                {/* Large Prominent Pill Heading */}
                <div className="mb-4">
                    <div className="inline-block px-9 py-3 bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#4c1d95] rounded-full font-bold text-2xl italic text-black shadow-lg">
                        Projects
                    </div>
                </div>

                {/* Subtitle Instruction Label */}
                <p className="text-gray-400 text-sm font-normal tracking-wide mb-12 pl-1">
                    Tap the arrow on a card to flip it and see the code & live previews for each component.
                </p>

                {/* 3-Column Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
}
