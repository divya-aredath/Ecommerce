"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import CartContext from "@/app/context/CartContext";

export default function ProductDetails({ product }: any) {
    const context = useContext(CartContext);
    const router = useRouter();

    if (!context) {
        throw new Error("CartContext is not available");
    }

    const { addToCart } = context;

    function onAddToCart() {
        addToCart(product);
        router.push("/cart");
    } 
 return (
            <div className="container mt-15 d-flex flex-column">
                <div className="mb-3 d-flex align-items-center d-flex flex-column productDetails">
                <img src={product.image} alt="product Image" style={{ width: '200px', height: '200px' }} />
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button className="btn btn-primary addbutton  mb-5" 
                      onClick={() => onAddToCart()} >Add to Cart</button>  
                </div>
            </div>
        );
    
}






