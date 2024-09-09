'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Paragraph from './components/atoms/Parapraph';
import Heading from './components/atoms/Heading';
import Button from './components/atoms/Button';

export default function NotFound() {
    const router = useRouter();

    const voltar = useCallback(() => router.push('/'), [router]);

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
                    Ops! página não encontrada.
                </Heading>

                {/* TODO: adicionar uma imagem que represente um 404, não encontrei um svg legal, após resolver, remover comentário. */}
                <Image
                    width={0}
                    height={0}
                    src="/empty-state.svg"
                    alt="Um erro ocorreu :("
                    className="w-[27.937rem] h-[16.562rem] object-cover"
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
