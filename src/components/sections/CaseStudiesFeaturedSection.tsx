"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight, FaStar, FaFilter } from "react-icons/fa";
import { CaseStudy } from "@/lib/sanity-data-adapter";
import Image from "next/image";


/**
 * Main case-study thumbnail plus an optional row of gallery thumbnails.
 *
 * The gallery comes from the Sanity `gallery` field (editors upload files; the
 * assets are served from cdn.sanity.io). It is entirely optional: with nothing
 * uploaded, `caseStudy.gallery` is an empty array and the row does not render,
 * leaving the card exactly as it was.
 *
 * Hovering a thumbnail previews it in the main panel; leaving restores the
 * logo. State lives in this child rather than the parent so each card tracks
 * its own preview — a single map keyed by id in the parent would re-render
 * every card on every hover.
 *
 * The two states are rendered differently on purpose:
 *   - LOGO (default)    object-contain, never cropped. A client logo cropped
 *                       to fill a 4:3 panel is just a broken logo.
 *   - GALLERY (preview) object-cover via `fill`, so a screenshot or photo
 *                       fills the whole panel instead of floating at logo size
 *                       in the middle of it.
 *
 * White logos: the panel is a light gradient, so a white wordmark used to
 * disappear into it. The panel is darkened a step and the logo carries a drop
 * shadow, which outlines a white mark without muddying a dark one. Tinting the
 * panel dark instead would just invert the problem for the dark logos.
 *
 * The thumbnails are <button>s, not plain divs, so the preview is reachable by
 * keyboard: onFocus/onBlur mirror onMouseEnter/onMouseLeave.
 */
function CaseStudyVisual({ caseStudy }: { caseStudy: CaseStudy }) {
  const [preview, setPreview] = useState<string | null>(null);

  // The adapter already caps this at 5; slicing again keeps the component
  // honest if it is ever handed data from somewhere else.
  const gallery = (caseStudy.gallery || []).slice(0, 5);
  const logo = caseStudy.image || "/placeholder.png";

  return (
    <div className="flex-1 max-w-md w-full">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-80">
        {preview ? (
          <>
            <Image
              key={preview}
              src={preview}
              alt={caseStudy.client + " gallery image"}
              fill
              sizes="(max-width: 768px) 100vw, 28rem"
              className="object-cover"
            />
            {/* Scrim so the caption stays readable over a light photo. */}
            {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent pt-10 pb-3 px-4">
              <p className="text-white text-sm text-center drop-shadow">
                {caseStudy.industry} Success Story
              </p>
            </div> */}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center">
              <Image
                title={caseStudy.title}
                src={logo}
                alt={caseStudy.client + " logo"}
                width={240}
                height={240}
                className="mx-auto mb-4 rounded-lg object-contain max-h-[180px] w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
              />
              <p className="text-gray-700 text-sm">
                {caseStudy.industry} Success Story
              </p>
            </div>
          </div>
        )}
      </div>

      {gallery.length > 0 && (
        <div className="mt-4 flex flex-row items-center justify-center gap-3">
          {gallery.map((img, i) => (
            <button
              key={img.url}
              type="button"
              onMouseEnter={() => setPreview(img.url)}
              onMouseLeave={() => setPreview(null)}
              onFocus={() => setPreview(img.url)}
              onBlur={() => setPreview(null)}
              aria-label={
                img.alt
                  ? `Preview ${img.alt}`
                  : `Preview ${caseStudy.client} image ${i + 1}`
              }
              className="cursor-pointer shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 border-gray-300 hover:border-[theme(color.brand.blue)] focus-visible:border-[theme(color.brand.blue)] focus-visible:outline-none transition-colors duration-200 bg-gray-200"
            >
              <Image
                src={img.url}
                alt={img.alt || ""}
                width={img.width || 64}
                height={img.height || 64}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
interface CaseStudiesFeaturedSectionProps {
  caseStudies: CaseStudy[];
}

const CaseStudiesFeaturedSection = ({ caseStudies }: CaseStudiesFeaturedSectionProps) => {
  const INITIAL_VISIBLE_COUNT = 4;
  const [showAll, setShowAll] = useState(false);
  // F-86: industry filter — `null` means "All Industries". Distinct list
  // computed once from the data; sorted alphabetically so the chip row is
  // stable across renders and matches user expectation.
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = useMemo(() => {
    const set = new Set<string>();
    caseStudies.forEach((cs) => {
      if (cs.industry) set.add(cs.industry);
    });
    return Array.from(set).sort();
  }, [caseStudies]);

  const handleIndustryChange = (industry: string | null) => {
    setSelectedIndustry(industry);
    // Reset "View More" state so the filtered subset starts collapsed —
    // otherwise switching from a 30-item industry to a 2-item one looks empty
    // because the toggle is irrelevant for the smaller subset.
    setShowAll(false);
  };

  // SEO Fix: We render ALL case studies to ensure crawling, but hide
  // non-matching ones visually via the `hidden` class. Preserves the
  // pre-F-86 crawlable-but-collapsible behaviour while adding filter UX.
  const visibleCaseStudies = caseStudies;
  const matchedCount = selectedIndustry
    ? caseStudies.filter((cs) => cs.industry === selectedIndustry).length
    : caseStudies.length;

  return (
    <section id="case-studies-section" className="bg-white px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-5">
            <FaStar />
            <span className="text-sm">Featured Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from{" "}
            <span className="text-[theme(color.brand.blue)]">Real Clients</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Explore detailed case studies showcasing how our testing expertise
            has solved complex challenges and delivered measurable business
            value across different industries.
          </p>
        </div>

        {/* F-86: Industry filter chips. Renders only when there's at least
            one industry to filter by. The "All Industries" chip resets the
            filter; selected chip is highlighted in brand-blue. */}
        {industries.length > 0 && (
          <div
            className="mb-12 flex flex-wrap items-center justify-center gap-2"
            role="group"
            aria-label="Filter case studies by industry"
          >
            <span className="mr-2 inline-flex items-center gap-2 text-sm font-medium text-gray-700">
              <FaFilter className="h-3 w-3 text-gray-500" aria-hidden="true" />
              Filter:
            </span>
            <button
              type="button"
              onClick={() => handleIndustryChange(null)}
              aria-pressed={selectedIndustry === null}
              className={`min-h-[44px] px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedIndustry === null
                ? "bg-[theme(color.brand.blue)] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } cursor-pointer`}
            >
              All Industries
              <span className="ml-1.5 text-xs opacity-75">({caseStudies.length})</span>
            </button>
            {industries.map((industry) => {
              const count = caseStudies.filter((cs) => cs.industry === industry).length;
              const active = selectedIndustry === industry;
              return (
                <button
                  key={industry}
                  type="button"
                  onClick={() => handleIndustryChange(industry)}
                  aria-pressed={active}
                  className={`min-h-[44px] px-4 py-2 rounded-full text-sm font-medium transition-colors ${active
                    ? "bg-[theme(color.brand.blue)] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } cursor-pointer`}
                >
                  {industry}
                  <span className="ml-1.5 text-xs opacity-75">({count})</span>
                </button>
              );
            })}
          </div>
        )}

        {/* F-86: visible-count messaging when filter is active */}
        {selectedIndustry && (
          <p
            className="mb-8 text-center text-sm text-gray-600"
            aria-live="polite"
          >
            Showing {matchedCount} {matchedCount === 1 ? "case study" : "case studies"} in{" "}
            <strong className="text-gray-900">{selectedIndustry}</strong>
          </p>
        )}

        {/* Case Studies List */}
        <div className="space-y-16">
          {visibleCaseStudies.map((caseStudy, index) => {
            // F-86: hidden state combines the existing showAll collapse logic
            // with the new industry filter. Both criteria operate on the same
            // DOM-rendered list (preserves SEO crawlability).
            const matchesIndustry =
              !selectedIndustry || caseStudy.industry === selectedIndustry;
            // Compute the index-within-filtered-set so the "first 4" collapse
            // behaviour applies to the visible filtered set, not the full list.
            const filteredIndex = selectedIndustry
              ? caseStudies
                  .slice(0, index + 1)
                  .filter((cs) => cs.industry === selectedIndustry).length - 1
              : index;
            const collapsedByShowAll =
              !showAll && filteredIndex >= INITIAL_VISIBLE_COUNT;
            const isHidden = !matchesIndustry || collapsedByShowAll;
            return (
            <div
              key={caseStudy.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center ring-1 ring-gray-200 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 ${isHidden ? "hidden" : ""
                }`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[theme(color.brand.blue)] text-white text-sm px-3 py-1 rounded-full">
                    {caseStudy.industry}
                  </span>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaCalendarAlt className="w-4 h-4" />
                    {caseStudy.duration}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {caseStudy.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Challenge:</strong>{" "}
                  {caseStudy.challenge?.description ||
                    "Challenge summary not available."}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Solution:</strong>{" "}
                  {caseStudy.solution?.description ||
                    "Solution summary not available."}
                </p>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Key Results:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {caseStudy.results?.additionalMetrics?.map(
                      (result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="flex items-start gap-2"
                        >
                          <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">
                            {result.label}: {result.value}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                      {caseStudy.results.bugReduction}
                    </div>
                    <div className="text-xs text-gray-600">Bug Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {caseStudy.results.performanceImprovement}
                    </div>
                    <div className="text-xs text-gray-600">
                      Performance Boost
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {caseStudy.results.roi}
                    </div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, techIndex) =>
                      tech.link === "#" ? (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                        >
                          {tech.name}
                        </span>
                      ) : (
                        <Link
                          key={techIndex}
                          href={tech.link}
                          className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          {tech.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={caseStudy.slug}
                  className="inline-flex items-center gap-2 text-[theme(color.brand.blue)] font-semibold hover:text-blue-600 transition-colors"
                >
                  Read Full Case Study
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <CaseStudyVisual caseStudy={caseStudy} />
            </div>
            );
          })}
        </div>

        {/* Toggle Button — F-86: only render when the active filter would
            collapse more than INITIAL_VISIBLE_COUNT items. Otherwise the
            button is meaningless (filter result fits the initial view). */}
        {matchedCount > INITIAL_VISIBLE_COUNT && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-[theme(color.brand.blue)] cursor-pointer text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-98 transition-all"
            >
              {showAll ? "View Less" : "View More Case Studies"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesFeaturedSection;
