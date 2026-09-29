import { Header } from '@/components/layout/header';
import { Hero } from '@/components/hero/hero-section';
import { PopularResearch } from '@/components/research/popular-research';
import { ExploreCategories } from '@/components/categories/explore-categories';
import { FeaturedComparisons } from '@/components/comparisons/featured-comparisons';
import { LatestReviews } from '@/components/reviews/latest-reviews';
import { BuyingGuides } from '@/components/guides/buying-guides';
import { ResearchJourney } from '@/components/animations/research-journey';
import { FinalCTA } from '@/components/layout/final-cta';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <PopularResearch />
        <ExploreCategories />
        <FeaturedComparisons />
        <LatestReviews />
        <BuyingGuides />
        <ResearchJourney />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}









