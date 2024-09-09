'use client';

import { useContext } from 'react';
import Image from 'next/image';

import Paragraph from '../../atoms/Parapraph';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

import MovieSchema from '@/schemas/MovieSchema';
import { CartContextProvider } from '@/app/context/CartContext';
import { formatToBRL } from '@/app/lib/format';

interface MovieList {
    movies: MovieSchema[];
}

export default function MovieList({ movies }: MovieList) {
    const { addItem, filterItemsById } = useContext(CartContextProvider);

    return (
        <div className="flex justify-center xl:justify-start flex-wrap gap-16">
            {movies.map((movie) => (
                <div
                    className="bg-white w-full max-w-[21.125rem] flex flex-col items-center gap-8 p-16 rounded"
                    key={movie.id}
                >
                    <Image
                        className="w-[9.187rem] h-[11.75rem]"
                        priority
                        width={147}
                        height={188}
                        src={movie.image}
                        alt={movie.title}
                    />

                    <Heading config={{ fontWeight: 'font-bold', fontSize: 'text-12', color: 'text-dark2' }}>
                        {movie.title}
                    </Heading>

                    <Paragraph
                        config={{
                            fontWeight: 'font-bold',
                            fontSize: 'text-16',
                            color: 'text-dark1',
                        }}
                    >
                        {formatToBRL(movie.price)}
                    </Paragraph>

                    <Button
                        onClick={() => addItem(movie)}
                        config={{
                            customClassName: 'gap-12',
                            variant: `${filterItemsById(movie.id).length > 0 ? 'success' : 'primary'}`,
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <Icon config={{ color: 'white', icon: 'shopping-cart', size: 13 }} />
                            <span className="text-white text-12 font-regular">{filterItemsById(movie.id).length}</span>
                        </div>

                        <Paragraph
                            config={{
                                customClassName: 'uppercase',
                                fontWeight: 'font-bold',
                                fontSize: 'text-12',
                                color: 'text-white',
                            }}
                        >
                            Adicionar ao carrinho
                        </Paragraph>
                    </Button>
                </div>
            ))}
        </div>
    );
}
