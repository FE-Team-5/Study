import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import "./styles/App.css";
import MainPage from "./pages/MainPage";
import NoPage from "./pages/NoPage";
import AboutPage from "./pages/AboutPage";
import PlanPage from "./pages/PlanPage";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <div className="wrap">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/plan" element={<PlanPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
