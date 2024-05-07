import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/posts">Posts</Link>
          </nav>
        </header>
        {children}
        <footer>
          <p>I am the footer</p>
        </footer>
      </body>
    </html>
  );
}
