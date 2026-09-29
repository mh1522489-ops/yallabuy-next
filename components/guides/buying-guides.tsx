import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { guides } from '@/data/mock-data';

export function BuyingGuides() {
  return (
    <section
      id="guides"
      className="bg-mist-gray py-20 md:py-32"
    >
      <Container>
        <SectionHeader
          label="Buying Guides"
          title="Research before you decide."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="flex flex-col rounded-24px border border-mist-gray bg-paper-white p-10 transition-colors hover:border-ink-black"
            >
              <div className="mb-12 flex items-start justify-between">
                <span className="font-sans text-15px uppercase tracking-wider text-slate-gray">
                  {guide.category}
                </span>

                <span className="font-sans text-15px text-slate-gray">
                  {guide.readTime}
                </span>
              </div>

              <h3 className="mt-auto font-display text-26px text-ink-black text-balance">
                {guide.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

