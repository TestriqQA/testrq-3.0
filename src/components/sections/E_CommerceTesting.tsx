// Metadata for this page is handled by the parent page's `export const metadata` (App Router API)

const services = [
  {
    title: 'Functional Testing',
    description: 'Ensure every feature, from product search to checkout, works flawlessly to deliver a seamless user experience.',
    icon: '🛠️',
  },
  {
    title: 'Performance Testing',
    description: 'Optimize load times and scalability to handle peak traffic, ensuring your store thrives under pressure.',
    icon: '⚡',
  },
  {
    title: 'Security Testing',
    description: 'Protect customer data with PCI DSS-compliant testing and robust vulnerability assessments.',
    icon: '🔒',
  },
  {
    title: 'Usability Testing',
    description: 'Enhance customer satisfaction with intuitive navigation and accessible design across all devices.',
    icon: '😊',
  },
  {
    title: 'API Testing',
    description: 'Validate integrations with payment gateways, inventory systems, and third-party services for reliable performance.',
    icon: '🔗',
  },
  {
    title: 'Cross-Browser Testing',
    description: 'Ensure consistent functionality and appearance across browsers like Chrome, Firefox, and Safari.',
    icon: '🌐',
  },
];

const benefits = [
  {
    title: 'Boost Conversions',
    description: 'A reliable, fast platform reduces cart abandonment and drives higher sales.',
  },
  {
    title: 'Build Customer Trust',
    description: 'Secure transactions and compliance foster confidence in your brand.',
  },
  {
    title: 'Global Reach',
    description: 'Cross-browser and device compatibility ensures a consistent experience worldwide.',
  },
  {
    title: 'Cost Efficiency',
    description: 'Early bug detection reduces development costs and prevents costly post-launch fixes.',
  },
  {
    title: 'Scalability',
    description: 'Prepare your platform for growth with testing that supports high traffic and new features.',
  },
  {
    title: 'Faster Time-to-Market',
    description: 'Streamlined testing processes accelerate your release cycles without compromising quality.',
  },
];

const caseStudies = [
  {
    title: 'Global Retail Giant',
    description: 'Testriq optimized a leading retailer’s e-commerce platform, reducing checkout errors by 40% and improving load times by 25%, resulting in a 15% sales increase.',
  },
  {
    title: 'Fashion E-Commerce Startup',
    description: 'Our security testing ensured PCI DSS compliance for a startup’s payment system, building customer trust and enabling a successful launch.',
  },
];

export default function ECommerceTesting() {
  return (
    <div className="bg-gray-900 text-white font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-700 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
            Power Your E-Commerce Success
          </h1>
          <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
            Testriq’s comprehensive testing services ensure your online store is secure, fast, and user-friendly, driving conversions and customer loyalty.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-transform duration-300 hover:scale-105 active:scale-95">
            Start Testing Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Our E-Commerce Testing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:animate-hover-lift animation-delay-${index * 100}`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Our Testing Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg animate-scale-in">
              <h3 className="text-xl font-semibold mb-2">Hybrid Testing Methodology</h3>
              <p className="text-gray-300">
                We combine manual and automated testing to deliver comprehensive results. Our QA experts use tools like Selenium and JMeter to validate functionality and performance, while manual testing ensures user-centric design and accessibility.[](https://www.spacestem.com/testing-automation/)
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg animate-scale-in animation-delay-100">
              <h3 className="text-xl font-semibold mb-2">Customized Testing Plans</h3>
              <p className="text-gray-300">
                Every e-commerce platform is unique. We create tailored testing strategies to address your specific needs, from payment gateway integrations to mobile responsiveness, ensuring optimal performance and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in">
            Why Testriq?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`bg-gray-800 p-6 rounded-lg shadow-md animate-scale-in animation-delay-${index * 100}`}
              >
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className={`bg-gray-700 p-6 rounded-lg animate-scale-in animation-delay-${index * 100}`}
              >
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-300">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Transform Your E-Commerce Platform Today
          </h2>
          <p className="text-lg mb-8 animate-fade-in-up animation-delay-200">
            Don’t let bugs or performance issues hold your business back. Contact Testriq now for expert testing solutions.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-transform duration-300 hover:scale-105 active:scale-95">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}