import React from 'react'
import { TbWorld } from "react-icons/tb";
import { IoServerOutline } from "react-icons/io5";
import { FaMicrochip } from "react-icons/fa6";
import { LuSmartphone } from "react-icons/lu";
import { GoLock } from "react-icons/go";
import Link from 'next/link';


const HomeComprehensiveSoftwareTesting = () => {

    const heading = {
        title: 'The Global Paradigm Shift: Solving the 5 Biggest Challenges in QA (2025-2026)',
        info: (
            <>
                The software landscape has evolved. We designed our <Link title='Managed QA Services' href="/automation-testing-services" className="text-[theme(color.brand.blue)] hover:underline">Managed QA Services</Link> to eliminate the five biggest obstacles currently blocking global digital progress.
            </>
        )
    };

    const cardData = [
        {
            icon: TbWorld,
            title: 'Bridging the Skilled Workforce Shortage',
            detail: <>Talent gaps in <Link href="/ai-application-testing" className="text-[theme(color.brand.blue)] hover:underline">AI</Link> and <Link href="/security-testing" className="text-[theme(color.brand.blue)] hover:underline">cyber-security</Link> often lead to defect leakage. Testriq offers <Link href="/qa-outsourcing-services" className="text-[theme(color.brand.blue)] hover:underline">QA team augmentation</Link> with experts in ISO/IEC/IEEE 29119-2 processes to ensure secure, on-time releases.</>
        },
        {
            icon: IoServerOutline,
            title: 'Stabilizing Unstable Test Environments',
            detail: '"Flaky" environments derail CI/CD pipelines. Our testing model uses cloud monitoring and containerized environments to prevent server crashes and support high-speed Agile teams.'
        },
        {
            icon: FaMicrochip,
            title: 'Advanced Test Data Management (TDM)',
            detail: 'Privacy mandates like GDPR make production data usage impossible. We utilize Synthetic Test Data Generation and data masking for compliant, realistic datasets aligned with ISO 29119-3.'
        },
        {
            icon: LuSmartphone,
            title: 'Navigating Last-Minute Requirement Changes',
            detail: 'In the startup and B2B SaaS world, requirements shift overnight. Our Risk-Based Testing focuses on the most important features first, ensuring thorough system and user testing on tight schedules.'
        },
        {
            icon: GoLock,
            title: 'Combatting Evolving Security & Compliance Pressures',
            detail: <>Security is a top priority. Testriq provides advanced pen-testing for <Link href="/api-testing" className="text-[theme(color.brand.blue)] hover:underline">APIs</Link> and AI agents, protecting your product from modern threats like prompt injection and data breaches.</>
        }
    ];

    return (
        <section className='flex flex-col w-full bg-[theme(color.background.gray)] mx-auto md:px-8 px-8 xl:px-24 py-16 gap-y-12'>
            <div className='flex flex-col gap-y-5 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold max-w-4xl mx-auto'>
                    The Global Paradigm Shift: Solving the <span className="text-[theme(color.brand.blue)]">5 Biggest Challenges</span> in QA (2025-2026)
                </h2>
                <p className='text-lg text-gray-600 mx-auto max-w-4xl'>{heading.info}</p>
            </div>

            <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-8'>
                {
                    cardData.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div key={index} className='flex flex-col ring-sky-100 ring-1 bg-white rounded-xl p-8 gap-y-4 transition duration-300 transform hover:shadow-xl hover:-translate-y-2 border-b-4 border-transparent hover:border-[theme(color.brand.blue)]'>
                                <div className='w-12 h-12 flex items-center justify-center bg-sky-50 rounded-lg'>
                                    <Icon className='text-[theme(color.brand.blue)]' size={28} />
                                </div>
                                <h3 className='text-xl font-bold text-gray-900'>{card.title}</h3>
                                <p className='text-gray-600 text-sm leading-relaxed'>{card.detail}</p>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default HomeComprehensiveSoftwareTesting