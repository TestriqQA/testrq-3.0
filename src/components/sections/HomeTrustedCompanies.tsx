import React from "react";
import ImageMarquee from "../ImageMarque";

const Titles = {
  title: "Trusted by Leading Companies",
  subtitle: "Join the companies who trust us with their critical testing needs and quality assurance requirements.",
};

const renderTitle = () => {
        const titleParts = Titles.title.split('Trusted');
        return (
            <>
                {titleParts[0]}
                <span className="text-[theme(color.brand.blue)]">Trusted</span>
                {titleParts[1]}
            </>
        );
    };


const HomeTrustedCompanies = () => {
  return (
    <section className="bg-white w-full pt-6 px-4 sm:px-8 md:px-12 lg:px-10 text-center">
      <h2 className="text-4xl font-semibold">{renderTitle()}</h2>
      <p className="mt-4 text-gray-500 text-base sm:text-lg">
        Join the companies who trust us with their critical testing needs and
        quality assurance requirements.
      </p>

      
      <ImageMarquee />
    </section>
  );
};

export default HomeTrustedCompanies;
