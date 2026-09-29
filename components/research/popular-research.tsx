import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { researchPaths } from '@/data/mock-data';

export function PopularResearch() {
  return (
    <section
      id="research"
      className="bg-fog-white py-20 md:py-32"
    >
      <Container>
        <SectionHeader
          label="Popular Research"
          title="Start with what you need."
          description="Explore research paths built around real product needs rather than product names alone."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchPaths.map((path) => (
            <div
              key={path.need}
              className="group cursor-pointer rounded-24px border border-mist-gray bg-paper-white p-8 transition-all duration-300 hover:border-ink-black"
            >
              <div className="flex h-full flex-col">
                <div className="mb-12">
                  <div className="mb-2 font-sans text-15px text-slate-gray">
                    Need
                  </div>

                  <div className="font-display text-22px text-ink-black">
                    {path.need}
                  </div>
                </div>

                <div className="mt-auto border-t border-mist-gray pt-8">
                  <div className="mb-2 font-sans text-15px text-slate-gray">
                    Research Focus
                  </div>

                  <div className="mb-4 font-sans text-17px text-ink-black">
                    {path.research}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="font-sans text-15px text-slate-gray">
                      Example: {path.product}
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-black/10 transition-colors group-hover:bg-ink-black group-hover:text-paper-white">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 6H11M11 6L6 1M11 6L6 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

