import React from 'react'
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Testriq" template,
  // which would otherwise print the brand twice (F-71).
  title: { absolute: "Terms of Service | Testriq QA Lab" },
  description: 'Learn about the Terms of services of the Testriq QA Lab website.',
  alternates: {
    canonical: 'https://www.testriq.com/terms-of-service',
  },
};

const TermsOfService = () => {
  return (
    <div className=" w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-white">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4">
          Terms of Service
        </h1>

        <p className="text-gray-600 mb-8">
          <strong>Last Updated:</strong> 17 October 2023
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to TESTRIQ QA Lab. These Terms of Service govern your use of our services. Please read them carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              2. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing our website and using our services, you agree to these terms in their entirety. If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              3. Description of Services
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg space-y-3">
              <p className="text-gray-700 leading-relaxed">
                <strong>3.1.</strong> TESTRIQ QA Lab offers a range of software testing and QA services as described on our website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>3.2.</strong> Services may be offered on a one-time basis or as part of a recurring subscription.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              4. User Registration and Account
            </h2>
            <div className="bg-green-50 p-6 rounded-lg space-y-3">
              <p className="text-gray-700 leading-relaxed">
                <strong>4.1.</strong> To access some services, you may need to register for an account.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>4.2.</strong> You agree to provide accurate and complete information when registering and to keep that information updated.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>4.3.</strong> You are responsible for maintaining the confidentiality of your account and password.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              5. Payments, Refunds, and Cancellations
            </h2>
            <div className="bg-yellow-50 p-6 rounded-lg space-y-3">
              <p className="text-gray-700 leading-relaxed">
                <strong>5.1.</strong> Payment terms are as agreed upon in individual service agreements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>5.2.</strong> In the case of subscription services, billing will occur on a recurring basis as specified in the service agreement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>5.3.</strong> Cancellations and refunds are subject to the terms in the service agreement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              6. Termination
            </h2>
            <div className="bg-red-50 p-6 rounded-lg space-y-3">
              <p className="text-gray-700 leading-relaxed">
                <strong>6.1.</strong> We reserve the right to suspend or terminate your access to our services for violations of these terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>6.2.</strong> You may terminate your account at any time through our platform.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              7. Intellectual Property
            </h2>
            <div className="bg-purple-50 p-6 rounded-lg space-y-3">
              <p className="text-gray-700 leading-relaxed">
                <strong>7.1.</strong> The content, branding, and other intellectual properties on our website are owned by TESTRIQ QA Lab unless stated otherwise.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>7.2.</strong> Any unauthorized use of our intellectual properties is a violation of these terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              8. Confidentiality and Data Protection
            </h2>
            <div className="bg-indigo-50 p-6 rounded-lg space-y-3">
              <p className="text-gray-700 leading-relaxed">
                <strong>8.1.</strong> We respect your confidentiality and are committed to protecting user data.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>8.2.</strong> Any data or information provided by users will only be used in connection with the provision of our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>8.3.</strong> For more details on how we handle data, please refer to our Privacy Policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              9. Limitations of Liability
            </h2>
            <div className="bg-orange-50 p-6 rounded-lg space-y-3">
              <p className="text-gray-700 leading-relaxed">
                <strong>9.1.</strong> TESTRIQ QA Lab shall not be liable for indirect, incidental, or consequential damages.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>9.2.</strong> Our total liability shall not exceed the amount paid by the user for our services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              10. Modifications to Terms
            </h2>
            <div className="bg-pink-50 p-6 rounded-lg space-y-3">
              <p className="text-gray-700 leading-relaxed">
                <strong>10.1.</strong> We reserve the right to update these terms periodically.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>10.2.</strong> Continued use of our services after updates constitutes acceptance of the revised terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              11. Governing Law and Jurisdiction
            </h2>
            <div className="bg-teal-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                These terms shall be governed by the laws of Mumbai, India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              12. Miscellaneous
            </h2>
            <div className="bg-cyan-50 p-6 rounded-lg space-y-3">
              <p className="text-gray-700 leading-relaxed">
                <strong>12.1.</strong> If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>12.2.</strong> These terms represent the entire agreement between the user and TESTRIQ QA Lab.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              13. Contact Information
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                For any questions or concerns about these terms, please contact:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>TESTRIQ QA Lab</strong>
                </p>
                <p className="text-gray-700">
                  <strong>Location:</strong> Mumbai – India
                </p>
                <p className="text-gray-700">
                  <strong>Web:</strong> <Link href="https://www.testriq.com" className="text-blue-600 hover:text-blue-800 underline">Visit Testriq website</Link>
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <div className="text-center">
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai, Maharashtra 401107
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> <Link href="tel:+919152929343" className="text-blue-600 hover:text-blue-800 underline">(+91) 915-2929-343</Link>
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> <Link href="mailto:contact@testriq.com" className="text-blue-600 hover:text-blue-800 underline">contact@testriq.com</Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService

