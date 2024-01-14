import { notFound } from "next/navigation";

interface IParams {
  params: {
    productId: string;
    reviewId: string;
  };
}

export default function ReviewDetail({ params }: IParams) {
  if (parseInt(params.reviewId) > 1000) {
    return notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
