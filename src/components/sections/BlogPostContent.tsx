import React from "react";
import Image from "next/image";
import { FaFont } from "react-icons/fa";
import { slugify } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { Post } from "@/lib/sanity-data-adapter";
import { sanityImage } from "@/lib/sanity-image";
import ContactCTA from "@/components/ui/ContactCTA";
import Link from "next/link";
import ShareArticle from "@/components/ui/ShareArticle";
import ShareArticleBottom from "@/components/ui/ShareArticleBottom";

interface BlogPostContentProps {
  post: Post;
}

// Helper to extract text from block
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getBlockText = (block: any) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  block.children?.map((child: any) => child.text).join('') || '';

// True when a mark's rendered children contain at least one non-whitespace
// character. PortableText hands mark serializers React nodes rather than the
// raw text, so this walks them; nested marks (a link inside a <strong>, say)
// keep their text, which is why it recurses instead of only checking strings.
const hasRenderableText = (nodes: React.ReactNode): boolean =>
  React.Children.toArray(nodes).some((child) => {
    if (typeof child === "string") return child.trim().length > 0;
    if (typeof child === "number") return true;
    if (React.isValidElement(child)) {
      const { children } = child.props as { children?: React.ReactNode };
      return hasRenderableText(children);
    }
    return false;
  });

// Helper to extract dimensions from Sanity asset ref
const getImageDimensions = (ref: string) => {
  if (!ref) return { width: 1200, height: 800, aspectRatio: 1.5 };
  // Pattern: image-id-widthxheight-format
  const pattern = /^image-([a-f\d]+)-(\d+){1}x(\d+){1}-(\w+)$/;
  const match = ref.match(pattern);
  if (!match) return { width: 1200, height: 800, aspectRatio: 1.5 };
  const width = parseInt(match[2], 10);
  const height = parseInt(match[3], 10);
  return { width, height, aspectRatio: width / height };
};

// Helper to check if a block is a "Contact Us" CTA
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isContactBlock = (block: any) => {
  if (block?._type !== 'block' || !block?.markDefs?.length) return false;

  // Check if any markDef is a contact link
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contactDef = block.markDefs.find((def: any) =>
    def._type === 'link' && (def.href?.includes('/contact') || def.href?.includes('contact-us'))
  );

  if (!contactDef) return false;

  // Check if the block text is short enough to be a button (e.g. "Contact Us", "Get in Touch")
  // and not a full paragraph
  const text = getBlockText(block);
  return text.length < 60;
};

const components = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      const { width, height } = getImageDimensions(value.asset._ref);
      return (
        <figure className="relative w-full my-10 flex flex-col items-center">
          <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-100/50 bg-slate-50 w-full max-w-4xl max-h-[70vh] flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:border-slate-200/80">
            <Image
              src={sanityImage(value, { width: 1200, quality: 90 })}
              alt={value.alt || "Blog image"}
              title={value.title || value.alt || "Blog image"}
              width={width}
              height={height}
              className="w-full h-auto max-h-[70vh] object-contain rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-4 px-4 py-2 text-center text-sm italic text-slate-500 border-l-2 border-blue-500/30 bg-slate-50/50 rounded-r-lg max-w-2xl">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    customTable: ({ value }: { value: any }) => {
      if (!value?.rows?.length) return null;
      return (
        <div className="overflow-x-auto my-8">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {value.rows.map((row: any, rowIndex: number) => (
                <tr key={rowIndex} className={rowIndex === 0 ? "bg-gray-50 font-semibold" : ""}>
                  {row.cells.map((cell: string, cellIndex: number) => (
                    <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r last:border-r-0 border-gray-200">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table: ({ value }: { value: any }) => {
      if (!value?.rows?.length) return null;
      return (
        <div className="overflow-x-auto my-8">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {value.rows.map((row: any, rowIndex: number) => (
                <tr key={row._key || rowIndex} className={rowIndex === 0 ? "bg-gray-50 font-semibold" : ""}>
                  {row.cells.map((cell: string, cellIndex: number) => (
                    <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r last:border-r-0 border-gray-200">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
  block: {
    // Semrush audit (05 Oct 2026) flagged issue 104 "Multiple h1 tags" on
    // exactly 37 pages. Cause: 37 published posts carry body blocks with
    // style "h1" (GROQ: count(*[_type=="post" && count(body[style=="h1"])>0])
    // === 37), left over from the content import — blockContent.ts has never
    // offered H1 in its style list, so the editor cannot produce one. With no
    // h1 override here, PortableText's default serializer emitted a real <h1>
    // on top of the post title's h1.
    //
    // Demoted to <h2> rather than patching the 37 documents: the schema's own
    // style list establishes that body headings start at H2, so rendering is
    // where the intent belongs, and this also absorbs any future import. The
    // block data keeps style "h1", so anything deriving a TOC from body styles
    // is unaffected. Styling matches the h2 override so the visual hierarchy
    // is unchanged for readers.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h1: ({ children, value }: any) => {
      const text = getBlockText(value);
      const slug = slugify(text);
      return <h2 id={slug} className="text-3xl font-bold mt-12 mb-4 scroll-mt-24">{children}</h2>;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ children, value }: any) => {
      const text = getBlockText(value);
      const slug = slugify(text);
      return <h2 id={slug} className="text-3xl font-bold mt-12 mb-4 scroll-mt-24">{children}</h2>;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ children, value }: any) => {
      const text = getBlockText(value);
      const slug = slugify(text);
      return <h3 id={slug} className="text-2xl font-bold mt-8 mb-4 scroll-mt-24">{children}</h3>;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h4: ({ children, value }: any) => {
      const text = getBlockText(value);
      const slug = slugify(text);
      return <h4 id={slug} className="text-xl font-bold mt-6 mb-3 scroll-mt-24">{children}</h4>;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    normal: ({ children, value }: any) => {
      // Check if this block matches our criteria for a manual CTA button
      if (isContactBlock(value)) {
        // Find the link href from markDefs
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const linkDef = value.markDefs.find((d: any) => d._type === 'link');
        const href = linkDef?.href || '/contact-us';
        const text = getBlockText(value);

        // Render as a sleek button
        return (
          <div className="my-10 flex justify-center">
            <Link
              href={href}
              className="group relative inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>{text}</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        );
      }
      return <p className="mb-6 leading-relaxed">{children}</p>;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: ({ children }: any) => (
      <blockquote className="relative p-6 my-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 shadow-sm">
        <div className="absolute -top-3 -left-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl shadow-md">
          "
        </div>
        <div className="relative z-10 text-lg font-medium text-slate-700 italic leading-relaxed">
          {children}
        </div>
      </blockquote>
    ),
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  list: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bullet: ({ children }: any) => <ul className="space-y-3 my-6 pl-2">{children}</ul>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    number: ({ children }: any) => <ol className="space-y-3 my-6 pl-2">{children}</ol>,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  listItem: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-3 text-gray-700">
        <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
        <span className="flex-1 leading-relaxed">{children}</span>
      </li>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    number: ({ children, index }: any) => (
      <li className="flex items-start gap-3 text-gray-700">
        <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex-shrink-0 mt-0.5">
          {index + 1}
        </span>
        <span className="flex-1 leading-relaxed">{children}</span>
      </li>
    ),
  },
  marks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    link: ({ children, value }: any) => {
      const href = value?.href || "#";
      const isExternal = !href.startsWith("/") && !href.startsWith("https://www.testriq.com");
      // Semrush audit (05 Oct 2026) issue 216 "Links with no anchor text".
      // Crawling all 1434 sitemap URLs found 10 anchors with no text, no
      // aria-label and no titled image — every one of them a link mark in a
      // post body (e.g. /blog/post/5g-mobile-app-testing-strategies... ->
      // /contact-us), where the annotation got applied to a span that ended up
      // empty. An anchor with nothing inside is invisible to readers while
      // still being a crawlable link with no signal, so render the (empty)
      // content unwrapped rather than emit the anchor. Guarding here instead
      // of patching 10 documents also covers the next one an editor creates.
      if (!hasRenderableText(children)) return <>{children}</>;
      return (
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-blue-600 font-medium hover:text-blue-700 hover:underline decoration-blue-500/30 underline-offset-4 transition-colors"
        >
          {children}
        </Link>
      );
    },
  },
};

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  // Check manual CTA at end
  const hasManualCTAAtEnd = (() => {
    if (!Array.isArray(post.content) || post.content.length === 0) return false;
    for (let i = post.content.length - 1; i >= Math.max(0, post.content.length - 3); i--) {
      if (isContactBlock(post.content[i])) {
        return true;
      }
    }
    return false;
  })();

  return (
    <div className="space-y-8 mb-16">
      {/* Social Icons Header - Redesigned Sharing Section */}
      <ShareArticle title={post.title} />

      <div className="prose prose-lg max-w-none text-gray-800 text-base">
        {typeof post.content === 'string' ? (
          <article className="relative rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 p-8 md:p-12 mb-16 border border-slate-100">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        ) : (
          <article className="relative rounded-3xl overflow-hidden bg-white shadow-2xl shadow-slate-200/50 p-6 sm:p-8 md:p-12 lg:p-14 mb-16 transition-all duration-500 hover:shadow-3xl border border-slate-100">
            <div className="prose prose-lg lg:prose-xl max-w-none text-slate-800 prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-headings:scroll-mt-32 prose-blockquote:border-blue-500">
              <PortableText value={post.content} components={components} />
            </div>
          </article>
        )}

        {/* Automatic Contact CTA */}
        {!hasManualCTAAtEnd && (
          <div className="not-prose mt-12">
            <ContactCTA />
          </div>
        )}
      </div>

      {/* Author Bio */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
        <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="flex-shrink-0 relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full opacity-30 blur-sm" />
              <Image
                title={post.author}
                src={post.authorImage}
                alt={post.author}
                width={96}
                height={96}
                className="relative w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="relative">
                <div className="absolute -top-4 left-0 right-0 flex items-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-300/60 to-transparent" />
                </div>

                <div className="relative flex items-center gap-4">
                  <div className="flex flex-col items-center gap-[5px]">
                    <div className="w-px h-5 bg-gradient-to-b from-transparent to-stone-300" />
                    <div className="w-2 h-2 rounded-full border-2 border-orange-400 bg-white shadow-[0_0_6px_rgba(251,146,60,0.35)]" />
                    <div className="w-px h-5 bg-gradient-to-t from-transparent to-stone-300" />
                  </div>

                  <div className="flex flex-col gap-[2px]">
                    <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-stone-400">
                      Written by
                    </span>
                    <h4 className="text-[19px] font-semibold text-stone-800 tracking-[-0.02em]">
                      {post.author}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="mt-[18px] mb-[14px] flex items-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-stone-300 to-transparent" />
                <div className="w-1 h-1 rounded-full bg-stone-300" />
                <div className="w-5 h-px bg-gradient-to-r from-stone-200 to-transparent" />
              </div>

              <p className="text-stone-500 text-[13px] leading-[1.7] max-w-[380px]">
                {post.authorBio}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Share Bottom */}
      <ShareArticleBottom title={post.title} />

      {/* Tags Cloud */}
      {
        post.tagsData && post.tagsData.length > 0 && (
          <div className="my-8 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <FaFont className="text-gray-400 w-4 h-4" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Topics
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tagsData.map((tag: { name: string; slug: string }) => (
                <a
                  key={tag.slug}
                  href={`/blog/tag/${encodeURIComponent(tag.slug)}`}
                  className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors border border-gray-100"
                >
                  #{tag.name}
                </a>
              ))}
            </div>
          </div>
        )
      }

    </div >

  );
};

export default BlogPostContent;
