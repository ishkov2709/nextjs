"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [input, setInput] = useState<string>("");

  const navLinks = [
    { href: "/login", name: "Login" },
    { href: "/register", name: "Register" },
    { href: "/forgot-password", name: "Forgot Password" },
  ];
  return (
    <>
      <input
        type="text"
        onChange={({ target }) => setInput(target.value)}
        value={input}
      />
      <div style={{ display: "flex", gap: "12px" }}>
        {navLinks.map(({ href, name }) => {
          const isActive = pathname.startsWith(href);

          return (
            <Link
              href={href}
              key={name}
              style={{
                color: isActive ? "red" : "grey",
                textDecoration: "none",
              }}
            >
              {name}
            </Link>
          );
        })}
      </div>
      <>{children}</>
    </>
  );
}
