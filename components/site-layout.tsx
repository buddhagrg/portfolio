import React from "react";

import { Header } from "./header";
import { Footer } from "./footer";

export const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
