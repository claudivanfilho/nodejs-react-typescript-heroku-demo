import { ReactNode } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

const BaseLayout = ({ children }: { children: ReactNode }) => (
  <div className="h-screen pt-14">
    <Header />
    <main className="flex max-w-screen-xl px-5 mx-auto">{children}</main>
    <Footer />
  </div>
);

export default BaseLayout;
