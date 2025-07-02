import { HTMLAttributes } from 'react';
export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}
export declare const CarouselItem: import("react").ForwardRefExoticComponent<CarouselItemProps & import("react").RefAttributes<HTMLDivElement>>;
