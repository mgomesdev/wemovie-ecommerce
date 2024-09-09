import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'WeMovie - Purchase Completed',
    description: 'Compra realizada com sucesso!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
