export default function SinglePostPage({ params }) {
  console.log(params);
  console.log("This is where the server is running");
  return (
    <div>
      <h2>Single post page</h2>
      <p>
        Here we could do a fetch to go and get the info for post with ID of{" "}
        {params.id}
      </p>
    </div>
  );
}
