import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { categories } from '@/data/mock-data';

export function ExploreCategories() {
  return (
    <section id="categories" className="py-20 md:py-32">
      <Container>
        <SectionHeader
          label="Categories"
          title="Explore categories."
        />

        <div className="border-t border-mist-gray">
          {categories.map((category) => (
            <a
              href="#"
              key={category.name}
              className="group flex items-center justify-between border-b border-mist-gray px-4 py-8 transition-colors hover:bg-mist-gray/40"
            >
              <div className="flex-1">
                <h3 className="font-display text-26px text-ink-black transition-transform duration-300 group-hover:translate-x-2 md:text-44px">
                  {category.name}
                </h3>

                <p className="mt-2 font-sans text-17px text-slate-gray">
                  {category.description}
                </p>
              </div>

              <div className="ml-8 opacity-0 transition-opacity group-hover:opacity-100">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 16H26M26 16L18 8M26 16L18 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

