import React from 'react';

interface ButtonProps
    extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'> {
    children: React.ReactNode;
    config: {
        customClassName?: string;
        variant: 'primary' | 'success';
        size?: 'md';
    };
}

export default function Button({ children, config, ...props }: ButtonProps) {
    const { variant, size, customClassName } = config;

    const getBgColor = variant === 'primary' ? ' bg-blue2 hover:bg-blue1' : 'bg-green hover:bg-dark2';

    return (
        <button
            className={`${size === 'md' ? 'w-[10.812rem]' : 'w-full'} h-[2.5rem] max-w-[19.125rem] flex items-center justify-center ${getBgColor} rounded-[4px] p-8 ease-in-out duration-300 ${customClassName}`}
            {...props}
        >
            {children}
        </button>
    );
}
