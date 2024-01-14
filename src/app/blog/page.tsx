"use client";

import { useRouter } from "next/navigation";

export default function Blog() {
  const route = useRouter();

  const goToPage = (path: string) => {
    route.push(path);
  };

  return (
    <div>
      <h1>Blog</h1>
      <div>
        <button onClick={() => goToPage("blog" + "/" + "first")}>First</button>
        <button onClick={() => goToPage("blog" + "/" + "second")}>
          Second
        </button>
      </div>
    </div>
  );
}
