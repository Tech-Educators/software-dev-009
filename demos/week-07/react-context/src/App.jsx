import CookieClicker from "./components/CookieClicker";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CookieProvider } from "./context/CookieContext";

export default function App() {
  return (
    <CookieProvider>
      {/* this div is the "children" we reference in the CookieContext.jsx */}
      <div>
        <Header />
        <CookieClicker />
        <Footer />
      </div>
    </CookieProvider>
  );
}
