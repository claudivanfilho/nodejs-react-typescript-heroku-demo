import "./index.css";

import { IntlProviderLocal } from "./context/IntlContextLocal";
import { LocaleProvider } from "./context/LocaleContext";
import BaseLayout from "./layouts/BaseLayout";

export default function App() {
  return (
    <LocaleProvider>
      <IntlProviderLocal>
        <BaseLayout />
      </IntlProviderLocal>
    </LocaleProvider>
  );
}
