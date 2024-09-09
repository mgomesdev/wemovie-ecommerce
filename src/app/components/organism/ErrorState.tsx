'use client';

import { useCallback } from 'react';
import Image from 'next/image';

import Paragraph from '../atoms/Parapraph';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

import { GlobalErrorProps } from '@/app/global-error';

interface ErrorStateProps extends GlobalErrorProps {}

export default function ErrorState({ error, reset }: ErrorStateProps) {
    const tryAgain = useCallback(() => reset(), [reset]);

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
                    {error.message}
                </Heading>

                {/* TODO: adicionar uma imagem que represente um erro, não encontrei um svg legal, após resolver, remover comentário. */}
                <Image
                    width={0}
                    height={0}
                    src="/empty-state.svg"
                    alt="Um erro ocorreu :("
                    className="w-[27.937rem] h-[16.562rem] object-cover"
                    priority
                />

                <Button
                    onClick={tryAgain}
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
                        Tentar Novamente
                    </Paragraph>
                </Button>
            </div>
        </div>
    );
}
