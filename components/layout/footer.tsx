import { Container } from '@/components/ui/container';

const footerColumns = [
  {
    title: 'Explore VØR',
    links: ['Categories', 'Comparisons', 'Reviews', 'Articles'],
  },
  {
    title: 'Research',
    links: ['How We Research', 'Editorial Policy', 'Methodology'],
  },
  {
    title: 'About VØR',
    links: ['About', 'Contact', 'Accessibility'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Affiliate Disclosure'],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-black pb-16 pt-32 text-paper-white">
      <Container>
        <div className="mb-32 grid grid-cols-2 gap-12 md:grid-cols-5">
          <div className="col-span-2">
            <div className="mb-4 font-display text-44px">
              VØR
            </div>

            <p className="max-w-xs font-sans text-15px text-smoke-gray text-balance">
              An evidence-based product research platform. We help you
              understand what fits.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-6 font-sans text-15px uppercase tracking-widest text-smoke-gray">
                {column.title}
              </h4>

              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-17px text-paper-white/80 transition-colors hover:text-blush-peach"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t border-smoke-gray/20 pt-12 md:flex-row">
          <p className="font-sans text-15px text-smoke-gray">
            © {new Date().getFullYear()} VØR Research. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a
              href="#"
              className="font-sans text-15px text-smoke-gray transition-colors hover:text-paper-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="font-sans text-15px text-smoke-gray transition-colors hover:text-paper-white"
            >
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

