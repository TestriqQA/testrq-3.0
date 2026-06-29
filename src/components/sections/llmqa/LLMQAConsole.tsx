"use client";

import { useEffect, useRef } from "react";

// Animated "watch it run" console for the LLMQA hero. Ported from the
// self-contained vanilla-JS illustration: each line is typed char-by-char,
// then swapped for its coloured markup. The component styles live in
// globals.css (scoped under `.console`, with namespaced keyframes so they
// don't collide). The animation auto-pauses when off-screen or the tab is
// hidden and fully respects prefers-reduced-motion (renders the final state
// statically). Class names referenced in `html` below are intentionally
// global so the imperative innerHTML can use them.
type ConsoleLine = { raw: string; html: string };

const LINES: ConsoleLine[] = [
  {
    raw: "> booting automated suite…",
    html: '<span class="dim">&gt; booting automated suite…</span>',
  },
  {
    raw: "[hallucination]  4,210 dimensions … PASS",
    html: '<span class="tag">[hallucination]</span>  4,210 dimensions … <span class="pass">PASS</span>',
  },
  {
    raw: "[jailbreak]      6,880 dimensions … PASS",
    html: '<span class="tag">[jailbreak]</span>      6,880 dimensions … <span class="pass">PASS</span>',
  },
  {
    raw: "[persona-drift]  2,150 dimensions … 1 FAIL",
    html: '<span class="tag">[persona-drift]</span>  2,150 dimensions … <span class="fail">1 FAIL</span> <span class="dim">→</span> <span class="pass">re-tested PASS</span>',
  },
  {
    raw: "[bias]           3,400 dimensions … PASS",
    html: '<span class="tag">[bias]</span>           3,400 dimensions … <span class="pass">PASS</span>',
  },
  {
    raw: "[compliance]     1,780 dimensions … PASS",
    html: '<span class="tag">[compliance]</span>     1,780 dimensions … <span class="pass">PASS</span>',
  },
  {
    raw: "> 18,420 dimensions · 0 open issues",
    html: '<span class="dim">&gt; 18,420 dimensions · 0 open issues · signing certificate…</span>',
  },
  {
    raw: "CERTIFIED — prod-bot@v2.4 · verify.llmqa.com/c/9F4AE21",
    html: '<span class="console__line--cert">✓ CERTIFIED — prod-bot@v2.4 · verify.llmqa.com/c/9F4AE21</span>',
  },
];

export default function LLMQAConsole() {
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const consoleEl = consoleRef.current;
    if (!consoleEl) return;
    const logEl = consoleEl.querySelector<HTMLDivElement>(".console__body");
    if (!logEl) return;

    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cancelled = false;
    let onScreen = false;
    let caret: HTMLSpanElement | null = null;
    let obs: IntersectionObserver | null = null;

    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
    const runnable = () => onScreen && !document.hidden && !reduce;
    const waitRunnable = () =>
      new Promise<void>((res) => {
        (function check() {
          if (cancelled || runnable()) res();
          else setTimeout(check, 250);
        })();
      });

    const renderStatic = () => {
      logEl.innerHTML = LINES.map(
        (l) => '<span class="console__line">' + l.html + "</span>"
      ).join("");
    };

    const typeLine = async (line: ConsoleLine) => {
      if (cancelled) return;
      const span = document.createElement("span");
      span.className = "console__line";
      const textNode = document.createTextNode("");
      span.appendChild(textNode);
      logEl.appendChild(span);
      if (caret) span.appendChild(caret); // single shared caret trails the line

      for (let i = 0; i < line.raw.length; i++) {
        if (cancelled) return;
        textNode.nodeValue = line.raw.slice(0, i + 1);
        await sleep(line.raw[i] === " " ? 6 : 14);
      }
      span.innerHTML = line.html; // swap in the coloured version
      if (caret) span.appendChild(caret);
      await sleep(line.raw.indexOf("FAIL") > -1 ? 520 : 230);
    };

    const run = async () => {
      caret = document.createElement("span");
      caret.className = "console__caret";
      while (!reduce && !cancelled) {
        await waitRunnable(); // park (no DOM writes) while off-screen / tab hidden
        if (cancelled) return;
        logEl.innerHTML = "";
        logEl.appendChild(caret);
        for (let i = 0; i < LINES.length && !reduce && !cancelled; i++) {
          await waitRunnable();
          await typeLine(LINES[i]);
        }
        if (cancelled) return;
        await sleep(4200);
      }
      if (!cancelled) renderStatic();
    };

    if (reduce) {
      renderStatic();
      return;
    }

    if ("IntersectionObserver" in window) {
      let started = false;
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            onScreen = en.isIntersecting;
            if (en.isIntersecting && !started) {
              started = true;
              void run();
            }
          });
        },
        { threshold: 0.25 }
      );
      obs.observe(consoleEl);
    } else {
      onScreen = true;
      void run();
    }

    return () => {
      cancelled = true;
      if (obs) obs.disconnect();
    };
  }, []);

  return (
    <div
      ref={consoleRef}
      className="console"
      role="img"
      aria-label="Live console showing an automated test suite passing each category"
    >
      <div className="console__bar">
        <span className="console__dot" />
        <span className="console__dot" />
        <span className="console__dot" />
        <span className="console__path">
          llmqa://run --suite=full --target=prod-bot
        </span>
      </div>
      <div className="console__body" aria-hidden="true" />
      <div className="console__scanline" aria-hidden="true" />
    </div>
  );
}
