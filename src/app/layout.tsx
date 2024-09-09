import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import './globals.css';

import BaseLayout from './components/base/BaseLayout';
import CartContext from './lib/context/CartContext';

const open_sans = Open_Sans({
    variable: '--font-open-sans',
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    fallback: ['arial'],
});

export const metadata: Metadata = {
    title: 'WeMovie - ECommerce',
    description: 'Teste Frontend WeFit 2024, matheusgrodrigues.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={open_sans.className}>
                <CartContext>
                    <BaseLayout>{children}</BaseLayout>
                </CartContext>
            </body>
        </html>
    );
}
