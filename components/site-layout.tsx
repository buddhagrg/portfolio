import React from "react";

import { Footer } from "./footer";
import { Header } from "./header";

export const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
