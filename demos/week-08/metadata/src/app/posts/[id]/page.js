// THE METADATA FOR THE INDIVIDUAL POST PAGES IS DYNAMICALLY GENERATED.

export async function generateMetadata({ params }) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
    // WE FETCH THE DATA FOR THE SPECIFIC POST
  );
  const post = await result.json();

  return {
    title: `Joes blog page: ${post.title}`,
    description: `This is a post about ${post.description}`,
    //WE DYNAMICALLY ADD THE TITLE AND DESCRIPTION FOR THE SPECIFIC POST TO THE PAGES METADATA
  };
}

export default async function Page({ params }) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await result.json();

  return (
    <div>
      <p>{post.id}</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
    // WE THEN RENDER ALL OF THE INDIVIDUAL POST DATA TO THE PAGE
  );
}
