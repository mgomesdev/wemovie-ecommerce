import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'WeMovie - Cart',
    description: 'Itens que foram adicionados ao Carrinho.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
