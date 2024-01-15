"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing you order");

    router.push("/");
  };
  return (
    <>
      <h1>Order Product Page</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
