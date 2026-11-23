"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Home, LayoutGrid, Search, ArrowRight } from "lucide-react";
import { getCategoryIcon } from "@/lib/category-icons";

export interface NavCategory {
  id: string;
  name: string;
  postCount: number;
}

interface BlogCategoryNavBarProps {
  /** Categories with posts, already sorted by post count (most first). */
  categories: NavCategory[];
}

// Most categories offered as chips in the bar. Only the ones that fit whole are
// shown (see the chip list below); our names are long ("Performance Testing
// Services"), so at 1440px that is usually two or three.
const CHIP_COUNT = 4;
// How many categories the "More" panel lists before pointing to /blog/categories.
const MENU_COUNT = 20;
// Scroll distance after which the bar slides over the header's nav row
// (same 10px threshold as the cim1.1 blog bar).
const OVERLAY_AFTER_PX = 10;
// Duration of the bar's slide over the header's nav row.
const SLIDE_MS = 300;

// Sticky blog sub-navigation, modelled on the category bar on
// cinuteinfomedia.com/blog but in Testriq's light theme. Sits directly under
// the site header on every blog page.
//
// Deliberately does NOT use useSearchParams(): on /blog that bails the nearest
// Suspense boundary out to client rendering (see the long note in
// BlogPostsGrid.tsx). usePathname() has no such effect.
export default function BlogCategoryNavBar({ categories }: BlogCategoryNavBarProps) {
  const pathname = usePathname() || "";
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  // Position: "overlay mode", adapted from the blog bar on cinuteinfomedia.com
  // (cim1.1, components/blog/BlogNavbar.tsx). The site header itself never
  // moves. At the top of the page the bar sits under the whole header; as soon
  // as the reader scrolls past 10px it slides up over the header's nav row and
  // stops just under the dark contact strip, so the phone numbers / WhatsApp /
  // Talk to Expert CTAs stay visible and only the nav row is covered. Back at
  // the top it slides down again. The trigger is just "scrolled or not", like
  // cim1.1 — no scroll-direction tracking, which made the first attempt jumpy.
  //
  //  - top: header height at rest, contact-strip height in overlay mode. Both
  //    change with screen width (header 85–111px), so they are measured; the
  //    responsive top-[…] classes are the fallback until then.
  //  - minHeight: the nav row's height, so in overlay mode the bar always
  //    covers the nav row completely (our bar is shorter than it on desktop).
  //  - z-index rises above the header (z-60) the moment overlay starts, and
  //    drops back only after the slide down has finished, so the nav row never
  //    pops over the bar mid-animation.
  //  - No overlay while the mobile menu is open (Header marks data-menu-open),
  //    or the bar would cover the menu.
  //
  // It also publishes its bottom edge as --blog-nav-bottom on <html>; the post
  // page's sticky sidebars use it to sit just under the bar in both modes.
  const [topOffset, setTopOffset] = useState<number | null>(null);
  const [navRowHeight, setNavRowHeight] = useState<number | null>(null);
  const [overlay, setOverlay] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = document.querySelector("header");
    const nav = navRef.current;
    if (!header || !nav) return;
    const contact = header.querySelector<HTMLElement>("[data-header-contact]");
    const root = document.documentElement;
    let frame = 0;

    const measure = () => {
      frame = 0;
      const headerH = Math.round(header.getBoundingClientRect().height);
      const contactH = contact ? Math.round(contact.getBoundingClientRect().height) : 0;
      const rowH = Math.max(0, headerH - contactH);
      const menuOpen = header.querySelector('[data-menu-open="true"]') !== null;
      const isOverlay = window.scrollY > OVERLAY_AFTER_PX && !menuOpen;
      const top = isOverlay ? contactH : headerH;
      setOverlay(isOverlay);
      setTopOffset(top);
      setNavRowHeight(rowH);
      root.style.setProperty("--blog-nav-bottom", `${top + Math.max(nav.offsetHeight, rowH)}px`);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    const resize = new ResizeObserver(schedule);
    resize.observe(header);
    resize.observe(nav);
    const menu = new MutationObserver(schedule);
    menu.observe(header, { subtree: true, attributes: true, attributeFilter: ["data-menu-open"] });
    return () => {
      window.removeEventListener("scroll", schedule);
      resize.disconnect();
      menu.disconnect();
      if (frame) cancelAnimationFrame(frame);
      root.style.removeProperty("--blog-nav-bottom");
    };
  }, []);

  // Close the More panel on route change, outside click and Escape.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) router.push(`/blog/search?q=${encodeURIComponent(q)}`);
  };

  const isBlogHome = pathname === "/blog";
  const activeCategory = pathname.startsWith("/blog/category/")
    ? decodeURIComponent(pathname.split("/")[3] || "")
    : null;

  const chips = categories.slice(0, CHIP_COUNT);
  const menuItems = categories.slice(0, MENU_COUNT);

  return (
    <nav
      ref={navRef}
      aria-label="Blog categories"
      style={{
        ...(topOffset !== null ? { top: topOffset } : null),
        ...(navRowHeight !== null ? { minHeight: navRowHeight } : null),
        zIndex: overlay ? 70 : 50,
        // z-index changes instantly when the overlay starts, but waits for the
        // 300ms slide to finish when it ends.
        transition: overlay
          ? `top ${SLIDE_MS}ms ease-out, box-shadow ${SLIDE_MS}ms ease-out`
          : `top ${SLIDE_MS}ms ease-out, box-shadow ${SLIDE_MS}ms ease-out, z-index 0s linear ${SLIDE_MS}ms`,
      }}
      className={`sticky top-[85px] md:top-[105px] lg:top-[111px] xl:top-[107px] z-50 flex items-center bg-white/95 backdrop-blur border-b border-gray-200 ${overlay ? "shadow-md" : "shadow-sm"}`}
    >
      <div
        ref={menuRef}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap md:flex-nowrap items-center gap-2.5 lg:gap-3"
      >
        {/* Blog Home */}
        <Link
          href="/blog"
          aria-current={isBlogHome ? "page" : undefined}
          className="inline-flex items-center gap-2 h-10 px-3 sm:px-4 rounded-lg text-sm font-semibold bg-[theme(color.brand.blue)] text-white hover:bg-sky-800 transition-colors shrink-0"
        >
          <Home className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">Blog Home</span>
          <span className="sr-only sm:hidden">Blog Home</span>
        </Link>

        {/* Search — its own full-width row on phones */}
        <form
          onSubmit={handleSearch}
          role="search"
          className="order-last md:order-none w-full md:w-auto md:flex-1 lg:flex-none lg:w-60 xl:w-72"
        >
          <label htmlFor="blogNav-search" className="sr-only">
            Search blog articles
          </label>
          <div className="flex items-center h-10 bg-gray-50 border border-gray-200 rounded-lg focus-within:border-[theme(color.brand.blue)] focus-within:ring-2 focus-within:ring-sky-100 focus-within:bg-white transition-colors">
            <Search className="w-4 h-4 text-gray-400 ml-3 shrink-0" aria-hidden="true" />
            <input
              id="blogNav-search"
              type="search"
              name="q"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, topics..."
              className="w-full min-w-0 px-2 bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="mr-1 px-3 h-8 rounded-md bg-[theme(color.brand.blue)] text-white text-xs font-semibold hover:bg-sky-800 transition-colors cursor-pointer shrink-0"
            >
              Go
            </button>
          </div>
        </form>

        {/* Top categories as chips (wide screens only) */}
        {/* One chip-high row that wraps, with overflow hidden: a chip that
            doesn't fit whole wraps onto the hidden second line instead of being
            cut mid-word or running under the More button. Pure CSS, so the
            server HTML and the hydrated page match at every width. */}
        <ul className="hidden lg:flex flex-1 flex-wrap items-center gap-x-2 gap-y-4 h-9 min-w-0 overflow-hidden">
          {chips.map((cat) => {
            const Icon = getCategoryIcon(cat.name);
            const active = activeCategory === cat.id;
            return (
              <li key={cat.id} className="shrink-0">
                <Link
                  href={`/blog/category/${cat.id}`}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex items-center gap-1.5 h-9 px-3 rounded-full border text-sm font-medium whitespace-nowrap transition-colors ${active
                    ? "bg-sky-50 border-[theme(color.brand.blue)] text-[theme(color.brand.blue)]"
                    : "bg-white border-gray-200 text-gray-800 hover:border-[theme(color.brand.blue)] hover:text-[theme(color.brand.blue)]"
                    }`}
                >
                  <Icon className="w-3.5 h-3.5 text-[theme(color.brand.blue)]" aria-hidden="true" />
                  {cat.name}
                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {cat.postCount}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* More / Topics menu */}
        <div className="ml-auto shrink-0">
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="blogNav-menu"
            className={`inline-flex items-center gap-1.5 h-10 px-3 rounded-lg border text-sm font-semibold transition-colors cursor-pointer ${menuOpen
              ? "border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] bg-sky-50"
              : "border-gray-200 text-gray-800 bg-white hover:border-[theme(color.brand.blue)] hover:text-[theme(color.brand.blue)]"
              }`}
          >
            <LayoutGrid className="w-4 h-4" aria-hidden="true" />
            <span className="lg:hidden">Topics</span>
            <span className="hidden lg:inline">More</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${menuOpen ? "rotate-180" : ""}`} aria-hidden="true" />
          </button>
        </div>

        {menuOpen && (
          <div
            id="blogNav-menu"
            className="absolute top-full mt-2 left-4 right-4 md:left-auto md:right-6 lg:right-8 md:w-[620px] bg-white border border-gray-100 rounded-2xl shadow-xl p-4 sm:p-5 z-50"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Popular categories
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-[60vh] overflow-y-auto">
              {menuItems.map((cat) => {
                const Icon = getCategoryIcon(cat.name);
                const active = activeCategory === cat.id;
                return (
                  <li key={cat.id}>
                    <Link
                      href={`/blog/category/${cat.id}`}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors ${active
                        ? "bg-sky-50 text-[theme(color.brand.blue)] font-semibold"
                        : "text-gray-800 hover:bg-sky-50 hover:text-[theme(color.brand.blue)]"
                        }`}
                    >
                      <span className="w-7 h-7 shrink-0 rounded-md bg-sky-50 border border-sky-100 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-[theme(color.brand.blue)]" aria-hidden="true" />
                      </span>
                      <span className="flex-1 min-w-0 truncate">{cat.name}</span>
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-600 shrink-0">
                        {cat.postCount}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
              <Link
                href="/blog/categories"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[theme(color.brand.blue)] hover:underline"
              >
                View all {categories.length} categories
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
