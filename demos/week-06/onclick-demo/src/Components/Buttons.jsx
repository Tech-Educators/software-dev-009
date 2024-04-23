import "../App.css";

export default function Button() {
  function handleClick() {
    console.log("you clicked me again!");
  }
  return (
    <>
      <button onClick={handleClick}>I do something in the console!</button>
      <button onClick={() => alert("you clicked me!")}>Click Me!</button>
    </>
  );
}
