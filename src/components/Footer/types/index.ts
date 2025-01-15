export interface item {
  src: string;
  alt: string;
  name?: string;
}
export interface props extends item {
  link: string;
}
export interface groupedItems {
  pages: props[];
  information: props[];
}
