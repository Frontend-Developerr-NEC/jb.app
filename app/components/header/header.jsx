"use client";

import "./header.css";
import { React, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
function header() {
  const [username, setUsername] = useState("");
  const [navbar, setnavbar] = useState("close");
  const router = useRouter();

  // Checks if user is logged in and loads user data, else redirects to register page
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userString = localStorage.getItem("user");
      if (!userString) {
        router.replace("/");
      } else {
        try {
          const user = JSON.parse(userString);
          setUsername(user.username);
        } catch {
          // If corrupted data, redirect to register
          localStorage.removeItem("user");
          router.replace("/");
        }
      }
      console.log(typeof window !== "undefined");
    }
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      router.replace("/");
    }
  };

  function navbarToggle() {
    let txt = document.getElementById("navbarToggle");
    let toggleNavbar = document.getElementById("toggleNavbar");
    txt.textContent = "X";
    if (window.innerWidth <= 600) {
      if (navbar == "open") {
        txt.textContent = "=";
        toggleNavbar.style.transform = "";
        setnavbar("close");
      } else if (navbar == "close") {
        txt.textContent = "X";
        toggleNavbar.style.transform = "translateX(-0%)";
        setnavbar("open");
      }
    }
  }

  function closeNavbar() {
    let toggleNavbar = document.getElementById("toggleNavbar");
    let txt = document.getElementById("navbarToggle");
    // alert("juuij");
    if (window.innerWidth <= 600) {
      if (navbar == "open") {
        toggleNavbar.style.transform = "translateX(-110%)";
        txt.textContent = "=";
      }
    }
  }

  return (
    <>
      <header>
        <h3>Jb.blog</h3>
        <button type="button" id="navbarToggle" onClick={navbarToggle}>
          =
        </button>
        <nav id="toggleNavbar">
          <li>
            <Link href="/home" className="closeNavbar" onClick={closeNavbar}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/home/about"
              className="closeNavbar"
              onClick={closeNavbar}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/home/sample-coding"
              className="closeNavbar"
              onClick={closeNavbar}
            >
              CodingTest
            </Link>
          </li>
          <li>
            <Link
              href="/home/movies"
              className="closeNavbar"
              onClick={closeNavbar}
            >
              MoviesHub
            </Link>
          </li>

          <button type="button" onClick={handleLogout}>
            logout
          </button>
        </nav>
      </header>
    </>
  );
}

export default header;
