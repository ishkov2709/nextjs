export default function Products() {
  const arr = [1, 2, 3];
  return (
    <>
      <h1>Product List</h1>
      {arr.map((prod) => (
        <h2 key={prod}>Product {prod}</h2>
      ))}
    </>
  );
}
