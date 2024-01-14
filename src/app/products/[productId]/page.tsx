interface IParams {
  params: {
    productId: string;
  };
}

export default function Details({ params }: IParams) {
  return <h1>Details about {params.productId}</h1>;
}
