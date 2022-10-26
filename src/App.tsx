import { BrowserRouter, Route, Routes } from "react-router-dom";

import GetProductList from "./api/GetProductList";
import Header from "./Header";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./Footer";

function App() {
  GetProductList();
  return (
    <>
      <BrowserRouter>
        <Header />
        <section className="pt-16">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/fation" element={<CategoryPage keyword="패션" />} />
            <Route
              path="/accessory"
              element={<CategoryPage keyword="액세서리" />}
            />
            <Route
              path="/digital"
              element={<CategoryPage keyword="디지털" />}
            />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
