import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Froguins",
  description: "The ultimate creature!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1> F R O G U I N S</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/add-froguin">Add Froguin</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
