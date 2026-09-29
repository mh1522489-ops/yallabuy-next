import { Container } from '@/components/ui/container';

export function FinalCTA() {
  return (
    <section className="border-t border-mist-gray bg-fog-white py-32 md:py-48">
      <Container className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-44px leading-[1.1] text-ink-black text-balance md:text-64px">
          Start with what you need.
        </h2>

        <p className="mx-auto mb-12 mt-8 max-w-xl font-sans text-20px text-slate-gray text-balance">
          Tell VØR what matters to you and begin your research journey.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#research"
            className="inline-flex items-center justify-center rounded-full bg-ink-black px-8 py-4 font-sans text-15px text-paper-white transition-colors hover:bg-sienna-brown"
          >
            Start Research
          </a>

          <a
            href="#categories"
            className="inline-flex items-center justify-center rounded-full border border-ink-black/20 px-8 py-4 font-sans text-15px text-ink-black transition-colors hover:bg-mist-gray"
          >
            Explore Products
          </a>
        </div>
      </Container>
    </section>
  );
}

