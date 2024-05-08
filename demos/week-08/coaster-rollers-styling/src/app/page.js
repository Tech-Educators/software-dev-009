import Link from "next/link";
import Button from "../components/Button"; //imported from the components folder
export default function Home() {
  return (
    <>
      <header>
        <h1>Coaster Rollers</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
      {/* example of a React component */}
      <Button />
      <main>
        <section>
          <img
            src="rollercoaster.jpg"
            alt="rollercoaster"
            width={300}
            height={200}
          />
          <article>
            <p>
              A roller coaster is a type of amusement ride employing a form of
              elevated railroad track that carries passengers on a train through
              tight turns, steep slopes, and other elements designed to produce
              a thrilling experience.
            </p>
          </article>
        </section>
        <section>
          <img
            src="rollercoaster.jpg"
            alt="rollercoaster"
            width={300}
            height={200}
          />
          <article>
            <p>
              A roller coaster is a type of amusement ride employing a form of
              elevated railroad track that carries passengers on a train through
              tight turns, steep slopes, and other elements designed to produce
              a thrilling experience.
            </p>
          </article>
        </section>
        <section>
          <img
            src="rollercoaster.jpg"
            alt="rollercoaster"
            width={300}
            height={200}
          />
          <article>
            <p>
              A roller coaster is a type of amusement ride employing a form of
              elevated railroad track that carries passengers on a train through
              tight turns, steep slopes, and other elements designed to produce
              a thrilling experience.
            </p>
          </article>
        </section>
      </main>
      <footer>
        <p>&copy; Coaster Rollers</p>
      </footer>
    </>
  );
}
