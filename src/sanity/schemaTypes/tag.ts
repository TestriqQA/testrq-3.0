import { defineField, defineType } from 'sanity'
import { requiredLowercaseSlug } from './lowercaseSlug'

export default defineType({
    name: 'tag',
    title: 'Tag',
    type: 'document',
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
        // F-60: shared SEO field group — gives editors per-tag meta controls
        // for the /blog/tag/[slug] route. Same pattern as category.
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seoFields',
        }),
    ],
})
