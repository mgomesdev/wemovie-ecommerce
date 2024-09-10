'use client';

import { createContext, useCallback, useState } from 'react';

import MovieSchema from '@/schemas/MovieSchema';

interface CartContextProviderProps {
    removeSingleItemById: (id: number) => void;
    removeItemsById: (id: number) => void;
    filterItemsById: (id: number) => MovieSchema[];
    getUniqueItems: () => MovieSchema[];
    clearItems: () => void;
    getAmount: (id: number) => number;
    addItem: (item: MovieSchema) => void;
    cart: MovieSchema[];
}

export const CartContextProvider = createContext({} as CartContextProviderProps);

interface CartContextProps {
    children: React.ReactNode;
}

export default function CartContext({ children }: CartContextProps) {
    const [cart, setCart] = useState<MovieSchema[]>([]);

    const removeSingleItemById = useCallback((id: number) => {
        setCart((prevCart) => {
            const index = prevCart.findLastIndex((item) => item.id === id);

            if (index === -1) {
                return prevCart;
            }

            const updatedCart = [...prevCart];
            updatedCart.splice(index, 1);

            return updatedCart;
        });
    }, []);

    const removeItemsById = useCallback((id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }, []);

    const filterItemsById = useCallback((id: number) => cart.filter((item) => item.id == id), [cart]);

    const getUniqueItems = useCallback(() => {
        const uniqueItemsMap = new Map<number, MovieSchema>();

        cart.forEach((item) => {
            uniqueItemsMap.set(item.id, item);
        });

        return Array.from(uniqueItemsMap.values());
    }, [cart]);

    const clearItems = useCallback(() => setCart([]), []);

    const getAmount = useCallback((id: number) => filterItemsById(id).length, [filterItemsById]);

    const addItem = useCallback((item: MovieSchema) => setCart((prev) => [...prev, item]), []);

    return (
        <CartContextProvider.Provider
            value={{
                removeSingleItemById,
                removeItemsById,
                filterItemsById,
                getUniqueItems,
                clearItems,
                getAmount,
                addItem,
                cart,
            }}
        >
            {children}
        </CartContextProvider.Provider>
    );
}
