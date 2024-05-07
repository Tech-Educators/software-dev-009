import Link from "next/link";

// searchParams is an object containing all the key value pairs after ? in the url
// so /posts?sort=asc&name=tim searchParams = { sort: "asc", name: "tim" }
export default async function Posts({ searchParams }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  if (searchParams.sort === "desc") {
    posts.reverse();
  }

  return (
    <div>
      <h2>Posts</h2>
      <Link href="/posts">Sort Ascending</Link>
      <Link href="/posts?sort=desc">Sort Ascending</Link>

      <div className="linklist">
        {posts.map((post) => {
          return (
            <Link href={`/posts/${post.id}`} key={post.id}>
              {post.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
