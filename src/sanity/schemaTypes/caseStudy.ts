import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'client',
            title: 'Client',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'clientUrl',
            title: 'Client Website URL',
            type: 'url',
            description:
                "Optional. The client's own website, e.g. https://www.cleverence.com/. When set, the client name in the hero links out to it (new tab). Leave empty to render the name as plain text.",
        }),
        defineField({
            name: 'industry',
            title: 'Industry',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image Path',
            type: 'string',
            description: 'Path to image in /public folder, e.g. /Canva_Logo.png',
        }),

        // Optional gallery shown as a row of thumbnails under the main image
        // on /case-studies. Hovering one previews it in the main thumbnail.
        //
        // `type: 'image'` deliberately, NOT a string path like the `image`
        // field above — editors upload the file here and Sanity hosts it on
        // cdn.sanity.io (already allowed in next.config.ts remotePatterns).
        // Nobody has to drop a file into /public and type the path.
        //
        // Leave it empty and the row does not render at all.
        defineField({
            name: 'gallery',
            title: 'Gallery Images (optional)',
            type: 'array',
            description:
                'Up to 5 images, 5 MB total. Shown in a row beneath the main thumbnail on the Case Studies page; hovering one previews it in the thumbnail. Leave empty to show nothing.',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alt text',
                            description: 'Describes the image for screen readers and search engines.',
                        },
                    ],
                },
            ],
            validation: (Rule) =>
                Rule.max(5).custom(async (gallery, context) => {
                    // Count is handled by Rule.max above. This checks the TOTAL
                    // byte size, which Sanity has no built-in rule for: the
                    // asset documents have to be read back to sum their sizes.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const items = (gallery as any[]) || []
                    if (items.length === 0) return true

                    const ids = items
                        .map((item) => item?.asset?._ref)
                        .filter((ref): ref is string => typeof ref === 'string')
                    if (ids.length === 0) return true

                    try {
                        const client = context.getClient({ apiVersion: '2024-01-01' })
                        const assets: { size?: number }[] = await client.fetch(
                            '*[_id in $ids]{ size }',
                            { ids }
                        )
                        const total = assets.reduce((sum, a) => sum + (a?.size || 0), 0)
                        const LIMIT = 5 * 1024 * 1024
                        if (total > LIMIT) {
                            const mb = (total / 1024 / 1024).toFixed(1)
                            return `Gallery images total ${mb} MB. The limit is 5 MB — remove or replace an image.`
                        }
                    } catch {
                        // Never block publishing because the size lookup failed
                        // (offline Studio, transient API error). The count rule
                        // still applies.
                        return true
                    }
                    return true
                }),
        }),

        // --- SEO ---
        // F-60.1 — migrated to shared `seoFields` shape. Previously named
        // `seoMetadata` and embedded openGraph/twitter as nested objects;
        // now the base fields (title/description/keywords/canonicalUrl) live
        // under `seo: seoFields` and `openGraph` + `twitter` are top-level
        // siblings on caseStudy (since they are caseStudy-specific richer
        // features beyond the generic seoFields shape used by post/category/
        // tag). Existing case-study documents retain their old shape under
        // `seoMetadata` until the migration script
        // (src/scripts/migrate-casestudy-seo-to-seoFields.ts) runs. The
        // adapter reads BOTH shapes via fallback during the transition.
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seoFields',
        }),
        defineField({
            name: 'openGraph',
            title: 'Open Graph',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'OG Title', type: 'string' }),
                defineField({ name: 'description', title: 'OG Description', type: 'text' }),
                defineField({ name: 'imageUrl', title: 'OG Image URL', type: 'string' }),
                defineField({ name: 'imageAlt', title: 'OG Image Alt', type: 'string' }),
            ],
        }),
        defineField({
            name: 'twitter',
            title: 'Twitter',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Twitter Title', type: 'string' }),
                defineField({ name: 'description', title: 'Twitter Description', type: 'text' }),
                defineField({ name: 'imageUrl', title: 'Twitter Image URL', type: 'string' }),
            ],
        }),

        // --- Overview ---
        defineField({
            name: 'overview',
            title: 'Overview',
            type: 'object',
            fields: [
                defineField({ name: 'clientBackground', title: 'Client Background', type: 'text' }),
                defineField({ name: 'projectScope', title: 'Project Scope', type: 'text' }),
                defineField({ name: 'teamSize', title: 'Team Size', type: 'string' }),
                defineField({ name: 'timeline', title: 'Timeline', type: 'string' }),
            ],
        }),

        // --- Challenge ---
        defineField({
            name: 'challenge',
            title: 'Challenge',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text' }),
                defineField({
                    name: 'keyIssues',
                    title: 'Key Issues',
                    type: 'array',
                    of: [{ type: 'string' }],
                }),
                defineField({ name: 'businessImpact', title: 'Business Impact', type: 'text' }),
            ],
        }),

        // --- Solution ---
        defineField({
            name: 'solution',
            title: 'Solution',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text' }),
                defineField({
                    name: 'approach',
                    title: 'Approach',
                    type: 'array',
                    of: [{ type: 'string' }],
                }),
                defineField({ name: 'methodology', title: 'Methodology', type: 'text' }),
                defineField({
                    name: 'keyStrategies',
                    title: 'Key Strategies',
                    type: 'array',
                    of: [{ type: 'string' }],
                }),
            ],
        }),

        // --- Results ---
        defineField({
            name: 'results',
            title: 'Results',
            type: 'object',
            fields: [
                defineField({ name: 'bugReduction', title: 'Bug Reduction', type: 'string' }),
                defineField({ name: 'performanceImprovement', title: 'Performance Improvement', type: 'string' }),
                defineField({ name: 'roi', title: 'ROI', type: 'string' }),
                defineField({
                    name: 'additionalMetrics',
                    title: 'Additional Metrics',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({ name: 'label', title: 'Label', type: 'string' }),
                                defineField({ name: 'value', title: 'Value', type: 'string' }),
                            ],
                        },
                    ],
                }),
            ],
        }),

        // --- Technologies ---
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Name', type: 'string' }),
                        defineField({ name: 'link', title: 'Link', type: 'string' }),
                    ],
                },
            ],
        }),

        // --- Testimonial ---
        defineField({
            name: 'testimonial',
            title: 'Testimonial',
            type: 'object',
            fields: [
                defineField({ name: 'quote', title: 'Quote', type: 'text' }),
                defineField({ name: 'author', title: 'Author', type: 'string' }),
                defineField({ name: 'role', title: 'Role', type: 'string' }),
                defineField({ name: 'company', title: 'Company', type: 'string' }),
                defineField({ name: 'rating', title: 'Rating', type: 'number', validation: (Rule) => Rule.min(1).max(5) }),
            ],
        }),

        // --- Timeline ---
        defineField({
            name: 'timeline',
            title: 'Timeline',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'phase', title: 'Phase', type: 'string' }),
                        defineField({ name: 'duration', title: 'Duration', type: 'string' }),
                        defineField({
                            name: 'activities',
                            title: 'Activities',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),
                    ],
                },
            ],
        }),

        // --- Key Takeaways ---
        defineField({
            name: 'keyTakeaways',
            title: 'Key Takeaways',
            type: 'array',
            of: [{ type: 'string' }],
        }),

        // --- Next Steps ---
        defineField({
            name: 'nextSteps',
            title: 'Next Steps',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'client',
        },
    },
})
