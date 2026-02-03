import { Layout } from '../components/layout';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ProjectsPage() {
    const projects = [
        {
            id: 'do-better-be-better',
            title: 'DoBetterBeBetterTogether Challenge',
            description: "What if you and 3–5 friends finally worked on those goals you keep talking about? This time, it’s not just talk—you’ll be guided by experts who help you evolve with purpose.",
            image: '/projectpreview.jpeg',
            link: '/projects/do-better-be-better'
        }
    ];

    return (
        <Layout>
            <SEO
                title="Current Projects"
                description="Explore our current projects and challenges designed to help you live better and do better."
            />
            <section className="py-20 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#29708F]" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                            Current Projects
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join us in our ongoing initiatives to transform lives and build better communities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                to={project.link}
                                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block border border-gray-100"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#29708F] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center text-[#29708F] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                        View Details <ArrowRight size={18} className="ml-2" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
