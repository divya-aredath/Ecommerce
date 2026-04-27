"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import CartContext from "../context/CartContext";
import "./cart.css";
import { FaTrash } from "react-icons/fa";

interface cartitem {
  id: string | number;
  title: string;
  price: number;
  image: string | undefined;
  quantity: number;
}

export default function CartPage() {
  const router = useRouter();
  const context = useContext(CartContext);

  if (!context) {
    return <div>Cart context not available</div>;
  }
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = context;
  function onDelete(productId: string) {
    removeFromCart(productId);
  }
  function IncrementQty(productId: any):void {
    incrementQuantity(productId);
  }
  function decrementQty(productId: any):void {
    decrementQuantity(productId);
  }
  const total = getTotal(cart);
    return (
        <div className="container mt-15 d-flex flex-column">
            <h1>Cart Page</h1>
            {cart.length === 0 && (
                     <p >Your cart is empty.</p> )}
            {cart.map((item) => (
                <div key={item.id} className="card mb-3">
                    <div className="row mt-5 g-0 mb-4 d-flex align-items-center flex-row ">
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src={item.image} className="product-image" alt={item.title} />
                        </div>
                        <div className="col-md-8 d-flex flex-column align-items-center">
                            <div className="card-body d-flex flex-row gap-3 align-items-center">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="price">Price: ${item.price}</p>
                                <div className="quantity-controls d-flex flex-row align-items-center">
                                    <button className="btn btn-secondary "  onClick={()=>decrementQty(item.id)}>-</button>
                                        <input type="number" className="form-control quantity-input" value={item.quantity} readOnly />
                                     <button className="btn btn-secondary" onClick={()=>IncrementQty(item.id)}>+</button>
                               </div>
                                <button className="btn btn-danger mt-3" onClick={() => onDelete(item.id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="total-price mt-4">
                    {cart.length > 0 && (
                     <p>Total price for {cart.reduce((sum, item) => sum + item.quantity, 0)} items: ${total}</p>
                    )}
                    {cart.length > 0 && (
                    <button className="btn btn-primary mt-3" onClick={() => alert("Proceeding to checkout...")}>
                        Checkout
                    </button>)}
                    <button className="btn btn-secondary mt-3 ms-2" onClick={() => router.push("/products")}>
                      Continue Shopping
                    </button>
            </div>
        </div>
    );
}
function getTotal(cart: any[]): number {
  let total = 0;
//   const roundToTwoDecimals;

  for (const item of cart) {
    total += item.price * item.quantity;
  }

  return Number(total.toFixed(2));
}