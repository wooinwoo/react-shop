import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      {/* <BrowserRouter>
        <Header />
        <Routes></Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;

{
  /* <Route path="/" element={<WordCloudPage />} />
          <Route path="/main" element={<WordCloudPage />} />
          <Route path="/compare" element={<ComparedWordCloudPage />} />
          <Route path="/bills" element={<Bills />} /> */
}
