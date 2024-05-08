import Link from "next/link";

export const metadata = {
  title: "These be posts!",
  description: "Check them!",
  // THIS IS THE MANUALLY DEFINED METADATA FOR THE /POSTS ROUTE
};

export default async function Page() {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await result.json();

  return (
    <div>
      <h2>Latest lorem posts..</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <Link href={`/posts/${post.id}`}>Read more...</Link>
        </div>
        // WE HAVE MAPPED THROUGH OUR RETURNED PLACEHOLDER POSTS AND RENDERED THEM ONTO THE POSTS PAGE. THE TITLE OF THE POST IS SHOWN AND THEN WE HAVE CREATED A DYNAMIC LINK FOR EACH POST THAT NAVIGATES TO /POSTS/[ID] WHERE THE ID IS THE ID OF THE POST LINK WE CLICKED ON.
      ))}
    </div>
  );
}
