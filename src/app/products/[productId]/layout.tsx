import { ReactNode } from "react";

export default function ProductDetailtsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}

      <h2>Features product</h2>
    </>
  );
}
