import { Layout } from '../components/layout';
import { SEO } from '../components/SEO';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BackProjectsSection } from '../components/BackProjectsSection';

export default function BetterHumanBeingsPage() {
    const bhbAreas = [
        { title: 'Spirituality', description: 'Purpose rooted in Christian values' },
        { title: 'Mental Health', description: 'Clarity and focus' },
        { title: 'Emotional Health', description: 'Resilience and empathy' },
        { title: 'Physical Health', description: 'Strength and longevity' },
        { title: 'Nutritional Health', description: 'Sustainable health, fuel and energy' },
        { title: 'Sexual Health', description: 'Wholeness, healthy relationships, moral reputation and personal integrity' },
        { title: 'Digital Health', description: 'Digital intentionality leading a life not led by devices' },
        { title: 'Rest', description: 'Renewal, rejuvenation, quality productivity and peace' },
    ];

    return (
        <Layout>
            <SEO
                title="Better Human Beings"
                description="Do better, Be better. Our flagship service bridging professional success with personal wellbeing through a radical, holistic approach."
            />
            <section className="py-12 bg-gradient-to-br from-blue-50 to-blue-100" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#29708F]" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                            Better Human Beings
                        </h2>
                        <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-4">
                            Our flagship service guided by a simple slogan: <span className="font-semibold">Do better, Be better.</span>
                        </p>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            Better Human Beings takes a radical, holistic approach to development. We bridge the gap between professional success and personal wellbeing by integrating Christian spirituality, nutritional health, and mental and physical fitness with the modern necessities of digital health, sexual wholeness, and the power of rest.
                        </p>
                    </div>

                    {/* Image Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="relative rounded-2xl overflow-hidden shadow-[8px_8px_16px_rgba(41,112,143,0.3),-8px_-8px_16px_rgba(255,255,255,0.7)] hover:shadow-[12px_12px_24px_rgba(41,112,143,0.4),-12px_-12px_24px_rgba(255,255,255,0.8)] transition-all hover:-translate-y-2 border-2 border-white/60">
                            <ImageWithFallback
                                src="/holisticwellness.webp"
                                alt="Holistic wellness"
                                className="w-full h-[300px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#29708F]/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-bold">Holistic Wellness</h3>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-[8px_8px_16px_rgba(41,112,143,0.3),-8px_-8px_16px_rgba(255,255,255,0.7)] hover:shadow-[12px_12px_24px_rgba(41,112,143,0.4),-12px_-12px_24px_rgba(255,255,255,0.8)] transition-all hover:-translate-y-2 border-2 border-white/60">
                            <ImageWithFallback
                                src="/mentalclarity.webp"
                                alt="Meditation and peace"
                                className="w-full h-[300px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#29708F]/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-bold">Mental Clarity</h3>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-[8px_8px_16px_rgba(41,112,143,0.3),-8px_-8px_16px_rgba(255,255,255,0.7)] hover:shadow-[12px_12px_24px_rgba(41,112,143,0.4),-12px_-12px_24px_rgba(255,255,255,0.8)] transition-all hover:-translate-y-2 border-2 border-white/60">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1768335566098-3b46cc4baeaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGdyb3d0aCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2ODU1MTg3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Personal growth"
                                className="w-full h-[300px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#29708F]/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-bold">Personal Growth</h3>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {bhbAreas.map((area, index) => (
                            <div
                                key={area.title}
                                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-[6px_6px_12px_rgba(41,112,143,0.2),-6px_-6px_12px_rgba(255,255,255,0.8)] hover:shadow-[8px_8px_16px_rgba(41,112,143,0.25),-8px_-8px_16px_rgba(255,255,255,0.9)] transition-all border border-white/30"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-[#29708F]">{area.title}</h3>
                                <p className="text-gray-600 text-sm">{area.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12 mb-16">
                        <p className="text-lg text-gray-700 font-semibold mb-6">
                            Whether you are an individual, a group or institution, we aim to help you become a better version of yourself than you were yesterday.
                        </p>
                        <Link
                            to="/about#services"
                            className="inline-flex items-center px-8 py-4 bg-[#29708F] text-white font-semibold rounded-xl hover:bg-[#1f5a73] transition-all shadow-lg"
                        >
                            Learn More About Our Programs
                            <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>


                    <div className="mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#29708F] mb-4">Current Projects</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Explore our active initiatives and challenges. Click to learn more and join us.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Link to="/projects/do-better-be-better" className="block group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="w-full">
                                    <ImageWithFallback
                                        src="/projectpreview.jpeg"
                                        alt="Current Project Preview"
                                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                                    <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full mb-3 w-fit">
                                        FEATURED
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                        DoBetterBeBetterTogether Challenge
                                    </h3>
                                    <p className="text-gray-200 line-clamp-2 mb-4">
                                        What if you and 3–5 friends finally worked on those goals you keep talking about?
                                    </p>
                                    <div className="flex items-center text-white font-semibold">
                                        View Details <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <BackProjectsSection />
                </div>
            </section >
        </Layout>
    );
}
