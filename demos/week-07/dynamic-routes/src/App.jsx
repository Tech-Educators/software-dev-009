import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserPage from "./pages/UserPage";
import Animals from "./pages/Animals";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* username is a param because we put : in front of it */}
          <Route path="/users/:username" element={<UserPage />}>
            <Route path="" element={<p>This will show on /users/username</p>} />
            <Route path="posts" element={<p>This is the posts part</p>} />
            <Route path="likes" element={<p>This is the likes part</p>} />
          </Route>

          <Route path="/animals" element={<Animals />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
