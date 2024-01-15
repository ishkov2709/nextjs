import { Metadata } from "next";

interface IParams {
  params: {
    productId: string;
  };
}

export const generateMetadata = async ({
  params,
}: IParams): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(params.productId);
    }, 2000);
  });

  return {
    title: `Product ${title}`,
  };
};

export default function Details({ params }: IParams) {
  return <h1>Details about {params.productId}</h1>;
}
