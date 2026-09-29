import { Container } from '@/components/ui/container';
import { comparisons } from '@/data/mock-data';

export function FeaturedComparisons() {
  return (
    <section
      id="comparisons"
      className="bg-ink-black py-20 text-paper-white md:py-32"
    >
      <Container>
        <div className="mb-16 max-w-2xl">
          <div className="mb-6 font-sans text-15px uppercase tracking-widest text-smoke-gray">
            Featured
          </div>

          <h2 className="font-display text-44px leading-[1.1] text-balance md:text-64px">
            Understand the differences.
          </h2>

          <p className="mt-6 font-sans text-20px text-smoke-gray text-balance">
            Compare products by the things that actually matter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-smoke-gray/20 md:grid-cols-3">
          {comparisons.map((comparison) => (
            <div
              key={comparison.id}
              className="flex min-h-[400px] flex-col bg-ink-black p-10 transition-colors duration-300 hover:bg-sienna-brown/20"
            >
              <div className="mb-8 font-sans text-15px uppercase tracking-wider text-blush-peach">
                {comparison.focus}
              </div>

              <div className="flex flex-1 flex-col justify-center space-y-6">
                <div className="font-display text-26px">
                  {comparison.productA}
                </div>

                <div className="flex items-center gap-4 text-smoke-gray">
                  <div className="h-px flex-1 bg-smoke-gray/30" />

                  <span className="font-sans text-15px">
                    VS
                  </span>

                  <div className="h-px flex-1 bg-smoke-gray/30" />
                </div>

                <div className="font-display text-26px">
                  {comparison.productB}
                </div>
              </div>

              <div className="mt-12 border-t border-smoke-gray/20 pt-8">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 font-sans text-15px text-paper-white"
                >
                  Read Comparison
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

