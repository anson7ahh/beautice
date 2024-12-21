export interface item {
  src: string;
  alt: string;
  name?: string;
}

export interface groupedItems {
  pages: item[];
  information: item[];
}
