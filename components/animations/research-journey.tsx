'use client';

import { useLayoutEffect, useRef } from 'react';
import { Container } from '@/components/ui/container';
import { journeySteps } from '@/data/mock-data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ResearchJourney() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>('.journey-step');

      steps.forEach((step) => {
        gsap.from(step, {
          opacity: 0.2,
          y: 40,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        });
      });

      gsap.fromTo(
        '.journey-line',
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 1,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="bg-paper-white py-20 md:py-32"
    >
      <Container>
        <div className="mb-32 max-w-2xl">
          <div className="mb-6 font-sans text-15px uppercase tracking-widest text-slate-gray">
            Research Journey
          </div>

          <h2 className="font-display text-44px leading-[1.1] text-ink-black text-balance md:text-64px">
            From uncertainty to a decision.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-mist-gray md:left-1/2 md:-translate-x-1/2">
            <div className="journey-line absolute inset-0 origin-top bg-ink-black" />
          </div>

          <div className="space-y-24 md:space-y-40">
            {journeySteps.map((item, index) => (
              <div
                key={item.step}
                className="journey-step relative grid grid-cols-1 items-center gap-12 md:grid-cols-2"
              >
                <div
                  className={`pl-12 md:pl-0 ${
                    index % 2 === 0
                      ? 'md:pr-24 md:text-right'
                      : 'md:col-start-2 md:pl-24'
                  }`}
                >
                  <div className="mb-2 font-sans text-15px text-slate-gray">
                    Step {item.step}
                  </div>

                  <h3 className="mb-3 font-display text-26px text-ink-black md:text-44px">
                    {item.title}
                  </h3>

                  <p className="font-sans text-17px text-slate-gray text-balance">
                    {item.description}
                  </p>
                </div>

                <div className="absolute left-4 top-0 mt-3 h-2 w-2 rounded-full bg-ink-black md:left-1/2 md:-translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

