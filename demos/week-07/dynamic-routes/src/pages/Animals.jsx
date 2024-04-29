import { Link, useSearchParams } from "react-router-dom";

export default function Animals() {
  // useSearchParams return our search params in an array which we will destructure
  const [searchParams] = useSearchParams();

  const sortType = searchParams.get("sort");

  const animalsArray = [
    "Giraffe",
    "Badger",
    "Baboon",
    "Cat",
    "Monstercat",
    "Fuzzy",
    'Indiana "Indi" Jones',
    "Humancat",
    "Koala",
    "Werewolf",
    "Aardvark",
    "Capibara",
    "Rat",
    "Rhino",
    "Hippopotomus",
  ];

  if (sortType === "asc") {
    animalsArray.sort();
  } else if (sortType === "desc") {
    animalsArray.sort().reverse();
  }

  return (
    <div>
      <h2>Animals</h2>
      <nav>
        <Link to="/animals">Original order</Link>
        <Link to="/animals?sort=asc">Aplhabetical order</Link>
        <Link to="/animals?sort=desc">De-Aplhabetical order</Link>
      </nav>
      {animalsArray.map((animal) => {
        return <p key={animal}>{animal}</p>;
      })}
    </div>
  );
}
