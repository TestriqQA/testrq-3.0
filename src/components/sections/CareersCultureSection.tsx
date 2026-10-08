// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.

import React from "react";
import Link from "next/link";
import {
  FaUsers,
  FaLightbulb,
  FaHeart,
  FaGlobe,
  FaRocket,
  FaHandshake,
  FaCamera,
  FaPlay,
  FaCoffee,
  FaGamepad,
  FaMusic,
  FaUtensils,
} from "react-icons/fa";

const CareersCultureSection: React.FC = () => {
  const cultureValues = [
    {
      icon: FaUsers,
      title: "Collaboration Over Competition",
      description:
        "We believe in lifting each other up. Knowledge sharing, pair programming, and team success are at the heart of everything we do.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: FaLightbulb,
      title: "Innovation & Creativity",
      description:
        "We encourage experimentation, creative problem-solving, and thinking outside the box to find better ways to test software.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: FaHeart,
      title: "Work-Life Harmony",
      description:
        "We respect your time and personal life. Flexible schedules, remote work, and mental health support help you thrive both professionally and personally.",
      color: "from-pink-400 to-red-500",
    },
    {
      icon: FaGlobe,
      title: "Diversity & Inclusion",
      description:
        "Our global team brings diverse perspectives, experiences, and ideas. We celebrate differences and create an inclusive environment for everyone.",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: FaRocket,
      title: "Continuous Learning",
      description:
        "The tech world evolves rapidly, and so do we. We invest in your growth through training, conferences, and hands-on learning opportunities.",
      color: "from-purple-400 to-indigo-500",
    },
    {
      icon: FaHandshake,
      title: "Transparency & Trust",
      description:
        "Open communication, honest feedback, and transparent decision-making build the trust that makes our team stronger.",
      color: "from-teal-400 to-cyan-500",
    },
  ];

  const cultureHighlights = [
    {
      icon: FaCoffee,
      title: "Coffee Chats",
      description:
        "Weekly informal coffee sessions with team members across different departments and time zones.",
      image: "☕",
    },
    {
      icon: FaGamepad,
      title: "Game Nights",
      description:
        "Monthly virtual and in-person game nights featuring everything from board games to online multiplayer competitions.",
      image: "🎮",
    },
    {
      icon: FaMusic,
      title: "Talent Shows",
      description:
        "Quarterly talent showcases where team members share their hobbies, skills, and creative projects.",
      image: "🎵",
    },
    {
      icon: FaUtensils,
      title: "Team Lunches",
      description:
        "Regular team meals, both virtual cooking sessions and in-person gatherings for office-based team members.",
      image: "🍕",
    },
  ];

  const photoGallery = [
    {
      title: "Team Retreat 2024",
      description: "Annual company retreat in the mountains",
      placeholder: "🏔️",
    },
    {
      title: "Hackathon Winners",
      description: "Innovation hackathon champions",
      placeholder: "🏆",
    },
    {
      title: "Remote Team Meetup",
      description: "Global team gathering in NYC",
      placeholder: "🌍",
    },
    {
      title: "Office Game Room",
      description: "Our relaxation and creativity space",
      placeholder: "🎯",
    },
    {
      title: "Learning Workshop",
      description: "Internal knowledge sharing session",
      placeholder: "📚",
    },
    {
      title: "Celebration Time",
      description: "Celebrating project milestones",
      placeholder: "🎉",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaUsers className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Company Culture
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            More Than Just
            <span className="block text-[theme(color.brand.blue)]">
              A Workplace
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our QA culture is built on mutual respect, continuous learning, and
            a genuine commitment to team collaboration and professional growth.
            Discover what makes Testriq a place where careers in software
            testing and meaningful workplace connections flourish.
          </p>
        </div>

        {/* Culture Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cultureValues.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <value.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Culture in Action */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Culture in Action
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here&apos;s how we bring our values to life through regular
              activities and initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureHighlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{highlight.image}</div>
                <div className="w-12 h-12 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaCamera className="w-6 h-6 text-[theme(color.brand.blue)]" />
              <h3 className="text-3xl font-bold text-gray-900">
                Life at Testriq
              </h3>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into our team events, workspace, and the moments that
              make us more than just colleagues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoGallery.map((photo, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 aspect-square flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Placeholder for actual photo */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {photo.placeholder}
                </div>

                <h4 className="font-semibold text-white mb-2">{photo.title}</h4>
                <p className="text-sm text-white">{photo.description}</p>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[theme(color.brand.blue)] bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl flex items-center justify-center">
                  <FaPlay className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">

          </div>
        </div>

        {/* Remote Culture */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Remote-First,
                <span className="block text-blue-100">Connection-Always</span>
              </h3>

              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Being remote-first doesn&apos;t mean being disconnected.
                We&apos;ve built a culture that thrives across time zones,
                bringing people together through shared goals, regular
                communication, and meaningful interactions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <FaGlobe className="w-4 h-4 text-[theme(color.brand.blue)]" />
                  </div>
                  <span className="text-blue-100">
                    25+ Global Service Delivery
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <FaCoffee className="w-4 h-4 text-[theme(color.brand.blue)]" />
                  </div>
                  <span className="text-blue-100">
                    Daily virtual coffee breaks and social hours
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <FaUsers className="w-4 h-4 text-[theme(color.brand.blue)]" />
                  </div>
                  <span className="text-blue-100">
                    Quarterly in-person team meetups
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Testimonials */}
            <div className="bg-gray-100 bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20">
              <h4 className="text-xl font-semibold text-[theme(color.brand.blue)] mb-6">
                What Our Remote Team Says
              </h4>

              <div className="space-y-6">
                <blockquote className="text-[theme(color.brand.blue)] italic">
                  &quot;I&apos;ve never felt more connected to a team while
                  working remotely. The culture here makes distance
                  irrelevant.&quot;
                </blockquote>
                <div className="text-sm text-[theme(color.brand.blue)]">
                  — Alex Chen, Senior QA Engineer (Singapore)
                </div>

                <blockquote className="text-[theme(color.brand.blue)] italic">
                  &quot;The flexibility to work from anywhere while being part
                  of such a supportive team is incredible. Best of both
                  worlds!&quot;
                </blockquote>
                <div className="text-sm text-[theme(color.brand.blue)]">
                  — Maria Rodriguez, Test Automation Lead (Spain)
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link href="/careers" className="inline-block">
              <button className="bg-gray-100 text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-100 transition-colors duration-300 cursor-pointer">
                Experience Our Culture
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersCultureSection;
