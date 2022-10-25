import { BrowserRouter, Route, Routes } from "react-router-dom";

import GetProductList from "./api/GetProductList";
import Header from "./Header";
import Main from "./pages/Main";
import Footer from "./Footer";

function App() {
  GetProductList();
  return (
    <>
      <BrowserRouter>
        <Header />
        <section className="pt-16">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
