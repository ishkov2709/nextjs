interface IParams {
  params: {
    reviewId: string;
  };
}

export default function NotFound({ params }: IParams) {
  console.log(params);

  return (
    <div>
      <h2>Page Not Found</h2>
    </div>
  );
}
