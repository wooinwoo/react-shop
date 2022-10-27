import { BrowserRouter, Route, Routes } from "react-router-dom";

import GetProductList from "./api/GetProductList";
import Header from "./Header";
import SideDrawer from "./components/SideDrawer";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import Footer from "./Footer";

function App() {
  GetProductList();
  return (
    <>
      {/* <SideDrawer /> */}
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
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
