import { Layout } from '../components/layout';
import { SEO } from '../components/SEO';
import { Heart, Brain, HeartHandshake, Handshake, Church, Users, Target, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: 'Holistic Approach',
      description: 'Because the whole is greater than the sum of its parts, we believe for one to evolve, the physical, social, emotional and mental have to be aligned because they all affect the entire person.',
    },
    {
      icon: HeartHandshake,
      title: 'Collaborative Excellence',
      description: 'We work with you towards an outcome that aligns with your goals. Together with our world-class experts, we work for you to serve your unique needs.',
    },
    {
      icon: Church,
      title: 'Christian Spirituality',
      description: 'Our expertise is reinforced with an understanding that God is the overall transformer. We are inspired by His ways and rely on Him to help you evolve in alignment to His purpose.',
    },
    {
      icon: Handshake,
      title: 'Aligned Evolution',
      description: 'Evolution understands that growth has its seasons, we commit to intentional continuous growth that remains authentic to who you are.',
    },
  ];

  const services = [
    {
      icon: Users,
      title: 'Coaching',
      description: 'One-on-one sessions focused on individual goals and growth. Personalized guidance to help you unlock your potential and achieve your objectives.',
      features: ['Individual goal setting', 'Personalized action plans', 'Regular progress tracking', 'Accountability support'],
      image: '/yellowstroke coaching.webp',
      animatedIcon: '/coaching.gif',
    },
    {
      icon: Target,
      title: 'Mentoring',
      description: 'Bridging the gap of experience and ambition through guidance from industry veterans and subject matter experts.',
      features: ['Experience sharing', 'Career guidance', 'Skill development', 'Network building'],
      image: '/yellowstrokementoring.jpeg',
      animatedIcon: '/mentoring.gif',
    },
    {
      icon: Heart,
      title: 'Facilitating',
      description: 'Creating safe and productive spaces to guide groups solve problems, work better, and be empowered to drive change.',
      features: ['Group dynamics', 'Conflict resolution', 'Team building', 'Change management'],
      image: '/yellowstrokefacilitating.webp',
      animatedIcon: '/facilitating.gif',
    },
    {
      icon: Sparkles,
      title: 'Training',
      description: 'Interactive workshops that equip teams with skills vital for growth and development in today\'s dynamic environment.',
      features: ['Skills workshops', 'Team development', 'Leadership training', 'Professional growth'],
      image: '/yellowstroketraining.webp',
      animatedIcon: '/training.gif',
    },
  ];

  return (
    <Layout>
      <SEO
        title="About Us"
        description="Meet the Yellow Stroke team. We are a global network of experts dedicated to your growth through coaching, mentoring, and training."
      />
      {/* Hero Section */}

      <section className="relative py-32 bg-[#28708F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About <span className="text-yellow-400">Yellow Stroke</span>
            </h1>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto">
              A global collective of experts dedicated to empowering individuals and organizations through transformative development
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Yellow Stroke exists to facilitate growth and empower individuals at every level. We bring together diverse world experts—coaches, industry veterans, and master facilitators—who tailor their expertise to your specific needs.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This collective intelligence and experience allows us to serve any sector with precision and agility. From one-on-one professional mentoring to group training sessions, we provide the tools and guidance necessary to navigate change and drive measurable results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-12 shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.5)] border-4 border-white/60">
              <blockquote className="text-2xl font-semibold text-gray-900">
                "Professional excellence is a byproduct of personal wholeness"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-12 shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.5)] border-4 border-white/60 order-2 lg:order-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-[#29708F]" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                    Better Human Beings
                  </h3>
                  <p className="text-gray-700">
                    Our flagship service that bridges the gap between professional success and personal wellbeing through holistic development.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Do better, Be better.</h4>
                  <p className="text-gray-600">
                    Consistent purposeful actions lead to progress. Progress gets us to be better.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                We want to see a world where transformed individuals are living in alignment with God's purpose. We imagine a world where institutions are led by individuals who are "better human beings."
              </p>
              <p className="text-lg text-gray-700">
                Whether you are an individual, a group, or an institution, we aim to help you become a better version of yourself than you were yesterday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our approach to transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_24px_rgba(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,0.5)] transition-all border border-white/20"
              >
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.5),inset_-2px_-2px_5px_rgba(0,0,0,0.1)]">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer four core services tailored to meet your specific needs
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)] overflow-hidden bg-white">
                    <img src={service.animatedIcon} alt={service.title} className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-3xl overflow-hidden shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.5)] border-4 border-white/60 ${index % 2 === 1 ? 'lg:order-1' : ''
                  }`}>
                  <div className="relative">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Approach
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              We take a radical, holistic approach to development, integrating Christian spirituality, nutritional health, mental and physical fitness with modern necessities like digital health, sexual wholeness, and the power of rest.
            </p>
            <p className="text-lg text-gray-400">
              No matter who you are or what you do, we believe your best version is waiting to be unlocked—one better day at a time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
