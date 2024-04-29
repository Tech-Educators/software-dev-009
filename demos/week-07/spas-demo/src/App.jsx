import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

export default function App() {
  return (
    <>
      <header>
        <h1>SPAs and Route Demo</h1>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}
