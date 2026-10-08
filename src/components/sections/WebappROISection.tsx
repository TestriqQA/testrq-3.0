import Link from "next/link";

// Data constants
const roiBenefits = [
  {
    number: "1",
    title: "Early Bug Detection",
    desc: "Identify issues before they reach production",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    number: "2",
    title: "Reduced Support Costs",
    desc: "Minimize post-launch support and maintenance",
    color: "bg-green-100 text-green-700",
  },
  {
    number: "3",
    title: "Improved User Retention",
    desc: "Higher quality leads to better user experiences",
    color: "bg-purple-100 text-purple-700",
  },
];

const roiStats = [
  {
    value: "60%",
    label: "Cost Reduction",
    color: "text-blue-600",
  },
  {
    value: "40%",
    label: "Faster Launch",
    color: "text-green-600",
  },
  {
    value: "95%",
    label: "User Satisfaction",
    color: "text-purple-600",
  },
  {
    value: "99%",
    label: "Bug Detection",
    color: "text-sky-600",
  },
];

export default function WebappROISection() {
  return (
    <section className="px-8 md:px-12 lg:px-24 py-16 bg-[theme(color.background.gray)]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[theme(color.brand.blue)]">
              Measurable ROI
            </span>{" "}
            from Day One
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            Our web application testing services deliver immediate and long-term
            value through reduced development costs, faster time-to-market, and
            improved user satisfaction.
          </p>

          <div className="space-y-6">
            {roiBenefits.map(({ number, title, desc, color }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className={`w-8 h-8 rounded-md font-semibold flex items-center justify-center ${color}`}
                >
                  {number}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{title}</h4>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Stats Box */}
        <div className="flex-1 bg-blue-50 rounded-2xl p-8 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Average Client Results
          </h3>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {roiStats.map(({ value, label, color }, i) => (
              <div key={i} className="text-center">
                <p className={`text-3xl font-bold ${color}`}>{value}</p>
                <p className="text-sm text-gray-700">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/roi-calculator" className="inline-block">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-5 py-2 rounded-md transition cursor-pointer">
                Calculate Your ROI
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
