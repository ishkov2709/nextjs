import Image from "next/image";
import "./style.css";
import Link from "next/link";

const getData = async () => {
  const res = await fetch(
    "https://pixabay.com/api/?key=35683515-755808cb63fe444becf5469f8"
  );

  return res.json();
};

export default async function PhotoFeed() {
  const data = await getData();

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Photo Feed</h1>
      <div className="imgWrapper">
        {data.hits.map((el: { id: number; largeImageURL: string }) => (
          <Link key={el.id} href={`/photo-feed/${el.id}`} scroll={false}>
            <Image
              src={el.largeImageURL}
              alt="img"
              width={220}
              height={180}
              className="img"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
