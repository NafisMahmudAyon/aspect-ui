import { HTMLAttributes } from 'react';
export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}
/**
 * CarouselItem component
 *
 * @param {HTMLAttributes<HTMLDivElement>} props - The props for the CarouselItem component
 * @param {Ref<HTMLDivElement>} ref - The ref for the CarouselItem component
 * @returns {ReactElement} The CarouselItem component
 *
 * @example
 * import { CarouselItem } from "@/components/aspect-ui/Carousel";
 *
 * <CarouselItem>
 *  {children}
 * </CarouselItem>
 */
export declare const CarouselItem: import("react").ForwardRefExoticComponent<CarouselItemProps & import("react").RefAttributes<HTMLDivElement>>;
/**
 * Component CarouselItem
 * version: 1.0.0
 * author: Nafis Mahmud Ayon
 * license: MIT
 * repository: https://github.com/NafisMahmudAyon/aspect-ui
 */ 
