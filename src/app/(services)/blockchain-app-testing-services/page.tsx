import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    blockchainServiceSchema,
    blockchainFAQSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import BlockchainHero from "@/components/sections/BlockchainHero";
import BlockchainWhyChoose from "@/components/sections/BlockchainWhyChoose";
import BlockchainSolutions from "@/components/sections/BlockchainSolutions";
import BlockchainMethodology from "@/components/sections/BlockchainMethodology";
import BlockchainFAQs from "@/components/sections/BlockchainFAQs";
import BlockchainCTA from "@/components/sections/BlockchainCTA";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/blockchain-app-testing-services",
        title: "Blockchain App Testing | Smart Contract & dApp QA | Testriq",
        description:
            "Secure your Web3 stack with Testriq's blockchain testing. Smart contract audits, dApp security testing, and decentralized network validation for enterprises.",
        ogImage: {
            url: "https://www.testriq.com/OG/Blockchain-app-testing-og-image.webp",
            width: 2752,
            height: 1536,
            alt: "Blockchain App Testing Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "blockchain app testing services",
            "smart contract audit services",
            "dapp testing company",
            "blockchain penetration testing",
            "crypto wallet security testing",
            "blockchain performance testing for enterprises",
            "web3 security audit",
        ],
    });
}

export default function BlockchainAppTesting() {
    // TODO(seo phase-4): Comprehensive migration from a minimal static
    // `export const metadata` to generateMetadata + buildPageMetadata.
    // The page previously had multiple structural gaps that the helper
    // and createCanonicalBreadcrumb fix together:
    //   1. Double-brand: title ended with " - Testriq" (dash); root
    //      template "%s | Testriq" produced "... - Testriq | Testriq".
    //      Now via title.absolute.
    //   2. No breadcrumb at all. Added via createCanonicalBreadcrumb.
    //   3. No twitter block. Helper adds it (mirrors og).
    //   4. No robots block. Helper adds default index, follow.
    //   5. Incomplete og:image — was just { url } with no dims/alt/type.
    //      Now full descriptor (1200x630, alt, image/webp).
    //   6. StructuredData was rendered INSIDE MainLayout. Restructured
    //      to outer <div> wrapper matching the PR-2/PR-3 template.
    //   7. og:image filename typo fixed in a follow-up commit:
    //      "Bloak-chain-app-testing-og-image.webp" had the asset COPIED
    //      to "Blockchain-app-testing-og-image.webp" in /public/OG/ so
    //      the old URL still resolves (any social-card cache stays
    //      valid) while this page now references the correctly-spelled
    //      asset. The "Bloak" file is kept on disk intentionally.
    //   8. 6 dynamic() imports converted to direct ES imports.
    //   9. "crypto wallet security testing company" keyword trimmed
    //      (drops the "company" keyword-stuffing tail).
    return (
        <div>
            <StructuredData data={blockchainServiceSchema} />
            <StructuredData data={blockchainFAQSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/blockchain-app-testing-services",
                    "Blockchain App Testing"
                )}
            />
            <MainLayout>
                <BlockchainHero />
                <BlockchainWhyChoose />
                <BlockchainSolutions />
                <BlockchainMethodology />
                <BlockchainFAQs />
                <BlockchainCTA />
            </MainLayout>
        </div>
    );
}
