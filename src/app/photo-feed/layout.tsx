import { ReactNode } from "react";

interface IPhotoFeedLayout {
  modal: ReactNode;
  children: ReactNode;
}

export default function PhotoFeedLayout({ modal, children }: IPhotoFeedLayout) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
