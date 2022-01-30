import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { fetchPhonewords } from "../services/api.service";

const BaseLayout = () => {
  const [phonewords, setPhonewords] = useState([]);

  useEffect(() => {
    fetchPhonewords("23").then((res) => {
      setPhonewords(res);
    });
  }, []);

  return (
    <div className="h-screen pt-14">
      <Header />
      <main className="overflow-y-auto" style={{ height: "calc(100vh - 135px)" }}>
        {JSON.stringify(phonewords)}
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
