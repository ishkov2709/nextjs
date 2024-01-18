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
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            fontWeight: 500,
            fontFamily: "sans-serif",
            background: "#515151cc",
            color: "#fff",
            padding: "10px 0",
          }}
        >
          <p>Views: {views}</p>
          <p>Likes: {likes}</p>
          <p>User: {user}</p>
        </div>
      </div>
    </Modal>
  );
}
