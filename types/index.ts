export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export interface Comparison {
  id: string;
  productA: string;
  productB: string;
  focus: string;
}

export interface Guide {
  id: string;
  title: string;
  category: string;
  readTime: string;
}

