import { Options } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { ReactElement } from 'react';
interface SliderProps {
    children: React.ReactNode;
    options: Options;
    playPauseButton?: ReactElement<any>;
    arrowIcon?: ReactElement<any>;
    playIcon?: ReactElement<any>;
    pauseIcon?: ReactElement<any>;
    autoplay?: boolean;
    pagination?: boolean;
    arrows?: boolean;
    progressBar?: boolean;
    arrowStyle?: string;
    prevArrowStyle?: string;
    nextArrowStyle?: string;
    autoplayStyle?: string;
    playIconStyle?: string;
    pgStyle?: string;
    pauseIconStyle?: string;
    paginationStyle?: React.CSSProperties;
}
export declare const Slider: React.FC<SliderProps>;
export {};
