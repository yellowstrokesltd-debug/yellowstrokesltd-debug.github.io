import { Layout } from '../../components/layout';
import { SEO } from '../../components/SEO';
import { Check, Heart, Compass, Star, Instagram, Phone } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { BackProjectsSection } from '../../components/BackProjectsSection';

export default function BeyondTheClassroomPage() {
    return (
        <Layout>
            <SEO
                title="Beyond The Classroom"
                description="A new chapter for women educators. Retirement isn't the end of your journey. Join our virtual coaching workshop to rediscover purpose, wellbeing, and new opportunities."
            />

            {/* Hero Section */}
            <div className="relative bg-[#29708F] py-20 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-yellow-400 text-black font-bold text-sm rounded-full mb-6 uppercase tracking-wider shadow-sm">
                                Virtual Coaching Workshop
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                                BEYOND THE<br />
                                <span className="text-yellow-400">CLASSROOM</span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6 border-b-2 border-yellow-400/30 pb-4 inline-block">
                                A new chapter for women educators
                            </h2>
                            <p className="text-xl md:text-2xl text-blue-50 font-light leading-relaxed max-w-xl">
                                Retirement isn't the end of your journey. Join our virtual coaching workshop to rediscover yourself.
                            </p>
                        </div>
                        <div className="hidden lg:block relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-[#29708F] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                                <ImageWithFallback
                                    src="/projecttwo.webp"
                                    alt="Beyond The Classroom Workshop"
                                    className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                                <h3 className="text-3xl font-bold text-[#29708F] mb-8" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                                    Rediscover Your Path
                                </h3>
                                
                                <div className="prose prose-lg text-gray-600 mb-10">
                                    <p className="text-xl lead font-medium text-gray-800">
                                        After years of dedicating your life to shaping the minds of others, it's time to focus on your own next chapter.
                                    </p>
                                    <p>
                                        Our specialized virtual coaching workshop is designed exclusively for women educators navigating the transition of retirement or seeking a new direction beyond traditional teaching. We provide a supportive, empowering space to explore what comes next.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                    <FeatureCard 
                                        icon={<Compass className="w-8 h-8 text-yellow-500" />} 
                                        title="Purpose" 
                                        description="Uncover new passions and ways to contribute your immense expertise."
                                    />
                                    <FeatureCard 
                                        icon={<Heart className="w-8 h-8 text-pink-500" />} 
                                        title="Wellbeing" 
                                        description="Prioritize balance, mental health, and personal fulfillment."
                                    />
                                    <FeatureCard 
                                        icon={<Star className="w-8 h-8 text-blue-500" />} 
                                        title="New Opportunities" 
                                        description="Explore alternative careers, consulting, or entrepreneurial ventures."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar - Registration info */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#29708F] rounded-3xl p-8 shadow-xl text-white sticky top-24 transform transition-transform hover:-translate-y-1 duration-300">
                                <div className="inline-block px-3 py-1 bg-red-500 text-white font-bold text-xs rounded-full mb-6 animate-pulse shadow-md">
                                    REGISTRATION ONGOING
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Secure Your Spot</h3>
                                <p className="text-blue-100 mb-8">
                                    Spaces in our virtual workshop are limited to ensure personalized attention and meaningful connection.
                                </p>
                                
                                <a 
                                    href="https://forms.gle/Rhqv1McHUqRmhYd4A" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-6 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg mb-8"
                                >
                                    Register Now
                                </a>

                                <div className="space-y-6 pt-6 border-t border-blue-800/50">
                                    <h4 className="text-sm uppercase tracking-wider text-blue-200 font-semibold mb-4">Contact & Connect</h4>
                                    
                                    <a href="https://instagram.com/better_humanbeings" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-[#29708F] transition-colors mr-4 shadow-sm">
                                            <Instagram className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-blue-200">Instagram</div>
                                            <div className="font-medium group-hover:text-yellow-400 transition-colors">@better_humanbeings</div>
                                        </div>
                                    </a>
                                    
                                    <a href="tel:+254723572882" className="flex items-center group">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-[#29708F] transition-colors mr-4 shadow-sm">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-blue-200">Call/WhatsApp</div>
                                            <div className="font-medium group-hover:text-yellow-400 transition-colors">+254 723 572 882</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BackProjectsSection
                title="Ready for your next chapter?"
                description="Join the Beyond The Classroom workshop today and connect with other women educators discovering their true post-retirement potential."
                buttonLabel="Contact Us to Register"
                defaultSubject="Registration: Beyond The Classroom Workshop"
            />
        </Layout>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="mb-4 bg-white w-14 h-14 rounded-xl shadow-sm flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}
