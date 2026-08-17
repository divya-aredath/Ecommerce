"use client";

import { createContext, useState, ReactNode } from "react";
interface products {
    id: string;
    title: string;
    price: number;
    description?: string;
    category?: string;
    image?: string;
    thumbnail?: string;
}
interface cartitem extends products {
    quantity: number;
}   
interface CartContextType {
    cart: cartitem[];
    addToCart: (product: products) => void;
    removeFromCart: (productId: string) => void;
    // clearCart: () => void;
    incrementQuantity: (productId: string) => void;
    decrementQuantity: (productId: string) => void;
}   
const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<cartitem[]>([]);
    // const addToCart = (product: products) => {
    //       if (cart.find((item) => item.id === product.id))
    //       {
    //               setCart((prev) => 
    //                 {
    //                     const exisytingItem = prev.find((i) => i.id === product.id);
    //                     if (exisytingItem) {
    //                           return prev.map((i) =>
    //                           i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
    //                     );
    //                  } 
    //              return prev; });
    //       }
    //       else 
    //       {
    //         setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    //       }
    // };
    const addToCart = (product: products) => {

    const productImage = product.image || product.thumbnail || "";

    if (cart.find((item) => item.id === product.id)) {

        setCart((prev) => {
            const existingItem = prev.find(
                (i) => i.id === product.id
            );

            if (existingItem) {
                return prev.map((i) =>
                    i.id === product.id
                        ? {
                              ...i,
                              quantity: i.quantity + 1,
                              image: i.image || productImage,
                          }
                        : i
                );
            }

            return prev;
        });

    } else {

        setCart((prev) => [
            ...prev,
            {
                ...product,

                // THIS IS THE IMPORTANT LINE
                image: productImage,

                quantity: 1,
            },
        ]);
    }
};
    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((i) => i.id !== productId));
    };
    const incrementQuantity = (productId: string) => {
        setCart((prev) =>
            prev.map((i) =>
                i.id === productId ? { ...i, quantity: i.quantity + 1 } : i
            )
        );
    };
    const decrementQuantity = (productId: string) => {
        setCart((prev) =>
            prev.map((i) =>
                i.id === productId ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
            )
        );
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartContext;
    