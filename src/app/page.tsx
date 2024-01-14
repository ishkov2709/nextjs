"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  const goToPage = (path: string) => {
    route.push(path);
  };
  return (
    <>
      <h1>Home Page</h1>
      <div>
        <button onClick={() => goToPage("about")}>About</button>
        <button onClick={() => goToPage("profile")}>Profile</button>
        <button onClick={() => goToPage("blog")}>Blog</button>
        <button onClick={() => goToPage("products")}>Products</button>
      </div>
    </>
  );
}
