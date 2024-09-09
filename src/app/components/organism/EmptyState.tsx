'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Paragraph from '../atoms/Parapraph';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

export default function EmptyState() {
    const router = useRouter();

    const reloadPage = useCallback(() => router.refresh(), [router]);

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
                    Parece que não há nada por aqui :(
                </Heading>

                <Image
                    width={0}
                    height={0}
                    src="/empty-state.svg"
                    alt="Parece que não há nada por aqui :("
                    className="w-[27.937rem] h-[16.562rem] object-cover"
                    priority
                />

                <Button
                    onClick={reloadPage}
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
                        Recarregar página
                    </Paragraph>
                </Button>
            </div>
        </div>
    );
}
