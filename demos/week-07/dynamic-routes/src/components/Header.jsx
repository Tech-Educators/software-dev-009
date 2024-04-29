import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Dynamic Routes init</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/animals">Animals</Link>
      </nav>
    </header>
  );
}
