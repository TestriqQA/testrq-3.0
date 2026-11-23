import { defineField, defineType } from 'sanity'
import { requiredLowercaseSlug } from './lowercaseSlug'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    __experimental_search: [
        { weight: 10, path: 'title' },
        { weight: 2, path: 'excerpt' },
        { weight: 1, path: 'slug.current' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: requiredLowercaseSlug,
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
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
                {
                    name: 'title',
                    type: 'string',
                    title: 'Image Title (Tooltip)',
                    description: 'Text that appears when users hover over the image.',
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Image Caption',
                    description: 'Visible text displayed below the image.',
                }
            ]
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'bodyHtml',
            title: 'Body HTML (Legacy)',
            type: 'text',
            description: 'Raw HTML content migrated from outdated sources. If present, this overrides the Body field.',
        }),
        // F-60.1 — migrated to shared `seoFields` shape (was an inline object
        // with metaTitle/metaDescription/metaKeywords-string). Existing 338
        // posts retain their old shape in the dataset until the migration
        // script (src/scripts/migrate-post-seo-to-seoFields.ts) runs. The
        // adapter (src/lib/sanity-data-adapter.ts) reads BOTH shapes via
        // fallback during the transition window so nothing breaks if the
        // schema deploys before the migration script runs.
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seoFields',
        }),
    ],

    orderings: [
        {
            title: 'Published Date, Newest',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }]
        },
        {
            title: 'Title, A-Z',
            name: 'titleAsc',
            by: [{ field: 'title', direction: 'asc' }]
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        prepare(selection: any) {
            const { author } = selection
            return { ...selection, subtitle: author ? `by ${author}` : undefined }
        },
    },
})
