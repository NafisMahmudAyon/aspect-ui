import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const Typography = ({ variant = '', tagName = 'p', children, className = '', ...rest }) => {
    const TagName = tagName;
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
            case 'body-1':
                return 'text-body-1';
            case 'body-2':
                return 'text-body-2';
            case 'caption':
                return 'text-caption';
            case 'display-1':
                return 'text-display-1';
            case 'display-2':
                return 'text-display-2';
            default:
                return '';
        }
    };
    // const Component = getComponent()
    const styles = getStyles();
    return (_jsx(TagName, { className: cn('text-text-muted', styles, className), ...rest, children: children }));
};
