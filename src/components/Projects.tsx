import { ArrowUpRight } from "lucide-react";

interface Project {
    title: string;
    category: string;
    year: string;
}

const projects: Project[] = [
    { title: "Neon Horizon", category: "WebGL Experience", year: "2025" },
    { title: "Aether Lens", category: "AI Interface", year: "2024" },
    { title: "Quantum Dash", category: "Interactive Dashboard", year: "2024" },
    { title: "Velvet UI", category: "Design System", year: "2023" },
];

export default function Projects() {
    return (
        <section className="relative z-10 w-full bg-[#121212] px-4 py-24 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-16 text-4xl font-light tracking-tighter text-white/90 md:text-6xl">
                    Selected Works
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10"
                        >
                            <div className="flex justify-between">
                                <span className="text-sm font-medium uppercase tracking-widest text-white/50">
                                    {project.category}
                                </span>
                                <span className="text-sm font-medium text-white/50">
                                    {project.year}
                                </span>
                            </div>

                            <div className="flex items-end justify-between">
                                <h3 className="text-3xl font-light text-white transition-transform duration-300 md:text-4xl group-hover:-translate-y-1">
                                    {project.title}
                                </h3>
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0">
                                    <ArrowUpRight className="h-6 w-6" />
                                </div>
                            </div>

                            {/* Decorative Gradient Blob */}
                            <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-blue-500/20 blur-[80px] transition-all duration-500 group-hover:bg-blue-400/30" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
