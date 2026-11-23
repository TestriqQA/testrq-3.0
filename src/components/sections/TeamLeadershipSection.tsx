import React from "react";
import { FaLinkedin, FaUserTie } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { teamLeaders, cdplTeamLeaders, teamMemberSlug, type TeamLeader } from "@/data/teamLeaders";

const TeamLeadershipSection = () => {
  // Leader data lives in src/data/teamLeaders.ts so the cards and the page's
  // Person structured data read the same names, titles and LinkedIn links.
  const withImage = (leader: TeamLeader) => {
    const { alt, ...image } = leader.image;
    return {
      ...leader,
      img: <Image alt={alt} {...image} className="object-cover rounded-full" />,
    };
  };
  const leaders = teamLeaders.map(withImage);
  const cdplLeaders = cdplTeamLeaders.map(withImage);

  return (
    <section className="bg-[theme(color.background.gray)] pt-16 pb-1 px-8 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaUserTie />
            <span className="text-sm">
              Leadership Team
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our{" "}
            <span className="text-[theme(color.brand.blue)]">Leaders</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Prashant Shukla, former Managing Director at Udemy (India & South Asia) and National Technology Officer at Microsoft India, has over 20 years of leadership experience in digital transformation, strategy, and innovation. As Senior Advisor at Testriq, he brings his expertise to drive growth, technology innovation, and strategic expansion.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="space-y-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              id={teamMemberSlug(leader.name)}
              className={`scroll-mt-24 lg bg-white rounded-2xl p-4 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? "" : ""
                }`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                {/* Leader Info */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {leader.name}
                    </h3>
                    <div className="text-xl text-[theme(color.brand.blue)] font-semibold mb-2">
                      {leader.position}
                    </div>
                    <div className="flex flex-row items-center gap-3 text-gray-600">
                      <p className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                        {leader.experience}
                      </p>
                      <p className="text-sm">{leader.specialization}</p>
                    </div>
                  </div>

                  {/* Leader Visual */}
                  <div
                    className={`flex lg:hidden justify-center px-0 ${index % 2 === 1 ? "lg:col-start-1" : ""
                      }`}
                  >
                    <div className="relative">
                      <div className="text-center text-black">
                        <div className="w-50 h-50 md:w-80 md:h-90 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto hover:scale-105 transition-transform duration-300">
                          {leader.img}
                        </div>
                        <div className="text-xl font-semibold hidden lg:block">
                          {leader.name}
                        </div>
                        <div className="text-md opacity-90 hidden lg:block">
                          {leader.position}
                        </div>
                      </div>

                      {/* Floating Badge */}
                      {leader.name !== "Prashant Shukla" && (
                        <div className="absolute top-0 -right-2 md:top-5 md:right-2 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-3">
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">
                              {leader.experience.split("+")[0]}+
                            </div>
                            <div className="text-xs text-gray-100">Years</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mt-6 mb-6">
                    {leader.bio}
                  </p>

                  {leader.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {leader.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Social Links */}
                  <Link
                    title={leader.name}
                    href={leader.linkedin}
                    aria-label={leader.label}
                    className="flex justify-center w-25 bg-sky-100 p-2 rounded-xl text-sky-700 hover:scale-110 hover:bg-sky-200 duration-300 ease-in-out cursor-pointer"
                  >
                    <FaLinkedin size={30} />
                  </Link>
                </div>

                {/* Leader Visual */}
                <div
                  className={`hidden lg:flex justify-center px-0 ${index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                >
                  <div className="relative">
                    <div className="text-center text-black py-0">
                      <div className="w-60 h-60 md:w-80 md:h-100 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto hover:scale-105 transition-transform duration-300">
                        {leader.img}
                      </div>
                      <div className="text-xl font-semibold hidden lg:block">
                        {leader.name}
                      </div>
                      <div className="text-md opacity-90 hidden lg:block">
                        {leader.position}
                      </div>
                    </div>

                    {/* Floating Badge */}
                    {leader.name !== "Prashant Shukla" && (
                      <div className="absolute top-10 right-3 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">
                            {leader.experience.split("+")[0]}+
                          </div>
                          <div className="text-xs text-gray-100">Years</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CDPL-Leaders Learning and Development */}
        <div className="space-y-12 my-16">
          <h2 className="text-3xl md:text-5xl text-center font-semibold">
            <span className="text-brand-blue">Learning and Development</span>{" "}
            <span className="block leading-16">
              Wing with <span className="text-[#FF8B00]">CDPL</span>
            </span>
          </h2>

          {cdplLeaders.map((leader, index) => (
            <div
              key={index}
              id={teamMemberSlug(leader.name)}
              className={`scroll-mt-24 lg bg-white rounded-2xl p-4 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? "" : ""
                }`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                {/* Leader Info */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {leader.name}
                    </h3>
                    <div className="text-xl text-[theme(color.brand.blue)] font-semibold mb-2">
                      {leader.position}
                    </div>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {leader.experience}
                      </span>
                      <span className="text-sm">{leader.specialization}</span>
                    </div>
                  </div>

                  {/* Leader Visual */}
                  <div
                    className={`flex lg:hidden justify-center px-0 ${index % 2 === 1 ? "lg:col-start-1" : ""
                      }`}
                  >
                    <div className="relative">
                      <div className="text-center text-black">
                        <div className="w-50 h-50 md:w-80 md:h-90 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto hover:scale-105 transition-transform duration-300">
                          {leader.img}
                        </div>
                        <div className="text-xl font-semibold hidden lg:block">
                          {leader.name}
                        </div>
                        <div className="text-md opacity-90 hidden lg:block">
                          {leader.position}
                        </div>
                      </div>

                      {/* Floating Badge */}
                      {leader.name !== "Prashant Shukla" && (
                        <div className="absolute top-0 -right-2 md:top-5 md:right-2 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-3">
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">
                              {leader.experience.split("+")[0]}+
                            </div>
                            <div className="text-xs text-gray-100">Years</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mt-6 mb-6">
                    {leader.bio}
                  </p>

                  {leader.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {leader.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Social Links */}
                  <Link
                    title={leader.name}
                    href={leader.linkedin}
                    aria-label={leader.label}
                    className="flex justify-center w-25 bg-sky-100 p-2 rounded-xl text-sky-700 hover:scale-110 hover:bg-sky-200 duration-300 ease-in-out cursor-pointer"
                  >
                    <FaLinkedin size={30} />
                  </Link>
                </div>

                {/* Leader Visual */}
                <div
                  className={`hidden lg:flex justify-center px-0 ${index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                >
                  <div className="relative">
                    <div className="text-center text-black py-0">
                      <div className="w-60 h-60 md:w-90 md:h-100 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto hover:scale-105 transition-transform duration-300">
                        {leader.img}
                      </div>
                      <div className="text-xl font-semibold hidden lg:block">
                        {leader.name}
                      </div>
                      <div className="text-md opacity-90 hidden lg:block">
                        {leader.position}
                      </div>
                    </div>

                    {/* Floating Badge */}
                    {leader.name !== "Prashant Shukla" && (
                      <div className="absolute top-10 right-3 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">
                            {leader.experience.split("+")[0]}+
                          </div>
                          <div className="text-xs text-gray-100">Years</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TeamLeadershipSection;