import Footer from "../components/Footer";
import Header from "../components/Header";
import MainPage from "../pages/MainPage";

const BaseLayout = () => (
  <div className="h-screen pt-14">
    <Header />
    <main className="flex max-w-screen-xl px-5 mx-auto">
      <MainPage />
    </main>
    <Footer />
  </div>
);

export default BaseLayout;
