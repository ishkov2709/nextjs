interface IParams {
  params: {
    reviewId: string;
  };
}

export default function NotFound({ params }: IParams) {
  return (
    <div>
      <h2>Page Not Found</h2>
    </div>
  );
}
