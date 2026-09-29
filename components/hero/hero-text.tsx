'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function HeroText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      timeline
        .from('.hero-label', {
          y: 20,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          '.hero-line',
          {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
          },
          '-=0.3',
        )
        .from(
          '.hero-desc',
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.8',
        )
        .from(
          '.hero-cta',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          '-=0.5',
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="hero-label mb-8 font-sans text-15px uppercase tracking-widest text-slate-gray">
        Product Research Platform
      </div>

      <h1 className="font-display text-44px leading-[1.05] text-ink-black text-balance md:text-64px lg:text-90px">
        <span className="hero-line block">Find the product</span>
        <span className="hero-line block">that fits you.</span>
      </h1>

      <p className="hero-desc mt-8 max-w-md font-sans text-20px text-slate-gray text-balance">
        VØR helps you understand products, compare alternatives, and make
        clearer decisions based on what actually matters to you.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="#research"
          className="hero-cta inline-flex items-center justify-center rounded-full bg-ink-black px-8 py-4 font-sans text-15px text-paper-white transition-colors hover:bg-sienna-brown"
        >
          Explore Products
        </a>

        <a
          href="#journey"
          className="hero-cta inline-flex items-center justify-center rounded-full border border-ink-black/20 px-8 py-4 font-sans text-15px text-ink-black transition-colors hover:bg-mist-gray"
        >
          Start Research
        </a>
      </div>
    </div>
  );
}

