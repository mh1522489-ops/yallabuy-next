'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/container';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-mist-gray bg-paper-white/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <div className="font-display text-26px tracking-tight">
          VØR
        </div>

        <nav className="hidden items-center gap-10 font-sans text-15px text-ink-black/80 md:flex">
          <a
            href="#research"
            className="transition-colors hover:text-ink-black"
          >
            Search
          </a>

          <a
            href="#categories"
            className="transition-colors hover:text-ink-black"
          >
            Categories
          </a>

          <a
            href="#comparisons"
            className="transition-colors hover:text-ink-black"
          >
            Comparisons
          </a>

          <a
            href="#reviews"
            className="transition-colors hover:text-ink-black"
          >
            Reviews
          </a>

          <a
            href="#guides"
            className="transition-colors hover:text-ink-black"
          >
            Articles
          </a>
        </nav>

        <button
          type="button"
          className="font-sans text-15px md:hidden"
          aria-label="Open navigation menu"
        >
          Menu
        </button>
      </Container>
    </header>
  );
}

