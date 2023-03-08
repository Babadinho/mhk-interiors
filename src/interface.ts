interface CarouselItem {
  id: number;
  title: string;
  description: string;
  button?: JSX.Element;
}
[];

interface TestimonialItem {
  title: string;
  description: string;
  author: string;
}
[];

export interface Carousel extends Array<CarouselItem> {}
export interface Testimonial extends Array<TestimonialItem> {}
