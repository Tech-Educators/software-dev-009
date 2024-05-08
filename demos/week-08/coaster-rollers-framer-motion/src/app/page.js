import Link from "next/link";
import Image from "next/image";
//import component
import Animation from "@/components/Animation";

//import image file
import rollercoaster from "@/../public/rollercoaster.jpg";

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
        <Animation />
      </header>
      {/* example of a React component */}
      <Button />
      <main>
        <section>
          <Image
            src={rollercoaster}
            alt="rollercoaster"
            width={300}
            height={200}
            placeholder="blur"
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
          <Image
            src={rollercoaster}
            alt="rollercoaster"
            width={300}
            height={200}
            placeholder="blur"
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
          <Image
            src={rollercoaster}
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
