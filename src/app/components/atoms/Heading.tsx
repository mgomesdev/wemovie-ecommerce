import React from 'react';

interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: React.ReactNode;
    config: {
        fontWeight: 'font-bold' | 'font-semiBold';
        fontSize: 'text-20' | 'text-14' | 'text-12';
        color: 'text-white' | 'text-dark1' | 'text-dark2' | 'text-gray';
        customClassName?: string;
    };
}

export default function Heading({ children, config, ...props }: HeadingProps) {
    const { fontWeight, fontSize, color, customClassName } = config;

    return (
        <>
            {fontSize === 'text-20' && (
                <h1 className={`${fontWeight} ${fontSize} ${color} ${customClassName}`} {...props}>
                    {children}
                </h1>
            )}

            {fontSize === 'text-14' && (
                <h3 className={`${fontWeight} ${fontSize} ${color} ${customClassName}`} {...props}>
                    {children}
                </h3>
            )}

            {fontSize === 'text-12' && (
                <h6 className={`${fontWeight} ${fontSize} ${color} ${customClassName}`} {...props}>
                    {children}
                </h6>
            )}
        </>
    );
}
