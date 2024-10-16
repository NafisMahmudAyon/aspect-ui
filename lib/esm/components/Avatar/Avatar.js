'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
export const Avatar = ({ styles = "", name, src, altText, imageStyles = "", variant, onClick, ...rest }) => {
    let nameX;
    if (name !== undefined) {
        if (name.split(" ").length > 1) {
            nameX = `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
        }
        else {
            nameX = `${name[0]}`;
        }
    }
    const [variantValue, setVariantValue] = useState({
        styles: "",
        imageStyles: "",
    });
    useEffect(() => {
        if (variant == 1) {
            setVariantValue({
                styles: "bg-gray-500 w-16 h-16 text-[1.25rem] leading-none",
                imageStyles: "object-cover text-transparent text-center rounded-full",
            });
        }
        else if (variant == 2) {
            setVariantValue({
                styles: "bg-yellow-600 w-16 h-16 text-[1.25rem] leading-none border border-white",
                imageStyles: "object-cover text-transparent text-center rounded-full",
            });
        }
        else if (variant == 3) {
            setVariantValue({
                styles: "bg-green-600 w-16 h-16 text-[1.25rem] rounded-md leading-none border border-white",
                imageStyles: "object-cover text-transparent text-center ",
            });
        }
        else if (variant == 4) {
            setVariantValue({
                styles: "bg-gray-500 w-16 h-16 text-[1.25rem] rounded-md leading-none border border-white",
                imageStyles: "object-cover text-transparent text-center rounded-md",
            });
        }
        else if (variant == 5) {
            setVariantValue({
                styles: "bg-gray-500 w-20 h-20 text-[1.25rem] leading-none outline-2 outline-offset-2 outline-yellow-600 outline overflow-visible ",
                imageStyles: "object-cover text-transparent text-center rounded-full w-full border-2 border-yellow-600  ",
            });
        }
        else if (variant == 6) {
            setVariantValue({
                styles: "bg-gray-500 w-20 h-20 text-[1.25rem] leading-none outline-4 outline-offset-[3px] outline-green-600 outline overflow-visible ",
                imageStyles: "object-cover text-transparent text-center rounded-full w-full   ",
            });
        }
    }, [variant]);
    return (_jsxs("div", { className: `${styles} ${variantValue.styles} flex justify-center items-center size-12 rounded-full overflow-hidden`, ...(name && { title: name }), ...rest, onClick: onClick, children: [src && (_jsx("img", { src: src, alt: altText || "alt text", className: `${imageStyles} ${variantValue.imageStyles} aspect-square max-w-full h-auto object-cover ` })), !src && name && _jsx(_Fragment, { children: nameX || "A" })] }));
};
