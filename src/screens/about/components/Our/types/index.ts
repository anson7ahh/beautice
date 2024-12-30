export interface Logos {
  src: string;
  alt: string;
}
export interface Items extends Logos {
  className: string;
  width: number;
  height: number;
  title: string;
  subtitle: string;
  description: string;
  moreDescription?: string;
}
