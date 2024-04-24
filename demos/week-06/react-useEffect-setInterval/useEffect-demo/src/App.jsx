import { useState, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log("YOU HAVE FETCHED DATA!");

      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
