// Sticky blog sub-navigation (Blog Home · search · top categories · More).
// Server Component: it loads the categories here so the adapter (and its large
// content-snapshot import) never reaches the browser bundle, then hands a
// slimmed-down list to the client bar. sanityGetCategories() is snapshot-first
// and otherwise behind unstable_cache, so rendering this on every blog page
// adds no Sanity calls.
import BlogCategoryNavBar, { type NavCategory } from "@/components/sections/BlogCategoryNavBar";
import { sanityGetCategories } from "@/lib/sanity-data-adapter";

export default async function BlogCategoryNav() {
  let categories: NavCategory[] = [];
  try {
    const all = await sanityGetCategories();
    categories = all
      .filter((c) => c.postCount > 0)
      .sort((a, b) => b.postCount - a.postCount || a.name.localeCompare(b.name))
      .map((c) => ({ id: c.id, name: c.name, postCount: c.postCount }));
  } catch (error) {
    console.error("Error fetching categories for blog nav:", error);
  }

  return <BlogCategoryNavBar categories={categories} />;
}
