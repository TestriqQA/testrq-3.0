"use client";

import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaArrowRight, FaSort } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Category, Post } from "@/lib/sanity-data-adapter";


interface CategoryPostsGridProps {
  category: Category;
  posts: Post[]; // Add posts prop
}

const truncateText = (text: string, maxLength: number): string => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

const CategoryPostsGrid: React.FC<CategoryPostsGridProps> = ({ category, posts }) => {
  const [sortBy, setSortBy] = useState("latest");
  const [filterBy, setFilterBy] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const sortOptions = [
    { value: "latest", label: "Latest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "popular", label: "Most Popular" },
    { value: "trending", label: "Trending" }
  ];


  // Filter and sort posts
  let filteredPosts = posts;

  if (filterBy !== "all") {
    filteredPosts = posts.filter(post => {
      switch (filterBy) {
        case "featured":
          return post.featured;
        case "trending":
          return post.trending;
        default:
          // Assuming 'difficulty' is a property in your Post interface if you want to filter by it
          // If not, you might need to adapt your WordPress data to include this or remove this filter option
          return false; // Or handle based on your actual Post structure
      }
    });
  }

  // Sort posts
  filteredPosts.sort((a, b) => {
    switch (sortBy) {
      case "popular":
        // Assuming 'views' is a string like '12.5K', convert to number for comparison
        const viewsA = parseFloat(a.views.replace("K", "")) * (a.views.includes("K") ? 1000 : 1);
        const viewsB = parseFloat(b.views.replace("K", "")) * (b.views.includes("K") ? 1000 : 1);
        return viewsB - viewsA;
      case "trending":
        return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      default: // latest
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );



  return (
    <div>
      {/* Header with Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {category.name} Articles ({filteredPosts.length})
          </h2>
          <p className="text-gray-600">
            Discover expert insights and tutorials on {category.name.toLowerCase()}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {/* Filter Dropdown */}


          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FaSort className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/3 relative">
                <Image
                  title={post.title}
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className={`px-3 py-1 bg-gradient-to-r ${category.color} text-white text-sm font-semibold rounded-full`}>
                    {category.name}
                  </span>
                  {post.featured && (
                    <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  )}
                  {post.trending && (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      TRENDING
                    </span>
                  )}
                </div>

              </div>

              {/* Content */}
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[theme(color.brand.blue)] transition-colors line-clamp-2">
                  <Link href={`/blog/post/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {truncateText(post.excerpt, 160)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Image
                        title={post.author}
                        src={post.authorImage}
                        alt={post.author}
                        width={20}
                        height={20}
                        className="w-5 h-5 rounded-full"
                      />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/post/${post.slug}`}
                    className="flex items-center gap-2 mt-3 md:mt-0 text-[theme(color.brand.blue)] hover:text-blue-600 font-semibold text-sm transition-colors"
                    aria-label={`Learn more about ${post.title}`}
                  >
                    Read More
                    <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${currentPage === index + 1
                  ? "bg-[theme(color.brand.blue)] text-white"
                  : "text-gray-600 hover:bg-gray-50"
                  } cursor-pointer`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📝</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your filters or check back later for new content.
          </p>
          <button
            onClick={() => {
              setFilterBy("all");
              setSortBy("latest");
            }}
            className="px-6 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPostsGrid;

