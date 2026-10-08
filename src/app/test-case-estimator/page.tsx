"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalculator,
  FaCertificate,
  FaCheckCircle,
  FaChevronRight,
  FaHome,
} from "react-icons/fa";

const COMPLEXITY_OPTIONS = [
  { label: "Low (1.0×)", value: 1.0, hint: "CRUD apps, simple workflows" },
  { label: "Medium (1.3×)", value: 1.3, hint: "Multi-step workflows, role-based access" },
  { label: "High (1.6×)", value: 1.6, hint: "Financial / regulatory / multi-tenant" },
  { label: "Very High (2.0×)", value: 2.0, hint: "Mission-critical, real-time, safety-critical" },
];

interface TestType {
  key: string;
  label: string;
  weight: number;
  description: string;
}

const TEST_TYPES: TestType[] = [
  { key: "functional", label: "Functional", weight: 1.0, description: "Core feature behavior tests" },
  { key: "regression", label: "Regression", weight: 0.6, description: "Re-runs of existing tests after changes" },
  { key: "integration", label: "Integration", weight: 0.8, description: "Tests across modules + external systems" },
  { key: "ui", label: "UI / UX", weight: 0.5, description: "Visual + interaction layer tests" },
  { key: "api", label: "API", weight: 0.4, description: "REST / GraphQL contract + behavior tests" },
  { key: "performance", label: "Performance", weight: 1.2, description: "Load, stress, soak, scalability" },
  { key: "security", label: "Security", weight: 1.3, description: "OWASP, IDOR, auth, injection" },
  { key: "mobile", label: "Mobile (device matrix)", weight: 1.5, description: "iOS + Android matrix overhead" },
];

const PHASE_RATIOS = [
  { phase: "Planning + Strategy", ratio: 0.1 },
  { phase: "Test Design", ratio: 0.275 },
  { phase: "Execution", ratio: 0.45 },
  { phase: "Reporting + Closure", ratio: 0.175 },
];

const HOURS_PER_TESTER_PER_SPRINT = 128; // 4-week × 40h × 0.80 utilisation
const DEFAULT_HOURS_PER_CASE = 1.5;

const TestCaseEstimatorPage: React.FC = () => {
  const [modules, setModules] = useState(5);
  const [featuresPerModule, setFeaturesPerModule] = useState(4);
  const [casesPerFeature, setCasesPerFeature] = useState(8);
  const [complexity, setComplexity] = useState(1.3);
  const [hoursPerCase, setHoursPerCase] = useState(DEFAULT_HOURS_PER_CASE);
  const [enabledTypes, setEnabledTypes] = useState<Record<string, boolean>>({
    functional: true,
    regression: true,
    integration: true,
    ui: false,
    api: false,
    performance: false,
    security: false,
    mobile: false,
  });

  const toggleType = (key: string) =>
    setEnabledTypes((prev) => ({ ...prev, [key]: !prev[key] }));

  const result = useMemo(() => {
    const safeModules = Math.max(0, modules);
    const safeFeatures = Math.max(0, featuresPerModule);
    const safeCases = Math.max(0, casesPerFeature);
    const safeHoursPerCase = Math.max(0, hoursPerCase);

    // Sum weights of enabled test types — adds up across enabled categories
    const totalWeight = TEST_TYPES.reduce(
      (acc, t) => (enabledTypes[t.key] ? acc + t.weight : acc),
      0
    );

    const baseCases = safeModules * safeFeatures * safeCases;
    const totalCases = Math.round(baseCases * complexity * totalWeight);
    const totalHours = Math.round(totalCases * safeHoursPerCase);
    const totalDays = Math.ceil(totalHours / 8);
    const teamSize = totalHours > 0 ? Math.max(1, Math.ceil(totalHours / HOURS_PER_TESTER_PER_SPRINT)) : 0;

    const phaseBreakdown = PHASE_RATIOS.map((p) => ({
      phase: p.phase,
      hours: Math.round(totalHours * p.ratio),
      percent: Math.round(p.ratio * 100),
    }));

    return { baseCases, totalCases, totalHours, totalDays, teamSize, phaseBreakdown, totalWeight };
  }, [modules, featuresPerModule, casesPerFeature, complexity, hoursPerCase, enabledTypes]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-gray-900">
                  <FaHome className="w-4 h-4" /> <span>Home</span>
                </Link>
              </li>
              <li aria-hidden="true"><FaChevronRight className="w-3 h-3 text-gray-400" /></li>
              <li><span className="text-gray-700 font-medium">Test Case Estimator</span></li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-brand-blue px-4 py-2 rounded-full gap-2 mb-5">
              <FaCalculator className="text-white" />
              <span className="text-white text-sm">Free tool · No signup · ISTQB-aligned formulas</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Test Case <span className="text-brand-blue">Estimator</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Estimate total test cases, effort in hours, and recommended team size from your project shape. Industry-standard formulas, ±25-40% variance — use as a conversation starter, not a contract.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Inputs */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 space-y-7">
                <h2 className="text-2xl font-bold text-gray-900">Inputs</h2>

                {/* Numeric inputs */}
                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="modules" className="block text-sm font-semibold text-gray-900 mb-2">
                      Modules
                    </label>
                    <input
                      id="modules"
                      type="number"
                      min={0}
                      value={modules}
                      onChange={(e) => setModules(Number(e.target.value))}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                    <p className="text-xs text-gray-500 mt-1">High-level product areas / epics.</p>
                  </div>
                  <div>
                    <label htmlFor="features" className="block text-sm font-semibold text-gray-900 mb-2">
                      Features / module
                    </label>
                    <input
                      id="features"
                      type="number"
                      min={0}
                      value={featuresPerModule}
                      onChange={(e) => setFeaturesPerModule(Number(e.target.value))}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                    <p className="text-xs text-gray-500 mt-1">Avg user stories per module.</p>
                  </div>
                  <div>
                    <label htmlFor="cases" className="block text-sm font-semibold text-gray-900 mb-2">
                      Cases / feature
                    </label>
                    <input
                      id="cases"
                      type="number"
                      min={0}
                      value={casesPerFeature}
                      onChange={(e) => setCasesPerFeature(Number(e.target.value))}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                    <p className="text-xs text-gray-500 mt-1">Positive + negative + boundary per feature.</p>
                  </div>
                </div>

                {/* Complexity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Complexity multiplier</label>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {COMPLEXITY_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setComplexity(opt.value)}
                        className={`text-left rounded-md px-3 py-3 border transition-colors ${
                          complexity === opt.value
                            ? "border-brand-blue bg-brand-blue/10"
                            : "border-gray-300 bg-white hover:border-brand-blue/50"
                        } cursor-pointer`}
                      >
                        <div className="font-semibold text-sm text-gray-900">{opt.label}</div>
                        <div className="text-xs text-gray-500 mt-1">{opt.hint}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hours per case */}
                <div>
                  <label htmlFor="hoursPerCase" className="block text-sm font-semibold text-gray-900 mb-2">
                    Hours per test case (design + exec + retest overhead)
                  </label>
                  <input
                    id="hoursPerCase"
                    type="number"
                    min={0}
                    step={0.25}
                    value={hoursPerCase}
                    onChange={(e) => setHoursPerCase(Number(e.target.value))}
                    className="w-full sm:w-48 border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Default 1.5h covers design (0.75h) + execution (0.5h) + retest/regression (0.25h) overhead per case.
                  </p>
                </div>

                {/* Test types */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Test types in scope</label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {TEST_TYPES.map((t) => (
                      <label
                        key={t.key}
                        className={`flex items-start gap-3 rounded-md p-3 border cursor-pointer transition-colors ${
                          enabledTypes[t.key]
                            ? "border-brand-blue bg-brand-blue/10"
                            : "border-gray-300 hover:border-brand-blue/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={!!enabledTypes[t.key]}
                          onChange={() => toggleType(t.key)}
                          className="mt-1"
                        />
                        <div className="text-sm">
                          <div className="font-semibold text-gray-900">
                            {t.label}
                            <span className="ml-2 text-xs font-normal text-gray-500">×{t.weight.toFixed(1)}</span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{t.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <aside className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 lg:sticky lg:top-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Estimate</h2>

                <div className="rounded-xl bg-brand-blue text-white p-5">
                  <div className="text-sm uppercase tracking-wide opacity-80 mb-1">Estimated test cases</div>
                  <div className="text-4xl font-bold">{result.totalCases.toLocaleString()}</div>
                  <div className="text-xs opacity-80 mt-1">
                    Base {result.baseCases.toLocaleString()} × {complexity.toFixed(1)} complexity × {result.totalWeight.toFixed(1)} test-type weight
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900">{result.totalHours.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Hours</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900">{result.totalDays.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Days (8h)</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900">{result.teamSize}</div>
                    <div className="text-xs text-gray-500">Testers</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                    Phase breakdown
                  </h3>
                  <ul className="space-y-2">
                    {result.phaseBreakdown.map((p) => (
                      <li key={p.phase} className="flex items-center justify-between text-sm">
                        <span className="text-gray-700">{p.phase}</span>
                        <span className="font-semibold text-gray-900">
                          {p.hours.toLocaleString()} h
                          <span className="text-xs font-normal text-gray-500 ml-2">{p.percent}%</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs text-gray-500 leading-relaxed border-t pt-4">
                  Industry test-case estimation has ±25-40% variance. Use as a conversation starter, not a contract. Real fixed-bid quotes need a discovery phase covering risk register, acceptance criteria, test data complexity, and environment availability.
                </div>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 w-full bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:scale-[1.02] transition-transform"
                >
                  Validate this estimate with us <FaArrowRight />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How the formula works</h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Base cases = Modules × Features per module × Cases per feature",
              "Adjusted cases = Base × Complexity multiplier × Sum of selected test-type weights",
              "Total effort hours = Adjusted cases × Hours per case (default 1.5h covering design + execution + retest)",
              "Recommended team size = Total hours ÷ 128 productive hours per tester per 4-week sprint (80% utilisation), rounded up",
              "Phase breakdown ratio: Planning 10% · Test design 27.5% · Execution 45% · Reporting 17.5%",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <FaCheckCircle className="text-brand-blue mt-1 flex-shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How does this Test Case Estimator calculate effort?",
                a: "Total test cases = modules × features per module × test cases per feature × complexity multiplier × selected-test-types factor. Effort = total test cases × per-case hour rate (defaults to 1.5 hours covering design + execution + retest overhead). Team size = total hours ÷ 128 productive hours per tester per 4-week sprint (80% utilisation), rounded up.",
              },
              {
                q: "What complexity multiplier should I use?",
                a: "1.0 for low complexity (CRUD apps, simple workflows). 1.3 for medium (multi-step workflows, role-based access, integrations). 1.6 for high (financial calculations, regulatory compliance, multi-tenant). 2.0 for very high (mission-critical, real-time, safety-critical). When in doubt, start at 1.3 and adjust based on past project actuals.",
              },
              {
                q: "Why does Mobile have a 1.5× test-type weight?",
                a: "Mobile testing has device-matrix overhead (iOS + Android × multiple versions × multiple devices). One functional test case becomes N test runs across the matrix. The 1.5× weight reflects industry-standard effort inflation vs equivalent web testing.",
              },
              {
                q: "How accurate is this estimate?",
                a: "Industry test-case estimation has ±25-40% variance even with experienced estimators. Use as a starting-point conversation tool, not a contractual commitment. The most accurate estimates come from analogy (past similar projects) rather than from formulas.",
              },
              {
                q: "Can I use this for a fixed-bid quote?",
                a: "Treat this as a sanity-check input, not the basis for a fixed-bid quote. Real fixed-bid quotes need a discovery phase covering risk register, acceptance criteria, test data complexity, and environment availability — all factors a 4-input tool can't capture.",
              },
              {
                q: "Where can I learn more about test estimation best practices?",
                a: "Read our /test-strategy-template + /test-plan-template + /test-case-template pages for the documents this estimate feeds into, plus /qa-process for how Testriq runs a real engagement.",
              },
            ].map((f) => (
              <details key={f.q} className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-start justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-brand-blue group-open:rotate-90 transition-transform flex-shrink-0">
                    <FaChevronRight />
                  </span>
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/test-case-template", title: "Test Case Template", description: "Field-by-field test case format with examples." },
              { href: "/test-plan-template", title: "Test Plan Template", description: "IEEE 829-aligned 14-section plan structure." },
              { href: "/test-strategy-template", title: "Test Strategy Template", description: "8-section strategic doc that drives planning." },
              { href: "/qa-process", title: "QA Process", description: "Testriq's 6-phase methodology end-to-end." },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="block bg-slate-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-blue hover:shadow-md transition-all"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{r.description}</p>
                <span className="text-sm font-semibold text-brand-blue inline-flex items-center gap-1">
                  Read <FaArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue text-white py-14">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center bg-white/15 px-4 py-2 rounded-full gap-2 mb-5">
            <FaCertificate className="text-white" />
            <span className="text-white text-sm">ISTQB + ISO 9001 + ISO 27001 Certified Partner</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Need help turning this estimate into a real test plan?</h2>
          <p className="text-white/85 text-lg mb-7 max-w-2xl mx-auto">
            Testriq engineers can validate your estimate against past project actuals, build the strategy doc, and staff the engagement — all the steps after the calculator output.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
          >
            Talk to a QA lead <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TestCaseEstimatorPage;
