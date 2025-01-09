import React, { ReactNode } from 'react';
interface TextLineProps {
    children: ReactNode;
    keywords: string[];
    highlightColor?: string;
    textColor?: string;
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
    animationEffect?: 'fade' | 'scale' | 'color';
    onKeywordClick?: (keyword: string) => void;
}
declare const TextLine: React.FC<TextLineProps>;
export default TextLine;
