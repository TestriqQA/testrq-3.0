import { defineType, defineField } from 'sanity'
import { requiredLowercaseSlug } from './lowercaseSlug'

export default defineType({
    name: 'jobPosting',
    title: 'Job Posting',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Job Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: requiredLowercaseSlug,
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'e.g. "Remote", "On-site (Mira Road, Mumbai)", "Hybrid (Mumbai)"',
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'Job Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Full-time', value: 'Full-time' },
                    { title: 'Part-time', value: 'Part-time' },
                    { title: 'Internship', value: 'Internship' },
                    { title: 'Contract', value: 'Contract' },
                    { title: '6 Months', value: '6 Months' },
                ],
                layout: 'dropdown',
            },
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: 'experience',
            title: 'Experience Required',
            type: 'string',
            description: 'e.g. "2-3 Years", "5+ Years", "Fresher"',
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Job Description',
            type: 'blockContent',
            description: 'Full job description using rich text editor',
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of required skills/technologies',
            validation: (Rule: any) => Rule.required().min(1),
        }),
        defineField({
            name: 'badges',
            title: 'Badges',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g. "urgent", "new", "hot"',
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string',
            options: {
                list: [
                    { title: 'Bug (QA/Testing)', value: 'bug' },
                    { title: 'Code (Development)', value: 'code' },
                ],
                layout: 'radio',
            },
            initialValue: 'bug',
        }),
        defineField({
            name: 'color',
            title: 'Gradient Color',
            type: 'string',
            description: 'Automatically generated gradient color',
            hidden: true,
            initialValue: () => {
                const colors = [
                    'from-[#3B82F6] to-[#2563EB]', // Blue
                    'from-[#10B981] to-[#059669]', // Green
                    'from-[#8B5CF6] to-[#7C3AED]', // Purple
                    'from-[#F59E0B] to-[#D97706]', // Yellow/Amber
                    'from-[#EF4444] to-[#DC2626]', // Red
                    'from-[#EC4899] to-[#DB2777]', // Pink
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }
        }),
        defineField({
            name: 'salary',
            title: 'Salary',
            type: 'string',
            description: 'e.g. "Competitive", "8-12 LPA"',
        }),
        defineField({
            name: 'department',
            title: 'Department',
            type: 'string',
            description: 'Optional department for future filtering',
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            description: 'Set to false to hide this job without deleting it',
            initialValue: true,
        }),
    ],
    orderings: [
        {
            title: 'Latest',
            name: 'latest',
            by: [
                { field: '_createdAt', direction: 'desc' },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'location',
            isActive: 'isActive',
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        prepare({ title, subtitle, isActive }: any) {
            return {
                title: `${isActive === false ? '🚫 ' : ''}${title}`,
                subtitle: subtitle,
            }
        },
    },
})
