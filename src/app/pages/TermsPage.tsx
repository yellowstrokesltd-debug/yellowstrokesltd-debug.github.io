import { Layout } from '../components/layout';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export default function TermsPage() {
  return (
    <Layout>
      <SEO
        title="Terms & Conditions"
        description="Read the Terms and Conditions for using Yellow Stroke's website and services."
      />
      <section className="py-32 bg-gradient-to-br from-yellow-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms & <span className="text-yellow-500">Conditions</span>
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Last updated: January 16, 2026
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-3xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-gray-700">
                  Welcome to Yellow Stroke. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">2. Services</h2>
                <p className="text-gray-700 mb-4">
                  Yellow Stroke provides coaching, mentoring, facilitation, and training services designed to empower individuals and organizations. Our flagship service, Better Human Beings, offers holistic development programs.
                </p>
                <p className="text-gray-700">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services in compliance with all applicable laws</li>
                  <li>Respect the intellectual property rights of Yellow Stroke and others</li>
                  <li>Not engage in any conduct that may harm or interfere with our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">4. Intellectual Property</h2>
                <p className="text-gray-700">
                  All content, materials, and intellectual property on our website and in our services are owned by Yellow Stroke or our licensors. You may not copy, reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">5. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Payment terms will be specified in your service agreement. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Payment is due as specified in your agreement</li>
                  <li>Prices are subject to change with notice</li>
                  <li>Refunds are handled on a case-by-case basis</li>
                  <li>Late payments may result in service suspension</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">6. Confidentiality</h2>
                <p className="text-gray-700">
                  We maintain strict confidentiality regarding all client information and session content. Both parties agree to keep confidential any proprietary or sensitive information shared during our engagement.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700">
                  Yellow Stroke provides coaching and development services but cannot guarantee specific outcomes. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">8. Termination</h2>
                <p className="text-gray-700">
                  Either party may terminate services with written notice as specified in the service agreement. Upon termination, payment for services rendered remains due.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">9. Governing Law</h2>
                <p className="text-gray-700">
                  These terms are governed by applicable international law. Any disputes will be resolved through mediation or arbitration as mutually agreed.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">10. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">11. Contact Information</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="text-gray-700 mt-4">
                  Email: <a href="mailto:hello@yellowstroke.com" className="text-yellow-500 hover:text-yellow-600">hello@yellowstroke.com</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
