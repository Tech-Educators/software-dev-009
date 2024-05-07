import Link from "next/link";

export default function Posts() {
  return (
    <div>
      <h2>I am the post page</h2>
      <Link href="/posts/categories">Categories</Link>
    </div>
  );
}
