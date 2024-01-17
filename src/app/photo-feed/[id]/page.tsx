import Image from "next/image";

export const getDataById = async (id: string) => {
  const res = await fetch(
    `https://pixabay.com/api/?key=35683515-755808cb63fe444becf5469f8&id=${id}`
  );

  return res.json();
};

export default async function ImagePage({ params }: IParamsId) {
  const {
    hits: [{ largeImageURL, views, likes, user, tags }],
  }: IDataById = await getDataById(params.id);

  return (
    <div style={{ padding: "20px 0", textAlign: "center" }}>
      <Image
        priority={true}
        decoding="async"
        src={largeImageURL}
        width={600}
        height={480}
        alt={tags}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          fontWeight: 600,
          fontFamily: "sans-serif",
        }}
      >
        <p>{views}</p>
        <p>{likes}</p>
        <p style={{ color: "yellowgreen" }}>{user}</p>
      </div>
    </div>
  );
}
