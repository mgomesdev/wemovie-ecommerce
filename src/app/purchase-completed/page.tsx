'use client';

import { useCallback, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Paragraph from '../components/atoms/Parapraph';
import Heading from '../components/atoms/Heading';
import Button from '../components/atoms/Button';
import { CartContextProvider } from '../context/CartContext';

export default function PurchaseCompleted() {
    const { clearItems } = useContext(CartContextProvider);

    const router = useRouter();

    const voltar = useCallback(() => router.push('/'), [router]);

    useEffect(() => {
        clearItems();
    }, [clearItems]);

    return (
        <div className="bg-white p-64 w-full">
            <div className="flex flex-col items-center gap-24 max-w-[12.5rem] md:max-w-[27.93rem] mx-auto">
                <Heading
                    config={{
                        customClassName: 'text-center',
                        fontWeight: 'font-bold',
                        fontSize: 'text-20',
                        color: 'text-dark1',
                    }}
                >
                    Compra realizada com sucesso!
                </Heading>

                <Image
                    width={0}
                    height={0}
                    src="/purchase-completed.svg"
                    alt="Compra realizada com sucesso!"
                    className="w-[18.375rem] md:h-[19.187rem] object-contain"
                    priority
                />

                <Button
                    onClick={voltar}
                    config={{
                        variant: 'primary',
                        size: 'md',
                    }}
                >
                    <Paragraph
                        config={{
                            fontWeight: 'font-bold',
                            fontSize: 'text-12',
                            color: 'text-white',
                        }}
                    >
                        Voltar
                    </Paragraph>
                </Button>
            </div>
        </div>
    );
}
