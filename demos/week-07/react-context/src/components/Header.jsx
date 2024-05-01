import { useContext } from "react";
import { CookieContext } from "../context/CookieContext";

export default function Header() {
  const { cookies } = useContext(CookieContext);

  return (
    <header>
      <h1>useContext Demo</h1>
      <p>I am sad because I cannot see the cookies.</p>
      <p>I am happy now I have {cookies} cookies</p>
    </header>
  );
}
