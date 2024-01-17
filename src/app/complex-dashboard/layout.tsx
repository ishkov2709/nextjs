import { ReactNode } from "react";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: ReactNode;
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
  login: ReactNode;
}) {
  const elementStyle = {
    width: "calc(100% / 2)",
  };

  const isLoggenin = false;
  return (
    <>
      <div>{children}</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={elementStyle}>{login}</div>
        {isLoggenin && (
          <>
            <div style={elementStyle}>{users}</div>
            <div style={elementStyle}>{revenue}</div>
            <div style={elementStyle}>{notifications}</div>
          </>
        )}
      </div>
    </>
  );
}
