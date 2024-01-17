import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  const cardStyle = {
    margin: "6px",
    padding: "20px",
    border: "1px solid yellowgreen",
  };
  return <div style={cardStyle}>{children}</div>;
};

export default Card;
