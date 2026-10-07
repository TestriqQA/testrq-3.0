import React from 'react'

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Testriq" template,
  // which would otherwise print the brand twice (F-71).
  title: { absolute: "Cookies Policy | Testriq QA Lab" },
  description: 'Learn about the cookies used on the Testriq QA Lab website.',
  alternates: {
    canonical: 'https://www.testriq.com/cookies-policy',
  },
};


const CookiesPolicy = () => {
  return (
    <div className=" w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-white">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4">
          Cookies Policy
        </h1>

        <p className="text-gray-600 mb-8">
          <strong>Last updated:</strong> March 14, 2022
        </p>

        <div className="space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed mb-6">
              This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              Interpretation?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              Definitions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For the purposes of this Cookies Policy:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Company</strong> (Referred to as either &quot;The Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Cookies Policy) refers to TESTRIQ QA Lab, Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai, Maharashtra 401107.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Website</strong> refers to TESTRIQ QA Lab, accessible from <Link href="https://www.testriq.com" className="text-blue-600 hover:text-blue-800 underline">Visit Testriq</Link>
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              The use of the Cookies
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Type of Cookies We Use
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We use both session and persistent Cookies for the purposes set out below:
            </p>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Necessary / Essential Cookies</h4>
                <p className="text-sm text-gray-600 mb-2"><strong>Type:</strong> Session Cookies</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Administered by:</strong> Us</p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Purpose:</strong> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Functionality Cookies</h4>
                <p className="text-sm text-gray-600 mb-2"><strong>Type:</strong> Persistent Cookies</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Administered by:</strong> Us</p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Purpose:</strong> These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Tracking and Performance Cookies</h4>
                <p className="text-sm text-gray-600 mb-2"><strong>Type:</strong> Persistent Cookies</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Administered by:</strong> Third-Parties</p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Purpose:</strong> These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new advertisements, pages, features or new functionality of the Website to see how our users react to them.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              Your Choices Regarding Cookies
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              If You&apos;d like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Browser-specific Cookie Management:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>For the Chrome web browser, please visit this page from Google: <Link href="https://support.google.com/" className="text-blue-600 hover:text-blue-800 underline">Chrome Browser Settings</Link></li>
                <li>For the Internet Explorer web browser, please visit this page from Microsoft: <Link href="http://support.microsoft.com/kb/278835" className="text-blue-600 hover:text-blue-800 underline">Disable Cookies in Internet Explorer</Link></li>
                <li>For the Firefox web browser, please visit this page from Mozilla: <Link href="https://support.mozilla.org/" className="text-blue-600 hover:text-blue-800 underline">Firefox Cookie Settings</Link></li>
                <li>For the Safari web browser, please visit this page from Apple: <Link href="https://support.apple.com/guide/safari/" className="text-blue-600 hover:text-blue-800 underline">Safari Privacy Controls</Link></li>
                <li>For any other web browser, please visit your web browser&apos;s official web pages.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              More Information about Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You can learn more about cookies: <Link href="#" className="text-blue-600 hover:text-blue-800 underline">What Are Cookies?</Link>
            </p>
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

export default CookiesPolicy

