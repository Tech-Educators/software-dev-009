export default function BrokenPage() {
  // we are simulating thayt something has gone wrong.
  // it could be a bad fetch, DB query or just a broken server somewhere.
  throw new Error(
    " Something got broked. Funny error message that disarms the user so they don't leave the website..."
  );

  return (
    <div>
      <h2>Yippee, there was no error!</h2>
      <p>Will you ever see this?</p>
    </div>
  );
}
