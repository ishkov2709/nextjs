import Link from "next/link";

export default function Products() {
  const arr = [1, 2, 3];
  return (
    <>
      <h1>Product List</h1>
      <div>
        {arr.map((prod) => (
          <Link
            href={`/products/${prod}`}
            key={prod}
            style={{ display: "block" }}
          >
            Product {prod}
          </Link>
        ))}
      </div>
    </>
  );
}
