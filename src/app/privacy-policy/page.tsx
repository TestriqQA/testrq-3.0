import React from 'react'
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Testriq" template,
  // which would otherwise print the brand twice (F-71).
  title: { absolute: "Privacy Policy | Testriq QA Lab" },
  description: 'Learn about the privacy policy of the Testriq QA Lab website.',
  alternates: {
    canonical: 'https://www.testriq.com/privacy-policy',
  },
};

const PrivacyPolicy = () => {
  return (
    <div className=" w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-white">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8">
          <strong>Last updated:</strong> March 14, 2022
        </p>

        <div className="space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed mb-6">
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              Interpretation and Definitions
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Interpretation</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Definitions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For the purposes of this Privacy Policy:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Business</strong>, for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers&apos; personal information and determines the purposes and means of the processing of Consumers&apos; personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumer&apos;s personal information, that does business in the State of California.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Company</strong> (referred to as either &quot;The Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to TESTRIQ QA Lab, Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai, Maharashtra 401107.
              </p>

              <p className="text-gray-700 leading-relaxed">
                For the purpose of the GDPR, the Company is the Data Controller.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Consumer</strong>, for the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident. A resident, as defined in the law, includes (1) every individual who is in the USA for other than a temporary or transitory purpose, and (2) every individual who is domiciled in the USA who is outside the USA for a temporary or transitory purpose.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Country</strong> refers to: Maharashtra, India
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Data Controller</strong>, for the purposes of the GDPR (General Data Protection Regulation), refers to the Company as the legal person which alone or jointly with others determines the purposes and means of the processing of Personal Data.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Do Not Track (DNT)</strong> is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Facebook Fan Page</strong> is a public profile named TESTRIQ QA Lab, LLP specifically created by the Company on the Facebook social network, accessible from <Link href="https://www.facebook.com/testriq.lab/" className="text-blue-600 hover:text-blue-800 underline">Follow Testriq on Facebook</Link>
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
              </p>

              <p className="text-gray-700 leading-relaxed">
                For the purposes of GDPR, Personal Data means any information relating to You such as a name, an identification number, location data, online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity.
              </p>

              <p className="text-gray-700 leading-relaxed">
                For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Sale</strong>, for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer&apos;s personal information to another business or a third party for monetary or other valuable consideration.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Service</strong> refers to the Website.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used. For the purpose of the GDPR, Service Providers are considered Data Processors.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Website</strong> refers to TESTRIQ QA Lab, accessible from <Link href="https://www.testriq.com" className="text-blue-600 hover:text-blue-800 underline">Visit Testriq website</Link>
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Under GDPR (General Data Protection Regulation) You can be referred to as the Data Subject or as the User as you are the individual using the Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              Collecting and Using Your Personal Data Types of Data Collected
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2 text-gray-700">
                <li>– Email address</li>
                <li>– First name and last name</li>
                <li>– Phone number</li>
                <li>– Address, State, Province, ZIP/Postal code, City</li>
                <li>– Bank account information in order to pay for products and/or services within the Service</li>
                <li>– Usage Data</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              When You pay for a product and/or a service via bank transfer, We may ask You to provide information to facilitate this transaction and to verify Your identity. Such information may include, without limitation:
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2 text-gray-700">
                <li>– Date of birth</li>
                <li>– Passport or National ID card</li>
                <li>– Bank card statement</li>
                <li>– Other information linking You to an address</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">Usage Data</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Usage Data is collected automatically when using the Service.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Information from Third-Party Social Media Services</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2 text-gray-700">
                <li>– Google</li>
                <li>– Facebook</li>
                <li>– Twitter</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service&apos;s account, such as Your name, Your email address, Your activities or Your contact list associated with that account.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service&apos;s account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Tracking Technologies and Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
            </p>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Cookies or Browser Cookies</h4>
                <p className="text-gray-700 leading-relaxed">
                  A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless You have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Flash Cookies</h4>
                <p className="text-gray-700 leading-relaxed">
                  Certain features of our Service may use locally stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how to delete Flash Cookies, You can go to the Adobe website and follow the instructions provided by Adobe with respect to the Flash Player Settings Manager and make changes as directed therein.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Please note that If You disable or delete Flash Cookies, some features of our Service may not function properly.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Web Beacons</h4>
                <p className="text-gray-700 leading-relaxed">
                  Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6 mb-6">
              Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies: <Link href="https://www.privacypolicies.com/blog/cookies/" className="text-blue-600 hover:text-blue-800 underline">Cookies by Privacy Policies Generator.</Link>
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We use both Session and Persistent Cookies for the purposes set out below:
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
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Cookies Policy / Notice Acceptance Cookies</h4>
                <p className="text-sm text-gray-600 mb-2"><strong>Type:</strong> Persistent Cookies</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Administered by:</strong> Us</p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Purpose:</strong> These Cookies identify if users have accepted the use of cookies on the Website.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Use of Your Personal Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Company may use Personal Data for the following purposes:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>To manage Your Account</strong>: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>For the performance of a contract</strong>: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>To contact You</strong>: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application&apos;s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>To provide You with news, special offers and general information</strong> about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>To manage Your requests</strong>: To attend and manage Your requests to Us.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>For business transfers</strong>: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">We may share Your personal information in the following situations:</h3>

            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-700 leading-relaxed">
                  <strong>With Service Providers</strong>: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, for payment processing, to contact You.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-gray-700 leading-relaxed">
                  <strong>For business transfers</strong>: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed">
                  <strong>With Affiliates</strong>: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-700 leading-relaxed">
                  <strong>With business partners</strong>: We may share Your information with Our business partners to offer You certain products, services or promotions.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-gray-700 leading-relaxed">
                  <strong>With other users</strong>: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                <p className="text-gray-700 leading-relaxed">
                  <strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              Retention of Your Personal Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              Transfer of Your Personal Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              Disclosure of Your Personal Data
            </h2>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">Transactions</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">Law enforcement</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">Other legal requirements</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li>– Comply with a legal obligation</li>
                <li>– Protect and defend the rights or property of the Company</li>
                <li>– Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>– Protect the personal safety of Users of the Service or the public</li>
                <li>– Protect against legal liability</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              Security of Your Personal Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              Your California Privacy Rights (California&apos;s Shine the Light law)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Under California Civil Code Section 1798.83, California residents with an established business relationship with us can request information once a year about the Personal Data We shared with third parties for the third parties&apos; direct marketing purposes. If you would like to request more information under the California Shine the Light Law, and if You are a California resident, You can contact Us using the contact information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              California Privacy Rights for Minor Users (California Business and Professions Code Section 22581)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              California Business and Professions Code Section 22581 allows California residents under 18 years of age who are registered users of online sites, services or applications to request and obtain removal of content or information they have publicly posted. If You wish to request such removal, and You are a California resident, You can contact Us using the contact information provided below, and include the email address associated with Your account. Be aware that such a request does not guarantee complete or comprehensive removal of content or information posted online and that the law may not permit or require removal in certain circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              Links to Other Websites
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              Changes to this Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, You can contact us:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li>– By email: <Link href="mailto:contact@testriq.com" className="text-blue-600 hover:text-blue-800 underline">contact@testriq.com</Link></li>
                <li>– By visiting this page on our website: <Link href="https://www.testriq.com/contact-us" className="text-blue-600 hover:text-blue-800 underline">Contact Our QA Experts</Link></li>
                <li>– By phone number: <Link href="tel:+919152929343" className="text-blue-600 hover:text-blue-800 underline">(+91) 915-2929-343</Link></li>
              </ul>
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

export default PrivacyPolicy

