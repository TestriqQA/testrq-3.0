import React from "react";
import { FaQuoteLeft, FaStar, FaUser } from "react-icons/fa";
import { CaseStudy } from "@/lib/sanity-data-adapter";
import Link from "next/link";

interface CaseStudyTestimonialSectionProps {
  caseStudy: CaseStudy;
}

const CaseStudyTestimonialSection: React.FC<
  CaseStudyTestimonialSectionProps
> = ({ caseStudy }) => {
  const { show, quote, author, role, company, rating } = caseStudy.testimonial;

  // Every field below the quote is optional in Studio, and each one is hidden
  // independently when empty. Before this, the section rendered its markup
  // regardless: a case study with only a quote showed five stars nobody had
  // given, an empty name chip, and a bare comma where "role, company" should be.
  const hasRating = typeof rating === "number" && rating > 0;
  const hasAuthor = Boolean(author?.trim());
  const roleAndCompany = [role, company].map((v) => v?.trim()).filter(Boolean).join(", ");
  const hasAuthorBlock = hasAuthor || Boolean(roleAndCompany);

  // Hidden by the Studio switch, or nothing to quote. The quote is the section:
  // without it there is no testimonial to show, and the surrounding header and
  // trust blocks would frame an empty card. The page keeps its own
  // CaseStudyCallToActionSection further down, so hiding this costs no CTA.
  //
  // `show === false`, not `!show`: case studies saved before the switch existed
  // carry no value, and `!undefined` would hide every one of them. The adapter
  // already normalises undefined to true, so this is belt and braces — but the
  // two layers now agree on what "not set" means, instead of depending on the
  // adapter being the only path data ever takes.
  if (show === false || !quote?.trim()) return null;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
      />
    ));
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaQuoteLeft className="w-4 h-4" />
            <span>Client Testimonial</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            What Our Client Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from our client about their experience working with
            our team and the impact of our testing solutions.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center">
              <FaQuoteLeft className="w-6 h-6 text-white" />
            </div>

            {/* Rating — omitted entirely when no rating was given, rather than
                rendering five grey stars that read as a zero score. */}
            {hasRating && (
              <div className="flex justify-center mb-8 mt-4">
                <div className="flex gap-1">{renderStars(rating as number)}</div>
              </div>
            )}

            {/* Quote. The extra top margin stands in for the rating block when
                that is hidden, so the quote never collides with the quote icon. */}
            <blockquote
              className={`text-xl md:text-2xl text-gray-800 text-center leading-relaxed mb-8 font-medium ${hasRating ? "" : "mt-12"}`}
            >
              &quot;{quote}&quot;
            </blockquote>

            {/* Author Info — the whole chip goes when there is no name, role or
                company, since an avatar beside blank lines looks like a bug. */}
            {hasAuthorBlock && (
              <div className="text-center">
                <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow-sm">
                  <div className="w-12 h-12 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center">
                    <FaUser className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    {hasAuthor && (
                      <div className="font-semibold text-gray-900">{author}</div>
                    )}
                    {/* Joined with ", " only when both parts exist, so a role
                        with no company no longer renders a trailing comma. */}
                    {roleAndCompany && (
                      <div className="text-gray-600 text-sm">{roleAndCompany}</div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaStar className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Exceptional Quality
            </h3>
            <p className="text-gray-600">
              Consistently delivering high-quality testing solutions that exceed
              expectations
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUser className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Trusted Partnership
            </h3>
            <p className="text-gray-600">
              Building long-term relationships based on trust, reliability, and
              mutual success
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaQuoteLeft className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Client Satisfaction
            </h3>
            <p className="text-gray-600">
              Earning strong client satisfaction through dedicated service and
              expert solutions
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let us help you transform your software quality and achieve
              exceptional results like our satisfied clients.
            </p>
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer text-[theme(color.brand.blue)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Success Story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTestimonialSection;
