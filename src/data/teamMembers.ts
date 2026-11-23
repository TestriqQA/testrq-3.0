// Team leads shown on /our-team (TeamMembersSection) and listed as Persons in
// ourTeamPageSchema. `linkedin` is omitted when there is no real profile (E-5).

export interface TeamMember {
    name: string;
    role: string;
    department: string;
    linkedin?: string;
    src: string;
}

export const teamMembers: TeamMember[] = [
    {
        name: "Siddharth Desai",
        role: "Automation Architect",
        department: "Testriq QA Lab",
        linkedin: "https://www.linkedin.com/in/siddharth-desai-852996201",
        src: "/siddharth-desai.webp",
    },
    {
        name: "Mandar Salkar",
        role: "Customer Success Manager",
        department: "Testriq QA Lab",
        src: "/Mandar_Salkar.webp",
    },
    {
        name: "Prathamesh Maske",
        role: "IoT and Mobile QA Architect",
        department: "Testriq QA Lab",
        linkedin: "https://www.linkedin.com/in/prathameshmaske/",
        src: "/prathmesh-maske.webp",
    },
    {
        name: "Aakash Yadav",
        role: "QA lead & business strategy manager",
        department: "Testriq QA Lab",
        linkedin: "https://www.linkedin.com/in/aakashyadav9890/",
        src: "/aakash-yadav.webp",
    },
    {
        name: "Neelam Chavan",
        role: "Financial Controller",
        department: "Testriq QA Lab",
        linkedin: "https://www.linkedin.com/in/neelamchavan9892/?original_referer=https%3A%2F%2Ftestriq.com%2F",
        src: "/neelam-chavan.webp",
    },
    {
        name: "Elvita Gomes",
        role: "HR Specialist",
        department: "Testriq QA Lab",
        linkedin: "https://www.linkedin.com/in/elvita07",
        src: "/elvita-gomes.webp",
    },
    {
        name: "Pravin Kodag",
        role: "IT Administrator",
        department: "Testriq QA Lab",
        linkedin: "https://www.linkedin.com/in/pravin-kodag-83a717189/",
        src: "/Pravin Kodag.webp",
    },
    {
        name: "Prakash Mishra",
        role: "Lead Software Engineer",
        department: "Testriq QA Lab",
        linkedin: "https://www.linkedin.com/in/prakashmmishra/",
        src: "/Prakash Mishra.webp",
    },
    {
        name: "Pooja Katkar",
        role: "Test Lead",
        department: "Testriq QA Lab",
        linkedin: "https://www.linkedin.com/in/pooja-katkar-737b3525a/",
        src: "/None.webp",
    },
    {
        name: "Ragini Kumari",
        role: "QA Specialist",
        department: "Testriq QA Lab",
        linkedin: "https://www.linkedin.com/in/raginikumari90/",
        // TODO: replace with her own photo — /None.webp is the shared placeholder.
        src: "/None.webp",
    },
    {
        name: "Sujay Ambelkar",
        role: "Sr. QA Specialist",
        department: "Testriq QA Lab",
        linkedin: "https://www.linkedin.com/in/sujay-ambelkar-ab2770145/",
        src: "/Sujay Ambelkar.webp",
    },
];
