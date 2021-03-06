import { LANGS } from "../config/constants";
import useLocale from "../hooks/useLocale";

const Header = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="fixed top-0 z-10 w-full py-3 text-white bg-green-700">
      <div className="flex justify-between max-w-screen-xl px-5 mx-auto 2xl:px-0">
        <h1 className="text-2xl font-bold">
          <span>PhoneWords</span>
        </h1>
        <select
          className="px-2 bg-transparent"
          value={locale}
          onChange={(val) => setLocale(val.target.value)}
        >
          {LANGS.map((l) => (
            <option key={l} value={l}>
              {l.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
