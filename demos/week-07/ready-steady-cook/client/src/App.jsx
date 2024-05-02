import { useState, useEffect } from "react";
import ContestantForm from "./ContestantForm";

export default function App() {
  const [contestants, setContestants] = useState([]);

  useEffect(() => {
    getContestants();
  }, []);
  async function getContestants() {
    const response = await fetch("http://localhost:8080/contestants");
    const data = await response.json();
    setContestants(data);
  }

  return (
    <div>
      <h1>STOP COOKING!</h1>
      {contestants.map((contestant) => {
        return (
          <div key={contestant.id}>
            <h2>
              {contestant.name} who is {contestant.age}
            </h2>
            <p>{contestant.name} is bringing to the kitchen:</p>
            <ul>
              {contestant.ingredients.map((ingredient) => {
                return <li key={ingredient}>{ingredient}</li>;
              })}
            </ul>
          </div>
        );
      })}
      <ContestantForm />
    </div>
  );
}
