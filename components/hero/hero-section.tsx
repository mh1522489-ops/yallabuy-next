import { Container } from '@/components/ui/container';
import { HeroText } from '@/components/hero/hero-text';
import { HeroVisual } from '@/components/three/hero-visual';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-20 pt-32">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <HeroText />

          <div className="relative h-[400px] w-full lg:h-[600px]">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

