
import { groq } from 'next-sanity';

// Query for fetching all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  _updatedAt,
  "author": author->{name, slug, image, bio, linkedin},
  "categories": categories[]->{title, slug, colorTheme, icon, description},
  "tags": tags[]->{title, slug},
  seo
}`;

// Query for fetching a single post by slug
// F-52: dereference author.credentials + author.sameAs so BlogPosting.author
// JSON-LD can render the full Person entity (linked to /author/[slug]#person).
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  body,
  publishedAt,
  _updatedAt,
  "author": author->{name, slug, image, bio, linkedin, credentials, sameAs},
  "categories": categories[]->{title, slug, colorTheme, icon, description},
  "tags": tags[]->{title, slug},
  seo
}`;

// Query for fetching all posts slugs (for static paths)
export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;

// Query for fetching categories
export const categoriesQuery = groq`*[_type == "category"] {
  title,
  slug,
  description,
  colorTheme,
  icon,
  "count": count(*[_type == "post" && references(^._id)])
}`;

// Query for fetching single category details
export const categoryBySlugQuery = groq`*[_type == "category" && slug.current == $slug][0] {
  title,
  slug,
  description,
  colorTheme,
  icon,
  "count": count(*[_type == "post" && references(^._id)])
}`;

// Query for fetching posts by category
export const postsByCategoryQuery = groq`*[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  _updatedAt,
  "author": author->{name, slug, image, bio},
  "categories": categories[]->{title, slug, colorTheme, icon, description},
  "tags": tags[]->{title, slug}
}`;

// Query for fetching tags
export const tagsQuery = groq`*[_type == "tag"] {
  title,
  slug,
  "count": count(*[_type == "post" && references(^._id)])
}`;

// Query for fetching posts by tag
export const postsByTagQuery = groq`*[_type == "post" && $tagSlug in tags[]->slug.current] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  _updatedAt,
  "author": author->{name, slug, image, bio},
  "categories": categories[]->{title, slug, colorTheme, icon, description},
  "tags": tags[]->{title, slug}
}`;

// Query for searching posts
export const searchPostsQuery = groq`*[_type == "post" && (
  title match $searchTerm + "*" || 
  excerpt match $searchTerm + "*" ||
  pt::text(body) match $searchTerm + "*"
)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  _updatedAt,
  "author": author->{name, slug, image, bio},
  "categories": categories[]->{title, slug, colorTheme, icon, description},
  "tags": tags[]->{title, slug}
}`;

// =============================================
// Author Queries (F-52)
// =============================================

// Fetch a single author by slug — used by /author/[slug] route.
export const authorBySlugQuery = groq`*[_type == "author" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  image,
  bio,
  linkedin,
  credentials,
  sameAs
}`;

// All author slugs — used by generateStaticParams for /author/[slug].
export const authorSlugsQuery = groq`*[_type == "author" && defined(slug.current)][].slug.current`;

// All posts by author slug — used by /author/[slug] post-grid section.
export const postsByAuthorQuery = groq`*[_type == "post" && author->slug.current == $authorSlug && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  _updatedAt,
  "author": author->{name, slug, image, bio, linkedin},
  "categories": categories[]->{title, slug, colorTheme, icon, description},
  "tags": tags[]->{title, slug}
}`;

// =============================================
// Case Study Queries
// =============================================

// Query for fetching all case studies
export const allCaseStudiesQuery = groq`*[_type == "caseStudy"] | order(_createdAt asc) {
  _id,
  slug,
  title,
  client,
  clientUrl,
  industry,
  duration,
  description,
  image,
  seo,
  openGraph,
  twitter,
  overview,
  challenge,
  solution,
  results,
  technologies,
  testimonial,
  timeline,
  keyTakeaways,
  nextSteps
}`;

// Query for fetching a single case study by slug
export const caseStudyBySlugQuery = groq`*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  slug,
  title,
  client,
  clientUrl,
  industry,
  duration,
  description,
  image,
  seo,
  openGraph,
  twitter,
  overview,
  challenge,
  solution,
  results,
  technologies,
  testimonial,
  timeline,
  keyTakeaways,
  nextSteps
}`;

// Query for fetching all case study slugs (for static params)
export const caseStudySlugsQuery = groq`*[_type == "caseStudy" && defined(slug.current)][].slug.current`;

// Query for fetching related case studies (excluding current slug)
export const relatedCaseStudiesQuery = groq`*[_type == "caseStudy" && slug.current != $slug][0...$limit] {
  _id,
  slug,
  title,
  client,
  industry,
  duration,
  description,
  image,
  results
}`;

// =============================================
// Job Posting Queries
// =============================================

// Query for fetching all active job postings
// _createdAt + _updatedAt are projected so the JobPosting JSON-LD builder
// can populate datePosted + a sensible validThrough (F-40).
export const allJobPostingsQuery = groq`*[_type == "jobPosting" && isActive == true] | order(_createdAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  location,
  type,
  experience,
  description,
  skills,
  badges,
  icon,
  color,
  salary,
  department,
  isActive
}`;

// Query for fetching a single job posting by slug
export const jobPostingBySlugQuery = groq`*[_type == "jobPosting" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  location,
  type,
  experience,
  description,
  skills,
  badges,
  icon,
  color,
  salary,
  department,
  isActive
}`;
