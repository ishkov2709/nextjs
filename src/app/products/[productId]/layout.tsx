import { ReactNode } from "react";

function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailtsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Product details");
  }
  return (
    <>
      {children}

      <h2>Features product</h2>
    </>
  );
}
