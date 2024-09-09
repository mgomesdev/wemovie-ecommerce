import React from 'react';

import pxToRem from '@/app/lib/utils/pxToRem';

type IconType = 'shopping-bag' | 'shopping-cart' | 'trash' | 'minus' | 'plus';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    config: {
        color: 'white' | 'blue2';
        icon: IconType;
        size: 24 | 13 | 18;
    };
}

export default function Icon({ config, ...props }: IconProps) {
    const { color, icon, size } = config;

    const fillIconList: IconType[] = ['shopping-bag'];

    return (
        <svg
            {...{
                strokeWidth: icon === 'shopping-cart' ? 0 : 1.5,
                viewBox: `0 0 ${size} ${size}`,
                stroke: color ?? 'currentColor',
                height: pxToRem(size),
                width: pxToRem(size),
                xmlns: 'http://www.w3.org/2000/svg',
                fill: fillIconList.includes(icon) ? color : 'none',
            }}
            {...props}
        >
            {icon === 'shopping-bag' && <ShoppingBagPath />}
            {icon === 'shopping-cart' && <ShoppingCartPath />}
            {icon == 'trash' && <TrashPath />}
            {icon === 'minus' && <MinusPath />}
            {icon === 'plus' && <PlusPath />}
        </svg>
    );
}

const ShoppingBagPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path
        d="M17.6836 8.27961L12.9055 1.16964C12.8034 1.02608 12.6675 0.909533 12.5097 0.830181C12.3519 0.750829 12.1769 0.711087 12 0.714428C11.6509 0.714428 11.3018 0.866165 11.0945 1.18048L6.31636 8.27961H1.09091C0.490909 8.27961 0 8.76734 0 9.36345C0 9.461 0.0109091 9.55854 0.0436363 9.65609L2.81455 19.7033C3.06545 20.6137 3.90545 21.2857 4.90909 21.2857H19.0909C20.0945 21.2857 20.9345 20.6137 21.1964 19.7033L23.9673 9.65609L24 9.36345C24 8.76734 23.5091 8.27961 22.9091 8.27961H17.6836ZM8.72727 8.27961L12 3.51073L15.2727 8.27961H8.72727ZM12 16.9503C10.8 16.9503 9.81818 15.9749 9.81818 14.7826C9.81818 13.5904 10.8 12.615 12 12.615C13.2 12.615 14.1818 13.5904 14.1818 14.7826C14.1818 15.9749 13.2 16.9503 12 16.9503Z"
        fill="white"
    />
);

const ShoppingCartPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path
        xmlns="http://www.w3.org/2000/svg"
        d="M6.26677 5.00001H7.4001V3.30001H9.1001V2.16667H7.4001V0.466675H6.26677V2.16667H4.56677V3.30001H6.26677V5.00001ZM4.0001 10.1C3.37676 10.1 2.87243 10.61 2.87243 11.2333C2.87243 11.8567 3.37676 12.3667 4.0001 12.3667C4.62343 12.3667 5.13343 11.8567 5.13343 11.2333C5.13343 10.61 4.62343 10.1 4.0001 10.1ZM9.66677 10.1C9.04343 10.1 8.5391 10.61 8.5391 11.2333C8.5391 11.8567 9.04343 12.3667 9.66677 12.3667C10.2901 12.3667 10.8001 11.8567 10.8001 11.2333C10.8001 10.61 10.2901 10.1 9.66677 10.1ZM4.09643 8.25834L4.11343 8.19034L4.62343 7.26668H8.8451C9.2701 7.26668 9.6441 7.03434 9.83677 6.68301L12.0241 2.71068L11.0381 2.16667H11.0324L10.4091 3.30001L8.8451 6.13334H4.8671L4.79343 5.98034L3.5241 3.30001L2.98576 2.16667L2.4531 1.03334H0.600098V2.16667H1.73343L3.77343 6.46768L3.00843 7.85601C2.91776 8.01468 2.86676 8.20168 2.86676 8.40001C2.86676 9.02334 3.37676 9.53334 4.0001 9.53334H10.8001V8.40001H4.2381C4.16443 8.40001 4.09643 8.33768 4.09643 8.25834Z"
        fill="white"
    />
);

const TrashPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path
        d="M1.14286 16C1.14286 17.1 2.17143 18 3.42857 18H12.5714C13.8286 18 14.8571 17.1 14.8571 16V4H1.14286V16ZM16 1H12L10.8571 0H5.14286L4 1H0V3H16V1Z"
        fill="#009EDD"
    />
);

const MinusPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path
        d="M4.5 8.1V9.9H13.5V8.1H4.5ZM9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2Z"
        fill="#009EDD"
    />
);

const PlusPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path
        d="M9.9 4.5H8.1V8.1H4.5V9.9H8.1V13.5H9.9V9.9H13.5V8.1H9.9V4.5ZM9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2Z"
        fill="#009EDD"
    />
);
