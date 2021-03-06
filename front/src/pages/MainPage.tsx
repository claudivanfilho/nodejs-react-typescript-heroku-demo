import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";

import Loading from "../components/Loading";
import PhoneDigits from "../components/PhoneDigits";
import PhonewordsListing from "../components/PhonewordsListing";
import TypedNumber from "../components/TypedNumber";
import { fetchPhonewords } from "../services/api.service";

export default function MainPage() {
  const [phonewords, setPhonewords] = useState([]);
  const [typedNumber, setTypedNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const { formatMessage } = useIntl();

  useEffect(() => {
    if (typedNumber) {
      setLoading(true);
      fetchPhonewords(typedNumber)
        .then((res) => {
          setPhonewords(res);
        })
        .finally(() => setLoading(false));
    } else {
      setPhonewords([]);
    }
  }, [typedNumber]);

  return (
    <div className="flex flex-col w-full lg:flex-row lg:gap-6">
      <div className="flex flex-col w-full lg:w-1/2">
        <h1 className="my-3 text-2xl font-bold tracking-wide text-gray-600">
          {formatMessage({ id: "phone-digits-title" })}
        </h1>
        <div className="flex items-center h-16 px-2 py-3 text-lg">
          <TypedNumber value={typedNumber} onUpdate={setTypedNumber} />
        </div>
        <div>
          <PhoneDigits onAdd={(letter: string) => setTypedNumber(`${typedNumber}${letter}`)} />
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2">
        <h1 className="my-3 text-2xl font-bold tracking-wide text-gray-600">
          {formatMessage({ id: "phoneword-combinations-title" })}
        </h1>
        {loading ? (
          <div className="flex items-center justify-center w-full h-full">
            <Loading size={40} />
          </div>
        ) : (
          <div className="mt-3 overflow-y-auto h-2/3 lg:h-4/5">
            <PhonewordsListing words={phonewords} />
          </div>
        )}
      </div>
    </div>
  );
}
