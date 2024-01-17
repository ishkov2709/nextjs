"use client";

import { notFound } from "next/navigation";

interface IParams {
  params: {
    productId: string;
    reviewId: string;
  };
}

function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({ params }: IParams) {
  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error("Error loading");
  // }

  if (parseInt(params.reviewId) > 1000) {
    return notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
