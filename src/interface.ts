interface CarouselItem {
  title: string;
  description: string;
  button?: JSX.Element;
  image: string;
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
