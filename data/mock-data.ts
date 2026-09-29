import type { Product, Comparison, Guide } from '@/types';

export const researchPaths = [
  {
    need: 'Headphones for Work',
    research: 'Focus & Comfort',
    product: 'Sony WH-1000XM6',
  },
  {
    need: 'Headphones for Travel',
    research: 'ANC & Portability',
    product: 'Bose QuietComfort Ultra',
  },
  {
    need: 'Headphones for Music',
    research: 'Acoustic Fidelity',
    product: 'Sennheiser Momentum 4',
  },
  {
    need: 'Smartphones for Photography',
    research: 'Sensor & Processing',
    product: 'iPhone 15 Pro',
  },
  {
    need: 'Laptops for Programming',
    research: 'Thermals & Keyboard',
    product: 'MacBook Pro M3',
  },
  {
    need: 'Gaming Setup',
    research: 'Latency & Refresh Rate',
    product: 'Custom Desktop Build',
  },
];

export const categories = [
  {
    name: 'Electronics',
    description: 'The broader landscape of consumer technology.',
  },
  {
    name: 'Headphones',
    description: 'Audio isolation, fidelity, and wearable comfort.',
  },
  {
    name: 'Smartphones',
    description: 'Daily drivers, cameras, and mobile computing.',
  },
  {
    name: 'Laptops',
    description: 'Portable workstations and creative tools.',
  },
  {
    name: 'Tablets',
    description: 'The middle ground between phone and laptop.',
  },
  {
    name: 'Monitors',
    description: 'Color accuracy, refresh rates, and ergonomics.',
  },
  {
    name: 'Gaming',
    description: 'High-performance peripherals and components.',
  },
];

export const comparisons: Comparison[] = [
  {
    id: '1',
    productA: 'Sony WH-1000XM6',
    productB: 'Bose QuietComfort Ultra',
    focus: 'Understanding ANC Technologies',
  },
  {
    id: '2',
    productA: 'Sony WH-1000XM6',
    productB: 'Sennheiser Momentum 4',
    focus: 'Digital Signal Processing vs Acoustic Design',
  },
  {
    id: '3',
    productA: 'iPhone',
    productB: 'Galaxy',
    focus: 'Ecosystem Constraints and Software Longevity',
  },
];

export const reviews: Product[] = [
  {
    id: '1',
    name: 'Sony WH-1000XM6',
    category: 'Headphones',
    description: 'Prototype product research card.',
    image: '/images/products/sony-wh1000xm6.png',
  },
  {
    id: '2',
    name: 'Bose QuietComfort Ultra',
    category: 'Headphones',
    description: 'Prototype product research card.',
    image: '/images/product-placeholder.svg',
  },
  {
    id: '3',
    name: 'Sennheiser Momentum 4',
    category: 'Headphones',
    description: 'Prototype product research card.',
    image: '/images/product-placeholder.svg',
  },
  {
    id: '4',
    name: 'Focal Bathys',
    category: 'Headphones',
    description: 'Prototype product research card.',
    image: '/images/product-placeholder.svg',
  },
  {
    id: '5',
    name: 'Soundcore Space Q40',
    category: 'Headphones',
    description: 'Prototype product research card.',
    image: '/images/product-placeholder.svg',
  },
];

export const guides: Guide[] = [
  {
    id: '1',
    title: 'Best Headphones for Travel',
    category: 'Guide',
    readTime: '8 min read',
  },
  {
    id: '2',
    title: 'Best Headphones for Long Work Sessions',
    category: 'Guide',
    readTime: '12 min read',
  },
  {
    id: '3',
    title: 'How to Choose Noise-Cancelling Headphones',
    category: 'Guide',
    readTime: '10 min read',
  },
  {
    id: '4',
    title: 'What Actually Matters in Headphone Specifications?',
    category: 'Guide',
    readTime: '15 min read',
  },
];

export const journeySteps = [
  {
    step: '01',
    title: 'Need',
    description: 'Define the actual problem you are solving.',
  },
  {
    step: '02',
    title: 'What Matters',
    description: 'Prioritize features based on your context.',
  },
  {
    step: '03',
    title: 'Relevant Features',
    description: 'Filter out marketing noise.',
  },
  {
    step: '04',
    title: 'Product Types',
    description: 'Understand form factors and categories.',
  },
  {
    step: '05',
    title: 'Products',
    description: 'Identify specific models that fit.',
  },
  {
    step: '06',
    title: 'Compare',
    description: 'Contrast strengths and trade-offs.',
  },
  {
    step: '07',
    title: 'Alternatives',
    description: 'Explore adjacent options.',
  },
  {
    step: '08',
    title: 'Right Fit',
    description: 'Make a decision based on understanding.',
  },
];
