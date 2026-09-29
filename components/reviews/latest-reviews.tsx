import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { reviews } from '@/data/mock-data';

export function LatestReviews() {
  return (
    <section id="reviews" className="py-20 md:py-32">
      <Container>
        <SectionHeader
          label="Latest Reviews"
          title="Go deeper."
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <a href="#" key={review.id} className="group block">
              <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-mist-gray">
                <Image
                  src={review.image}
                  alt={`${review.name} product research`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="mb-2 flex items-center gap-4">
                <span className="font-sans text-15px uppercase tracking-wider text-slate-gray">
                  {review.category}
                </span>
              </div>

              <h3 className="mb-2 font-display text-26px text-ink-black">
                {review.name}
              </h3>

              <p className="font-sans text-17px text-slate-gray text-balance">
                {review.description}
              </p>
            </a>
          ))}

          <div className="hidden flex-col justify-center rounded-24px bg-blush-peach p-8 lg:flex">
            <h3 className="font-display text-44px text-sienna-brown text-balance">
              Understanding what fits you takes time. We do the reading.
            </h3>
          </div>
        </div>
      </Container>
    </section>
  );
}

