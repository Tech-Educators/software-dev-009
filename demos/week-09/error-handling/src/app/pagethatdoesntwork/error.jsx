"use client";

export default function ErrorPage({ error, reset }) {
  return (
    <div>
      <h2>OH NO! It looks like an error was thrown!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
