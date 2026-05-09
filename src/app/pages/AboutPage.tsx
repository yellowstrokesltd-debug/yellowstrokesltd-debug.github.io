import { Layout } from '../components/layout';
import { SEO } from '../components/SEO';
import { Heart, Brain, HeartHandshake, Handshake, Church, Users, Target, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ReadMore } from '../components/ReadMore';

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
      description: 'Our coaching experiences are designed to help you gain clarity, overcome limitations, and take aligned action toward your goals. We coach holistically to help you navigate career decisions, personal growth, or life transitions.',
      features: ['One-on-one and group coaching', 'Personalized goal setting and action plans', 'Structure and accountability', 'Career, personal growth, and life transitions'],
      image: '/yellowstroke coaching.webp',
      animatedIcon: '/coaching.gif',
    },
    {
      icon: Target,
      title: 'Mentorship',
      description: 'Our mentorship offering provides ongoing guidance and support for women who desire deeper growth and direction. We walk alongside you over time—helping you build discipline, gain wisdom, and stay aligned with your purpose.',
      features: ['Ongoing guidance and support', 'Discipline and wisdom building', 'Purpose alignment', 'Accountability and encouragement'],
      image: '/yellowstrokementoring.jpeg',
      animatedIcon: '/mentoring.gif',
    },
    {
      icon: Heart,
      title: 'Facilitating',
      description: 'We create and lead meaningful, results-driven conversations that spark growth, reflection, and transformation. Our facilitation sessions are thoughtfully designed to encourage participation, deepen understanding, and drive actionable outcomes.',
      features: ['Small groups and corporate workshops', 'Team building and conflict resolution', 'Perspective-challenging experiences', 'Change navigation and resilience'],
      image: '/yellowstrokefacilitating.webp',
      animatedIcon: '/facilitating.gif',
    },
    {
      icon: Sparkles,
      title: 'Training',
      description: 'Our training programs equip you with practical skills and applicable frameworks that translate into real-life impact. Each session is intentionally structured to deliver both insight and transformation.',
      features: ['Skills development and leadership', 'Team effectiveness', 'Professional growth', 'Interactive and engaging learning'],
      image: '/yellowstroketraining.webp',
      animatedIcon: '/training.gif',
    },
  ];

  return (
    <Layout>
      <SEO
        title="About Us"
        description="We are a purpose-driven organization committed to empowering modern Christian women and groups through coaching, mentorship, facilitating, and training."
      />
      {/* Hero Section */}

      <section className="relative py-32 bg-[#28708F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About <span className="text-yellow-400">Yellow Stroke</span>
            </h1>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto">
              A purpose-driven organization committed to empowering modern Christian women and groups to unlock their full potential
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
                Who We Are
              </h2>
              <ReadMore lines={4}>
                <p className="text-lg text-gray-700 mb-4">
                  We are a purpose-driven organization committed to empowering modern Christian women and groups to unlock their full potential, intentionally evolve with purpose, and grow through guided, transformative support. At the core of who we are is a deep belief that every woman carries a unique purpose—and with the right guidance, clarity, and environment, she can confidently step into it and transform.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our team is made up of internationally trained and accredited coaches who collaborate with a network of diverse global experts across leadership, personal development, career growth, and spiritual formation. This blend of expertise allows us to offer a holistic and personalized approach—meeting you exactly where you are and equipping you with the tools, structure, and insight needed to move forward with clarity and confidence.
                </p>
              </ReadMore>
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
                <p className="text-lg text-gray-700">
                  We are passionate about walking alongside women in every stage of life—supporting you as you gain clarity, take action, and build a life that reflects both your values and your vision.
                </p>
                <p className="text-gray-600">
                  From young women exploring their next steps to mothers seeking renewed direction, our role is to guide, empower, and support you as you evolve.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Vision
              </h2>
              <ReadMore lines={4}>
                <p className="text-lg text-gray-700 mb-4">
                  Our vision is to guide modern Christian women into living fulfilled and purposeful lives—anchored in growth, identity, and God-led direction. Through this, we hope to see a ripple effect of impact in families, communities, and beyond.
                </p>
                <p className="text-lg text-gray-700">
                  Beyond individual growth, we are building a community of women who are committed to living intentionally, growing consistently, and leading purposefully. A space where faith meets action, and where transformation is both personal and collective.
                </p>
              </ReadMore>
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
              We offer intentional, faith-anchored services designed to support your growth, provide clarity, and equip you to move forward with confidence and purpose
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
                  <ReadMore lines={3}>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  </ReadMore>
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
            <ReadMore lines={4} dark>
              <p className="text-xl text-gray-300 mb-6">
                Across all our services, our focus remains the same: to deliver personalized, faith-centered guidance that meets you in your current season while equipping you for what's next. We take a holistic approach—integrating spiritual alignment, practical tools, and global expertise—to support deep, lasting transformation.
              </p>
              <p className="text-lg text-gray-400">
                Our aim is to help both women and groups unlock their full potential, gain clarity of purpose, and grow in a way that is intentional, impactful, and sustainable.
              </p>
            </ReadMore>
          </div>
        </div>
      </section>
    </Layout>
  );
}
