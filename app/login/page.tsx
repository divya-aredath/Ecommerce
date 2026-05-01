"use client";
import { useContext, useState, FormEventHandler } from "react";
import Image from "next/image";
import img from "../assets/sign.jpg";
import { AuthContext } from "../context/LoginContext";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import CartContext from "../context/CartContext";




export default function Login() {

  const auth = useContext(AuthContext);
  const Context = useContext(CartContext);
  const router = useRouter();

  if (!auth) throw new Error("AuthContext missing");

  const { login } = auth;
  const { cart } = Context || { cart: [] };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleSubmit = (e:any) => {
  e.preventDefault();

    const success = login(email, password);

    if (success) {
      if(cart.length > 0) {
        router.push("/cart");
      } else {
        router.push("/products");
      }
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className={`container ${styles.login}`}>
     
              <h5 className="font-weight-bold">User Login</h5>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form  className={`${styles.form} mt-10`}> 
        

        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}

        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" className={styles.button} onClick={handleSubmit}>
          Login
        </button>
         <button type="button" className={styles.button} onClick={() => router.push("/products")}>
          Continue as Guest
        </button>
      </form>
    </div>
  );
}
