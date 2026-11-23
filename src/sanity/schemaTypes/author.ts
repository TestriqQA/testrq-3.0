import { defineField, defineType } from 'sanity'
import { requiredLowercaseSlug } from './lowercaseSlug'

export default defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: requiredLowercaseSlug,
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Descriptive text for SEO and accessibility.',
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    validation: (Rule: any) => Rule.required(),
                },
            ],
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text', // Or array of blocks
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url',
        }),
        defineField({
            name: 'credentials',
            title: 'Credentials',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Certifications, degrees, awards — one per entry (e.g., "ISTQB Certified Tester", "M.S. Computer Science"). Surfaced on /author/[slug] and in BlogPosting Person schema.',
        }),
        defineField({
            name: 'sameAs',
            title: 'Profile URLs (sameAs)',
            type: 'array',
            of: [{ type: 'url' }],
            description: 'Public profile URLs for schema.org Person.sameAs — Twitter/X, GitHub, ORCID, personal site, conference talks, etc. LinkedIn is auto-included from the LinkedIn URL field above.',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
})
