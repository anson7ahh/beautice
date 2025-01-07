import { Logos } from "@/screens/about/components/Our/types";

export interface Types extends Logos {
  className: string;
  imgClassName: string;
  title: string;
  subtitle: string;
  description: string;
  moreDescription?: string;
  haveButton?: boolean;
}
