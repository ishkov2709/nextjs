import Link from "next/link";

export default function F4() {
  return (
    <>
      <h2>F4 Page</h2>
      <div>
        <Link href="/f1/f3">F3</Link>
        <Link href="/about">About</Link>
      </div>
    </>
  );
}
