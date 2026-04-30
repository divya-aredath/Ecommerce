"use client";
import { useContext, useState, FormEventHandler } from "react";
import Image from "next/image";
import img from "../assets/sign.jpg";
import { AuthContext } from "../context/LoginContext";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";




export default function Login() {

  const auth = useContext(AuthContext);
  const router = useRouter();

  if (!auth) throw new Error("AuthContext missing");

  const { login } = auth;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();

    const success = login(email, password);

    if (success) {
      router.push("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className={`container ${styles.login}`}>
      <div className={styles.loginImage}></div>
              <h5 className="mt-5">User Login</h5>
              <Image
                src={img}
                alt="Login Image" width={100}height={50}></Image>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} className={`${styles.form} mt-5`}> 
        

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

        <button type="submit" className={styles.button}>
          Login
        </button>
         <button type="submit" className={styles.button}>
          Continue as Guest
        </button>
      </form>
    </div>
  );
}
