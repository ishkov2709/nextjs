import { getDataById } from "@/app/photo-feed/[id]/page";
import Modal from "@/components/modal";
import Image from "next/image";

export default async function PhotoModal({ params }: IParamsId) {
  const {
    hits: [{ largeImageURL, views, likes, user, tags }],
  }: IDataById = await getDataById(params.id);

  return (
    <Modal>
      <div>
        <Image
          priority={true}
          decoding="async"
          src={largeImageURL}
          width={600}
          height={480}
          alt={tags}
          style={{ display: "block" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            fontWeight: 600,
            fontFamily: "sans-serif",
            backgroundColor: "#fff",
            padding: "10px 8px",
          }}
        >
          <p>{views}</p>
          <p>{likes}</p>
          <p style={{ color: "yellowgreen" }}>{user}</p>
        </div>
      </div>
    </Modal>
  );
}
