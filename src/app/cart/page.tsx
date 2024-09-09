'use client';

import { useCallback, useContext } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { BaseLayoutContent } from '../components/base/BaseLayout';
import Paragraph from '../components/atoms/Parapraph';
import Heading from '../components/atoms/Heading';
import Button from '../components/atoms/Button';
import Icon from '../components/atoms/Icon';

import EmptyState from '../components/organism/EmptyState';

import { CartContextProvider } from '../context/CartContext';

import MovieSchema from '@/schemas/MovieSchema';

import { formatToBRL } from '../lib/format';

export default function Cart() {
    const { removeSingleItemById, removeItemById, getUniqueItems, clearItems, getAmount, addItem, cart } =
        useContext(CartContextProvider);

    const router = useRouter();

    const finishPurchase = useCallback(() => {
        router.push('/purchase-completed');
        setTimeout(() => clearItems(), 30);
    }, [clearItems, router]);

    const calculateSubTotal = useCallback((item: MovieSchema): number => item.price * getAmount(item.id), [getAmount]);

    const calculateTotal = useCallback((): number => cart.reduce((total, item) => total + item.price, 0), [cart]);

    const decreaseAmount = useCallback((id: number) => removeSingleItemById(id), [removeSingleItemById]);

    const deleteItem = useCallback((id: number) => removeItemById(id), [removeItemById]);

    const addAmount = useCallback((movie: MovieSchema) => addItem(movie), [addItem]);

    return (
        <BaseLayoutContent>
            <div className="bg-white p-16 md:p-24 w-full flex flex-col gap-21 md:gap-24">
                {getUniqueItems().length > 0 && (
                    <header className="hidden w-full md:flex">
                        <Heading
                            config={{
                                customClassName: 'uppercase md:w-[14.4rem]',
                                fontWeight: 'font-bold',
                                fontSize: 'text-14',
                                color: 'text-gray',
                            }}
                        >
                            Produto
                        </Heading>
                        <Heading
                            config={{
                                customClassName: 'uppercase md:w-[16.7rem]',
                                fontWeight: 'font-bold',
                                fontSize: 'text-14',
                                color: 'text-gray',
                            }}
                        >
                            QTD
                        </Heading>
                        <Heading
                            config={{
                                customClassName: 'uppercase',
                                fontWeight: 'font-bold',
                                fontSize: 'text-14',
                                color: 'text-gray',
                            }}
                        >
                            Subtotal
                        </Heading>
                    </header>
                )}

                {getUniqueItems().length > 0 ? (
                    getUniqueItems().map((item) => (
                        <section className="flex gap-16 relative" key={item.id}>
                            <Image
                                className="w-[4rem] h-[5.125rem] md:w-[91px] md:h-[114px]"
                                priority
                                width={64}
                                height={82}
                                src={item.image}
                                alt={item.title}
                            />

                            <div className="flex flex-col md:flex-row justify-between md:items-center overflow-x-auto">
                                <div className="flex md:flex-col gap-32 md:gap-8 md:w-[7.75rem]">
                                    <Heading
                                        config={{
                                            customClassName: 'max-w-[6.375rem]',
                                            fontWeight: 'font-bold',
                                            fontSize: 'text-14',
                                            color: 'text-dark1',
                                        }}
                                    >
                                        {item.title}
                                    </Heading>

                                    <Paragraph
                                        config={{
                                            customClassName: 'text-nowrap',
                                            fontWeight: 'font-bold',
                                            fontSize: 'text-16',
                                            color: 'text-dark1',
                                        }}
                                    >
                                        {formatToBRL(item.price)}
                                    </Paragraph>
                                </div>

                                <div className="flex md:items-center gap-16">
                                    <div className="flex items-center md:w-[15.75rem]">
                                        <button
                                            className="w-max cursor-pointer"
                                            onClick={() => decreaseAmount(item.id)}
                                        >
                                            <Icon
                                                config={{
                                                    color: 'blue2',
                                                    icon: 'minus',
                                                    size: 18,
                                                }}
                                            />
                                        </button>

                                        {/* TODO: quando o componente de input estiver disponivel, substituir aqui, e remover o comentário */}
                                        <input
                                            className={`w-[3.687rem] h-[1.625rem] mx-10 text-center text-dark1 font-regular text-14 rounded border-1 border-gray`}
                                            value={`${getAmount(item.id)}`}
                                            type="text"
                                            readOnly
                                        />

                                        <button className="w-max cursor-pointer" onClick={() => addAmount(item)}>
                                            <Icon
                                                config={{
                                                    color: 'blue2',
                                                    icon: 'plus',
                                                    size: 18,
                                                }}
                                            />
                                        </button>
                                    </div>

                                    <div className="flex flex-col">
                                        <Paragraph
                                            config={{
                                                customClassName: 'uppercase md:hidden',
                                                fontWeight: 'font-bold',
                                                fontSize: 'text-12',
                                                color: 'text-gray',
                                            }}
                                        >
                                            subtotal
                                        </Paragraph>

                                        <Paragraph
                                            config={{
                                                customClassName: 'uppercase text-nowrap',
                                                fontWeight: 'font-bold',
                                                fontSize: 'text-16',
                                                color: 'text-dark1',
                                            }}
                                        >
                                            {formatToBRL(calculateSubTotal(item))}
                                        </Paragraph>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="w-max self-start md:self-center cursor-pointer md:absolute -right-[0]"
                                onClick={() => deleteItem(item.id)}
                            >
                                <Icon
                                    config={{
                                        color: 'blue2',
                                        icon: 'trash',
                                        size: 18,
                                    }}
                                />
                            </button>
                        </section>
                    ))
                ) : (
                    <EmptyState />
                )}

                {cart.length > 0 && (
                    <footer className="flex flex-col gap-21 md:gap-24">
                        <div className="w-full h-[1px] bg-gray block" />

                        <div className="w-full flex flex-col-reverse md:flex-row justify-between">
                            <Button
                                onClick={finishPurchase}
                                config={{
                                    customClassName:
                                        'uppercase text-14 md:text-12 font-bold w-full max-w-full md:max-w-[10.812rem]',
                                    variant: 'primary',
                                }}
                            >
                                Finalizar Pedido
                            </Button>

                            <div className="flex justify-between md:justify-start items-center gap-32 mb-16 md:mb-[0]">
                                <Paragraph
                                    config={{
                                        customClassName: 'uppercase',
                                        fontWeight: 'font-bold',
                                        fontSize: 'text-14',
                                        color: 'text-gray',
                                    }}
                                >
                                    total
                                </Paragraph>

                                <Paragraph
                                    config={{
                                        customClassName: 'uppercase text-nowrap',
                                        fontWeight: 'font-bold',
                                        fontSize: 'text-24',
                                        color: 'text-dark1',
                                    }}
                                >
                                    {formatToBRL(calculateTotal())}
                                </Paragraph>
                            </div>
                        </div>
                    </footer>
                )}
            </div>
        </BaseLayoutContent>
    );
}
