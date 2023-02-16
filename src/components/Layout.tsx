import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SanityContextProvider from "./SanityContextProvider";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <SanityContextProvider>
      <Navbar />
      <div style={{ minHeight: "50vh" }}>{children}</div>
      <Footer />
    </SanityContextProvider>
  );
};

export default Layout;
