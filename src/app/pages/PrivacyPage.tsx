import { Layout } from '../components/layout';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export default function PrivacyPage() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Learn how Yellow Stroke collects, uses, and safeguards your personal information."
      />
      <section className="py-32 bg-gradient-to-br from-yellow-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-yellow-500">Policy</span>
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Last updated: January 16, 2026
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-3xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-gray-700">
                  At Yellow Stroke, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services and visit our website.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We may collect personal information that you voluntarily provide, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Name and contact information</li>
                  <li>Email address and phone number</li>
                  <li>Professional background and goals</li>
                  <li>Payment information</li>
                  <li>Session notes and progress tracking</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">
                  We may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                  <li>Device information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about your sessions and progress</li>
                  <li>Process payments and transactions</li>
                  <li>Send newsletters and updates (with your consent)</li>
                  <li>Analyze and improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">4. Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Service providers who assist in our operations</li>
                  <li>Professional advisors when legally required</li>
                  <li>Law enforcement when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">5. Data Security</h2>
                <p className="text-gray-700">
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">6. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent at any time</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-700">
                  We use cookies and similar tracking technologies to improve your experience on our website. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">8. Third-Party Links</h2>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">10. Data Retention</h2>
                <p className="text-gray-700">
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Session notes may be retained for professional record-keeping purposes.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">11. International Data Transfers</h2>
                <p className="text-gray-700">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">12. Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">13. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="text-gray-700 mt-4">
                  Email: <a href="mailto:privacy@yellowstroke.com" className="text-yellow-500 hover:text-yellow-600">privacy@yellowstroke.com</a>
                </p>
                <p className="text-gray-700">
                  General Inquiries: <a href="mailto:hello@yellowstroke.com" className="text-yellow-500 hover:text-yellow-600">hello@yellowstroke.com</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
