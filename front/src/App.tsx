import "./index.css";

import { IntlProviderLocal } from "./context/IntlContextLocal";
import { LocaleProvider } from "./context/LocaleContext";
import BaseLayout from "./layouts/BaseLayout";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <LocaleProvider>
      <IntlProviderLocal>
        <BaseLayout>
          <MainPage />
        </BaseLayout>
      </IntlProviderLocal>
    </LocaleProvider>
  );
}
