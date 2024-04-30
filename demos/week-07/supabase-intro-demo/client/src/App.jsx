import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtCard from "./components/ArtCard";
import { artworksData } from "./utils/fetchArtworks";
import "./App.css";

export default function App() {
  // console.log(artworksData);
  return (
    <>
      <Header />

      <div>
        {artworksData.map((piece) => (
          <ArtCard
            key={piece.id}
            title={piece.title}
            author={piece.author}
            url={piece.url}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
