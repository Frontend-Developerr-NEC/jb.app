"use client";
// import Image from "next/image";
import styles from "./page.module.css";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Redirect if user is already logged in (client side)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      if (user) {
        router.replace("/home");
      }
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) return;

    // Store user data securely (never store sensitive info plainly in production)
    const user = { username, password, loggedInAt: Date.now() };
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
      router.replace("/home");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form
        onSubmit={handleSubmit}
        className={styles.loginForm}
        autoComplete="off"
      >
        <h1>Register</h1>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
            required
            autoComplete="off"
            autoFocus
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
            required
            autoComplete="new-password"
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
