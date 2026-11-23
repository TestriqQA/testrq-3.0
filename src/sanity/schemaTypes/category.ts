import { defineField, defineType } from 'sanity'
import { requiredLowercaseSlug } from './lowercaseSlug'

export default defineType({
    name: 'category',
    title: 'Category',
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
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'colorTheme',
            title: 'Color Theme',
            type: 'string',
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string',
        }),
        // F-60: shared SEO field group — gives editors per-category meta
        // controls (title / description / keywords / canonical / noindex)
        // for the /blog/category/[slug] route. Falls back to category name +
        // auto-description when fields are blank.
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seoFields',
        }),
    ],
})
