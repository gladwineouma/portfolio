import ProjectCard from './ProjectCard';

export default function Projects() {
    const projects = [

        {
            id: 1,
            title: 'iCure Africa',
            description: 'A production informational website for a registered Community Based Organisation (CBO)...',
            tech: ['React', 'Vite', 'Tailwind CSS', 'Lucide Icons'],
            link: 'https://github.com/gladwineouma/icure-website',
            demo: 'https://icure.africa',
            role: 'FULL-STACK DEVELOPER',
            status: 'IN PRODUCTION'
        },
        {
            id: 2,
            title: 'MalipoFlex',
            description: 'Financial systems platform for savings, loans and inclusion targeting informal workers...',
            tech: ['Django', 'Next.Js', 'React Native', 'PostgreSQL', 'Daraja API'],
            role: 'FULL-STACK ENGINEER',
            status: 'IN DEVELOPMENT',
            links: [
                {
                    component: 'Design Assets',
                    code: null,
                    demo: 'https://www.figma.com/design/MZXK9Sxm85OPKhGT206lNM/MalipoFlex?node-id=1-3&p=f&t=BgGBPjsClqRCNVhj-0' 
                },
                {
                    component: 'Info Web',
                    code: null,
                    demo: 'https://malipoflex.vercel.app/'
                },
            ]

        },
        {
            id: 3,
            title: 'EcoRise',
            description: 'Sustainability platform connecting recyclers with traders...',
            tech: ['React', 'Django REST Framework', 'Tailwind CSS'],
            role: 'FULL-STACK DEVELOPER',
            status: 'FOUNDATIONAL',
            links: [
                { component: 'Info Web', code: 'https://github.com/amuormangar/ecorise-informational', demo: 'https://ecorise-informational.netlify.app/#' },
                { component: 'Dashboard', code: 'https://github.com/gladwineouma/Ecorise-Dashboard', demo: 'https://ecorise-dashboard.vercel.app/dashboard' },
                { component: 'Backend', code: 'https://github.com/gladwineouma/EcoRise-backend', demo: 'https://ecorise-backend.onrender.com/api/' }
            ]
        }
    ];


    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-16 bg-gradient-to-r from-[#020005] via-[#0d011a] to-[#2b0054]">
            <div className="max-w-6xl w-full text-left">

                <div className="mb-4">
                    <div className="inline-block px-9 py-3 bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#4c1d95] rounded-full font-bold text-2xl italic text-black shadow-lg">
                        Projects
                    </div>
                </div>

                <p className="text-gray-400 text-sm font-normal tracking-wide mb-12 pl-1">
                    Tap the arrow on a card to flip it and see the code & live previews for each component.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
}
