import Link from 'next/link';
import React from 'react'
// import { FiTarget } from "react-icons/fi";
// import { FaRegClock } from "react-icons/fa";
// import { LuShield, LuUsers, LuLightbulb } from "react-icons/lu";
// import { FaArrowTrendUp } from "react-icons/fa6";

import { Globe, Cpu, Users, Shield, Zap, Target } from "lucide-react";

const HomeChooseTestriq = () => {
    const heading = {
        title: 'Specialized Industry Solutions & Global Reach',
        info: (
            <>
                Choosing a <Link href="/about-us" className="text-[theme(color.brand.blue)] underline">Software Testing Partner</Link> is a strategic decision. Testriq stands out by combining ISTQB Certified QA Experts with a proactive Software Quality Engineering mindset.
            </>
        )
    };

    const industrySolutions = [
        {
            icon: Zap,
            title: 'B2B SaaS & Insurance Platforms',
            detail: 'Expert system and API testing for multi-tenant architectures, ensuring 99.9% uptime, data integrity, and high-performance insurance software.'
        },
        {
            icon: Cpu,
            title: 'IoT & Connection Testing',
            detail: 'Verifying firmware stability and network speed for smart devices. Ensuring hardware and software sync perfectly under any global condition.'
        },
        {
            icon: Users,
            title: 'Offshore QA & Augmentation',
            detail: 'Leverage cost-effective Offshore QA Testing without sacrificing quality. Our 24/7 model seamlessly integrates with your local development teams.'
        },
    ];

    const whyTestriq = [
        { icon: Globe, title: 'Global Reach', detail: 'Localized expertise for US, UK, EU, and Middle Eastern markets.' },
        { icon: Target, title: 'Technical Depth', detail: 'From Security Pen-testing to Autonomous Testing and AI validation.' },
        { icon: Shield, title: 'Integrity', detail: 'Independent Software Testing Company providing unbiased, objective results.' },
    ];

    return (
        <section className='flex flex-col w-full bg-white mx-auto md:px-8 px-8 xl:px-24 py-16 gap-y-16'>
            <div className='flex flex-col gap-y-5 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold'>
                    Specialized <span className="text-[theme(color.brand.blue)]">Industry Solutions</span>
                </h2>
                <p className='text-lg text-gray-600 mx-auto max-w-4xl'>{heading.info}</p>
            </div>

            <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-8'>
                {industrySolutions.map((card, i) => (
                    <div key={i} className='flex flex-col p-8 rounded-2xl bg-[theme(color.background.gray)] border border-transparent hover:border-sky-100 transition-all hover:shadow-lg'>
                        <div className='w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm mb-6'>
                            <card.icon className='text-[theme(color.brand.blue)]' size={24} />
                        </div>
                        <h3 className='text-xl font-bold text-gray-900 mb-4'>{card.title}</h3>
                        <p className='text-gray-600 text-sm leading-relaxed'>{card.detail}</p>
                    </div>
                ))}
            </div>

            <div className="bg-[theme(color.brand.blue)] rounded-3xl p-10 md:p-16 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Testriq is your <span className="text-sky-200">Global QA Partner</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {whyTestriq.map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                                <item.icon className="w-8 h-8 text-white" />
                            </div>
                            {/* h3, not h4: this block's heading above is an h2, so an
                                h4 skipped a level (axe heading-order). Styling is
                                unchanged — the size comes from the explicit classes. */}
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-sky-50 text-sm">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeChooseTestriq