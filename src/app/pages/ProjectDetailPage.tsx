import { Layout } from '../components/layout';
import { SEO } from '../components/SEO';
import { Check, Calendar, Users, Clock, MessageCircle, BarChart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BackProjectsSection } from '../components/BackProjectsSection';

export default function ProjectDetailPage() {
    return (
        <Layout>
            <SEO
                title="DoBetterBeBetterTogether Challenge"
                description="Join the #DoBetterBeBetter Challenge. Guided by experts to help you evolve with purpose."
            />

            {/* Hero Section */}
            <div className="relative bg-[#29708F] py-20 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-yellow-400 text-black font-bold text-sm rounded-full mb-6">
                                CURRENT CHALLENGE
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                                DoBetterBeBetterTogether Challenge
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
                                What if you and 3–5 friends finally worked on those goals you keep talking about?
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform rotate-2 hover:rotate-0 transition-all duration-500">
                                <ImageWithFallback
                                    src="/projectpreview.jpeg"
                                    alt="DoBetterBeBetterTogether"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg mx-auto text-gray-600 mb-16">
                        <p className="lead text-xl text-gray-800 font-medium mb-8">
                            This time, it’s not just talk—you’ll be guided by experts who help you evolve with purpose and stay on track toward fulfilling your goals.
                        </p>
                        <p className="mb-6">
                            Whether it’s improving your nutrition, going back to school, saving money, exercising, attending church, or moving out…we’re here to walk with you as you grow into your purpose.
                        </p>
                        <p className="mb-6">
                            Change can feel scary and overwhelming. That’s why the <span className="font-bold text-[#29708F]">#DoBetterBeBetter</span> Challenge is designed to remind you that you’re not alone. You’ll pursue your goals alongside friends or family who are working on their own, motivating each other and staying accountable together.
                        </p>
                        <p className="mb-6">
                            At Yellow Stroke, we connect you with a wide network of experts who collaborate with our Coaches. If your goal requires specialized attention, you’ll have access to professionals who can guide you further. For example, if your focus is nutritional health, our Life Coach will bring in a certified nutritionist to provide tailored advice.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-[#29708F] p-8 my-10 rounded-r-xl">
                            <h3 className="text-2xl font-bold text-[#29708F] mb-4">Our Vision</h3>
                            <p className="text-lg italic">
                                "Simple yet powerful: to see you and your friends transformed—living better, doing better, and aligning your lives with God’s purpose."
                            </p>
                        </div>
                    </div>

                    {/* Pricing Packages */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {/* Package 1 */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-gray-50 p-6 border-b border-gray-100 text-center">
                                <h3 className="text-xl font-bold text-[#29708F] uppercase tracking-wider">3 Sessions</h3>
                                <div className="mt-2 text-sm text-gray-500">Starter Package</div>
                            </div>
                            <div className="p-6 flex-grow">
                                <ul className="space-y-4">
                                    <FeatureItem text="3 online sessions" icon={<Calendar className="w-5 h-5 text-yellow-500" />} />
                                    <FeatureItem text="1 expert support" icon={<Users className="w-5 h-5 text-yellow-500" />} />
                                    <FeatureItem text="60 minutes per session" icon={<Clock className="w-5 h-5 text-yellow-500" />} />
                                    <FeatureItem text="Needs assessment & planning" />
                                    <FeatureItem text="WhatsApp accountability" icon={<MessageCircle className="w-5 h-5 text-yellow-500" />} />
                                    <FeatureItem text="Review & goal tracking" icon={<BarChart className="w-5 h-5 text-yellow-500" />} />
                                </ul>
                            </div>
                            <div className="p-6 bg-gray-50 border-t border-gray-100">
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Individual:</span>
                                        <span className="font-bold text-gray-900">Kshs. 6,000/-</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Group of 3:</span>
                                        <span className="font-bold text-gray-900">Kshs. 16,200/-</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Group of 5:</span>
                                        <span className="font-bold text-gray-900">22,500/-</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Package 2 */}
                        <div className="relative bg-white rounded-2xl shadow-xl border-2 border-yellow-400 overflow-hidden flex flex-col transform md:-translate-y-4 z-10">
                            <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 uppercase rounded-bl-lg">
                                Most Popular
                            </div>
                            <div className="bg-[#29708F] p-6 border-b border-blue-800 text-center text-white">
                                <h3 className="text-xl font-bold uppercase tracking-wider">7 Sessions</h3>
                                <div className="mt-2 text-sm text-blue-200">Growth Package</div>
                            </div>
                            <div className="p-6 flex-grow bg-white">
                                <ul className="space-y-4">
                                    <FeatureItem text="7 online sessions" icon={<Calendar className="w-5 h-5 text-yellow-500" />} />
                                    <FeatureItem text="2 expert support" icon={<Users className="w-5 h-5 text-yellow-500" />} />
                                    <FeatureItem text="60 minutes per session" icon={<Clock className="w-5 h-5 text-yellow-500" />} />
                                    <FeatureItem text="Needs assessment & planning" />
                                    <FeatureItem text="WhatsApp accountability" icon={<MessageCircle className="w-5 h-5 text-yellow-500" />} />
                                    <FeatureItem text="Review & goal tracking" icon={<BarChart className="w-5 h-5 text-yellow-500" />} />
                                </ul>
                            </div>
                            <div className="p-6 bg-gray-50 border-t border-gray-100">
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Individual:</span>
                                        <span className="font-bold text-gray-900">Kshs. 13,300/-</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Group of 3:</span>
                                        <span className="font-bold text-gray-900">Kshs. 37,800/-</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Group of 5:</span>
                                        <span className="font-bold text-gray-900">52,500/-</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Package 3 */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-gray-50 p-6 border-b border-gray-100 text-center">
                                <h3 className="text-xl font-bold text-[#29708F] uppercase tracking-wider">12 Sessions</h3>
                                <div className="mt-2 text-sm text-gray-500">Transformation Package</div>
                            </div>
                            <div className="p-6 flex-grow">
                                <ul className="space-y-4">
                                    <FeatureItem text="12 online sessions" icon={<Calendar className="w-5 h-5 text-yellow-500" />} />
                                    <FeatureItem text="4 expert support" icon={<Users className="w-5 h-5 text-yellow-500" />} />
                                    <FeatureItem text="60 minutes per session" icon={<Clock className="w-5 h-5 text-yellow-500" />} />
                                    <FeatureItem text="Needs assessment & planning" />
                                    <FeatureItem text="WhatsApp accountability" icon={<MessageCircle className="w-5 h-5 text-yellow-500" />} />
                                    <FeatureItem text="Review & goal tracking" icon={<BarChart className="w-5 h-5 text-yellow-500" />} />
                                </ul>
                            </div>
                            <div className="p-6 bg-gray-50 border-t border-gray-100">
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Individual:</span>
                                        <span className="font-bold text-gray-900">Kshs. 21,600/-</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Group of 3:</span>
                                        <span className="font-bold text-gray-900">Kshs. 61,200/-</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Group of 5:</span>
                                        <span className="font-bold text-gray-900">84,000/-</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Special Offer */}
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-center shadow-lg relative overflow-hidden mb-16">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Special Offer</h3>
                            <p className="text-gray-900 font-medium text-lg">
                                From February to April, join our sessions and enjoy a <span className="font-black">free 10‑minute introductory call</span> to get started.
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                    </div>

                    <BackProjectsSection
                        title="Back This Project"
                        description="Ready to start your journey? Join the DoBetterBeBetterTogether Challenge today and transform your life with the support of our experts and your community."
                        buttonLabel="Back This Project"
                        defaultSubject="Inquiry: DoBetterBeBetterTogether Challenge"
                    />

                </div>
            </section>
        </Layout>
    );
}

function FeatureItem({ text, icon }: { text: string; icon?: React.ReactNode }) {
    return (
        <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
                {icon || <Check className="w-5 h-5 text-green-500" />}
            </div>
            <span className="ml-3 text-sm text-gray-600">{text}</span>
        </li>
    );
}
