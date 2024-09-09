import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            'open-sans': ['var(--font-open-sans)'],
        },
        fontWeight: {
            bold: '700',
            semiBold: '600',
            regular: '400',
        },
        fontSize: {
            12: '0.75rem',
            14: '0.875rem',
            16: '1rem',
            20: '1.25rem',
            24: '1.5rem',
            64: '5.5rem',
        },
        colors: {
            white: '#ffffff',
            dark2: '#333333',
            dark1: '#2F2E41',
            blue2: '#009EDD',
            blue1: '#0073A1',
            green: '#039B00',
            gray: '#999999',
        },
        padding: {
            8: '0.5rem',
            16: '1rem',
            24: '1.5rem',
            64: '4rem',
        },
        spacing: {
            4: '0.25rem',
            8: '0.5rem',
            10: '0.625rem',
            12: '0.75rem',
            16: '1rem',
            21: '1.312rem',
            24: '1.5rem',
            32: '2rem',
            64: '4rem',
        },
        borderWidth: {
            1: '1px',
        },
        container: {
            screens: {
                desktop: '1080px',
            },
        },
        extend: {
            screens: {},
        },
    },
    plugins: [],
};
export default config;
