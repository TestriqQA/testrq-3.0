"use client";

import React, { useMemo, useState } from "react";
import { FaBell, FaArrowRight, FaTags, FaSpinner } from "react-icons/fa";
import Link from "next/link";
// `import type` on purpose, and load-bearing. This is a "use client"
// component, so a VALUE import from the adapter pulls that module — and the
// `import contentSnapshotRaw from './sanity-content-snapshot.json'` inside it —
// into the browser bundle. With the content snapshot populated (20 MB) that
// produced a 11.96 MB client chunk, confirmed by finding post bodies in
// .next/static/chunks. A type-only import is erased at compile time, so the
// adapter stays server-side. The data now arrives as props from the server
// page, which also means these links are in the server-rendered HTML and
// crawlable, rather than appearing after a client fetch.
import type { Category, Tag } from "@/lib/sanity-data-adapter";

interface CategorySidebarProps {
  category: Category;
  /** Every category, fetched by the server page. */
  categories: Category[];
  /** Every tag, fetched by the server page. */
  tags: Tag[];
}

interface RelatedCategory {
  name: string;
  slug: string;
  icon: string;
  color: string;
  postCount: number;
}

interface PopularTag {
  name: string;
  slug: string;
  count: number;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ category, categories, tags }) => {
  // Newsletter state
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [error, setError] = useState("");

  // The same derivation that used to run in a useEffect after fetching. The
  // data arrives as props now, so there is nothing to await and no loading
  // state — which is why the skeleton early-return below is gone.
  const relatedCategories = useMemo<RelatedCategory[]>(
    () =>
      categories
        .filter((cat) => cat.postCount > 0 && cat.id !== category.id)
        .sort((a, b) => b.postCount - a.postCount)
        .slice(0, 4)
        .map((cat) => ({
          name: cat.name,
          slug: cat.id,
          icon: cat.icon,
          color: cat.color,
          postCount: cat.postCount,
        })),
    [categories, category.id],
  );

  const popularTags = useMemo<PopularTag[]>(
    () =>
      // slice() before sort(): sort mutates in place, and `tags` is a prop the
      // server page may hand to more than one child. The previous code sorted a
      // freshly fetched array, so mutation was harmless there; here it is not.
      tags
        .slice()
        .sort((a, b) => b.count - a.count)
        .slice(0, 20)
        .map((tag) => ({ name: tag.name, slug: tag.slug, count: tag.count })),
    [tags],
  );

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    setNewsletterLoading(true);
    setError("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribed(true);
        setEmail("");

        setTimeout(() => {
          setSubscribed(false);
        }, 5000);
      } else {
        setError(data.error || "Subscription failed");
      }
    } catch (err) {
      console.error("Subscription error:", err);
      setError("Network error. Please try again.");
    } finally {
      setNewsletterLoading(false);
    }
  };


  return (
    <aside className="space-y-8">

      {/* Related Categories */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Related Categories</h3>
        <div className="space-y-3">
          {relatedCategories.length > 0 ? (
            relatedCategories.map((relatedCategory, index) => (
              <Link
                key={index}
                href={`/blog/category/${relatedCategory.slug}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${relatedCategory.color} rounded-lg flex items-center justify-center text-white`}>
                  <span className="text-lg">{relatedCategory.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-[theme(color.brand.blue)] transition-colors">
                    {relatedCategory.name}
                  </div>
                  <div className="text-sm text-gray-500">{relatedCategory.postCount} articles</div>
                </div>
                <FaArrowRight className="w-3 h-3 text-gray-400 group-hover:text-[theme(color.brand.blue)] transition-colors" />
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No related categories found.</p>
          )}
        </div>
        <Link
          href="/blog/categories"
          className="block mt-4 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          View All Categories
        </Link>
      </div>



      {/* Popular Tags */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FaTags className="w-5 h-5 text-gray-500" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.length > 0 ? (
            popularTags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog/tag/${tag.slug}`}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[theme(color.brand.blue)] hover:text-white transition-colors"
              >
                #{tag.name}
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No popular tags available.</p>
          )}
        </div>
      </div>

    </aside>
  );
};

export default CategorySidebar;

