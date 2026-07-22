// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaRobot,
  FaCog,
  FaShieldAlt,
  FaCode,
  FaTools,
  FaDesktop,
  FaDatabase,
} from "react-icons/fa";

import { SiRos } from "react-icons/si";
import Image from "next/image";

const RoboticToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      title: "Simulators",
      icon: <FaDesktop className="w-6 h-6 text-blue-500" />,
      tools: [
        {
          name: "Gazebo",
          description: "3D multi-robot simulator with physics engines",
          icon: <Image src="/Gazebo_Logo.png" alt="Gazebo Logo" width={80} height={60} className="object-contain" />,
        },
        {
          name: "NVIDIA Isaac Sim",
          description: "Photorealistic Physical AI training simulator",
          icon: <Image src="/NVIDIA_Isaac_Sim_Logo.png" alt="NVIDIA Isaac Sim Logo" width={80} height={60} className="object-contain" />,
        },
        {
          name: "Webots",
          description: "Professional simulator for industrial & service robots",
          icon: <FaDesktop className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "Digital Twin",
          description: "Modeling environmental stress factors virtually",
          icon: <FaCog className="w-5 h-5 text-blue-500" />,
        },
      ],
    },
    {
      title: "Middleware & Frameworks",
      icon: <FaCode className="w-6 h-6 text-green-500" />,
      tools: [
        {
          name: "ROS",
          description: "Robot Operating System messaging middleware",
          icon: <SiRos aria-hidden className="w-5 h-5 text-green-500" />,
        },
        {
          name: "ROS2",
          description: "Industrial strength real-time robotics framework",
          icon: <SiRos aria-hidden className="w-5 h-5 text-green-500" />,
        },
        {
          name: "Move It",
          description: "Advanced motion planning for robotic arms",
          icon: <Image src="/MoveIt_Logo.png" alt="Move It Logo" width={80} height={20} className="object-contain" />,
        },
        {
          name: "OpenCV",
          description: "Computer vision for robotic perception systems",
          icon: <Image src="/OpenCV_Logo.png" alt="OpenCV Logo" width={90} height={20} className="object-contain" />,
        },
      ],
    },
    {
      title: "RPA & UI Automation Tools",
      icon: <FaRobot className="w-6 h-6 text-red-500" />,
      tools: [
        {
          name: "UiPath",
          description: "Enterprise RPA platform for business processes",
          icon: <Image src="/UiPath_Logo.png" alt="UiPath Logo" width={80} height={60} className="object-contain" />,
        },
        {
          name: "Blue Prism",
          description: "Robotic process automation for digital workforces",
          icon: <Image src="/Blue_Prism_Logo.png" alt="Blue Prism Logo" width={80} height={60} className="object-contain" />,
        },
        {
          name: "Automation Anywhere",
          description: "Cognitive automation for complex UI workflows",
          icon: <Image src="/Automation_Anywhere_Logo.png" alt="Automation Anywhere Logo" width={80} height={60} className="object-contain" />,
        },
        {
          name: (<>Selenium/<br />Appium</>),
          description: (
            <>
              <Link href="/api-testing" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Integration testing</Link> for robotic UI systems
            </>
          ),
          icon: <Image src="/Appium_Logo.svg" alt="Appium Logo" width={80} height={20} className="object-contain" />,
        },
      ],
    },
    {
      title: "Safety Hardware",
      icon: <FaShieldAlt className="w-6 h-6 text-purple-500" />,
      tools: [
        {
          name: "Force-Torque Sensors",
          description: "Measuring contact forces for ISO compliance",
          icon: <FaShieldAlt className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "Laser Scanners",
          description: "3D vision & proximity safety interlocks",
          icon: <FaShieldAlt className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "Light Curtains",
          description: "Opto-electronic presence sensing for safety",
          icon: <FaShieldAlt className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "3D Vision Systems",
          description: "Advanced environmental mapping and safety",
          icon: <FaDatabase className="w-5 h-5 text-purple-500" />,
        },
      ],
    },
    {
      title: "Analyze and Diagnose Systems",
      icon: <FaTools className="w-6 h-6 text-orange-500" />,
      tools: [
        {
          name: "Vibration Analyzers",
          description: "Diagnostic tools for mechanical reliability",
          icon: <FaCog className="w-5 h-5 text-orange-500" />,
        },
        {
          name: "Joint Torque Diagnostics",
          description: "Monitoring actuator performance and wear",
          icon: <FaCog className="w-5 h-5 text-orange-500" />,
        },
        {
          name: "Telemetry Dashboards",
          description: "Real-time monitoring of robotic performance",
          icon: <FaDatabase className="w-5 h-5 text-orange-500" />,
        },
        {
          name: "FMEA Tools",
          description: "Failure mode tracking and risk analysis",
          icon: <FaTools className="w-5 h-5 text-orange-500" />,
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Robot & RPA Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Testriq <span className="text-brand-blue">Robotics & RPA Tech Stack</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We utilize a <span className="font-semibold text-brand-blue">hybrid stack</span> of physical diagnostics and digital automation to provide enterprise robotics and <span className="text-brand-blue font-semibold">RPA testing services</span> specifically designed for the 2026 automation era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-xl shadow-md mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white flex gap-5 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div>{tool.icon}</div>
                    <div className="items-start">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tool Integration */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Custom Tool Integration
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We support full-cycle testing for robotics software and can
              integrate with your tools or recommend best-fit frameworks, or
              recommend the best combination for your specific robotic testing
              requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticToolsFramework;
