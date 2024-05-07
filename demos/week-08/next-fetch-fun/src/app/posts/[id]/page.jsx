// params is an object with all the parameters from our routes inside
// if we visit /post/10 params is { id: 10 } because our folder name is [id]
export default async function Post({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
