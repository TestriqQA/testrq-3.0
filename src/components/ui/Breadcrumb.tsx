import Link from 'next/link';
import { FaChevronRight, FaHome } from 'react-icons/fa';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
    variant?: 'light' | 'dark';
}

/**
 * Breadcrumb trail. "Home" is rendered internally — never pass it in `items`.
 * The final item should omit `href`; it renders as the current page.
 *
 * Markup follows the semantic pattern already used by `ToolLandingPage`:
 * `nav[aria-label] > ol > li`, with decorative icons hidden from assistive
 * technology and `aria-current="page"` on the terminal node. Previously this
 * component emitted `div`/`span` only, which gave screen readers no way to
 * recognise the trail as navigation.
 */
export default function Breadcrumb({ items, className = '', variant = 'light' }: BreadcrumbProps) {
    const isDark = variant === 'dark';
    const baseTextColor = isDark ? 'text-white' : 'text-gray-600';
    const separatorColor = isDark ? 'text-white/80' : 'text-gray-400';
    const activeColor = isDark ? 'text-white font-semibold' : 'text-[theme(color.brand.blue)]';
    const hoverColor = isDark ? 'hover:text-blue-200' : 'hover:text-[theme(color.brand.blue)]';

    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className={`flex items-center flex-wrap gap-2 text-sm font-medium ${baseTextColor} ${className}`}>
                <li>
                    <Link
                        href="/"
                        className={`flex items-center gap-2 ${hoverColor} transition-colors`}
                    >
                        <FaHome className="text-lg" aria-hidden="true" />
                        Home
                    </Link>
                </li>

                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <FaChevronRight className={`text-xs ${separatorColor}`} aria-hidden="true" />
                        {item.href ? (
                            <Link
                                href={item.href}
                                className={`${hoverColor} transition-colors`}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className={activeColor} aria-current="page">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
