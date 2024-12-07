import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage.jsx";

import PageNotFound from "./components/pages/PAgeNotFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route for HomePage */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
