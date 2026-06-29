import Image from "next/image";
import Link from "next/link";

export default function LLMQATrustedBy() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-14 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Trusted by teams shipping the{" "}
          <span className="text-[theme(color.brand.blue)]">future of AI</span>
        </h2>

        <div className="mt-10 md:mt-12 flex items-center justify-center">
          <Link
            href="https://kruti.io/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kruti.io"
            className="inline-block transition-opacity hover:opacity-80"
          >
            <Image
              src="/kruti-io-logo.png"
              alt="Kruti.io — Generate. Schedule. Forget."
              width={640}
              height={263}
              className="h-16 md:h-20 lg:h-24 w-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
