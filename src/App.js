import WebLayout from "./layouts/Web";
import PromiseLayout from "./layouts/Promise";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import PromisesPage from "./pages/Promises";
import PromisePage from "./pages/Promise";
import FactCheckPage from "./pages/FactCheck";
import AOS from "aos";
import 'aos/dist/aos.css';

AOS.init();

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<WebLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/promises" element={<PromisesPage />} />
          <Route path="/fact-check" element={<FactCheckPage />} />
          <Route element={<PromiseLayout />}>
            <Route path="/promise" element={<PromisePage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
