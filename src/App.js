import WebLayout from "./layouts/Web";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import PromisesPage from "./pages/Promises";
import FactCheckPage from "./pages/FactCheck";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<WebLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/promises" element={<PromisesPage />} />
          <Route path="/fact-check" element={<FactCheckPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
