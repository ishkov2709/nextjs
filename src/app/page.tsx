"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
        <Link href="/profle">Profile</Link>
        <Link href="/about">About</Link>
      </div>
    </>
  );
}
