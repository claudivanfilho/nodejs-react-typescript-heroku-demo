import { Route, Routes } from "react-router-dom";

import { IntlProviderLocal } from "./context/IntlContextLocal";
import { LocaleProvider } from "./context/LocaleContext";
import BaseLayout from "./layouts/BaseLayout";

export default function App() {
  return (
    <LocaleProvider>
      <IntlProviderLocal>
        <Routes>
          <Route path="/" element={<BaseLayout />} />
        </Routes>
      </IntlProviderLocal>
    </LocaleProvider>
  );
}
