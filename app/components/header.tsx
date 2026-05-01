"use client";
import Link from "next/link";
import styles from './header.module.css';
import logo from "@/app/assets/logo.webp";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import CartContext from "../context/CartContext";
import { useContext } from "react";
import { useAuth } from "../context/LoginContext";
export default function Header() {
    const pathname = usePathname();
    const context = useContext(CartContext);
    const { user ,logout} = useAuth();
    const [isClient, setIsClient] = useState(false);

            useEffect(() => {
                setIsClient(true);
            }, []);

const cartItemCount = isClient && context?.cart ? context.cart.reduce((total: number, item: any) => total + item.quantity, 0): 0;

    return ( 
        <div className="container d-flex">
            <header className={styles.header}>
                 <Image src={logo} alt="Store Logo" className={styles.logo} width={40} height={40} />
                   <h4 className={styles.title}>E-commerce Store</h4> 
                    <nav className={`navbar ${styles.menuitem}`}>
                        <ul className={`nav-links ${styles.menu}`}>
                             <li className={pathname === "/" ? styles.active : ""}>
                                <Link  href="/">Home</Link>
                             </li>
                             <li className={pathname === "/products" ? styles.active : ""}>
                                 <Link href="/products">Products</Link>
                             </li>
                              <li className={pathname === "/contactus" ? styles.active : ""}>
                                  <Link href="/contactus">Contact Us</Link>
                              </li>
                              <div className={styles.cartWrapper}>
                                     <Link href="/cart" className={styles.cart}>
                                           Cart<FaShoppingCart size={20} />
                                   </Link>
                                 <span className={styles.cartCount}>{cartItemCount}</span>
                             </div>
                              
                              <li className={pathname === "/aboutus" ? styles.active : ""}>
                                  <Link href="/aboutus">About Us</Link>
                            </li> 
                            {user ? (
                                <>
                                    <div className="d-flex flex-column align-items-center">
                                        <h5 className="me-3" style={ { fontSize: '10px' }}>
                                            Welcome, {user.email}
                                        </h5>
                                        <li className={pathname === "/" ? styles.active : ""}>
                                            <Link href="/" onClick={logout}>
                                                Logout
                                            </Link>
                                        </li>
                                    </div>
                                </>
                            ) : (
                                <li className={pathname === "/login" ? styles.active : ""}>
                                    <Link href="/login">Login</Link>
                                </li>
                            )}
                        </ul>
                    </nav>
          </header>
      </div>
    );   
}