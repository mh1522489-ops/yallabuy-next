import type { Metadata } from 'next';
import { localFonts } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'VØR — Find the product that fits you',
  description:
    'VØR helps you understand products, compare alternatives, and make clearer decisions based on what actually matters to you.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={localFonts.className}>
      <body className="bg-paper-white text-ink-black antialiased">
        {children}
      </body>
    </html>
  );
}

