// D-20: slugs must be lowercase (Studio only; API writes are not checked).

import type { SlugRule, SlugValue } from 'sanity'

export function lowercaseSlugCheck(value: SlugValue | undefined): true | string {
    const slug = value?.current
    if (!slug || slug === slug.toLowerCase()) return true
    return `Use lowercase letters only: "${slug.toLowerCase()}". Capital letters create a second address for the same page.`
}

export const requiredLowercaseSlug = (Rule: SlugRule) =>
    Rule.required().custom(lowercaseSlugCheck)
