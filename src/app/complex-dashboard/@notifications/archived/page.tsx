"use client";

import Card from "@/components/card";
import Link from "next/link";

export default function Archived() {
  return (
    <Card>
      <p>Archived</p>
      <Link href="/complex-dashboard">Dashboard</Link>
    </Card>
  );
}
