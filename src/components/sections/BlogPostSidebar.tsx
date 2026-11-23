"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaBell,
  FaSpinner,
} from "react-icons/fa";
import Link from "next/link";
import {
  sanityGetPosts as getPosts,
  sanityGetCategories as getCategories,
  sanityGetTags as getTags,
  Post,
  Category
} from "@/lib/sanity-data-adapter";

interface BlogPostSidebarProps {
  post: Post;
}

interface RelatedPost {
  title: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

interface SidebarCategory {
  name: string;
  count: number;
  slug: string;
}

interface SidebarPopularTag {
  name: string;
  slug: string;
  count: number;
}

const BlogPostSidebar: React.FC<BlogPostSidebarProps> = ({ post }) => {
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [popularTags, setPopularTags] = useState<SidebarPopularTag[]>([]);
  const [categories, setCategories] = useState<SidebarCategory[]>([]);
  const [loading, setLoading] = useState(true);

  // Newsletter state
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        setLoading(true);
        // Fetch posts from Sanity
        const allPosts = await getPosts();

        // Filter related posts based on category or tags
        const related = allPosts
          .filter((p: Post) =>
            p.slug !== post.slug && (
              p.category === post.category ||
              p.tags.some((tag: string) => post.tags.includes(tag))
            )
          )
          .slice(0, 3)
          .map((p: Post) => ({
            title: p.title,
            category: p.category,
            readTime: p.readTime,
            image: p.image,
            slug: p.slug
          }));

        setRelatedPosts(related);

        // Fetch tags from Sanity
        const tagsResult = await getTags();
        const sortedTags = (tagsResult as SidebarPopularTag[])
          .sort((a: SidebarPopularTag, b: SidebarPopularTag) => b.count - a.count)
          .slice(0, 20)
          .map((t: SidebarPopularTag) => ({
            name: t.name,
            slug: t.slug,
            count: t.count
          }));

        setPopularTags(sortedTags);

        // Fetch categories from Sanity
        const sanityCategories = await getCategories();
        const adaptedCategories = (sanityCategories as Category[])
          .filter((cat: Category) => cat.postCount > 0)
          .map((cat: Category) => ({
            name: cat.name,
            count: cat.postCount,
            slug: cat.id
          }))
          .slice(0, 15);

        setCategories(adaptedCategories);
      } catch (error) {
        console.error("Error fetching sidebar data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSidebarData();
  }, [post.slug, post.category, post.tags]);

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

  if (loading) {
    return (
      <aside className="space-y-8">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="space-y-3">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="space-y-8">
      {/* Related Posts - Dynamic */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Related Articles
        </h3>
        <div className="space-y-4">
          {relatedPosts.length > 0 ? (
            relatedPosts.map((relatedPost, index) => (
              <Link
                key={index}
                href={`/blog/post/${relatedPost.slug}`}
                className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="relative w-16 h-12 flex-shrink-0">
                  <Image
                    title={relatedPost.title}
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <span className="truncate">{relatedPost.category}</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No related articles found.</p>
          )}
        </div>
        <Link
          href="/blog"
          className="flex items-center justify-center gap-2 mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          <span>View All Articles</span>
          <FaArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Popular Tags - Dynamic */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.length > 0 ? (
            popularTags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog/tag/${encodeURIComponent(tag.slug)}`}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              >
                #{tag.name}
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No tags available.</p>
          )}
        </div>
      </div>

      {/* Categories - Dynamic */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <Link
                key={index}
                href={`/blog/category/${category.slug}`}
                className="flex items-center justify-between py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span className="text-sm">{category.name}</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No categories available.</p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default BlogPostSidebar;
