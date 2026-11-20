/**
 * The leaders shown on /our-team, in display order. One source for both the
 * visible cards (TeamLeadershipSection) and the page's Person structured data
 * (ourTeamPageSchema in StructuredData.tsx), so a name, title or LinkedIn link
 * changed here changes in both places.
 *
 * Moved out of TeamLeadershipSection on 20 Nov 2026 for SEO report E-2: the
 * structured data was a hand-typed copy of five of these people and had
 * drifted (it still said "Head of QA and BD" and "Senior Manager - Strategic
 * Growth" after the cards were retitled) and carried no LinkedIn links.
 *
 * `inPageSchema` marks who is listed as a Person in the page's structured
 * data. E-2 kept the same five people as before; E-3 extends the markup to
 * the rest of the team.
 */
export interface TeamLeaderImage {
    src: string;
    alt: string;
    title: string;
    width: number;
    height: number;
}

export interface TeamLeader {
    name: string;
    position: string;
    experience: string;
    specialization: string;
    bio: string;
    /** aria-label for the LinkedIn icon link. */
    label: string;
    achievements: string[];
    linkedin: string;
    image: TeamLeaderImage;
    inPageSchema?: boolean;
}

export const teamLeaders: TeamLeader[] = [
    {
        name: "Prashant Shukla",
        position: "Senior Advisor",
        experience: "20+ Years",
        specialization: "IT Strategy & Leadership",
        bio: "Prashant Shukla, former Managing Director at Udemy (India & South Asia) and National Technology Officer at Microsoft India, has over 20 years of leadership experience in digital transformation, strategy, and innovation. As Senior Advisor at Testriq, he brings his expertise to drive growth, technology innovation, and strategic expansion.",
        label: "Prashant Shukla linkedin",
        achievements: [],
        linkedin: "https://www.linkedin.com/in/shukp/",
        image: { title: "Prashant Shukla", src: "/prashant-shukla.png", alt: "Prashant-shukla", width: 350, height: 250 },
    },
    {
        name: "Sandeep Maske",
        position: "Founder & CEO",
        experience: "20+ Years",
        specialization: "QA Strategy & Leadership",
        bio: "Sandeep Maske, Founder & CEO of TESTRIQ QA LAB & Cinute Digital, drives unparalleled excellence in software testing, empowering diverse industries with QA expertise.",
        label: "Sandeep Maske linkedin",
        achievements: [
            "Founded Testriq in 2010",
            "Scaled company to 50+ employees",
            "ISTQB Advanced Level Certified",
            "Speaker at 20+ industry conferences",
        ],
        linkedin: "https://www.linkedin.com/in/sandeepmaske",
        image: { title: "Sandeep Maske", src: "/sandeep-maske-img.webp", alt: "Sandeep Maske", width: 350, height: 250 },
        inPageSchema: true,
    },
    {
        name: "Santosh Kakade",
        position: "VP Operations",
        experience: "17+ Years",
        specialization: "QA & Digital Solutions",
        bio: "Santosh Kakade, With 17+ years in QA & digital solutions, lead TESTRIQ QA Lab & Cinute Digital, delivering top-tier testing services and upskilling professionals in tech.",
        label: "Santosh Kakade linkedin",
        achievements: [
            "Led 100+ automation projects",
            "Expert in Selenium, Cypress, Playwright",
            "DevOps and CI/CD specialist",
            "Published 15+ technical articles",
        ],
        linkedin: "https://www.linkedin.com/in/santoshkakade/",
        image: { title: "Santosh Kakade", src: "/Santosh_Kakade.webp", alt: "Santosh_Kakade", width: 350, height: 250 },
        inPageSchema: true,
    },
    {
        name: "Goutam Mishra",
        position: "VP of QA and BD",
        experience: "20+ Years",
        specialization: "Software Testing & BD ",
        bio: "Goutam Mishra, With 20+ years in tech, excel in QA, testing, and project management, mentoring QA professionals while ensuring top-tier software quality across platforms.",
        label: "Goutam Mishra linkedin",
        achievements: [
            "Designed QA processes for 200+ projects",
            "ISTQB Expert Level Certified",
            "Reduced bug leakage by 95%",
            "Mentored 30+ junior testers",
        ],
        linkedin: "https://www.linkedin.com/in/goutam-mishra-96194117/",
        image: { title: "Goutam Mishra", src: "/Goutam_Mishra.webp", alt: "Goutam_Mishra", width: 350, height: 250 },
        inPageSchema: true,
    },
    {
        name: "Rohan Maske",
        position: "VP - Marketing",
        experience: "8+ Years",
        specialization: "Expertise in BD and QA testing",
        bio: "A results-driven leader with 8+ years of expertise in BD, QA testing, HR, data analysis, talent acquisition & performance marketing, excelling in strategy, resource optimization, and innovation to drive efficiency.",
        label: "Rohan Maske linkedin",
        achievements: [
            "Designed QA processes for 200+ projects",
            "ISTQB Expert Level Certified",
            "Reduced bug leakage by 95%",
            "Mentored 30+ junior testers",
        ],
        linkedin: "https://www.linkedin.com/in/rohan-maske/",
        image: { title: "Rohan Maske", src: "/Rohan_Maske.png", alt: "Rohan_Maske", width: 350, height: 250 },
        inPageSchema: true,
    },
    {
        name: "Aatish Jadhav",
        position: "VP Strategic Growth",
        experience: "16+ Years",
        specialization: "Strategic Innovation Alignment",
        bio: "Senior Manager at TESTRIQ QA Lab with 16 years of industry experience. Driving strategic growth, aligning projects with innovation & quality, and empowering teams through Agile excellence.",
        label: "Aatish Jadhav linkedin",
        achievements: [
            "Designed QA processes for 200+ projects",
            "ISTQB Expert Level Certified",
            "Reduced bug leakage by 95%",
            "Mentored 30+ junior testers",
        ],
        linkedin: "https://www.linkedin.com/in/aatishjadhav/",
        image: { title: "Aatish Jadhav", src: "/Aatish_Jadhav.webp", alt: "Aatish_Jadhav", width: 350, height: 250 },
        inPageSchema: true,
    },
];

/** Learning & Development leaders (Cinute Digital), shown in their own block. */
export const cdplTeamLeaders: TeamLeader[] = [
    {
        name: "Shoeb Shaikh",
        position: "Head - Learning and Development",
        experience: "14+ Years",
        specialization: "Software Testing and Data Science Expert",
        bio: "Shoeb Shaikh is a seasoned Software Testing and Data Science Expert and a Mentor with over 14 years of experience in the field. Specialist in designing and managing processes, and leading high-performing teams to deliver impactful results.",
        achievements: [
            "Designed & Delivered 50+ QA and Data Science training programs",
            "Trained 1000+ professionals in QA and Data Science",
            "ISTQB Certified Test Manager (Selenium, Pytest, API, DBMS)",
            "Led L&D initiatives in academic and corporate environments",
        ],
        linkedin: "https://www.linkedin.com/in/ishaikhshoeb/",
        label: "Shoeb Shaikh linkedin",
        image: { title: "Shoeb Shaikh", src: "/ShoebShaikh.webp", alt: "ShoebShaikh", width: 350, height: 250 },
    },
    {
        name: "Ashish Shetty",
        position: "Business Intelligence & Data Analytics Specialist | L&D Expert",
        experience: "11+ Years",
        specialization: "Business Intelligence and learning and development professional",
        bio: "Ashish Shetty is a seasoned Business Intelligence and learning and development professional with over 11 years of experience empowering students and professionals to unlock career success through data-driven skills. Specializing in Power BI, Tableau, and Prompt Engineering, Ashish is known for delivering practical, high-impact workshops and training programs across academic and corporate sectors.",
        achievements: [
            "Trained 7,000+ students & professionals in BI, ML, and Analytics",
            "Delivered 50+ workshops and national-level programs",
            "Keynote speaker at leading conferences and UGC events",
            "Designed industry-certified training and faculty development courses",
            "Advanced Data Science & Machine Learning certified",
        ],
        linkedin: "https://www.linkedin.com/in/profashishshetty/",
        label: "Ashish Shetty linkedin",
        image: { title: "Ashish Shetty", src: "/AshishShetty.png", alt: "ShoebShaikh", width: 550, height: 450 },
    },
];

/** "Sandeep Maske" -> "sandeep-maske": the fragment used in each Person url. */
export function teamMemberSlug(name: string): string {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

/** A LinkedIn profile URL without tracking parameters or fragment. */
export function cleanProfileUrl(url: string): string {
    try {
        const u = new URL(url);
        return `${u.origin}${u.pathname}`;
    } catch {
        return url;
    }
}
