import { jsx as _jsx } from "react/jsx-runtime";
import { typographyTheme } from './theme';
export const Typography = ({ variant, children, className = '' }) => {
    const getComponent = () => {
        switch (variant) {
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':
                return variant;
            case 'display':
                return 'h1';
            case 'display2':
                return 'h1';
            default:
                return 'p';
        }
    };
    const getStyles = () => {
        switch (variant) {
            case 'h1':
                return 'text-h1';
            case 'h2':
                return 'text-h2';
            case 'h3':
                return 'text-h3';
            case 'h4':
                return 'text-h4';
            case 'h5':
                return 'text-h5';
            case 'h6':
                return 'text-h6';
            case 'body1':
                return 'text-body1';
            case 'body2':
                return 'text-body2';
            case 'caption':
                return 'text-caption';
            case 'display':
                return 'text-display';
            case 'display2':
                return 'text-display2';
            default:
                return '';
        }
    };
    const Component = getComponent();
    const styles = getStyles();
    const { text } = typographyTheme;
    console.log(styles);
    return (_jsx(Component, { className: `${styles} ${variant == 'h1' ? "text-h1" : ""} ${text.color} ${variant == 'h2' ? "text-h2" : ""} ${className}`, children: children }));
};