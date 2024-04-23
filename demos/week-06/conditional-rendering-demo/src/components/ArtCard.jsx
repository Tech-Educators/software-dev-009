import { useState } from "react";
import "./ArtCard.css";
import "../App.css";

export default function ArtCard({ title, author, url }) {
  const [showInfo, setShowInfo] = useState(false);

  function handleClick() {
    setShowInfo(!showInfo);
    // when I click, showInfo changes from false to true, and from true to false
  }
  // arrow function for handleClick
  // const handleClick = ()=>{
  // }

  return (
    <div className="art-card">
      <img
        onClick={handleClick}
        src={url}
        alt={`Picture of ${title}`}
        className="art-card-image"
      />

      {/* && */}
      {/* {showInfo && <h1>{title}</h1>}
      {showInfo && <h2>{author}</h2>} */}

      {/* ternary operator */}
      {/* {showInfo ? <h1>{title}</h1> : null}
      {showInfo ? <h2>{author}</h2> : null} */}

      {showInfo ? (
        <>
          <h1>{title}</h1>
          <h2>{author}</h2>
        </>
      ) : null}
      {/* Is showInfo true? If it's true, show me the h1 and h2: if it's false, show nothing*/}
    </div>
  );
}

//3 steps:
//event --> onClick()

// state linked to our event
//hook --> useState
// variable: showInfo
// function to manage the variable: setShowInfo
//initial value: false

//adding the conditional rendering
//&&
//ternary operator (if else statement)
// first element ? second element : third element
// {isLoggedIn ? <LogoutButton/> : <LoginButton/>}
