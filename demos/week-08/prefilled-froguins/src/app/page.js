import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <h1>Froguins</h1>
      <Link href="/froguins">View all froguins</Link>
    </div>
  );
}
