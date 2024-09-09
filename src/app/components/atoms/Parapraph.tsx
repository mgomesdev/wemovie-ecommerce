import React from 'react';

interface ParagraphProps {
    children: React.ReactNode;
    config: {
        fontWeight: 'font-semiBold' | 'font-bold';
        fontSize: 'text-12' | 'text-16' | 'text-14' | 'text-24';
        color: 'text-gray' | 'text-white' | 'text-dark1';
        customClassName?: string;
    };
}

export default function Paragraph({ children, config }: ParagraphProps) {
    const { fontWeight, fontSize, color, customClassName } = config;
    return <p className={`${fontWeight} ${fontSize} ${color} ${customClassName}`}>{children}</p>;
}
