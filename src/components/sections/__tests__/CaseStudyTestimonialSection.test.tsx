import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import CaseStudyTestimonialSection from "../CaseStudyTestimonialSection";
import type { CaseStudy } from "@/lib/sanity-data-adapter";

type Testimonial = CaseStudy["testimonial"];

const render = (testimonial: Partial<Testimonial>) =>
  renderToStaticMarkup(
    <CaseStudyTestimonialSection
      caseStudy={
        {
          testimonial: {
            show: true,
            quote: "",
            author: "",
            role: "",
            company: "",
            ...testimonial,
          },
        } as CaseStudy
      }
    />
  );

const STAR_FILLED = "text-yellow-400";
const AUTHOR_CHIP = "rounded-full px-6 py-4 shadow-sm";

describe("CaseStudyTestimonialSection visibility", () => {
  it("renders nothing when the Studio switch is off", () => {
    expect(
      render({ show: false, quote: "Great work", author: "A", role: "R", company: "C", rating: 5 })
    ).toBe("");
  });

  it("renders nothing when there is no quote, even if switched on", () => {
    expect(render({ show: true, quote: "   ", author: "A" })).toBe("");
  });

  it("still renders for case studies saved before the switch existed", () => {
    // Legacy documents have no `show` value at all; the adapter maps that to
    // true, but assert the component itself is not the thing hiding them.
    const html = render({ show: undefined as unknown as boolean, quote: "Legacy quote" });
    expect(html).toContain("Legacy quote");
  });
});

describe("CaseStudyTestimonialSection optional fields", () => {
  it("shows only the quote when every other field is empty", () => {
    const html = render({ quote: "Just the quote" });
    expect(html).toContain("Just the quote");
    expect(html).not.toContain(STAR_FILLED); // no invented stars
    expect(html).not.toContain(AUTHOR_CHIP); // no empty author chip
  });

  it("shows every field when all are filled", () => {
    const html = render({
      quote: "Excellent testing",
      author: "Jane Doe",
      role: "QA Lead",
      company: "Acme",
      rating: 4,
    });
    expect(html).toContain("Excellent testing");
    expect(html).toContain("Jane Doe");
    expect(html).toContain("QA Lead, Acme");
    expect(html).toContain(STAR_FILLED);
  });

  it("omits the stars when no rating was given but a name was", () => {
    const html = render({ quote: "No rating given", author: "Jane Doe" });
    expect(html).toContain("Jane Doe");
    expect(html).not.toContain(STAR_FILLED);
  });

  it("does not leave a dangling comma when only one of role/company is set", () => {
    expect(render({ quote: "q", author: "Jane", role: "QA Lead" })).toContain("QA Lead");
    expect(render({ quote: "q", author: "Jane", role: "QA Lead" })).not.toContain("QA Lead,");
    expect(render({ quote: "q", author: "Jane", company: "Acme" })).not.toContain(", Acme");
  });

  it("renders the author chip when only a company is known", () => {
    const html = render({ quote: "q", company: "Acme" });
    expect(html).toContain(AUTHOR_CHIP);
    expect(html).toContain("Acme");
  });
});
