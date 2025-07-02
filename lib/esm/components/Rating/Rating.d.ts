import React from 'react';
interface RatingProps {
    maxRating?: number;
    initialRating?: number;
    size?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, rating: number) => void;
    starColor?: string;
    hoverColor?: string;
    unratedColor?: string;
    ratingTexts?: string[];
    readOnly?: boolean;
    icon?: React.ReactNode;
    theme?: 'default' | 'dark';
    className?: string;
}
export declare const Rating: React.FC<RatingProps>;
export default Rating;
