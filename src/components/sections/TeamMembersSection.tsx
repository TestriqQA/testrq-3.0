import React from "react";
import {
  FaCode,
  FaMobile,
  FaShieldAlt,
  FaRobot,
  FaDatabase,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const TeamMembersSection = () => {
  const departments = [
    {
      name: "Automation Testing",
      icon: FaCode,
      memberCount: 12,
      description:
        "Specialists in test automation frameworks and CI/CD integration",
      color: "bg-blue-500",
      skills: ["Selenium", "Cypress", "Playwright", "API Testing", "CI/CD"],
      action: "automation-testing-services"
    },
    {
      name: "Mobile Testing",
      icon: FaMobile,
      memberCount: 8,
      description: "Experts in iOS and Android application testing",
      color: "bg-green-500",
      skills: [
        "iOS Testing",
        "Android Testing",
        "React Native",
        "Flutter",
        "Appium",
      ],
      action: "mobile-application-testing"
    },
    {
      name: "Security Testing",
      icon: FaShieldAlt,
      memberCount: 6,
      description: "Cybersecurity professionals ensuring application security",
      color: "bg-red-500",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Security Audits",
      ],
      action: "security-testing"
    },
    {
      name: "AI/ML Testing",
      icon: FaRobot,
      memberCount: 5,
      description:
        "Cutting-edge specialists in AI and machine learning testing",
      color: "bg-purple-500",
      skills: [
        "Model Testing",
        "Data Validation",
        "AI Ethics",
        "Performance Testing",
      ],
      action: "ai-application-testing"
    },
    {
      name: "Performance Testing",
      icon: FaDatabase,
      memberCount: 7,
      description: "Load and performance testing experts",
      color: "bg-orange-500",
      skills: [
        "JMeter",
        "LoadRunner",
        "K6",
        "Performance Monitoring",
        "Scalability",
      ],
      action: "performance-testing-services"
    },
    {
      name: "Manual Testing",
      icon: FaGlobe,
      memberCount: 12,
      description: "Experienced manual testers with domain expertise",
      color: "bg-teal-500",
      skills: [
        "Exploratory Testing",
        "Usability Testing",
        "Regression Testing",
        "UAT",
      ],
      action: "manual-testing"
    },
  ];

  const teamMembers = [
    {
      name: "Siddharth Desai",
      role: "Automation Architect",
      department: "Testriq QA Lab",
      linkedin: "https://www.linkedin.com/in/siddharth-desai-852996201",
      src: "/siddharth-desai.webp",
    },
    {
      name: "Mandar Salkar",
      role: "Customer Success Manager",
      department: "Testriq QA Lab",
      linkedin: "https://www.linkedin.com/in/?_l=en_US",
      src: "/Mandar_Salkar.webp",
    },
    {
      name: "Prathamesh Maske",
      role: "IoT and Mobile QA Architect",
      department: "Testriq QA Lab",
      linkedin: "https://www.linkedin.com/in/prathameshmaske/",
      src: "/prathmesh-maske.webp",
    },
    {
      name: "Aakash Yadav",
      role: "QA lead & business strategy manager",
      department: "Testriq QA Lab",
      linkedin: "https://www.linkedin.com/in/aakashyadav9890/",
      src: "/aakash-yadav.webp",
    },
    {
      name: "Neelam Chavan",
      role: "Financial Controller",
      department: "Testriq QA Lab",
      linkedin:
        "https://www.linkedin.com/in/neelamchavan9892/?original_referer=https%3A%2F%2Ftestriq.com%2F",
      src: "/neelam-chavan.webp",
    },
    {
      name: "Elvita Gomes",
      role: "HR Specialist",
      department: "Testriq QA Lab",
      linkedin: "https://www.linkedin.com/in/elvita07",
      src: "/elvita-gomes.webp",
    },
    {
      name: "Pravin Kodag",
      role: "IT Administrator",
      department: "Testriq QA Lab",
      linkedin: "https://www.linkedin.com/in/pravin-kodag-83a717189/",
      src: "/Pravin Kodag.webp",
    },
    {
      name: "Prakash Mishra",
      role: "Lead Software Engineer",
      department: "Testriq QA Lab",
      linkedin: "https://www.linkedin.com/in/prakashmmishra/",
      src: "/Prakash Mishra.webp",
    },
    {
      name: "Pooja Katkar",
      role: "Test Lead",
      department: "Testriq QA Lab",
      linkedin: "https://www.linkedin.com/in/pooja-katkar-737b3525a/",
      src: "/None.webp",
    },
    {
      name: "Ragini Kumari",
      role: "QA Specialist",
      department: "Testriq QA Lab",
      linkedin: "https://www.linkedin.com/in/raginikumari90/",
      // TODO: replace with her own photo — /None.webp is the shared placeholder.
      src: "/None.webp",
    },
    {
      name: "Sujay Ambelkar",
      role: "Sr. QA Specialist",
      department: "Testriq QA Lab",
      linkedin: "https://www.linkedin.com/in/sujay-ambelkar-ab2770145/",
      src: "/Sujay Ambelkar.webp",
    },
    // {
    //   name: "Jayesh Mistry",
    //   role: "Software Developer",
    //   department: "Testriq QA Lab",
    //   linkedin: "https://www.linkedin.com/in/sujay-ambelkar-ab2770145/",
    //   src: "/Jayesh Mistry.webp",
    // },
  ];

  return (
    <section className="bg-white py-16 px-8 xl:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Featured Team Members */}
        <div className="bg-[theme(color.background.gray )] rounded-2xl p-8 md:p-12 mb-16">

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Featured{" "}
              <span className="text-[theme(color.brand.blue)]">Team Leads</span>
            </h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Meet some of our exceptional team leads who exemplify our
              commitment to excellence and innovation in software testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center rounded-full">
                  <div className="w-50 h-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      title={member.name}
                      src={member.src}
                      alt="Employees Photo"
                      width={200}
                      height={250}
                    />
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <div className="text-[theme(color.brand.blue)] font-semibold mb-2">
                    {member.role}
                  </div>
                  <div className="text-gray-600 text-sm mb-3">
                    {member.department}
                  </div>
                  <Link
                    title={member.name}
                    href={member.linkedin}
                    aria-label={`${member.name} linkedin`}
                    className="flex justify-center bg-sky-100 p-2 mx-20 rounded-xl text-sky-700 hover:scale-110 hover:bg-sky-200 duration-300 ease-in-out cursor-pointer"
                  >
                    <FaLinkedin size={20} />
                  </Link>

                  {/* <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-800">Specialties:</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty, specIndex) => (
                        <span
                          key={specIndex}
                          className="bg-blue-100 text-[theme(color.brand.blue)] px-2 py-1 rounded-md text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          <div className=""></div>
        </div>

        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Specialized{" "}
            <span className="text-[theme(color.brand.blue)]">Departments</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our team is organized into specialized QA departments, each bringing
            deep expertise in <Link title="automation testing" href='automation-testing-services'>automation testing</Link>, <Link title="manual testing" href='manual-testing'>manual testing</Link>,
            <Link title="performance testing" href='performance-testing-services'> performance testing</Link>, and digital solutions to deliver comprehensive quality assurance services.
          </p>

        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {departments.map((dept, index) => (
            <Link title={dept.name} href={dept.action}
              key={index}
              className="bg-white rounded-xl p-6 shadow-sky-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div
                className={`w-16 h-16 ${dept.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <dept.icon className="text-white w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {dept.name}
              </h3>
              <div className="text-[theme(color.brand.blue)] font-semibold mb-3">
                {dept.memberCount} Team Members
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {dept.description}
              </p>

              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-800">
                  Key Skills:
                </div>
                <div className="flex flex-wrap gap-2">
                  {dept.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {departments.map((dept, index) => (
            <Link title={dept.name} href={dept.action}
              key={index}
              className="bg-white rounded-xl p-6 shadow-sky-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div
                className={`w-16 h-16 ${dept.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <dept.icon className="text-white w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {dept.name}
              </h3>
              <div className="text-[theme(color.brand.blue)] font-semibold mb-3">
                {dept.memberCount} Team Members
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {dept.description}
              </p>

              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-800">
                  Key Skills:
                </div>
                <div className="flex flex-wrap gap-2">
                  {dept.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Leadership{" "}
              <span className="text-[theme(color.brand.blue)]">Philosophy</span>
            </h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              At Testriq, we lead by example and foster innovation in <Link title="software
              testing" href='software-testing-guide'>software
                testing</Link>, building a QA team culture where every member thrives and
              drives collective success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Empowerment",
                description:
                  "We empower our team members to take ownership, make decisions, and drive innovation in their areas of expertise.",
              },
              {
                title: "Transparency",
                description:
                  "Open communication and transparent processes ensure everyone is aligned with our goals and values.",
              },
              {
                title: "Growth",
                description:
                  "We invest in continuous learning and development, helping our team members reach their full potential.",
              },
            ].map((principle, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {index + 1}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {principle.title}
                </h4>
                <p className="text-gray-700">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-white border border-gray-200 shadow-sky-300 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Team{" "}
              <span className="text-[theme(color.brand.blue)]">Excellence</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                metric: "180+",
                label: "Team Members",
                description: "Across all departments",
              },
              {
                metric: "8.5",
                label: "Avg. Experience",
                description: "Years in testing",
              },
              {
                metric: "40+",
                label: "Certifications",
                description: "Industry recognized",
              },
              {
                metric: "15+",
                label: "Technologies",
                description: "Expertise areas",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {stat.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;
