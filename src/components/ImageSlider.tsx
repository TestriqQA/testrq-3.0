'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from '../../public/launchfastqa-1.svg';
import image2 from '../../public/Group-computers.svg';
import image3 from '../../public/Robot-AI.svg';


const images = [
  { title: "Launch Fast QA", src: image1, alt: 'Launch Fast QA', text: 'LaunchFast QA Start-Up Specials' },
  { title: "Group Computers", src: image2, alt: 'Group Computers', text: 'Web and Mobile Applications' },
  { title: "Robot AI", src: image3, alt: 'Robot AI', text: 'AI and ML Applications' },
];

const ImageSlider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  // False during SSR and the first client render, so the hero image is never
  // given .slide-enter at first paint. slideIn begins at opacity:0 and Chromium
  // excludes opacity-0 elements from LCP candidacy, so animating on mount would
  // delay LCP by up to the 1s animation. Slides 2, 3 and the wrap-around still
  // animate exactly as before. No hydration mismatch: server and first client
  // render agree that this is false.
  const [hasAdvanced, setHasAdvanced] = useState(false);

  // Autoplay. Held still for visitors who ask for reduced motion (WCAG 2.3.3);
  // they see the first slide only, which is the LCP/priority image anyway.
  useEffect(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let interval: ReturnType<typeof setInterval> | null = null;

    const start = () => {
      if (interval !== null) return;
      interval = setInterval(() => {
        setHasAdvanced(true);
        setCurrentIdx((prevIndex) => (prevIndex + 1) % images.length);
      }, 2500);
    };

    const stop = () => {
      if (interval === null) return;
      clearInterval(interval);
      interval = null;
    };

    // Don't re-render or animate while the tab is backgrounded — and do resume
    // when it comes back, otherwise the carousel would stop for good.
    const onVisibility = () => {
      if (document.visibilityState === "hidden") stop();
      else start();
    };

    start();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[700px] mx-auto h-[500px] overflow-hidden">
      {/* Keyframes and .slide-enter/.slide-exit now live in src/app/globals.css
          so the hero does not wait on the styled-jsx runtime to inject them. */}

      {/* Slides */}
      <div className="w-full h-full">
        {images.map((image, index) => (
          /* Slides stay in normal flow. They must: the hero's right column is a
             flex item under `items-center`, so below `xl` it shrinks to fit its
             in-flow content — taking the slides out of flow collapses the whole
             column to width 0 and the slider vanishes. The homepage layout shift
             was the header logo's wrong height attribute, not this carousel. */
          <div
            key={index}
            className={`flex flex-col justify-center text-center w-full h-full ${index === currentIdx ? (hasAdvanced ? 'slide-enter' : '') : 'slide-exit hidden'
              }`}
          >
            <Image
              title={image.title}
              src={image.src}
              alt={image.alt}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              //   fill
              style={{ objectFit: 'cover' }}
              priority={index === 0} // Prioritize first image for faster loading
              // fetchPriority must be passed explicitly: `priority` only sets
              // meta.preload, never the fetchpriority attribute. It reaches the
              // <link rel=preload> via ReactDOM.preload, which exists only in the
              // React 19 build Next vendors for App Router — this app's own
              // react-dom is 18.3.1 and has no .preload. If App Router is ever
              // moved onto the declared React 18, this silently stops working.
              // Do NOT also add Next 16's `preload` prop: setting it alongside
              // `priority` is a hard build error.
              fetchPriority={index === 0 ? 'high' : undefined}
            />

            <p className=' my-5 text-3xl font-semibold bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 bg-clip-text text-transparent' >{image.text}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;