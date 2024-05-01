import { useContext } from "react";
// import our Context (the thing with all our state and stuff in it)
import { CookieContext } from "../context/CookieContext";

export default function CookieClicker() {
  // here we are using the above Context to get information out of it
  // the information we have access to is whatever we put in the value attribute
  const { cookies, incrementCookies } = useContext(CookieContext);

  return (
    <div className="cookie-container">
      <p>We have {cookies} cookies</p>
      <button onClick={incrementCookies}>GIVE COOKIE</button>
    </div>
  );
}
