
"use client";
import Link from "next/link";
import "@/styles/navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="navbar-logo">My UI Test</div>
                <div className="navbar-links">
                    <Link href="/">Home</Link>
                    <Link href="/test">Test</Link>
                    <Link href="/about">About</Link>
                </div>
            </div>
        </nav>
    );
}
