import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JOE'S PAGE",
  description: "JOE STUFF!!!!",
  // WE ARE MANUALLY DEFINING THE METADATA FOR THE ROOT PAGE ONLY, THE OTHER PAGES METADATA WILL BE DIFINED IN THE CODE FOR EACH INDIVIDUAL ROUTE
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <Link href={`/posts`}>
              <li>Posts</li>
            </Link>
            <Link href={`/`}>
              <li>Home</li>
            </Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
