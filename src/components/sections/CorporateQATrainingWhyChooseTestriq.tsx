import Link from 'next/link';
import React from "react";
import {
  FaAward,
  FaUsers,
  FaGraduationCap,
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const CorporateQATrainingWhyChooseTestriq: React.FC = () => {
  const reasons = [
    {
      icon: <FaAward className="text-3xl text-blue-600" />,
      title: "ISTQB Certified Trainers",
      description: (
        <>Learn from <Link href="/about-us" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">industry experts</Link> with 10+ years of experience and international certifications.</>
      ),
      stats: "50+ Certified Instructors",
    },
    {
      icon: <FaUsers className="text-3xl text-green-600" />,
      title: "300+ Professionals Trained",
      description:
        "Join a community of QA professionals who have successfully transformed their careers with us.",
      stats: "99.5% Success Rate",
    },
    {
      icon: <FaGraduationCap className="text-3xl text-purple-600" />,
      title: "Customized Learning Paths",
      description:
        "Tailored training programs designed to meet your organization's specific needs and goals.",
      stats: "100% Customizable",
    },
    {
      icon: <FaChartLine className="text-3xl text-orange-600" />,
      title: "Proven ROI",
      description:
        "Our training programs deliver measurable improvements in software quality and team productivity.",
      stats: "40% Quality Improvement",
    },
    {
      icon: <FaHandshake className="text-3xl text-red-600" />,
      title: "Ongoing Support",
      description:
        "24/7 support, mentoring, and resources to ensure continuous learning and skill development.",
      stats: "24/7 Support Available",
    },
    {
      icon: <FaGlobe className="text-3xl text-indigo-600" />,
      title: "Global Recognition",
      description:
        "Industry-recognized certifications that are valued by employers worldwide.",
      stats: "Globally Recognized",
    },
    {
      icon: <FaClock className="text-3xl text-teal-600" />,
      title: "Flexible Scheduling",
      description:
        "Training sessions scheduled to fit your team's availability and business requirements.",
      stats: "Flexible Timings",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-pink-600" />,
      title: "Quality Assurance",
      description:
        "Comprehensive quality checks and feedback mechanisms to ensure effective learning outcomes.",
      stats: "100% Quality Assured",
    },
  ];

  const testimonials = [
    {
      quote:
        "Testriq's training transformed our entire QA process. Our team's efficiency improved by 60% within 3 months.",
      rating: 5,
    },
    {
      quote:
        "The hands-on approach and expert instructors made all the difference. Highly recommend for any QA team.",
      rating: 5,
    },
    {
      quote:
        "Best investment we made for our team. The certification program is world-class and very practical.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">Why Choose Testriq</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Leading Choice for
            <span className="text-brand-blue bg-clip-text">
              {" "}
              Corporate QA Training
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over a decade of experience in <Link href="/" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">software testing</Link> and training,
            we&apos;ve helped hundreds of organizations build world-class QA
            teams.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {reason.description}
              </p>
              <div className="text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full inline-block">
                {reason.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              What Our Clients Say
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Don&apos;st just take our word for it. Here&apos;s what industry
              leaders say about our training programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-blue-600 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                300+
              </div>
              <div className="text-gray-600">Professionals Trained</div>
            </div>
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Companies Served</div>
            </div>
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                99.5%
              </div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                10+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateQATrainingWhyChooseTestriq;
