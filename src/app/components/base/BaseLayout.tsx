'use client';

import React, { useCallback, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Parapraph';
import Icon from '../atoms/Icon';

import { CartContextProvider } from '@/app/lib/context/CartContext';

interface BaseLayoutProps {
    children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <div className="flex flex-col bg-dark1 container mx-auto px-16">
            <Header />
            {children}
        </div>
    );
}

interface BaseLayoutContentProps {
    children: React.ReactNode;
}

export const BaseLayoutContent: React.FC<BaseLayoutContentProps> = ({ children }) => (
    <main className="flex flex-col items-center">{children}</main>
);

export const Header: React.FC = () => {
    const { cart } = useContext(CartContextProvider);

    const router = useRouter();

    const navigateToCart = useCallback(() => router.push('/cart'), [router]);

    return (
        <header className="bg-dark1 flex justify-between items-center h-[5.5rem]">
            <Heading
                config={{
                    fontWeight: 'font-bold',
                    fontSize: 'text-20',
                    color: 'text-white',
                }}
            >
                <Link
                    href={{
                        pathname: '/',
                    }}
                >
                    WeMovies
                </Link>
            </Heading>

            <div className="flex items-center gap-16 cursor-pointer" onClick={navigateToCart}>
                <div className="flex flex-col items-end ">
                    <Heading
                        config={{
                            customClassName: 'hidden md:block',
                            fontWeight: 'font-bold',
                            fontSize: 'text-20',
                            color: 'text-white',
                        }}
                    >
                        Meu Carrinho
                    </Heading>

                    <Paragraph
                        config={{
                            fontWeight: 'font-semiBold',
                            fontSize: 'text-12',
                            color: 'text-gray',
                        }}
                    >
                        {cart.length} itens
                    </Paragraph>
                </div>

                <Icon config={{ color: 'white', icon: 'shopping-bag', size: 24 }} />
            </div>
        </header>
    );
};
