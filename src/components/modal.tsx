"use client";

import { useRouter } from "next/navigation";
import {
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";

type ModalProps = {
  children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const overlay = useRef(null);
  const router = useRouter();

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current) {
        router.back();
      }
    },
    [overlay, router]
  );

  useEffect(() => {
    const body = document.body;
    body.style.overflowY = "hidden";
    body.style.position = "relative";

    return () => {
      body.style.overflowY = "visible";
    };
  });

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#000000cc",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",

        zIndex: 10,

        animation: "opacity 250ms linear",
      }}
      ref={overlay}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          animation: "opacity 350ms linear",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
