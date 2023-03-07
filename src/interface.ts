interface CarouselItem {
  title: string;
  description: string;
  button?: JSX.Element;
  image: string;
}
[];

export interface Carousel extends Array<CarouselItem> {}
