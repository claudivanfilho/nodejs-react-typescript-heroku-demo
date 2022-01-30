import { Backspace } from "@material-ui/icons";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import PhoneDigits from "../components/PhoneDigits";
import { fetchPhonewords } from "../services/api.service";

const BaseLayout = () => {
  const [phonewords, setPhonewords] = useState([]);
  const [typedNumber, setTypedNumber] = useState("");

  useEffect(() => {
    typedNumber
      ? fetchPhonewords(typedNumber).then((res) => {
          setPhonewords(res);
        })
      : setPhonewords([]);
  }, [typedNumber]);

  return (
    <div className="h-screen pt-14">
      <Header />
      <main className="flex max-w-screen-xl mx-auto gap-9">
        <div className="flex flex-col w-1/2">
          <h1 className="my-3 text-2xl font-bold text-gray-600 uppercase">
            Type your number sequence
          </h1>
          <div className="flex items-center h-16 px-2 py-3 text-lg text-gray-600 uppercase">
            {/* <span className="font-bold">Number typed:</span> */}
            {typedNumber && (
              <div className="flex justify-between flex-grow">
                <span className="p-2 text-xl rounded-xl bg-emerald-100">{typedNumber}</span>
                <button onClick={() => setTypedNumber(typedNumber.slice(0, -1))}>
                  <Backspace fontSize="large" />
                </button>
              </div>
            )}
          </div>
          <div>
            <PhoneDigits onAdd={(letter: string) => setTypedNumber(`${typedNumber}${letter}`)} />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <h1 className="my-3 text-2xl font-bold text-gray-600 uppercase">
            Phonewords combinations
          </h1>
          <div className="mt-3 overflow-y-auto" style={{ height: "calc(100vh - 235px)" }}>
            <div className="flex flex-wrap ">
              {phonewords.map((word) => (
                <span key={word} className="p-2 m-3 text-white bg-green-800 rounded-lg">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
