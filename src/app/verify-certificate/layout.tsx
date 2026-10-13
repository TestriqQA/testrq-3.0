import { Metadata } from 'next';

export const metadata: Metadata = {
    // title.absolute, not a bare string: the root layout sets
    // template: "%s | Testriq", and this value already ends in "| Testriq",
    // so the template appended a second one and the page shipped
    // "Verify Certificate | Testriq | Testriq" (observed live 13 Oct 2026).
    // absolute opts out of the template, which is the convention the rest of
    // the site's metadata follows via buildPageMetadata.
    title: { absolute: 'Verify Certificate | Testriq' },
    description: 'Verify the authenticity of Testriq QA certificates.',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'none',
            'max-snippet': -1,
        },
    },
};

export default function VerifyCertificateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
