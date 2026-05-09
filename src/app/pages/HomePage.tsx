import { Layout } from '../components/layout';
import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ScrollReveal';
import { Users, Target, Heart, Sparkles, ArrowRight, Play, X, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      text: "It was a real shift. It challenged me in ways I didn't expect, especially around discipline and consistency. I'm leaving more aware, more aligned, and definitely more committed to my personal growth.",
      author: "Cynthia Mwikali",
      image: "/testimonials/cynthia.png",
    },
    {
      text: "I was able to get out of my head and realize that we are all struggling but also doing our best to be better. It highlighted to me how important it is to give others grace.",
      author: "Anabel Matalanga",
      role: "Impact Work",
      image: "/testimonials/anabel.png",
    },
    {
      text: "The space was far more open and inclusive than I anticipated, creating room for honest conversations. The guest speakers brought authenticity and vulnerability that was both relatable and impactful. I left with renewed clarity and direction.",
      author: "Havana Gari",
      role: "Humanitarian Aid Worker",
      image: "/testimonials/havana.png",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  const services = [
    {
      icon: Users,
      title: 'Coaching',
      description: 'Gain clarity, overcome limitations, and take aligned action toward your goals through personalized sessions',
      color: 'bg-yellow-50 text-yellow-600',
      animatedIcon: '/coaching.gif',
    },
    {
      icon: Target,
      title: 'Mentorship',
      description: 'Ongoing guidance and support for deeper growth, discipline, and alignment with your purpose',
      color: 'bg-blue-50 text-blue-600',
      animatedIcon: '/mentoring.gif',
    },
    {
      icon: Heart,
      title: 'Facilitating',
      description: 'Meaningful, results-driven conversations that spark growth, reflection, and transformation for groups',
      color: 'bg-purple-50 text-purple-600',
      animatedIcon: '/facilitating.gif',
    },
    {
      icon: Sparkles,
      title: 'Training',
      description: 'Practical skills and applicable frameworks that translate into real-life impact',
      color: 'bg-green-50 text-green-600',
      animatedIcon: '/training.gif',
    },
  ];



  return (
    <Layout>
      <SEO
        title="Home"
        description="Evolve with purpose and grow with guidance. Yellow Stroke empowers modern Christian women through coaching, mentorship, facilitating, and training for transformative growth."
      />
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden min-h-screen flex flex-col justify-center items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/yellowstroke.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#28708F]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

          <ScrollReveal width="100%">
            <ScrollReveal width="100%">
              <div className="flex flex-col items-center">
                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-white leading-tight max-w-5xl">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Evolve</span> with Purpose, <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Grow</span> with Guidance
                </h1>

                {/* Services Grid in Hero */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full">
                  {services.map((service) => (
                    <div
                      key={service.title}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-left group"
                    >
                      <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform overflow-hidden bg-white`}>
                        <img src={service.animatedIcon} alt={service.title} className="w-10 h-10 object-contain" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-200 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                  <Link
                    to="/about#services"
                    className="group relative px-8 py-4 bg-yellow-400 text-black font-semibold rounded-xl shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.1)] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.2)] transition-all overflow-hidden text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Explore Our Services
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#28708F] transition-all text-center"
                  >
                    Get in Touch
                  </Link>
                </div>

                {/* Trust Badge */}
                <div className="mt-12">
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                    <p className="text-sm text-gray-200 font-medium">
                      Serving individuals and organizations globally
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal width="100%">
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.3)] border border-white/30">
              <p className="text-3xl md:text-4xl font-bold text-black mb-4">
                "A purpose-driven organization empowering modern Christian women through coaching, mentorship, and transformative support."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Are Section */}
      < section className="py-12 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal width="100%">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-0">
              {/* Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.5)] border-4 border-white/60">
                  {/* Video Thumbnail Trigger */}
                  <div
                    className="group relative w-full h-[400px] cursor-pointer"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <ImageWithFallback
                      src="/fullimage.webp"
                      alt="Who We Are Video"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg group-hover:scale-110 transition-transform">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner">
                          <Play size={32} className="text-yellow-600 ml-1 fill-yellow-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  We are a purpose-driven organization committed to empowering modern Christian women and groups to unlock their full potential, intentionally evolve with purpose, and grow through guided, transformative support. Our team of internationally trained and accredited coaches collaborates with a network of diverse global experts across leadership, personal development, career growth, and spiritual formation.
                </p>
                <p className="text-lg text-gray-600">
                  From one-on-one professional mentoring to group training sessions, we provide the tools and guidance necessary to navigate change, drive measurable results and impact. Whether you are navigating career decisions, seeking alignment in your personal life, or rediscovering your identity and purpose, we provide practical guidance anchored in faith and intentional growth.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section >

      {/* Services Section */}
      < section className="py-12 pb-0 bg-gray-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We Do
            </h2>
          </div>

          <ScrollReveal width="100%">
            <div className="grid grid-cols-1 pb-12 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_24px_rgba(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-2 border border-white/20"
                >
                  <div className={`w-20 h-20 ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.5),inset_-2px_-2px_5px_rgba(0,0,0,0.1)] overflow-hidden bg-white`}>
                    <img src={service.animatedIcon} alt={service.title} className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section >

      {/* Quote Section */}
      < section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 relative overflow-hidden" >
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal width="100%">
            <ScrollReveal width="100%">
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.3)] border border-white/30">
                <p className="text-3xl md:text-4xl font-bold text-black mb-4">
                  "Professional excellence is a byproduct of personal wholeness"
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section >

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="text-yellow-500 font-bold tracking-widest text-sm mb-2 uppercase">Reviews</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Cultivating Spiritual Discipline</h2>
            <p className="text-gray-400 text-sm mb-4">Cohort 1 &middot; 14th January &ndash; 1st April</p>
            <p className="text-gray-300 text-base max-w-2xl">
              A 12-week virtual workshop bringing together over 15 women who engaged in learning how to intentionally integrate spiritual discipline across various areas of their lives.
            </p>
          </div>

          <ScrollReveal width="100%">
            <div className="relative">
              <div className="flex flex-col gap-6">
                <Quote size={48} className="text-yellow-500 fill-yellow-500" />

                <div className="min-h-[200px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentReview}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-6">
                        "{reviews[currentReview].text}"
                      </p>
                      <div className="flex items-center gap-4">
                        {reviews[currentReview].image ? (
                          <img
                            src={reviews[currentReview].image}
                            alt={reviews[currentReview].author}
                            className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-yellow-500/20 border-2 border-yellow-500 flex items-center justify-center text-yellow-400 font-bold text-sm">
                            {reviews[currentReview].author.split(' ').map(n => n[0]).join('')}
                          </div>
                        )}
                        <div>
                          <p className="text-white font-medium text-lg">
                            {reviews[currentReview].author}
                          </p>
                          {reviews[currentReview].role && (
                            <p className="text-gray-400 text-sm">
                              {reviews[currentReview].role}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={prevReview}
                    className="p-4 border border-white/30 hover:bg-white hover:text-[#0f172a] hover:border-white transition-all duration-300 group"
                    aria-label="Previous review"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextReview}
                    className="p-4 border border-white/30 hover:bg-white hover:text-[#0f172a] hover:border-white transition-all duration-300 group"
                    aria-label="Next review"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* Why We Do What We Do */}
      < section className="py-12 bg-white" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal width="100%">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why do we do what we do?
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Our vision is to guide modern Christian women into living fulfilled and purposeful lives—anchored in growth, identity, and God-led direction. Through this, we hope to see a ripple effect of impact in families, communities, and beyond.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-12 bg-gradient-to-r from-gray-900 to-black text-white" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal width="100%">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Evolve?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Let's work together to unlock your full potential and create meaningful, lasting change.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl"
              >
                Start Your Journey
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section >
      {/* Video Modal */}
      {
        isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setIsVideoOpen(false)}
            ></div>
            <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
              <video
                src="/yellowstrokefullvideo.mp4"
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )
      }
    </Layout >
  );
}
