import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",

        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      <Link href={"/author"}>author</Link>
      <Link href={"/category"}>category</Link>
      <Link href={"/posts"}>posts</Link>
    </div>
  );
};

export default Navbar;
